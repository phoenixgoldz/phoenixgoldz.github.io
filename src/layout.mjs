import { site, navigation } from './config.mjs';
import { icon } from './components.mjs';

export const brand = () => `<a class="brand" href="index.html" aria-label="PhoenixGold Game Studios home"><img src="assets/images/studio-emblem.webp" alt="" width="42" height="42"><span>PHOENIX<span class="brand-gold">GOLD</span><small>GAME STUDIOS</small></span></a>`;
export const header = (active) => `<a class="skip-link" href="#main">Skip to content</a><div class="announcement"><a href="padmara.html"><span>THE FESTIVAL CONTINUES</span><span class="announcement-divider">/</span> PADMARA EXPANSION · ${site.padmara.status.toUpperCase()} ${site.padmara.short.toUpperCase()} ${icon('arrow')}</a></div><header class="site-header"><div class="container header-inner">${brand()}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"><span class="menu-lines" aria-hidden="true"></span><span data-menu-label>Menu</span></button><nav class="site-nav" id="site-navigation" aria-label="Primary navigation">${navigation.map(([key, href, label]) => `<a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('')}<a class="nav-steam" href="${site.steam}" target="_blank" rel="noopener noreferrer">Play on Steam ${icon('external')}</a></nav></div></header>`;
export const footer = () => `<footer class="site-footer"><div class="container footer-grid"><div class="footer-brand">${brand()}<p>Independent games.<br>Extraordinary little worlds.</p><a class="text-link" href="${site.steam}" target="_blank" rel="noopener noreferrer">Find us on Steam ${icon('external')}</a></div><div><h2>Explore</h2><ul>${navigation.map(([,href,label]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></div><div><h2>Keep in touch</h2><ul><li><a href="${site.community}" target="_blank" rel="noopener noreferrer">Steam community ${icon('external')}</a></li><li><a href="${site.news}" target="_blank" rel="noopener noreferrer">News &amp; updates ${icon('external')}</a></li><li><a href="press.html">Press &amp; media</a></li></ul></div><div><h2>Player information</h2><ul><li><a href="health-warning.html">Health &amp; safety</a></li><li><a href="privacy.html">Privacy policy</a></li><li><a href="terms.html">Terms of use</a></li></ul></div></div><div class="container footer-bottom"><p>© 2026 PhoenixGold Game Studios. All rights reserved.</p><p>Made for the love of play.</p></div></footer>`;

export function layout(page) {
  const canonical = `${site.url}/${page.file === 'index.html' ? '' : page.file}`;
  const title = `${page.title} — PhoenixGold Game Studios`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#111411">
<title>${title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}/assets/images/${page.nav === 'padmara' ? 'padmara-key-art' : 'megablast-key-art'}.webp">
<meta name="twitter:card" content="summary_large_image">
${page.noindex ? '<meta name="robots" content="noindex">' : ''}
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/display-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/site.css">
<script src="assets/js/site.js" defer></script>
</head>
<body class="page-${page.nav || 'info'}">
${header(page.nav)}
<main id="main" tabindex="-1">${page.render(site)}</main>
${footer()}
<dialog class="lightbox" aria-label="Image gallery" data-lightbox><div class="lightbox-toolbar"><p data-lightbox-caption></p><form method="dialog"><button class="icon-button" aria-label="Close image">${icon('close')}</button></form></div><img data-lightbox-image alt=""><div class="lightbox-controls"><button class="button button-secondary" type="button" data-gallery-prev aria-label="Previous image">← Previous</button><span data-gallery-count></span><button class="button button-secondary" type="button" data-gallery-next aria-label="Next image">Next →</button></div></dialog>
</body>
</html>`;
}
