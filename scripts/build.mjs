import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { layout } from '../src/layout.mjs';
import { site } from '../src/config.mjs';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const output = resolve(root, 'dist');
const pageFolder = resolve(root, 'src/pages');

export async function build() {
  // Only clear the explicitly named, generated directory inside this project.
  if (relative(root, output) !== 'dist') throw new Error('Unexpected build output directory');
  const pages = [];
  for (const file of readdirSync(pageFolder).filter((name) => name.endsWith('.mjs')).sort()) {
    const loaded = (await import(pathToFileURL(join(pageFolder, file)))).default;
    pages.push(...(Array.isArray(loaded) ? loaded : [loaded]));
  }
  if (new Set(pages.map((page) => page.file)).size !== pages.length) throw new Error('Duplicate page output');
  rmSync(output, { recursive: true, force: true });
  mkdirSync(output, { recursive: true });
  cpSync(resolve(root, 'public'), output, { recursive: true });
  for (const page of pages) {
    let html = layout(page);
    if (page.file === '404.html') html = html.replace('<head>', '<head>\n<base href="/">');
    writeFileSync(join(output, page.file), html);
  }
  // Old root addresses remain useful. Their shared header and footer match every other page.
  const aliases = [
    ['Studio.dc.html', 'studio.html'],
    ['eucalyptus-edge.html', 'megablast-mayhem.html'],
    ['faefera.html', 'studio.html'],
  ];
  for (const [file, target] of aliases) {
    const page = { file, nav: null, title: 'Page Moved', noindex: true, description: 'This page has moved on the PhoenixGold Game Studios website.', render: () => `<section class="container not-found"><p class="eyebrow">A new home</p><h1>THE FESTIVAL<br><span>HAS MOVED.</span></h1><p>Find our latest games and studio information at the updated page.</p><a class="button" href="${target}">Continue to the updated page →</a></section>` };
    const html = layout(page).replace('<head>', `<head>\n<meta http-equiv="refresh" content="0;url=${target}">`).replace(/<link rel="canonical"[^>]+>/, `<link rel="canonical" href="${site.url}/${target}">`);
    writeFileSync(join(output, file), html);
  }
  // Previous sources were publicly served under /pages/. Keep incoming links working.
  mkdirSync(join(output, 'pages'), { recursive: true });
  for (const page of pages.filter((item) => item.file !== '404.html')) {
    const legacy = { ...page, noindex: true, render: () => `<section class="container not-found"><p class="eyebrow">Page moved</p><h1>WELCOME TO<br><span>THE NEW SITE.</span></h1><a class="button" href="${page.file}">Continue →</a></section>` };
    writeFileSync(join(output, 'pages', page.file), layout(legacy).replace('<head>', `<head>\n<base href="../">\n<meta http-equiv="refresh" content="0;url=../${page.file}">`));
  }
  for (const [file, target] of aliases) {
    const source = (await import('node:fs')).readFileSync(join(output, file), 'utf8');
    writeFileSync(join(output, 'pages', file), source.replace('<head>', '<head>\n<base href="../">').replace(`content="0;url=${target}"`, `content="0;url=../${target}"`));
  }
  const urls = pages.filter((page) => !page.noindex).map((page) => `${site.url}/${page.file === 'index.html' ? '' : page.file}`);
  writeFileSync(join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>\n`);
  // GitHub Pages can publish main / (root) without running our Node build.
  // Commit this generated copy as well as dist/ so both publishing modes work.
  // These two directories contain generated content only; source lives in src/ and public/.
  for (const entry of readdirSync(output, { withFileTypes: true })) {
    const destination = resolve(root, entry.name);
    if (relative(root, destination) !== entry.name) throw new Error('Unexpected root publication target');
    if (entry.isDirectory()) {
      if (!['assets', 'pages'].includes(entry.name)) throw new Error(`Unexpected published directory: ${entry.name}`);
      rmSync(destination, { recursive: true, force: true });
    } else if (!/^(?:[\w.-]+\.html|sitemap\.xml|robots\.txt|\.nojekyll)$/.test(entry.name)) {
      throw new Error(`Unexpected published file: ${entry.name}`);
    }
    cpSync(join(output, entry.name), destination, { recursive: true });
  }
  console.log(`Built ${pages.length} pages, ${aliases.length} legacy routes, and shared assets into dist/ and the repository root.`);
  return pages;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
