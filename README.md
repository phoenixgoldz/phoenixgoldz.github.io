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

The complete deployable site is in `dist/`. You can also open `dist/index.html` directly for an offline preview; image, font, navigation, and stylesheet URLs are relative.

## Organization

```text
.github/workflows/deploy.yml  Build, check, and deploy to GitHub Pages
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
```

Keep navigation changes in `src/config.mjs` and `src/layout.mjs`. Every page, including policy pages and legacy routes, is generated with the same header and footer. Never edit generated HTML in `dist/` directly.

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

The GitHub Actions workflow builds the project, runs the structural checks, and publishes **only `dist/`** on pushes to `main` or manual dispatch. In the repository's **Settings → Pages**, choose **GitHub Actions** as the source. Source templates, scripts, and unused legacy assets are not part of the published artifact.

This local redesign does not commit, push, or trigger a deployment. Review the changes and use your normal Git workflow when ready.

Old root routes (`Studio.dc.html`, `eucalyptus-edge.html`, and `faefera.html`) and previous `/pages/` addresses redirect to the updated site. A shared 404 page handles missing addresses on GitHub Pages.

## Ownership

Game names, branding, and artwork belong to PhoenixGold Game Studios. Font licenses are included beside the locally hosted font files. No new general-purpose license is assigned by this redesign.
