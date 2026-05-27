import { useState } from 'react';

// Reviews extracted from Google Business Profile listings.
// location: 'md' = Maryland listing | 'de' = Delaware / Eastern Shore listing
// type: 'board' | 'homeowner' | 'owner'
const GOOGLE_REVIEWS = [
  // ── BOARD MEMBER ────────────────────────────────────────────────
  {
    id: 'g01', name: 'Mary Neimeyer', initials: 'MN', rating: 5, date: 'Mar 2024',
    quote: 'Tammy Alarie is very organized and a responsive and hardworking property manager for our small community.',
    type: 'board', location: 'de', community: 'Shoreview',
  },

  // ── PROPERTY OWNERS ─────────────────────────────────────────────
  {
    id: 'g02', name: 'Stephanie Nicozisis', initials: 'SN', rating: 5, date: '',
    quote: 'I own a property in a complex that Tidewater manages. They are always very helpful and answer questions quickly.',
    type: 'owner', location: 'md', community: '',
  },
  {
    id: 'g03', name: 'Dave Sweeney', initials: 'DS', rating: 5, date: '',
    quote: 'Tidewater is top for single property representation. They are well organized, prepared, and demonstrated outstanding managerial skills to navigate HOA matters on behalf of owners.',
    type: 'owner', location: 'md', community: '',
  },

  // ── HOMEOWNERS / RESIDENTS – MARYLAND ───────────────────────────
  {
    id: 'g04', name: 'Mike Vilor', initials: 'MV', rating: 5, date: '',
    quote: 'The folks at Tidewater are extremely helpful. Responded quickly to several issues I needed to address and kept me well-informed about steps being taken. I appreciate the support.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g05', name: 'Rosa Gianpollis', initials: 'RG', rating: 5, date: '',
    quote: 'Lisa Wells consistently responds with concerns and addresses community resources. She also responds immediately to any issues when needed. Such HOAs are so fortunate to have Lisa in our community.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g06', name: 'Todd Greco', initials: 'TG', rating: 4, date: '',
    quote: "Although I've only lived in the community about 3 months, the Pomeroy Hill team is always able to answer all my questions. Lisa Wells goes out of her way to help — she's committed to this community.",
    type: 'homeowner', location: 'md', community: 'Pomeroy Hill',
  },
  {
    id: 'g07', name: 'John M.', initials: 'JM', rating: 5, date: '',
    quote: 'Jordan Stevens was great. Super quick to handle my concerns.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g08', name: 'Derrick Marcell', initials: 'DM', rating: 5, date: '',
    quote: 'Jordan Andrews is absolutely awesome!! Over the past several weeks I\'ve needed assistance and Jordan has handled everything with great professionalism.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g09', name: 'Patrick Cassidy', initials: 'PC', rating: 5, date: '',
    quote: 'Lisa has done a fabulous job as our community specialist. Very helpful, friendly, and right on top of whatever we need. Thank you Lisa!',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g10', name: 'Margaret Paul', initials: 'MP', rating: 5, date: '',
    quote: 'Jordan Andrews was incredibly helpful and resolved a sensitive issue in our community in a dedicated and timely manner.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g11', name: 'Margo Giella', initials: 'MG', rating: 5, date: '',
    quote: 'Jordan is fantastic. The group is genuine and creatively addresses issues. Very pleased to be living here and appreciative of Tidewater\'s management.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g12', name: 'Amy Mai', initials: 'AM', rating: 5, date: '',
    quote: 'I had the pleasure of dealing with Karen Thompson, who was incredibly helpful and went above and beyond to assist me with the complex. Thank you!',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g13', name: 'Ryan Caspio', initials: 'RC', rating: 5, date: '',
    quote: 'Karen Thompson has been an amazing blessing. She is always there and goes the extra mile to take care of our entire community.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g14', name: 'Cindy Krugler', initials: 'CK', rating: 5, date: '',
    quote: 'Lisa Wells does an amazing job for our community. Tidewater employees are accessible and responsive. Lisa is 5 stars in every regard.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g15', name: 'Thomas Horton', initials: 'TH', rating: 4, date: '',
    quote: 'Lisa Wells is the best property manager I\'ve ever had. She consistently responds to my concerns in a timely manner.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g16', name: 'Meg Ohanian', initials: 'MO', rating: 5, date: '',
    quote: 'Called Tidewater about an error on my invoice. Renata Maglia resolved the problem quickly — she was pleasant, professional, and followed up by email to confirm it was fixed.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g17', name: 'Edward Bonsal', initials: 'EB', rating: 5, date: '',
    quote: 'I called Jordan Andrews with an invoice question. He resolved my issue without any problem.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g18', name: 'Cortez', initials: 'CS', rating: 5, date: '',
    quote: 'Our association moved to Tidewater PM several months ago and it was really the best decision we made. They have been wonderful to work with.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g19', name: 'Kim Hearney', initials: 'KH', rating: 5, date: '',
    quote: 'Tidewater has been especially helpful with my concerns and requests for common access to amenities. They communicate notices quickly and address issues promptly. Thank you Karen for the continued responsive support.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g20', name: 'Paul Barrett', initials: 'PB', rating: 5, date: '',
    quote: 'Dealing with Tony, Karen, and Anthony they\'ve been professional and proactive in getting details resolved and addressing issues quickly.',
    type: 'homeowner', location: 'md', community: '',
  },
  {
    id: 'g21', name: 'Susan Lee Stubbs', initials: 'SS', rating: 5, date: '',
    quote: 'Our property manager is great and so easy to work with. Always available, very friendly, and responsible. Thank you for all your support.',
    type: 'homeowner', location: 'md', community: '',
  },

  // ── HOMEOWNERS / RESIDENTS – DELAWARE & EASTERN SHORE ───────────
  {
    id: 'g22', name: 'Jeffrey Troskoeff', initials: 'JT', rating: 5, date: '',
    quote: 'I am a new first time homeowner in Herd Cave, Delaware. After several interactions with the Tidewater team — Tammy Alarie, Kristie Stevens and others — I am reminded they are all excellent every single time. Thank you.',
    type: 'homeowner', location: 'de', community: 'Herd Cave',
  },
  // Add more Delaware / Eastern Shore reviews here
];

function StarRow({ rating }) {
  return (
    <span className="tw-tst-stars">
      {[0,1,2,3,4].map(i => (
        <svg key={i} viewBox="0 0 24 24" fill={i < rating ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </span>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-label="Google Review">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

const TYPE_LABELS = {
  board:     'Board Member',
  homeowner: 'Homeowner / Resident',
  owner:     'Property Owner',
};

function ReviewCard({ r }) {
  return (
    <article className="tw-tst-card">
      <div className="tw-tst-card-head">
        <StarRow rating={r.rating} />
        <span className={`tw-tst-tag${r.type === 'board' ? '' : r.type === 'owner' ? ' rental' : ''}`}>
          {TYPE_LABELS[r.type]}
        </span>
      </div>
      <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
      <div className="tw-tst-card-foot">
        <div className="tw-tst-card-avatar">{r.initials}</div>
        <div style={{flex:1,minWidth:0}}>
          <div className="tw-tst-card-name">{r.name}</div>
          <div className="tw-tst-card-meta">
            {r.community && <><span className="role">{r.community}</span> &middot; </>}
            <span>{r.location === 'de' ? 'Delaware / Eastern Shore' : 'Maryland'}</span>
            {r.date && <><span className="sep"> &middot; </span><span>{r.date}</span></>}
          </div>
        </div>
      </div>
      <div className="tw-tst-card-source">
        <div className="tw-tst-card-source-dot" style={{background:'#4285F4'}}></div>
        <GoogleIcon />
        <span>Google Review</span>
      </div>
    </article>
  );
}

export default function GoogleReviewsGrid() {
  const [type,     setType]     = useState('all');
  const [location, setLocation] = useState('all');

  const typeFilters = [
    { id: 'all',       label: 'All reviews',            count: GOOGLE_REVIEWS.length },
    { id: 'board',     label: 'Board Members',          count: GOOGLE_REVIEWS.filter(r => r.type === 'board').length },
    { id: 'homeowner', label: 'Homeowners / Residents', count: GOOGLE_REVIEWS.filter(r => r.type === 'homeowner').length },
    { id: 'owner',     label: 'Property Owners',        count: GOOGLE_REVIEWS.filter(r => r.type === 'owner').length },
  ];

  const locationFilters = [
    { id: 'all', label: 'All locations' },
    { id: 'md',  label: 'Maryland' },
    { id: 'de',  label: 'Delaware & Eastern Shore' },
  ];

  const visible = GOOGLE_REVIEWS.filter(r =>
    (type === 'all'     || r.type     === type) &&
    (location === 'all' || r.location === location)
  );

  return (
    <>
      {/* Section Header */}
      <section className="tw-grev-head">
        <div className="tw-container-wide">
          <div className="tw-grev-head-inner">
            <div>
              <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                <div className="tw-divider" style={{width:'32px',height:'2px',background:'var(--tw-teal)'}}></div>
                <span className="tw-eyebrow">From Google</span>
              </div>
              <h2 className="tw-grev-title">What our communities say</h2>
              <p className="tw-grev-sub">Reviews from residents, homeowners, and property owners across our managed communities — unedited, sourced directly from Google.</p>
            </div>
            <div className="tw-grev-badges">
              <div className="tw-grev-badge">
                <div className="tw-grev-badge-num">3.9</div>
                <div className="tw-grev-badge-label">Overall Google<br/>rating</div>
              </div>
              <div className="tw-grev-badge">
                <div className="tw-grev-badge-num">552+</div>
                <div className="tw-grev-badge-label">Total Google<br/>reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="tw-tst-filters" style={{paddingBottom:'0'}}>
        <div className="tw-tst-filters-inner" style={{flexWrap:'wrap',gap:'8px 6px'}}>
          <span className="tw-tst-filter-label">Type</span>
          {typeFilters.map(f => (
            <button key={f.id}
              className={`tw-tst-filter-chip${type === f.id ? ' is-active' : ''}`}
              onClick={() => setType(f.id)}>
              <span>{f.label}</span>
              <span className="tw-tst-filter-chip-count">{f.count}</span>
            </button>
          ))}
        </div>
        <div className="tw-tst-filters-inner" style={{flexWrap:'wrap',gap:'8px 6px',paddingTop:'10px'}}>
          <span className="tw-tst-filter-label">Location</span>
          {locationFilters.map(f => (
            <button key={f.id}
              className={`tw-tst-filter-chip${location === f.id ? ' is-active' : ''}`}
              onClick={() => setLocation(f.id)}>
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="tw-tst-grid-section">
        <div className="tw-container-wide">
          {visible.length === 0
            ? <p style={{textAlign:'center',padding:'40px 0',color:'var(--tw-fg-muted)'}}>No reviews match this filter combination.</p>
            : <div className="tw-tst-grid">
                {visible.map(r => <ReviewCard key={r.id} r={r} />)}
              </div>
          }
          <div style={{textAlign:'center',paddingTop:'32px',paddingBottom:'16px'}}>
            <a href="https://www.google.com/search?q=tidewater+property+management+maryland+reviews"
               target="_blank" rel="noopener"
               className="tw-btn tw-btn-ghost">
              Read all Google reviews &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
