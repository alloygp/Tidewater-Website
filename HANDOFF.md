# Tidewater Website — Handoff to Astro

**Source of truth:** this design project (HTML + React-via-Babel + CSS).
**Target:** native Astro implementation.
**Purpose:** map every page, component, and runtime pattern in the design to its Astro equivalent so nothing gets lost in translation.

---

## 1. File inventory

### Pages (project root)
| Design file | Purpose | Nav `active` key |
|---|---|---|
| `index.html` | Homepage | `null` (no menu key) |
| `hoa-management.html` | HOA Management | `hoa` |
| `condo-association-management.html` | Condo Management | `condo` |
| `rental-property-management.html` | Rental Property Management | `rental` |
| `about.html` | About / Our Story | `about` |
| `about-leadership.html` | Leadership directory | `about` |
| `about-careers.html` | Careers + open roles | `about` |

**Still to design** (not yet built; placeholders in nav):
- `maintenance.html` — Tidewater Property Maintenance
- `realty.html` — Tidewater Realty Group

### Styles
- `styles.css` — global stylesheet, all `.tw-*` classes
- `styles-about.css` — about-branch-specific styles (extends `styles.css`)
- `design-system/colors_and_type.css` — color tokens, type scale, spacing

### Components (`components/`)
All components are global functions assigned to `window.<Name>`. They render via `<Name/>` inside a Babel `<script>` block in each page's `<App>`. Component list with usage:

| Component | Used by | Config-driven? | Notes |
|---|---|---|---|
| `Topbar` (in Header.jsx) | all pages | `PAGE_CONFIG.topbar.variant` (`'default'` or `'homeowner'`) | Top dark bar |
| `Header` (in Header.jsx) | all pages | `PAGE_CONFIG.nav.active` | Sticky nav with mega-menu |
| `Hero` | HOA, Condo | `PAGE_CONFIG.hero` | Generic mgmt hero with widget variants |
| `RentalHero` | Rental | `PAGE_CONFIG.rentalHero` | Rental-specific hero (different layout) |
| `AboutHero` | About pages | `PAGE_CONFIG.aboutHero` | Editorial hero w/ ledger card |
| `CareersHero` | Careers | hard-coded | Careers-specific hero |
| `TrustBar` | most pages | none | Static row of trust signals |
| `Pains` | HOA, Condo | `PAGE_CONFIG.pains` | 6-card pain → resolution grid |
| `RentalPains` | Rental | hard-coded | Editorial 6-story layout (replaces Pains) |
| `Tiers` | HOA, Condo | `PAGE_CONFIG.tiers` | 3-tier service pricing |
| `RentalFee` | Rental | hard-coded | 4-card "what's in the flat fee" |
| `RentalCounty` | Rental | hard-coded | **Interactive** — MD county selector |
| `RentalDeployed` | Rental | hard-coded | Deployed-owner spotlight + testimonial |
| `HandsOn` | HOA, Condo | `PAGE_CONFIG.handson` | 4-card "how hands-on works" |
| `Portal` | HOA, Condo | `PAGE_CONFIG.portal` | CINC dashboard mock |
| `RentalPortal` | Rental | hard-coded | AppFolio dashboard mock |
| `Mission` | most pages | hard-coded | Company mission section |
| `Manifesto` | About | hard-coded | Independence statement (dark) |
| `Timeline` | About | hard-coded | 1989 → today milestones |
| `Values` | About | hard-coded | 5 core values list |
| `CredentialsWall` | About, Leadership | hard-coded | AAMC, BBB, CAI, PCAM credentials |
| `NumbersStrip` | About, Careers | hard-coded | Stat bar (dark) |
| `Leadership` | most pages | hard-coded | Compact leadership preview |
| `LeadershipFull` | Leadership page | hard-coded | Grouped directory of 12+ leaders |
| `LeadershipIntro` | Leadership page | hard-coded | Stats intro band |
| `WhyWorkHere` | Careers | hard-coded | 6 reasons + benefits |
| `JobsList` | Careers | hard-coded | **Interactive** — filtered jobs list |
| `Testimonials` | most pages | `PAGE_CONFIG.testimonials` | 3-quote grid |
| `Home` | (legacy, unused) | — | Was used by old index.html |
| `CTA` (in Footer.jsx) | all pages | hard-coded | Conversion section |
| `Footer` (in Footer.jsx) | all pages | hard-coded | Footer w/ service-area chips |

---

## 2. The runtime contract (what to replicate in Astro)

### 2.1 `window.PAGE_CONFIG`
Every page's `<head>` declares a `window.PAGE_CONFIG = {...}` object **before** any components load. Components read from it with fallbacks:

```js
const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.hero) || {};
const eyebrow = cfg.eyebrow || 'Default eyebrow';
```

**Astro equivalent:** pass per-page content as **props** to components, or move it into **Astro content collections** (`src/content/pages/*.json` or `.md`). Each page's `.astro` file imports its components and passes props directly:

```astro
---
import HomeHero from '@/components/HomeHero.astro';
const heroProps = {
  eyebrow: 'For Single-Family & Townhome HOA Boards',
  titleHtml: '...',
  // etc
};
---
<HomeHero {...heroProps} />
```

The exact shape of each `PAGE_CONFIG.*` block is documented inline in each component's JSX (look for `cfg.X || 'default'` lines). **Preserve these keys** in the Astro props.

### 2.2 Header `nav.active` + match
The Header highlights nav links based on `PAGE_CONFIG.nav.active`. Match logic:
- `active === item.menu` → highlight (e.g. `'mgmt'` highlights "Management")
- `active` in `item.match[]` → highlight (e.g. `'hoa'` also highlights "Management")

**Astro equivalent:** pass an `activeNav` prop from each page to a shared `<Header>` layout component.

### 2.3 Topbar variants
`PAGE_CONFIG.topbar.variant`:
- `'default'` (or omitted) — shows AAMC accreditation + family-owned signal
- `'homeowner'` — shows "Pay Assessment / Submit a Request / Find My Community" actions

Used on the homepage (`index.html`) and rental page.

### 2.4 Style-override edit blocks
`Hero.jsx` contains an `EDITMODE-BEGIN ... EDITMODE-END` block. **This is an internal designer feature, not part of the runtime.** Drop it on the Astro side.

---

## 3. Interactive components (need Astro islands)

These components have client-side state. They must be Astro islands with `client:load` or `client:visible`:

### 3.1 `RentalCounty` (rental-property-management.html)
- Maintains `useState('montgomery')` for the active county
- Click on a county pill → swap the detail card
- **Recommendation:** `client:visible` (below the fold)

### 3.2 `JobsList` (about-careers.html)
- `useState('all')` for the active department filter
- Click filter pill → filter `jobs[]` by `cls`
- **Recommendation:** `client:load` (small footprint)

### 3.3 `Header` mega-menu
- `useState` for `openMenu` (hover-driven)
- **Recommendation:** Astro island with `client:idle`, OR rewrite as pure CSS `:hover` + transitions (no JS needed)

### 3.4 `Hero` (HOA/Condo) — widget variants
- Uses `useTweaks` hook (a designer-only knob, not user-facing in production)
- **Recommendation:** drop the widget toggle, pick one variant (`activity` is the production default), and bake it in. Remove `tweaks-panel.jsx` entirely.

### 3.5 `Hero` `ActivityFeedWidget` (HOA/Condo) and `RentalHero` `tw-rh-card` (rental)
- `ActivityFeedWidget` has a `setInterval` that rotates entries every 4.5s
- `RentalHero`'s compare card is static — no JS needed
- **Recommendation:** keep the activity feed as `client:visible` if you want the animation; or render static and drop the interval.

---

## 4. Tweaks panel (designer tool, NOT shipped to production)

`tweaks-panel.jsx` is a live-tweaking utility used during design. **Do not port to production.** Strip:
- The `<script type="text/babel" src="tweaks-panel.jsx"></script>` line in every page
- Any `window.useTweaks`, `window.TweaksPanel`, `window.TweakRadio` references in components (currently in `Hero.jsx`)
- The `EDITMODE-BEGIN/END` markers in any component
- The `PAGE_CONFIG.hero.defaults` block (used only by the tweaks panel)

---

## 5. Styles

### 5.1 Class naming
All classes prefixed `.tw-*` (Tidewater). No utility framework. Just authored CSS.

### 5.2 CSS variables
Defined in `design-system/colors_and_type.css`. Imported via `@import` at the top of `styles.css`. Key tokens:
- `--tw-teal` (#3a92a6), `--tw-gold` (#bfac5f), `--tw-clay` (#ce8e72), `--tw-sage` (#647d57)
- `--tw-dark` (#172325), `--tw-cream` (#fefcf8), `--tw-linen`, `--tw-mist`, `--tw-paper`
- Type scale uses `var(--tw-font-heading)` (Nunito Sans) and `var(--tw-font-body)` (Work Sans)

**Astro equivalent:** import `design-system/colors_and_type.css` once in your root layout. Keep the CSS variable system intact.

### 5.3 Stylesheet split
- `styles.css` is the main one — port wholesale to global styles
- `styles-about.css` was added when the About branch was built — merge into `styles.css` in Astro, or keep separate and import on About-branch pages only

### 5.4 Per-component scoping
The design uses **global** classes (no CSS modules / scoping). When converting to Astro:
- Option A: keep classes global, port `styles.css` as-is into a root layout's `<link rel="stylesheet">`
- Option B: scope per-component (`<style>` blocks in `.astro` files). Will require splitting `styles.css` by section. More work, less collision risk long-term.

I'd recommend Option A for the first port — it's a 1:1 translation. Scope later if needed.

### 5.5 Responsive
The site uses two breakpoints:
- `@media (max-width: 1080px)` — desktop → tablet collapse
- `@media (max-width: 820px)` — tablet → mobile collapse

Mobile nav is currently `display: none` (no hamburger menu yet). **The Astro version should add a mobile menu** — it's missing in the design.

### 5.6 Fonts
Loaded from Google Fonts in `colors_and_type.css`:
- Nunito Sans (heading)
- Work Sans (body)
- Caveat (used for signature in `Manifesto`)

**Astro equivalent:** use `@fontsource` or keep the Google Fonts `<link>` in the head.

---

## 6. Assets

`assets/` contains:
- `hero-aerial.jpg` — neighborhood aerial (HOA hero, mega-menu feature card)
- `hero-mission.jpg` — used in Mission section + About hero + Rental hero
- `highrise.jpg` — condo hero
- `logo-main.svg`, `logo-main-black.svg`, `logo-main-white.svg` — logo variants

All referenced as relative paths (`assets/hero-aerial.jpg`). In Astro, move to `public/assets/` or `src/assets/` and update paths.

---

## 7. Per-page summary

### `index.html` — Homepage
Components: `Topbar` (homeowner) → `Header` → `HomeHero` → `OwnerActions` → `PillarSplit` → `TrustBar` → `HomeReasons` → `Mission` → `Testimonials` → `CTA` → `Footer`

⚠ `HomeHero`, `OwnerActions`, `PillarSplit`, `HomeReasons` are all defined inside `components/Home.jsx`. They're homepage-specific. Port them as one module or split.

### `hoa-management.html`
Components: `Topbar` → `Header` → `Hero` → `TrustBar` → `Pains` → `Tiers` → `Mission` → `HandsOn` → `Portal` → `Leadership` → `Testimonials` → `CTA` → `Footer`

All driven by `PAGE_CONFIG` (Hero, Pains, Tiers, Portal, HandsOn, Testimonials each take config).

### `condo-association-management.html`
Same structure as HOA. Different `PAGE_CONFIG` content — tone leans premium/specialized (life-safety, reserve studies, mechanical systems).

### `rental-property-management.html`
Components: `Topbar` (homeowner) → `Header` → `RentalHero` → `TrustBar` → `RentalPains` → `RentalFee` → `RentalCounty` → `RentalDeployed` → `RentalPortal` → `Mission` → `Testimonials` → `CTA` → `Footer`

⚠ Uses rental-specific component variants instead of shared Hero/Pains/Tiers. `RentalCounty` is interactive — must be a client island.

### `about.html`
Components: `Topbar` → `Header` → `AboutHero` → `OriginStory` → `NumbersStrip` → `Manifesto` → `Timeline` → `Values` → `CredentialsWall` → `Leadership` → `CTA` → `Footer`

### `about-leadership.html`
Components: `Topbar` → `Header` → `AboutHero` → `LeadershipIntro` → `LeadershipFull` → `CredentialsWall` → `CTA` → `Footer`

### `about-careers.html`
Components: `Topbar` → `Header` → `CareersHero` → `NumbersStrip` → `WhyWorkHere` → `JobsList` → `CTA` → `Footer`

⚠ `JobsList` is interactive (filter pills) — must be a client island.

---

## 8. Translation gotchas

### `dangerouslySetInnerHTML`
Several components use `dangerouslySetInnerHTML` to render `titleHtml`, `body`, etc. with embedded `<em>` and `<strong>`. **Astro equivalent:** `<Fragment set:html={cfg.titleHtml} />` or just embed the HTML directly in `.astro` template if content is static.

### `React.useState` / `React.useEffect`
Used in `Hero` (activity feed interval), `RentalCounty`, `JobsList`, `Header` (megamenu). When these become Astro islands, use the same hooks (Astro supports React islands natively).

### Inline event handlers
`<button onClick={...}>` in jobs filter and county selector. Convert to React handlers in island components.

### Asset URLs in CSS
None — all asset URLs are in JSX (`src="assets/..."`). Safe.

### Babel-compiled JSX
The runtime today is `@babel/standalone`. In Astro, JSX/TSX compiles at build time. **You don't need Babel.** Just delete the `<script src="https://unpkg.com/@babel/standalone..."` lines.

---

## 9. Recommended conversion order

1. **Layout + shared chrome first**
   - `BaseLayout.astro` — `<head>`, fonts, global CSS imports
   - `Topbar.astro` + `Header.astro` (Header as island for the megamenu, or pure-CSS)
   - `Footer.astro` + `CTA.astro`

2. **Static service pages** (lowest risk, no interactivity)
   - `hoa-management` → port `Hero`, `Pains`, `Tiers`, `HandsOn`, `Portal`, `Leadership`, `Testimonials`
   - `condo-association-management` (reuses same components)
   - `index.html`

3. **About branch**
   - `about` (most components are static — Timeline, Values, etc.)
   - `about-leadership`
   - `about-careers` — `JobsList` becomes an island

4. **Rental page**
   - `RentalCounty` island
   - All other rental components static

5. **Strip designer tooling**
   - Remove `tweaks-panel.jsx`, `useTweaks`, `TweaksPanel`, `EDITMODE-*` markers

6. **Add mobile menu** (currently missing from design)

---

## 10. Where to look for content / copy

All user-facing copy lives **either** in component defaults (e.g. `Mission.jsx`, `Manifesto.jsx` are hard-coded) **or** in each page's `PAGE_CONFIG` block. There's no separate CMS layer.

If you want to move content to a CMS later (Astro content collections, Sanity, etc.), the `PAGE_CONFIG` shape is already structured cleanly — just promote it to per-page `.json` or `.md` files.

---

## 11. Open items / known gaps

- No mobile nav menu yet (design uses `display: none` at <1080px)
- `maintenance.html` and `realty.html` not yet designed (placeholder hrefs in nav)
- "Resources" nav link is a placeholder (`/resources/`)
- "Service Areas" linked from about megamenu (`/service-areas/`) — not designed
- `Hero.jsx` `FitCheckWidget` has invented regional director names — verify against client's real team before shipping
- All testimonials are paraphrased — confirm with client before publishing
- `Mission.jsx` uses placeholder initials block where the founder portrait should be
- `OriginStory.jsx` portrait is a placeholder ("SG + MG" initials block) — needs real photography

---

**Questions for the dev:** ping me in the design project if anything is ambiguous. Don't reverse-engineer from screenshots — open the relevant `.jsx` file; the structure is explicit there.
