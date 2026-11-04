# Verification

Verified on November 4, 2026 using local Chrome, Playwright, axe-core, and the project's structural checks.

- Build passes with Node.js; no production dependencies or install step.
- The build also writes a real `index.html`, assets, all pages, and `.nojekyll` at the repository root for branch-based GitHub Pages. Checks compare every root publication file against `dist/`, preventing a README landing page.
- 25 generated pages and legacy routes share the same header and footer.
- 716 local link and asset references pass validation.
- All 10 primary page types were checked at 320, 375, 768, 1024, 1440, and 1920 pixels: no horizontal overflow or broken local resources.
- 20 automated WCAG A/AA audits across mobile and desktop found no violations.
- Mobile menu, active navigation, Escape handling, gallery keyboard controls, focus restoration, support FAQ, reduced motion, and JavaScript-free navigation were verified.
- The trailer remains an ordinary link until selected, then loads the privacy-enhanced YouTube embed. Remote video playback was not verified.
- Desktop, mobile, game, and expansion screenshots were visually reviewed.
- Published output is approximately 3.42 MB, including all pages, responsive artwork, fonts, and licenses.
- Base game release: October 30, 2026. Padmara: coming November 13, 2026. Dates follow the studio's supplied schedule.
- Personal-name references from the previous portfolio are absent from generated pages.

Automated checks support this review; they do not constitute a full manual accessibility audit. External Steam and YouTube services remain outside the local build.
