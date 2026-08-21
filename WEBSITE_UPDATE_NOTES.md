# PhoenixGold website — Faefera update

Updated August 21, 2026.

## Added
- `faefera.html` — new Faefera game page.
- `css/faefera.css` — Faefera-specific magical presentation.
- `Images/faefera/` — supplied Faefera art used by the page.
- `pages/faefera.html` — shared-partial source for the Faefera page.
- `pages/health-warning.html` — shared-partial source for the updated Health & Safety page.

## Updated
- Shared navigation and footer now include Faefera.
- Studio homepage now presents three games and includes Faefera in the current roadmap.
- Health Warning was expanded into a studio-wide Health & Safety page covering Faefera, MegaBlast Mayhem, and Eucalyptus Edge.
- Support, Privacy, and Terms pages were updated for Faefera and pre-alpha/demo realities.
- MegaBlast Mayhem and Eucalyptus Edge custom navigation/footer areas now link to Faefera.
- Removed two broken Eucalyptus Edge background-video source references; its existing poster remains as the safe fallback.

## Faefera public-facing facts used
- PC only.
- Keyboard + mouse and gamepad support.
- Family-friendly, non-combat cozy fantasy sandbox/adventure.
- Demo is in development.
- No Faefera Steam page yet.
- No Faefera trailer yet.
- Steam page/trailer are planned after the demo is ready.
- Multiple-language localization is planned. The exact final language list is not hard-coded in this update because it was not present in the uploaded website archive.

## Build
The source pages continue to use the existing shared-partial build:

```bash
node build.mjs
```

The generated root HTML files are already included in this package.
