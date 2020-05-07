
const formatDate = (date = new Date) =>
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset()) &&
    date.toISOString().slice(0,10)

const base = 'https://amitos80.github.io';
const links = [
    { path: 'home' },
    { path: 'about' },
    { path: 'projects' },
    { path: 'experience' },
    { path: 'resume' },
    { path: 'skills' }
];

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${base}/sitemap1.xml</loc>
    </sitemap>
  </sitemapindex>`;

const sitemap1 = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${links.map(link => `<url>
            <loc>${base}/${link.path}</loc>
            <lastmod>${formatDate()}</lastmod>
            <changefreq>daily</changefreq>
            </url>`
         )}
    </urlset>`;

const writeFile = (path, str) => {
    const fs = require('fs');
    const writeStream = fs.createWriteStream(path);
    writeStream.write(str, 'utf-8');
    writeStream.on('finish', () => {
        console.log('sitemap created at ', path);
    });
    writeStream.end();
};

writeFile('./static/sitemap.xml', sitemapIndex);
writeFile('./static/sitemap1.xml', sitemap1);

