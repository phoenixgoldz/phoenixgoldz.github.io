/* ============================================================
   PhoenixGold static build.
   Assembles pages/*.html with the shared partials into the repo
   root, which is what GitHub Pages serves.

       node build.mjs

   Why this exists: the three pages each carried their own copy of
   the nav and footer. Adding one link meant editing three files
   and forgetting one. Now the chrome lives in partials/ and is
   injected at build time — no framework, no client-side fetch, no
   flash of missing header, and the output is still plain static
   HTML that Pages can serve directly.
   ============================================================ */
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const partial = (n) => readFileSync(join('partials', n + '.html'), 'utf8').trimEnd();
const parts = { head: partial('head'), header: partial('header'), footer: partial('footer') };

if (!existsSync('pages')) {
  console.error('No pages/ directory — nothing to build.');
  process.exit(1);
}

let built = 0;
for (const file of readdirSync('pages').filter((f) => f.endsWith('.html'))) {
  let html = readFileSync(join('pages', file), 'utf8');
  let missing = [];

  for (const [name, value] of Object.entries(parts)) {
    const token = `<!--#include ${name}-->`;
    if (!html.includes(token)) { missing.push(token); continue; }
    html = html.split(token).join(value);
  }

  // Fail loudly. A page that silently loses its header is worse than
  // a build that stops and says which token is missing.
  if (missing.length) {
    console.error(`FAIL ${file}: missing ${missing.join(', ')}`);
    process.exit(1);
  }

  writeFileSync(file, html);
  console.log(`  built ${file}`);
  built++;
}
console.log(`\n${built} page(s) built from partials/`);
