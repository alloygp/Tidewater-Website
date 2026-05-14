# Tidewater — Maintenance / Realty / Resources pages

This bundle contains three new pages and their components, plus updates to Header and Footer to wire up site-wide nav.

## New pages
- maintenance.html         → Tidewater Property Maintenance
- realty.html              → Tidewater Realty Group, LLC
- resources.html           → Resources & Insights library hub

## New stylesheet
- styles-pages.css         → Loaded AFTER styles.css on each new page. Adds:
                             • Division accent variables (.tw-acc-sage / .tw-acc-gold / .tw-acc-teal)
                             • Maintenance hero, why-grid, services ledger, emergency band
                             • Realty hero, lifecycle rail, services + broker, insider table
                             • Resources hero, featured download, library, seasonal table, newsletter

## New components (drop into components/)
Maintenance:
- MaintenanceHero.jsx
- MaintenanceWhy.jsx
- MaintenanceServices.jsx
- MaintenanceEmergency.jsx

Realty:
- RealtyHero.jsx
- RealtyLifecycle.jsx
- RealtyServices.jsx
- RealtyInsider.jsx

Resources:
- ResourcesHero.jsx
- ResourcesFeatured.jsx
- ResourcesLibrary.jsx        (INTERACTIVE — audience filter; needs client island)
- ResourcesSeasonal.jsx
- ResourcesNewsletter.jsx     (INTERACTIVE — list radio; needs client island)

## Modified shared components
- components/Header.jsx       → Resources nav link now points at resources.html with match: ['resources']
- components/Footer.jsx       → "Companies" + "Resources" footer columns updated to point at the real pages
                                (rental-property-management.html, maintenance.html, realty.html,
                                 resources.html, about-careers.html)

## Per-page nav config (PAGE_CONFIG.nav.active)
- maintenance.html  → 'maintenance'
- realty.html       → 'realty'
- resources.html    → 'resources'

## Body classes
Each page sets a division accent class on <body>:
- maintenance.html  → class="tw-acc-sage"   (Sage Green --tw-div)
- realty.html       → class="tw-acc-gold"   (Coastal Gold --tw-div)
- resources.html    → class="tw-acc-teal"   (Tidewater Teal --tw-div)

## Interactive components (Astro-island candidates per HANDOFF.md §3)
- ResourcesLibrary  → useState filter pills
- ResourcesNewsletter → useState audience radio
Treat them like JobsList / RentalCounty: client:visible or client:load.

## Placeholder content flagged for client review
- maintenance/MaintenanceEmergency: deep-freeze testimonial (paraphrased pending approval)
- realty/RealtyServices: Cody Bishop portrait area is a placeholder block
- realty/RealtyInsider: the 5 submarket rows are illustrative ranges, NOT real portfolio data — replace before publishing
- resources/ResourcesLibrary: 9 sample articles are placeholder titles/descs; replace with the real content roster

## What you still need to drop in
1. resources.html does not have a CTA() section before the Footer — the newsletter band serves that role. If you want the standard "Request a Proposal" form there too, just add <CTA/> to the App() in resources.html.
2. The featured download form, newsletter form, and library card clicks all currently just alert() — wire to CRM.
3. assets/highrise.jpg is reused on the Realty hero. If you'd rather have a Maryland investment-property photo there, swap the src in components/RealtyHero.jsx.
