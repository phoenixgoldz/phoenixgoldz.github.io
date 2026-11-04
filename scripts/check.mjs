import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const walk = (folder) => readdirSync(folder, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(join(folder, entry.name)) : [join(folder, entry.name)]);
assert(existsSync(root), 'Run npm run build first');
const files = walk(root);
const repository = resolve(root, '..');
assert(existsSync(join(repository, 'index.html')), 'Repository-root homepage missing: branch-based GitHub Pages would show the README');
assert(existsSync(join(repository, '.nojekyll')), 'Repository-root .nojekyll missing');
for (const file of files) {
  const published = join(repository, file.slice(root.length));
  assert(existsSync(published), `Missing repository-root publication file: ${published}`);
  assert.deepEqual(readFileSync(published), readFileSync(file), `Repository-root publication differs from dist: ${published}`);
}
const pages = files.filter((file) => file.endsWith('.html'));
const contents = new Map(pages.map((file) => [file, readFileSync(file, 'utf8')]));
let commonHeader;
let commonFooter;
let checkedLinks = 0;
function verifyLocal(source, raw, base = '') {
  const url = raw.replaceAll('&amp;', '&');
  if (/^(?:https?:|mailto:|data:|tel:)/.test(url)) return;
  const [pathname, fragment] = url.split('#');
  if (!pathname && !fragment) return;
  const baseDirectory = base === '/' ? root : resolve(dirname(source), base || '.');
  const file = pathname ? resolve(pathname.startsWith('/') ? root : baseDirectory, decodeURIComponent(pathname.replace(/^\//, '').split('?')[0])) : source;
  assert(existsSync(file), `${source}: missing ${raw}`);
  if (fragment && file.endsWith('.html')) assert(contents.get(file)?.includes(`id="${fragment}"`), `${source}: missing anchor ${raw}`);
  checkedLinks++;
}
for (const [file, html] of contents) {
  const name = file.replace(root, '');
  assert(!/Trevor|Hicks/i.test(html), `${name}: personal name found`);
  assert(!/<!--#include|\{\{[^}]+\}\}/.test(html), `${name}: unresolved template`);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${name}: expected one H1`);
  assert(html.includes('name="viewport"'), `${name}: viewport missing`);
  assert(html.includes('name="description"'), `${name}: description missing`);
  assert(html.includes('rel="canonical"'), `${name}: canonical missing`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((item) => item[1]);
  assert.equal(new Set(ids).size, ids.length, `${name}: duplicate element IDs`);
  const header = html.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0].replace(/ aria-current="page"/g, '');
  const footer = html.match(/<footer class="site-footer">[\s\S]*?<\/footer>/)?.[0];
  assert(header && footer, `${name}: shared navigation missing`);
  commonHeader ??= header; commonFooter ??= footer;
  assert.equal(header, commonHeader, `${name}: inconsistent header`);
  assert.equal(footer, commonFooter, `${name}: inconsistent footer`);
  const active = [...html.matchAll(/aria-current="page"/g)].length;
  assert(active <= 1, `${name}: more than one active navigation link`);
  const base = html.match(/<base href="([^"]+)"/)?.[1] || '';
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) verifyLocal(file, match[1], base);
  for (const match of html.matchAll(/\bsrcset="([^"]+)"/g)) for (const entry of match[1].split(',')) verifyLocal(file, entry.trim().split(/\s+/)[0], base);
  for (const tag of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="/.test(tag[0]), `${name}: image missing alt`);
}
for (const file of files.filter((file) => file.endsWith('.css'))) {
  for (const match of readFileSync(file, 'utf8').matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)) verifyLocal(file, match[1]);
}
const home = readFileSync(join(root, 'index.html'), 'utf8');
const game = readFileSync(join(root, 'megablast-mayhem.html'), 'utf8');
const padmara = readFileSync(join(root, 'padmara.html'), 'utf8');
assert(home.includes('Coming Nov 13, 2026'), 'Home DLC release date missing');
assert(home.includes('Oct 30, 2026'), 'Home release date missing');
assert(game.includes('datetime="2026-10-30"'), 'Game release date incorrect');
assert(padmara.includes('datetime="2026-11-13"'), 'DLC release date incorrect');
assert(padmara.includes('Requires MegaBlast Mayhem on Steam'), 'DLC base-game requirement missing');
assert(readFileSync(join(root, 'assets/css/site.css'), 'utf8').includes('prefers-reduced-motion'), 'Reduced motion support missing');
const bytes = files.reduce((total, file) => total + statSync(file).size, 0);
console.log(`PASS: ${pages.length} pages share one header/footer; ${checkedLinks} local links/assets checked; metadata, release dates, DLC requirement, and name exclusion verified.`);
console.log(`PASS: All ${files.length} published files also match the repository-root copy, including index.html and .nojekyll.`);
console.log(`Deployment: ${(bytes / 1024 / 1024).toFixed(2)} MB. No production dependencies.`);
