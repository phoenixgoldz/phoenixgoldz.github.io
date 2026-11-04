# PhoenixGold Game Studios

The official website for **Eucalyptus Edge: MegaBlast Mayhem** and its **Padmara** expansion. A responsive, accessible static site for GitHub Pages, with no production dependencies.

## Preview and build

Requires Node.js 22 or later. No dependency installation is needed.

```sh
npm run dev
```

Open `http://127.0.0.1:4173`. Changes in `src/` and `public/` rebuild automatically; refresh the browser to see them. Use `Ctrl+C` to stop the server.

```sh
npm run build
npm run check
```

The complete deployable site is in `dist/` and is also generated at the repository root. This keeps GitHub Pages working when it publishes directly from `main` / `(root)`. You can open `index.html` or `dist/index.html` directly for an offline preview; image, font, navigation, and stylesheet URLs are relative.

## Organization

```text
.github/workflows/deploy.yml  Optional, manually triggered Actions deployment
src/
  config.mjs                 Steam links and release dates
  layout.mjs                 Shared document, navigation, and footer
  components.mjs             Reusable image, button, and gallery markup
  images.json                Image dimensions for responsive markup
  pages/                     Home, game, DLC, studio, support, press, policies
  content/                   Existing legal and health policy text
public/
  assets/css/site.css        Shared visual system and responsive layouts
  assets/js/site.js          Mobile menu, opt-in trailer, image gallery
  assets/fonts/              Self-hosted fonts and their OFL licenses
  assets/images/             Optimized artwork and smaller mobile variants
  assets/favicon.svg         Studio favicon
  robots.txt
scripts/
  build.mjs                  Static page generation
  check.mjs                  Navigation, links, images, and content checks
  serve.mjs                  Local preview server
dist/                        Generated, ready-to-publish site
index.html, *.html           Generated root pages for branch-based GitHub Pages
assets/, pages/              Generated root assets and legacy redirects
.nojekyll                    Serve generated HTML without a Jekyll theme
```

Keep navigation changes in `src/config.mjs` and `src/layout.mjs`. Every page, including policy pages and legacy routes, is generated with the same header and footer. Edit `src/` or `public/`, then rebuild. Do not edit generated HTML, `assets/`, `pages/`, or `dist/` directly. The check command verifies that the root publication matches every file in `dist/`.

## Release information

- MegaBlast Mayhem: available now; released **October 30, 2026**.
- Padmara expansion: **coming November 13, 2026**; base game required on Steam.
- Steam app IDs: base game `4999100`, expansion `5035440`, demo `5016620`.

These dates follow the studio's supplied release schedule. To change the DLC's release messaging when it launches, edit `site.padmara.status` in `src/config.mjs` (for example, `Available from`) and update the page titles, descriptions, and wishlist copy in `src/pages/padmara.mjs` and `src/pages/home.mjs` as appropriate. The site intentionally does not infer a release from a visitor's device clock.

## Accessibility and performance

- Responsive layouts, touch-friendly controls, and a collapsible mobile navigation menu.
- Native links, a skip link, visible keyboard focus, semantic headings, and active-page indicators.
- Useful content and navigation without JavaScript; FAQs use native `details` elements.
- A keyboard-accessible image dialog with Escape, arrow keys, and focus restoration.
- Reduced-motion support and no autoplaying background media.
- Responsive WebP images, explicit image dimensions, lazy loading below the fold, and locally served fonts.
- YouTube is contacted only after the visitor chooses to play the trailer.
- No analytics, signup forms, account system, or payment handling.

Existing privacy, terms, and health policy wording has been retained with shared styling. Environment-specific metadata and personal-name references from the old portfolio are excluded from the new site.

## Deploy

The current site uses GitHub Pages **Deploy from a branch → main → /(root)**. Run `npm run build` and `npm run check`, then commit and push the changes, including generated root pages, `assets/`, `pages/`, and `.nojekyll`. GitHub's normal Pages deployment publishes them automatically. A root `index.html` ensures visitors see the website instead of a themed README.

The optional Actions workflow can also build, check, and deploy **only `dist/`**. It runs manually from the Actions tab; it does not compete with normal branch publishing on every push. To use it, set the Pages publishing source to **GitHub Actions** first. The branch deployment does not depend on that optional workflow.

Old root routes (`Studio.dc.html`, `eucalyptus-edge.html`, and `faefera.html`) and previous `/pages/` addresses redirect to the updated site. A shared 404 page handles missing addresses on GitHub Pages.

## Ownership

Game names, branding, and artwork belong to PhoenixGold Game Studios. Font licenses are included beside the locally hosted font files. No new general-purpose license is assigned by this redesign.
