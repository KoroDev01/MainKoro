import { readFileSync, writeFileSync } from "fs";
import { getAllStructuredData } from "../src/config/structuredData.js";
import { SEO, SITE_URL } from "../src/config/seo.js";

const indexPath = "dist/index.html";
let html = readFileSync(indexPath, "utf8");

const schemas = getAllStructuredData()
  .map(
    (schema) =>
      `    <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n    </script>`,
  )
  .join("\n");

html = html
  .replace(/<title>.*?<\/title>/, `<title>${SEO.title}</title>`)
  .replace(/name="description"\s+content="[^"]*"/, `name="description" content="${SEO.description}"`)
  .replace(/name="keywords"\s+content="[^"]*"/, `name="keywords" content="${SEO.keywords}"`)
  .replace(/property="og:title"\s+content="[^"]*"/, `property="og:title" content="${SEO.title}"`)
  .replace(
    /property="og:description"\s+content="[^"]*"/,
    `property="og:description" content="${SEO.description}"`,
  )
  .replace(/property="og:image" content="[^"]*"/, `property="og:image" content="${SEO.ogImage}"`)
  .replace(/name="twitter:title"\s+content="[^"]*"/, `name="twitter:title" content="${SEO.title}"`)
  .replace(
    /name="twitter:description"\s+content="[^"]*"/,
    `name="twitter:description" content="${SEO.description}"`,
  )
  .replace(/name="twitter:image" content="[^"]*"/, `name="twitter:image" content="${SEO.ogImage}"`)
  .replace(
    /<!-- SEO_SCHEMA_START -->[\s\S]*?<!-- SEO_SCHEMA_END -->/,
    `<!-- SEO_SCHEMA_START -->\n${schemas}\n    <!-- SEO_SCHEMA_END -->`,
  );

writeFileSync(indexPath, html);

const today = new Date().toISOString().split("T")[0];

writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SEO.ogImage}</image:loc>
      <image:title>${SEO.ogImageAlt}</image:title>
    </image:image>
  </url>
</urlset>
`,
);

writeFileSync(
  "dist/robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

console.log("SEO injected into dist/");
