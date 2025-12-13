import fs from "fs";
import { execSync } from "child_process";

/**
 * Generate sitemap.xml with dynamic lastmod date
 * Uses git last commit date or current date as fallback
 */
function getLastModDate() {
  try {
    // Try to get last git commit date
    const gitDate = execSync("git log -1 --format=%cI")
      .toString()
      .trim()
      .split("T")[0]; // Extract YYYY-MM-DD
    return gitDate;
  } catch {
    // Fallback to current date if git is not available
    return new Date().toISOString().split("T")[0];
  }
}

const lastmod = getLastModDate();
const baseUrl = "https://seifXXII.github.io/3D-Portfolio/";

// Generate sitemap with only canonical URL (no fragments)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

// Write to public directory
fs.writeFileSync("public/sitemap.xml", sitemap);
console.log(`✓ Sitemap generated successfully`);
console.log(`  URL: ${baseUrl}`);
console.log(`  Last Modified: ${lastmod}`);
