import { useState } from 'react';

const ALL_REVIEWS = [
  {
    tag: 'HOA', tone: '',
    quote: 'Best decision our board has made in the 14 years I’ve served. Our manager Sarah knows every vendor, every contract, and every problem unit by name. We literally talk less in board meetings because the agenda is so well-prepared.',
    initials: 'KW', avatarTone: '',
    name: 'Karen Whitlock',
    role: 'President', service: 'HOA Management',
    community: 'Stonebridge Crossing HOA',
    location: 'Frederick, MD',
    units: '184 units', tenure: '3 yrs',
    featured: false,
  },
  {
    tag: 'CONDO', tone: 'condo',
    quote: 'Three years in. Our financials are clean, our reserves are funded properly for the first time in a decade, and our manager remembers every resident’s name. I cannot recommend Tidewater highly enough.',
    initials: 'MV', avatarTone: '',
    name: 'Margaret Vance',
    role: 'President', service: 'Condo Association Mgmt',
    community: 'Brightwood Hills Condominiums',
    location: 'Bethesda, MD',
    units: '96 units', tenure: '3 yrs',
    featured: true,
  },
  {
    tag: 'HOA', tone: '',
    quote: 'The transition was so quiet our residents barely noticed we’d changed companies. Six months in, our reserves are funded correctly for the first time in a decade.',
    initials: 'DR', avatarTone: 'gold',
    name: 'David Reinhardt',
    role: 'Past President', service: 'HOA Management',
    community: 'Wynbrook Townhomes',
    location: 'Howard County, MD',
    units: '132 units', tenure: '3 yrs',
    featured: false,
  },
  {
    tag: 'CONDO', tone: 'condo',
    quote: 'We had a complicated mid-rise with three failed management companies before Tidewater. They got our garage repair on schedule, our master insurance under control, and our finance reports actually arrive 15 days after month-end. Imagine that.',
    initials: 'AG', avatarTone: '',
    name: 'Alice Goldberg',
    role: 'Treasurer', service: 'Condo Association Mgmt',
    community: 'The Marlowe Residences',
    location: 'Silver Spring, MD',
    units: '212 units', tenure: '2 yrs',
    featured: false,
  },
  {
    tag: 'RENTAL', tone: 'rental',
    quote: 'I bought the house thinking I’d manage it myself from Texas. Six months in, I called Tidewater. They’ve been running it for two years now without a single missed lease cycle. Easiest landlord experience I’ve had.',
    initials: 'BC', avatarTone: 'sage',
    name: 'Benjamin Cole',
    role: 'Rental Owner', service: 'Rental Property Mgmt',
    community: 'Single-family · Annapolis',
    location: 'Annapolis, MD',
    units: '1 unit', tenure: '2 yrs',
    featured: false,
  },
  {
    tag: 'HOA', tone: '',
    quote: 'I’m on my second board now and I asked specifically for Tidewater. The reserve study refresh they did in 2024 caught a $180K deferred-maintenance gap that nobody had flagged. That alone paid for ten years of management fees.',
    initials: 'SL', avatarTone: '',
    name: 'Sarah Lin',
    role: 'Treasurer', service: 'HOA Management',
    community: 'Ridgeway Estates',
    location: 'Columbia, MD',
    units: '256 units', tenure: '5 yrs',
    featured: false,
  },
  {
    tag: 'DEVELOPER', tone: 'developer',
    quote: 'We’ve worked with Tidewater on three developments now. Their HOA setup playbook is the cleanest in the region — bylaws drafted with us, declarations recorded properly, first-year budget realistic. They handle the developer-control period without drama.',
    initials: 'MP', avatarTone: 'clay',
    name: 'Michael Prendergast',
    role: 'Development Partner', service: 'Developer Program',
    community: 'Harbor Pointe Phase III',
    location: 'Pasadena, MD',
    units: '74 units (new)', tenure: '3 projects',
    featured: false,
  },
  {
    tag: 'CONDO', tone: 'condo',
    quote: 'High-rise mid-Atlantic condos have specific needs — fire systems, garage maintenance, elevator inspections, FHA recertification. Tidewater is the first management company I’ve worked with that has all four down to a schedule, not a fire drill.',
    initials: 'RP', avatarTone: '',
    name: 'Robert Petrucci',
    role: 'President', service: 'Condo Association Mgmt',
    community: 'The Promenade at Inner Harbor',
    location: 'Baltimore, MD',
    units: '184 units (high-rise)', tenure: '4 yrs',
    featured: false,
  },
  {
    tag: 'HOA', tone: '',
    quote: 'Our community went from self-managed to professional management in 2023. The Tidewater team made it feel like a non-event for our residents — same monthly assessment, same community, just no more 11pm voicemails to our president.',
    initials: 'EH', avatarTone: 'gold',
    name: 'Eleanor Hassan',
    role: 'Past President', service: 'HOA Management',
    community: 'Tuckahoe Knolls',
    location: 'Easton, MD',
    units: '88 units', tenure: '3 yrs',
    featured: false,
  },
  {
    tag: 'HOA', tone: '',
    quote: 'We interviewed 4 management companies. Tidewater was the only one who showed up to the interview having read our governing documents. They knew our amendments, our recent litigation, and our reserve gap before we said a word.',
    initials: 'JF', avatarTone: '',
    name: 'James Fielding',
    role: 'President', service: 'HOA Management',
    community: 'Highland Glen Homeowners Assoc.',
    location: 'Hagerstown, MD',
    units: '156 units', tenure: '2 yrs',
    featured: false,
  },
  {
    tag: 'CONDO', tone: 'condo',
    quote: 'I appreciate that they tell us when we’re wrong. Twice in our first year, our manager recommended deferring a board-favored project because the cash-flow timing didn’t support it. They were right both times. That’s rare.',
    initials: 'TC', avatarTone: '',
    name: 'Theresa Cabrera',
    role: 'Treasurer', service: 'Condo Association Mgmt',
    community: 'Annapolis Harbor Condos',
    location: 'Annapolis, MD',
    units: '124 units', tenure: '2 yrs',
    featured: false,
  },
  {
    tag: 'HOA', tone: '',
    quote: 'Our previous company sent us a 200-page binder for the annual meeting. Tidewater sends us a 12-page board pack 7 days before, with everything we actually need. The difference in how prepared the board feels is night and day.',
    initials: 'WT', avatarTone: '',
    name: 'William Tasker',
    role: 'Secretary', service: 'HOA Management',
    community: 'Crofton Meadows HOA',
    location: 'Crofton, MD',
    units: '212 units', tenure: '4 yrs',
    featured: false,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function TestimonialCard({ r }) {
  return (
    <article className={`tw-tst-card${r.featured ? ' is-featured' : ''}`}>
      <div className="tw-tst-card-head">
        <span className="tw-tst-stars">
          {[0,1,2,3,4].map(i => <StarIcon key={i} />)}
        </span>
        <span className={`tw-tst-tag${r.tone ? ' ' + r.tone : ''}`}>{r.tag}</span>
      </div>
      <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
      <div className="tw-tst-card-foot">
        <div className={`tw-tst-card-avatar${r.avatarTone ? ' ' + r.avatarTone : ''}`}>{r.initials}</div>
        <div style={{flex:1,minWidth:0}}>
          <div className="tw-tst-card-name">{r.name}</div>
          <div className="tw-tst-card-meta">
            <span className="role">{r.role}</span> &middot; {r.community}
            <div className="tw-tst-card-meta-row">
              <span>{r.location}</span>
              <span className="sep">&middot;</span>
              <span>{r.units}</span>
              <span className="sep">&middot;</span>
              <span>{r.tenure}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsGrid() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all',       label: 'All board reviews', count: ALL_REVIEWS.length },
    { id: 'HOA',       label: 'HOA',               count: ALL_REVIEWS.filter(r => r.tag === 'HOA').length },
    { id: 'CONDO',     label: 'Condo Association', count: ALL_REVIEWS.filter(r => r.tag === 'CONDO').length },
    { id: 'RENTAL',    label: 'Rental Owners',     count: ALL_REVIEWS.filter(r => r.tag === 'RENTAL').length },
    { id: 'DEVELOPER', label: 'Developers',        count: ALL_REVIEWS.filter(r => r.tag === 'DEVELOPER').length },
  ];

  const reviews = filter === 'all' ? ALL_REVIEWS : ALL_REVIEWS.filter(r => r.tag === filter);

  return (
    <>
      <section className="tw-tst-filters">
        <div className="tw-tst-filters-inner">
          <span className="tw-tst-filter-label">Filter</span>
          {filters.map(f => (
            <button
              key={f.id}
              className={`tw-tst-filter-chip${filter === f.id ? ' is-active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              <span>{f.label}</span>
              <span className="tw-tst-filter-chip-count">{f.count}</span>
            </button>
          ))}
        </div>
      </section>

      <section id="all-reviews" className="tw-tst-grid-section">
        <div className="tw-container-wide">
          <div className="tw-tst-grid">
            {reviews.map((r, i) => <TestimonialCard key={i} r={r} />)}
          </div>

          <div className="tw-tst-disclosure">
            <div className="tw-tst-disclosure-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <div>
              <h3>How this page is built</h3>
              <p>
                Every review on this page is from a named board member, treasurer, or development partner whose community we currently manage or recently transitioned. <strong>We provide their direct contact</strong> on request &mdash; if you&rsquo;re evaluating Tidewater, we&rsquo;d rather you talk to them than read about them. <a href="/request-a-proposal/">Request reference contacts &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
