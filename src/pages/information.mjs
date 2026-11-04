import { readFileSync } from 'node:fs';
import { button } from '../components.mjs';
const policies = [
  ['privacy.html', 'Privacy Policy', 'Privacy information for the PhoenixGold Game Studios website and MegaBlast Mayhem.'],
  ['terms.html', 'Terms of Use', 'Terms of use and ownership information for the PhoenixGold Game Studios website.'],
  ['health-warning.html', 'Health & Safety', 'Photosensitivity, comfort, and safety information for MegaBlast Mayhem players.'],
];
export default [
  ...policies.map(([file, title, description]) => ({
    file, title, description, nav: null,
    render: () => `<div class="container"><article class="legal-page">${readFileSync(new URL(`../content/${file}`, import.meta.url), 'utf8')}</article></div>`,
  })),
  {
    file: '404.html', title: 'Page Not Found', noindex: true, nav: null,
    description: 'This page is missing. Return to PhoenixGold Game Studios to explore MegaBlast Mayhem.',
    render: () => `<section class="container not-found"><p class="eyebrow">404 / Off the festival map</p><h1>WRONG TURN.<br><span>NEW ADVENTURE.</span></h1><p>We couldn’t find that page. Let’s get you back to the games.</p><div class="actions">${button('index.html', 'Back to home')}${button('support.html', 'Player support', { secondary: true })}</div></section>`,
  },
];
