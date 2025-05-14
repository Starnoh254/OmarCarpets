import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://omarmoderncarpets.co.ke' });

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    // { url: '/about', changefreq: 'monthly', priority: 0.8 },
    // { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    // Add more routes as needed
];

const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(() => console.log('✅ Sitemap created successfully!'));

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();
