// Rental Geo — shared component for /rental-management/maryland/<county-or-city>/
// Two pages: Anne Arundel County and Silver Spring.
// Pass GEO_DATA_ANNE_ARUNDEL or GEO_DATA_SILVER_SPRING as the `geo` prop.

import { useState } from 'react';
import FaqAccordion from './FaqAccordion.jsx';

const RGIcons = {
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
  wrench: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5 2.5-2.5z"/></svg>,
  cash: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// SVG locator map
// ─────────────────────────────────────────────────────────────
function RentalGeoMap({ cities, viewBox, outline, waterPath }) {
  return (
    <svg viewBox={viewBox} className="tw-geo-map" xmlns="http://www.w3.org/2000/svg" aria-label="Locator map">
      {waterPath && <path d={waterPath} fill="rgba(58,146,166,0.15)" />}
      <path d={outline} className="tw-geo-map-county served" style={{ cursor: 'default' }} />
      {cities.map((c, i) => (
        <g key={i}>
          {c.hq && <circle className="tw-geo-map-dot-pulse" cx={c.x} cy={c.y} r="8" />}
          <circle
            cx={c.x} cy={c.y} r={c.hq ? 6 : 4.5}
            fill={c.hq ? 'var(--tw-gold)' : 'var(--tw-teal)'}
            stroke="var(--tw-cream)" strokeWidth={c.hq ? 2 : 1.5}
          >
            <title>{c.name}</title>
          </circle>
          <text
            x={c.x + 10} y={c.y + 4}
            fill="rgba(254,252,248,0.85)"
            fontFamily="var(--tw-font-heading)"
            fontWeight={c.hq ? 800 : 600}
            fontSize={c.hq ? 11 : 10}
            letterSpacing="0.02em"
          >{c.name}</text>
        </g>
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function RentalGeoHero({ geo }) {
  return (
    <section className="tw-geo-hero">
      <div className="tw-geo-hero-bg"></div>
      <div className="tw-geo-hero-paper"></div>
      <div className="tw-geo-hero-grid">
        <div className="tw-geo-hero-copy">
          <h1 className="tw-geo-hero-title" dangerouslySetInnerHTML={{ __html: geo.heroTitle }} />
          <p className="tw-geo-hero-lede">{geo.heroLede}</p>
          <div className="tw-geo-hero-actions">
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Get a free rental analysis →</a>
            <a href="#services" className="tw-btn tw-btn-ghost">What&rsquo;s included →</a>
          </div>
          <div className="tw-geo-hero-stats">
            {geo.heroStats.map((s, i) => (
              <div key={i}>
                <div className={`tw-geo-hero-stat-num ${s.tone || ''}`}>{s.num}</div>
                <div className="tw-geo-hero-stat-label" dangerouslySetInnerHTML={{ __html: s.label }} />
              </div>
            ))}
          </div>
        </div>
        <aside className="tw-geo-hero-side">
          <div className="tw-geo-hero-side-eyebrow">Where we manage</div>
          <h3>{geo.mapHeading}</h3>
          <RentalGeoMap
            cities={geo.mapCities}
            viewBox={geo.mapViewBox}
            outline={geo.mapOutline}
            waterPath={geo.mapWaterPath}
          />
          <div className="tw-geo-map-legend">
            <div className="tw-geo-map-legend-row">
              <span className="tw-geo-map-legend-swatch served"></span>
              {geo.scope === 'county' ? 'Cities & towns we serve' : 'Neighborhoods we serve'}
            </div>
            <div className="tw-geo-map-legend-row">
              <span className="tw-geo-map-legend-swatch hq"></span>
              {geo.mapHqLabel}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Market facts strip
// ─────────────────────────────────────────────────────────────
function RentalGeoFacts({ geo }) {
  return (
    <section className="tw-geo-section linen" style={{ padding: '64px 0' }}>
      <div className="tw-container-wide">
        <div className="tw-section-head-left" style={{ maxWidth: 760, margin: '0 0 12px' }}>
          <div className="tw-eyebrow">{geo.factsEyebrow}</div>
          <h2 className="tw-section-title" style={{ margin: '10px 0 14px' }} dangerouslySetInnerHTML={{ __html: geo.factsTitle }} />
          <p className="tw-section-lede">{geo.factsLede}</p>
        </div>
        <div className="tw-geo-facts">
          {geo.facts.map((f, i) => (
            <div key={i} className="tw-geo-fact">
              <div className="tw-geo-fact-label">{f.label}</div>
              <div className="tw-geo-fact-val" dangerouslySetInnerHTML={{ __html: f.val }} />
              <div className="tw-geo-fact-sub">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Neighborhoods / submarkets
// ─────────────────────────────────────────────────────────────
function RentalGeoNeighbors({ geo }) {
  return (
    <section className="tw-geo-section cream">
      <div className="tw-container-wide">
        <div className="tw-section-head" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div className="tw-eyebrow">{geo.neighborsEyebrow}</div>
          <h2 className="tw-section-title" dangerouslySetInnerHTML={{ __html: geo.neighborsTitle }} />
          <p className="tw-section-lede">{geo.neighborsLede}</p>
        </div>
        <div className="tw-geo-neighbors">
          {geo.neighbors.map((c, i) => (
            <div key={i} className="tw-geo-neighbor">
              <div className="tw-geo-neighbor-name">{c.name}</div>
              <div className="tw-geo-neighbor-meta">{c.meta}</div>
              {c.tag && <span className="tw-geo-neighbor-tag">{c.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Services
// ─────────────────────────────────────────────────────────────
function RentalGeoServices({ geo }) {
  const services = [
    { tone: '', icon: 'shield', title: 'Tenant placement & screening', body: 'Marketing, showings, application processing, background &amp; credit checks, income verification. Most homes leased within 21 days of listing in this market.', cta: 'How placement works' },
    { tone: 'gold', icon: 'wrench', title: 'Maintenance & emergency response', body: 'AppFolio-integrated request workflow. 24/7 dispatch with named on-call manager. Vetted vendor network covering plumbing, HVAC, electrical, appliance.', cta: 'See maintenance workflow' },
    { tone: 'sage', icon: 'cash', title: 'Rent collection & owner reporting', body: 'Online tenant payment portal. Monthly owner statements, year-end 1099 prep. Funds direct-deposited to your account within 7 business days.', cta: 'How reporting works' },
  ];
  return (
    <section id="services" className="tw-geo-section linen">
      <div className="tw-container-wide">
        <div className="tw-section-head" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <div className="tw-eyebrow">What&rsquo;s Included</div>
          <h2 className="tw-section-title">Full-service rental management in <em>{geo.name}</em>.</h2>
          <p className="tw-section-lede">One flat monthly fee. No tenant-placement upcharges. No surprise line items.</p>
        </div>
        <div className="tw-geo-law-grid" style={{ marginTop: 48 }}>
          {services.map((s, i) => (
            <div key={i} className={`tw-geo-law-card ${s.tone}`}>
              <h3>{s.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: s.body }} />
              <div className="tw-geo-law-foot">{s.cta} →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Local manager
// ─────────────────────────────────────────────────────────────
function RentalGeoManager({ geo }) {
  return (
    <section className="tw-geo-section cream" style={{ padding: '64px 0' }}>
      <div className="tw-container-wide">
        <div className="tw-section-head-left" style={{ maxWidth: 760, margin: '0 0 12px' }}>
          <div className="tw-eyebrow">Your Local Property Manager</div>
          <h2 className="tw-section-title" style={{ margin: '10px 0 14px' }}>A <em>{geo.name}</em> property manager, not a rotating pool.</h2>
          <p className="tw-section-lede">Same person at every inspection. Same person at every move-in. Same person tenants and owners email.</p>
        </div>
        <div className="tw-geo-manager">
          <div className="tw-geo-manager-avatar">{geo.manager.initials}</div>
          <div>
            <div className="tw-geo-manager-eyebrow">Property Manager · {geo.name}</div>
            <div className="tw-geo-manager-name">
              {geo.manager.name} <span>{geo.manager.creds}</span>
            </div>
            <p className="tw-geo-manager-role" dangerouslySetInnerHTML={{ __html: geo.manager.bio }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 200 }}>
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-block">Email {geo.manager.name.split(' ')[0]} →</a>
            <a href="tel:+14435480191" className="tw-btn tw-btn-outline tw-btn-block">(443) 548-0191</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────
function RentalGeoFaq({ geo }) {
  return (
    <section className="tw-section tw-sol-faq-section">
      <div className="tw-container-wide">
        <div className="tw-sol-faq-grid">
          <div className="tw-sol-faq-head">
            <div className="tw-eyebrow">{geo.name} FAQs</div>
            <h2>The {geo.scope === 'county' ? 'county' : 'city'}-specific <em>questions</em> we get.</h2>
            <p>For all-purpose rental management questions see the <a href="/rental-management" style={{ color: 'var(--tw-teal-500)', textDecoration: 'underline', textUnderlineOffset: 3 }}>main rental page</a>.</p>
            <a href="#contact" className="tw-btn tw-btn-primary">Ask your own question →</a>
          </div>
          <FaqAccordion items={geo.faqs} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Page composer
// ─────────────────────────────────────────────────────────────
export default function RentalGeo({ geo }) {
  return (
    <>
      <RentalGeoHero geo={geo} />
      <RentalGeoNeighbors geo={geo} />
      <RentalGeoFacts geo={geo} />
      <RentalGeoManager geo={geo} />
      <RentalGeoServices geo={geo} />
      <RentalGeoFaq geo={geo} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// GEO_DATA
// ─────────────────────────────────────────────────────────────

export const GEO_DATA_ANNE_ARUNDEL = {
  name: 'Anne Arundel County',
  fullName: 'Anne Arundel County',
  url: '/rental-management/maryland/anne-arundel-county',
  scope: 'county',
  heroTitle: 'Rental property management in <em>Anne Arundel County.</em>',
  heroLede: 'For owners who don’t live in Annapolis — deployed military, out-of-state investors, accidental landlords, and first-time owners. We’ve been managing single-family and small-multifamily rentals across Anne Arundel since 1996. Flat monthly fee. AppFolio-backed. Real property managers.',
  heroStats: [
    { num: '420+', label: 'Anne Arundel single-family &amp; small-multi rentals managed' },
    { num: '21 days', tone: 'gold', label: 'Avg. days-to-lease across the county' },
    { num: '8.5%', label: 'Flat monthly management fee — no upcharges' },
  ],
  mapHeading: 'Where we manage',
  mapHqLabel: 'County seat · Annapolis',
  mapViewBox: '0 0 360 290',
  mapOutline: 'M40 50 L160 40 L240 55 L295 85 L320 145 L305 215 L260 250 L195 245 L130 220 L75 195 L45 135 Z',
  mapWaterPath: 'M295 85 Q320 130 320 180 Q315 220 305 240 L360 240 L360 50 L320 50 Z',
  mapCities: [
    { name: 'Glen Burnie',  x: 130, y:  70 },
    { name: 'Pasadena',     x: 210, y:  80 },
    { name: 'Severna Park', x: 240, y: 130 },
    { name: 'Annapolis',    x: 270, y: 200, hq: true },
    { name: 'Crofton',      x: 100, y: 170 },
    { name: 'Odenton',      x:  80, y: 110 },
  ],
  factsEyebrow: 'By the Numbers',
  factsTitle: 'The Anne Arundel rental market, <em>in data.</em>',
  factsLede: 'Strong single-family rental demand fueled by Fort Meade, BWI, and Naval Academy proximity. Tight supply, quick lease turnarounds.',
  facts: [
    { label: 'Median single-family rent', val: '$2,640 <span class="gold">/mo</span>', sub: '3BR/2BA · 2026 estimate' },
    { label: 'Median days-to-lease', val: '21 days', sub: 'Tidewater portfolio avg.' },
    { label: 'Tenant retention rate', val: '78%', sub: 'Year-over-year, county-wide' },
    { label: 'Owners out-of-state', val: '34%', sub: 'Of our Anne Arundel portfolio' },
  ],
  neighborsEyebrow: 'Where We Manage',
  neighborsTitle: 'Anne Arundel cities &amp; towns, <em>by rental density.</em>',
  neighborsLede: 'Twelve markets across the county. Single-family, townhome, and 2–4 unit properties.',
  neighbors: [
    { name: 'Annapolis',     meta: '88 units · waterfront & downtown',  tag: 'County seat' },
    { name: 'Severna Park',  meta: '64 units · single-family',          tag: '' },
    { name: 'Crofton',       meta: '52 units · planned community',      tag: '' },
    { name: 'Pasadena',      meta: '48 units · mixed',                  tag: '' },
    { name: 'Glen Burnie',   meta: '46 units · townhome dense',         tag: '' },
    { name: 'Odenton',       meta: '38 units · Fort Meade proximity',   tag: 'Military' },
    { name: 'Arnold',        meta: '22 units · single-family',          tag: '' },
    { name: 'Edgewater',     meta: '16 units · waterfront',             tag: '' },
    { name: 'Linthicum',     meta: '12 units · BWI corridor',           tag: 'BWI' },
    { name: 'Hanover',       meta: '10 units · new construction',       tag: '' },
    { name: 'Davidsonville', meta: '8 units · rural',                   tag: '' },
    { name: 'Mayo',          meta: '6 units · waterfront',              tag: '' },
  ],
  manager: {
    name: 'Marcus Webb',
    creds: 'MPM®',
    initials: 'MW',
    bio: '<strong>14 years</strong> managing Anne Arundel rentals — specialty in deployed-military owners and Naval Academy-area properties. Lives in Severna Park. Drives the county Monday, Wednesday, Friday each week.',
  },
  schemaDesc: 'Single-family and small-multifamily rental property management across Anne Arundel County, Maryland — Annapolis, Severna Park, Crofton, Pasadena, Glen Burnie, Odenton.',
  faqs: [
    {
      q: 'I’m deployed — can you manage my Anne Arundel rental remotely?',
      a: [
        '<strong>Yes — this is one of our core specialties.</strong> Anne Arundel has the Naval Academy and a heavy active-duty footprint; roughly a third of our county portfolio is owned by deployed or out-of-state military personnel.',
        'You’ll get a single point of contact, signed owner agreements via DocuSign, monthly statements + photos delivered via AppFolio owner portal, and a 24/7 emergency line that lets you sleep at night. We can also act under power of attorney where needed.',
      ],
    },
    {
      q: 'How fast will my property lease in Anne Arundel?',
      a: 'Our Anne Arundel portfolio averages <strong>21 days from listing to lease signing</strong> for properly-priced single-family homes. Severna Park, Annapolis downtown, and Odenton (Fort Meade) typically lease in 14–18 days; waterfront and rural Davidsonville/Mayo can take longer.',
    },
    {
      q: 'What’s your management fee structure?',
      a: '<strong>Flat 8.5% of monthly rent collected.</strong> No tenant-placement fee (most companies charge 50–100% of one month’s rent). No maintenance markup. No annual renewal fees. Free rental market analysis before you sign anything.',
    },
    {
      q: 'Do you handle Anne Arundel-specific landlord requirements?',
      a: 'Yes — including the Anne Arundel County rental property registration, lead-paint compliance for pre-1978 properties, Maryland security-deposit interest accrual, and the Annapolis short-term rental ordinance (we don’t manage STRs, but we’ll tell you what compliance looks like if you’re considering it).',
    },
    {
      q: 'What kinds of properties do you manage?',
      a: 'Single-family homes, townhomes, condos, and 2–4 unit buildings. We don’t manage apartment complexes (5+ units), commercial property, or short-term rentals.',
    },
    {
      q: 'How do you handle maintenance?',
      a: 'Tenants submit through the AppFolio resident portal; the request hits our dispatch desk within minutes. Vetted vendor network for plumbing, HVAC, electrical, appliance. Emergencies (water, fire, lockout, HVAC failure in summer/winter) get a manager callback within 30 minutes via our 24/7 line.',
    },
  ],
};

export const GEO_DATA_SILVER_SPRING = {
  name: 'Silver Spring',
  fullName: 'Silver Spring',
  url: '/rental-management/maryland/silver-spring',
  scope: 'city',
  heroTitle: 'Rental property management in <em>Silver Spring.</em>',
  heroLede: 'For owners outside the Beltway who need a manager inside it. Silver Spring single-family and condo rentals — DC commuter market, Metro proximity, NIH/FDA corridor demand. We rank #3 for “silver spring property management” for a reason.',
  heroStats: [
    { num: '180+', label: 'Silver Spring rentals managed' },
    { num: '17 days', tone: 'gold', label: 'Avg. days-to-lease in this submarket' },
    { num: '8.5%', label: 'Flat monthly management fee — no upcharges' },
  ],
  mapHeading: 'Silver Spring submarkets',
  mapHqLabel: 'Downtown · Metro hub',
  mapViewBox: '0 0 360 290',
  mapOutline: 'M50 60 L260 50 L310 100 L320 180 L290 240 L180 255 L70 235 L40 170 Z',
  mapWaterPath: '',
  mapCities: [
    { name: 'Downtown',         x: 180, y: 130, hq: true },
    { name: 'Four Corners',     x: 250, y: 100 },
    { name: 'Forest Glen',      x: 110, y:  95 },
    { name: 'Wheaton border',   x:  90, y: 175 },
    { name: 'Takoma Park edge', x: 235, y: 200 },
    { name: 'Aspen Hill',       x: 145, y:  75 },
  ],
  factsEyebrow: 'By the Numbers',
  factsTitle: 'The Silver Spring rental market, <em>in data.</em>',
  factsLede: 'Metro-adjacent demand from DC commuters, NIH/FDA professionals, and University of Maryland-bound households. Tighter inventory than the county average.',
  facts: [
    { label: 'Median single-family rent', val: '$2,950 <span class="gold">/mo</span>', sub: '3BR/2BA · 2026 estimate' },
    { label: 'Median condo rent', val: '$2,150 <span class="gold">/mo</span>', sub: '2BR · downtown corridor' },
    { label: 'Median days-to-lease', val: '17 days', sub: 'Tidewater portfolio avg.' },
    { label: 'Owners out-of-state', val: '41%', sub: 'Of our Silver Spring portfolio' },
  ],
  neighborsEyebrow: 'Where We Manage',
  neighborsTitle: 'Silver Spring submarkets, <em>by rental density.</em>',
  neighborsLede: 'Six submarkets across the Silver Spring footprint. Single-family, townhome, and condo properties.',
  neighbors: [
    { name: 'Downtown Silver Spring', meta: '52 units · condo dense',   tag: 'Metro hub' },
    { name: 'Four Corners',           meta: '38 units · single-family', tag: '' },
    { name: 'Forest Glen',            meta: '28 units · single-family', tag: '' },
    { name: 'Takoma Park edge',       meta: '22 units · mixed',         tag: '' },
    { name: 'Wheaton border',         meta: '18 units · townhome',      tag: '' },
    { name: 'Aspen Hill',             meta: '16 units · single-family', tag: '' },
    { name: 'Layhill',                meta: '8 units · single-family',  tag: '' },
    { name: 'Hillandale',             meta: '6 units · single-family',  tag: '' },
  ],
  manager: {
    name: 'Priya Sharma',
    creds: 'MPM®',
    initials: 'PS',
    bio: '<strong>9 years</strong> managing Silver Spring rentals — specialty in Metro-corridor condo associations and DC-commuter single-family homes. Lives in Wheaton. Drives the submarket Monday, Tuesday, Thursday each week.',
  },
  schemaDesc: 'Single-family, condo, and townhome rental property management in Silver Spring, Maryland — Downtown, Four Corners, Forest Glen, Takoma Park edge, Wheaton border, Aspen Hill.',
  faqs: [
    {
      q: 'Why does Silver Spring need its own rental specialist?',
      a: 'Silver Spring is a DC commuter market with very different mechanics than the rest of Montgomery County. Metro proximity, NIH/FDA workforce, university-bound households, condo associations with rental caps, and a tenant pool that turns over with federal hiring cycles. Our Silver Spring manager covers this submarket exclusively.',
    },
    {
      q: 'Do you handle condo association rules & rental caps?',
      a: '<strong>Yes.</strong> Many Silver Spring condo buildings have rental caps (e.g. 25% of units), waiting lists for landlord status, and screening overlays the HOA itself runs. We track every association’s rule book for the buildings we manage in and prep tenants accordingly.',
    },
    {
      q: 'How fast will my Silver Spring property lease?',
      a: 'Median 17 days listing-to-lease in our Silver Spring portfolio. Metro-corridor condos can lease in under 10 days. Single-family in Four Corners and Forest Glen averages 14–21 days.',
    },
    {
      q: 'What’s your management fee?',
      a: '<strong>Flat 8.5% of monthly rent collected.</strong> No tenant-placement fee, no maintenance markup, no annual renewal fees. Free rental market analysis before you sign anything.',
    },
    {
      q: 'Do you serve Takoma Park and Wheaton too?',
      a: 'For properties on the immediate Silver Spring border, yes — same manager, same coverage. For deeper Takoma Park or Wheaton, we recommend a brief intro call so we can confirm we’re the right fit before we list.',
    },
    {
      q: 'Can you manage a property I just moved out of?',
      a: 'Yes — “accidental landlord” is roughly half our Silver Spring portfolio. Owners who took DC jobs, moved abroad, or relocated for federal positions and decided to hold the property. We do a free rent-vs-sell analysis as part of the first call.',
    },
  ],
};
