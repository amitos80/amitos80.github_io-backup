
const formatDate = (date = new Date) =>
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset()) &&
    date.toISOString().slice(0,10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    <url>
        <loc>https://amitos80.github.io/</loc>
        <lastmod>${formatDate()}</lastmod>
        <changefreq>daily</changefreq>
    </url>
</urlset>
`;

const fs = require('fs');
let writeStream = fs.createWriteStream('./static/sitemap.xml');
writeStream.write(sitemap, 'utf-8');
writeStream.on('finish', () => {
    console.log('sitemap created');
});

writeStream.end();
