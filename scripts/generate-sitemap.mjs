import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const SITE_URL = "https://willduet.com";
const PAGES_DIR = "src/pages";
const OUTPUT_FILE = "public/sitemap.xml";

async function findAstroPages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return findAstroPages(path);
      if (entry.isFile() && entry.name.endsWith(".astro")) return [path];
      return [];
    }),
  );

  return files.flat();
}

function pagePathToRoute(file) {
  const relativePath = relative(PAGES_DIR, file).split(sep).join("/");
  const route = relativePath
    .replace(/\.astro$/, "")
    .replace(/\/index$/, "")
    .replace(/^index$/, "");

  return `/${route ? `${route}/` : ""}`;
}

function priorityForRoute(route) {
  if (route === "/") return "1.0";
  if (route === "/services/") return "0.9";
  if (route === "/contact/") return "0.7";
  return "0.6";
}

function isNoindex(source) {
  return /robots\s*=\s*["']noindex\b/i.test(source) || /name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(source);
}

const pages = await findAstroPages(PAGES_DIR);
const routes = [];

for (const page of pages) {
  const source = await readFile(page, "utf8");
  if (isNoindex(source)) continue;
  routes.push(pagePathToRoute(page));
}

routes.sort((a, b) => {
  if (a === "/") return -1;
  if (b === "/") return 1;
  return a.localeCompare(b);
});

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <priority>${priorityForRoute(route)}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await writeFile(OUTPUT_FILE, sitemap);
console.log(`Generated ${OUTPUT_FILE} with ${routes.length} URL(s).`);
