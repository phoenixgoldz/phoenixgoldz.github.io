import images from './images.json' with { type: 'json' };

const shapes = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  external: '<path d="M14 4h6v6m0-6L10 14M10 4H4v16h16v-6"/>',
  play: '<path d="m9 5 11 7-11 7z"/>',
  controller: '<path d="M6 7h12c3 0 5 10 3 11-2 1-4-3-5-3H8c-1 0-3 4-5 3C1 17 3 7 6 7Z"/><path d="M6 10v4m-2-2h4m8-1h.01m3 3h.01"/>',
  windows: '<path d="m3 5 7-1v7H3zm10-1 8-1v8h-8zM3 14h7v7l-7-1zm10 0h8v9l-8-1z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
};
export const icon = (name, cls = '') => `<svg class="icon ${cls}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${shapes[name] || shapes.arrow}</svg>`;
export const image = (name, alt, { className = '', priority = false, sizes = '(max-width: 760px) 100vw, 50vw' } = {}) => {
  const info = images[name];
  if (!info) throw new Error(`Unknown image: ${name}`);
  const variants = info.width > 800 ? ` srcset="assets/images/${name}-small.webp 640w, assets/images/${name}.webp ${info.width}w" sizes="${sizes}"` : '';
  return `<img class="${className}" src="assets/images/${name}.webp"${variants} alt="${alt}" width="${info.width}" height="${info.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};
export const button = (href, label, { secondary = false, external = false, play = false } = {}) => `<a class="button${secondary ? ' button-secondary' : ''}" href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${play ? icon('play') : ''}<span>${label}</span>${icon(external ? 'external' : 'arrow')}</a>`;
export const sectionHeading = (eyebrow, title, text = '') => `<div class="section-heading"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div>${text ? `<p>${text}</p>` : ''}</div>`;
export const galleryItem = (name, alt, caption) => `<figure class="gallery-item"><a class="gallery-link" href="assets/images/${name}.webp" data-gallery data-caption="${caption}" aria-label="Enlarge: ${caption}">${image(name, alt, { sizes: '(max-width: 760px) 100vw, 50vw' })}<span class="gallery-enlarge">${icon('plus')}<span>View image</span></span></a><figcaption>${caption}</figcaption></figure>`;
export const dlcBanner = (site) => `<section class="dlc-banner" aria-labelledby="dlc-heading">${image('padmara-world', 'The lantern-lit palaces and lotus gardens of Padmara', { className: 'dlc-banner-art', sizes: '100vw' })}<div class="dlc-banner-shade"></div><div class="container dlc-banner-content"><p class="eyebrow">The next chapter of Verdantia</p><span class="status status-gold">Expansion · ${site.padmara.status} ${site.padmara.short}</span><h2 id="dlc-heading">A NEW WORLD.<br><span>THE SAME MAYHEM.</span></h2><p>Welcome to Padmara. New fighters, handcrafted arenas, and a whole new reason to say “one more match.”</p>${button('padmara.html', 'Explore Padmara')}<small>Downloadable content. Requires MegaBlast Mayhem on Steam.</small></div></section>`;
