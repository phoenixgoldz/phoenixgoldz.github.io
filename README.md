# Eucalyptus Edge: MegaBlast Mayhem — Official Website

The PhoenixGold Game Studios website is currently dedicated to **Eucalyptus Edge: MegaBlast Mayhem**, the studio's first commercial game, released on **October 31, 2026** for **Windows PC on Steam**.

This is a **single-game marketing website**. The homepage and game page describe the released MegaBlast Mayhem base game only. They do not promote unrelated prototypes, other games, expansions, or speculative future features.

## Play the game

- **Steam:** https://store.steampowered.com/app/4999100/
- **Steam App ID:** `4999100`
- **Free demo:** available through the game's Steam store page (Demo App ID `5016620`)
- **Official trailer:** https://www.youtube.com/watch?v=5NC4f3ytp9U
- **Website:** https://phoenixgoldz.github.io/
- **Game page:** https://phoenixgoldz.github.io/megablast-mayhem.html

## What is MegaBlast Mayhem?

MegaBlast Mayhem is a colorful, family-friendly bomb-arena party game set in **Verdantia**. Join the annual MegaBlast Festival, outmaneuver your opponents, collect power-ups, trigger explosive chain reactions, and compete for victory.

### Released base-game features

| Category | Included content |
| --- | --- |
| Players | 1–4 local players; keyboard and controller support |
| Modes | Versus, Region Tour, Random Arena |
| Opponents | Computer-controlled bots with four difficulty levels |
| Mutators | Chaos Bombs, including Gravity, Chain, MegaBlast, and Ghost |
| Pickups | Bomb, blast-range, and special power-ups |
| Fighters | Koda, Ripper, Kiri, Banjo, Atlas, Echo, Wren, and unlockable Sonia |
| Regions | Eucalyptus Summit, Crystal Caverns, Bamboo Harbor, Frostpine Ridge, Sunbaked Outback |
| Arenas | 10 handcrafted base-game arenas, two per region; procedural layouts in Random Arena |
| Story | Annual MegaBlast Festival, Region Tour medals, Sonia's finale, festival ending |
| Steam | 55 achievements; free demo available on the store page |

**Note:** The website intentionally describes the released base game. Do not use this page to advertise unconfirmed features, unannounced content, or future modes.

## Project history

MegaBlast Mayhem began as a university project around **2022**. The original concept was created by **Trevor Hicks** and co-developed with classmate **Calvin Bryant** during an introductory JavaScript and Object-Oriented Programming course. What started as a classroom prototype later evolved into PhoenixGold Game Studios' first commercial release.

This acknowledges Calvin's contribution to the original prototype without attributing subsequent commercial development to him.

## Game technology

The released Windows game uses **Java 21**, Java/Swing desktop presentation, a packaged Java runtime, and native integrations for controller and Steam functionality. The public website is a separate, static **HTML, CSS, and JavaScript** project hosted on GitHub Pages.

## Website structure

```text
/
├── index.html                         # Single-game studio homepage
├── megablast-mayhem.html              # Full base-game landing page
├── README.md
├── css/
│   ├── pg-system.css                  # Shared PhoenixGold design system
│   ├── pg-home.css                    # Homepage styles
│   └── megablast-mayhem.css           # Game page styles
├── js/
│   ├── pg-site.js                     # Homepage menu and scroll reveal
│   ├── pg-nav.js                      # Scroll progress and footer year
│   └── main.js                        # Game-page navigation
└── Images/
    ├── icon64.png
    └── Megablast_Images/
        └── megablast_steam_key_art.png
```

The key artwork in this package is **copied without modification** from the provided MegaBlast Mayhem artwork. No new character designs or generated marketing images were introduced.

## Deploying to GitHub Pages

1. Back up the existing site files and keep your existing legal/support pages.
2. Copy the included `index.html`, `megablast-mayhem.html`, `README.md`, `css/`, `js/`, and `Images/` into the repository root, preserving directory names.
3. Keep the existing `support.html`, `privacy.html`, `terms.html`, and `health-warning.html` files: the new pages link to them but do not replace their contents.
4. Commit and push to the branch used by GitHub Pages.
5. Verify the desktop and mobile menus, Steam links, official trailer, key artwork, and legal/support navigation after deployment.

**Important:** This package is an update to an existing website, not a full copy of every asset and legal page in the repository. It uses a saved homepage version as its starting point because the current homepage HTML was not among the files uploaded in this turn. Review any local customizations before replacing your live HTML.

## Website content policy

- **Current public focus:** Eucalyptus Edge: MegaBlast Mayhem base game.
- **Status:** Released; use **Buy on Steam** or **Available Now**, not **Wishlist** or **Coming Soon**.
- **Scope:** Do not promote other game projects, DLC, or future systems on these pages.
- **Images:** Keep the existing commissioned MegaBlast artwork intact. Replace it only with authorized, final artwork.
- **Player information:** Do not publish private Steamworks revenue, customer, or wishlist analytics on the marketing site.
- **Maintenance:** Prioritize accuracy, compatibility, accessibility, and bug fixes; avoid turning the website into an unverified feature roadmap.

## Credits

- **Studio / commercial game development:** PhoenixGold Game Studios
- **Original concept:** Trevor Hicks
- **Original university prototype co-development:** Calvin Bryant

© 2026 PhoenixGold Game Studios. All rights reserved.
