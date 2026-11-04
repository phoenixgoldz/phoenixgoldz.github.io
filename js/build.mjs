/* PhoenixGold static website builder.
   Source pages live in pages/. All published root HTML is generated from them.
   Shared navigation/footer live in partials/ and must never be copied by hand.
   Run: node build.mjs
*/
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const partial = (name) => readFileSync(join('partials', name + '.html'), 'utf8').trimEnd();
const parts = { head: partial('head'), header: partial('header'), footer: partial('footer') };
if (!existsSync('pages')) throw new Error('pages/ directory is missing');

let built = 0;
for (const file of readdirSync('pages').filter((f) => f.endsWith('.html'))) {
  let html = readFileSync(join('pages', file), 'utf8');
  for (const name of ['header', 'footer']) {
    const token = `<!--#include ${name}-->`;
    if (!html.includes(token)) throw new Error(`${file}: missing ${token}`);
  }
  for (const [name, value] of Object.entries(parts)) {
    html = html.split(`<!--#include ${name}-->`).join(value);
  }
  // Only the active primary link gets aria-current. Support/legal pages have neither selected.
  const current = file === 'index.html' ? 'index' : file === 'megablast-mayhem.html' ? 'megablast' : null;
  if (current) {
    const nav = `data-nav="${current}"`;
    if (!html.includes(nav)) throw new Error(`${file}: active nav link not found`);
    html = html.replace(nav, `${nav} aria-current="page"`);
  }
  writeFileSync(file, html);
  console.log(`  built ${file}`);
  built++;
}
console.log(`\n${built} page(s) built with shared header and footer.`);
