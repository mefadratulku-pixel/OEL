import fs from 'fs';
import * as cheerio from 'cheerio';

async function fix() {
  const data = JSON.parse(fs.readFileSync('src/data/pages.json', 'utf8'));
  let modified = false;

  const urlsToFetch = new Set();

  for (const key in data) {
    let content = data[key].content;
    
    // Unwrap templates
    const regex = /<script type=\"text\/template\">([\s\S]*?)<\/script>/g;
    let match;
    let newContent = content;
    
    while ((match = regex.exec(content)) !== null) {
      let scriptContent = match[1].trim();
      if (scriptContent.startsWith('"') && scriptContent.endsWith('"')) {
          try {
              const decodedHtml = JSON.parse(scriptContent);
              newContent = newContent.replace(match[0], decodedHtml);
              modified = true;
          } catch(e) {
              console.error('Failed to parse script tag on', key);
          }
      }
    }
    
    if (newContent !== content) {
        data[key].content = newContent;
        content = newContent;
    }

    // Find all product links in the HTML
    const $ = cheerio.load(content);
    $('a').each((i, el) => {
      let href = $(el).attr('href');
      if (href && href.startsWith('https://oel.com.bd/product/') && !href.includes('/product-category/')) {
        if (href.endsWith('/')) {
          href = href.slice(0, -1);
        }
        const path = href.replace('https://oel.com.bd/', '');
        if (!data[path]) {
           urlsToFetch.add(href);
        }
      }
    });
  }

  if (modified) {
     fs.writeFileSync('src/data/pages.json', JSON.stringify(data, null, 2));
     console.log('Successfully unwrapped templates.');
  }
  
  if (urlsToFetch.size > 0) {
     console.log(`Found ${urlsToFetch.size} NEW products to scrape!`);
     const urls = Array.from(urlsToFetch);
     for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`Scraping product ${i+1}/${urls.length}: ${url}`);
        try {
          const res = await fetch(url);
          const html = await res.text();
          const $ = cheerio.load(html);
          
          let content = $('.main-content').html();
          if (!content) {
              content = $('#content').html() || $('main').html() || '';
          }
          const title = $('h1.page-title').first().text() || $('title').text().split('-')[0];
          
          const path = url.replace('https://oel.com.bd/', '');
          data[path] = {
            title: title.trim(),
            content: content.trim()
          };
          modified = true;
        } catch (e) {
           console.error(`Failed to scrape ${url}`);
        }
     }
     
     if (modified) {
         fs.writeFileSync('src/data/pages.json', JSON.stringify(data, null, 2));
         console.log('Saved all new products.');
     }
  } else {
     console.log('No new products found.');
  }
}

fix();
