import * as cheerio from 'cheerio';
import fs from 'fs';

async function run() {
  const urlsToScrape = new Set();
  
  // 1. Get homepage to find all links in the menu
  console.log('Fetching homepage for menu links...');
  const homeRes = await fetch('https://oel.com.bd/');
  const homeHtml = await homeRes.text();
  const $home = cheerio.load(homeHtml);
  
  $home('.main-menu a').each((i, el) => {
    let href = $home(el).attr('href');
    if (href && href.startsWith('https://oel.com.bd/') && href !== 'https://oel.com.bd/') {
      if (href.endsWith('/')) {
        href = href.slice(0, -1);
      }
      urlsToScrape.add(href);
    }
  });

  // 2. Crawl WooCommerce product pages
  console.log('Fetching all individual products from shop pagination...');
  // Loop through a reasonable number of pages, break if 404
  for (let page = 1; page <= 10; page++) {
    const pageUrl = page === 1 ? 'https://oel.com.bd/products/' : `https://oel.com.bd/products/page/${page}/`;
    console.log(`Checking shop page ${page}...`);
    try {
      const res = await fetch(pageUrl);
      if (!res.ok) {
        break; // Reached end of pagination
      }
      const html = await res.text();
      const $ = cheerio.load(html);
      
      let foundNew = false;
      $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && href.startsWith('https://oel.com.bd/product/') && !href.includes('/product-category/')) {
          if (href.endsWith('/')) {
            href = href.slice(0, -1);
          }
          if (!urlsToScrape.has(href)) {
             urlsToScrape.add(href);
             foundNew = true;
          }
        }
      });
      if (!foundNew && page > 1) {
         break; // Stop if we're not finding anything new on subsequent pages
      }
    } catch (e) {
      break;
    }
  }

  const urls = Array.from(urlsToScrape);
  console.log(`Found ${urls.length} total URLs to scrape.`);
  
  // Preserve existing pages.json if it exists to avoid re-fetching unchanged data?
  // Actually let's just re-fetch everything for safety so it's clean.
  const pagesData = {};

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i+1}/${urls.length}] Scraping: ${url}`);
    try {
      const res = await fetch(url);
      const html = await res.text();
      const $ = cheerio.load(html);
      
      // OEL uses WPBakery Page Builder. The main content is usually in .main-content or #content
      let content = $('.main-content').html();
      
      if (!content) {
          content = $('#content').html() || $('main').html() || '';
      }
      
      const title = $('h1.page-title').first().text() || $('title').text().split('-')[0];
      
      // Clean up the path to be used as slug keys
      const path = url.replace('https://oel.com.bd/', '');
      
      pagesData[path] = {
        title: title.trim(),
        content: content.trim()
      };
    } catch (e) {
      console.error(`Error scraping ${url}: ${e.message}`);
    }
  }

  fs.mkdirSync('./src/data', { recursive: true });
  fs.writeFileSync('./src/data/pages.json', JSON.stringify(pagesData, null, 2));
  console.log('Done scraping.');
}

run();
