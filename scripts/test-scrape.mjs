import * as cheerio from 'cheerio';

async function run() {
  const res = await fetch('https://oel.com.bd/products/');
  const html = await res.text();
  const $ = cheerio.load(html);
  const products = new Set();
  
  $('a').each((i, el) => {
    const href = $(el).attr('href');
    if (href && href.startsWith('https://oel.com.bd/product/') && !href.includes('/product-category/')) {
      products.add(href);
    }
  });
  
  // also check pagination
  const pages = new Set();
  $('.page-numbers').each((i, el) => {
      const href = $(el).attr('href');
      if (href) pages.add(href);
  });
  
  console.log('Found products on page 1:', products.size);
  console.log(Array.from(products).slice(0, 5));
  console.log('Pagination links:', Array.from(pages));
}
run();
