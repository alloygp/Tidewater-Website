import { useState } from 'react';

const states = [
  {
    id: 'md',
    label: 'Maryland',
    flag: 'MD',
    areas: [
      'Anne Arundel County', 'Baltimore City', 'Baltimore County',
      'Howard County', 'Montgomery County', "Prince George's County",
      'Frederick County', 'Harford County', 'Talbot County',
    ],
    facts: [
      { label: 'Rental Licensing', val: 'County-by-county — we file &amp; renew for you' },
      { label: 'Security Deposit Cap', val: '2 months&rsquo; rent max under Maryland law' },
      { label: 'Lead Paint', val: 'Disclosure &amp; inspection required for pre-1978 properties' },
    ],
    note: 'Each Maryland county has its own rental license, renewal schedule, and inspection cadence. What&rsquo;s required in Anne Arundel differs from Montgomery County. We track every jurisdiction we operate in &mdash; and update your file when the rules change.',
  },
  {
    id: 'de',
    label: 'Delaware',
    flag: 'DE',
    areas: [
      'Lewes', 'Rehoboth Beach', 'Bethany Beach',
      'Fenwick Island', 'Milton', 'Sussex Inland',
    ],
    facts: [
      { label: 'Rental Licensing', val: 'No statewide license; local HOA rules apply' },
      { label: 'Security Deposit Cap', val: '1 month&rsquo;s rent max under Delaware law' },
      { label: 'Long-term Only', val: 'We do not manage short-term or vacation rentals' },
    ],
    note: 'Delaware is generally landlord-friendlier than Maryland &mdash; no statewide rental license, no state-level rent control, and no state sales tax. Sussex County HOA communities often impose their own rental minimums and restrictions. We track them per association.',
  },
];

export default function RentalCounty() {
  const [active, setActive] = useState('md');
  const s = states.find((x) => x.id === active) || states[0];

  return (
    <section className="tw-section tw-section-mist" id="counties">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Maryland &amp; Delaware Rental Markets</div>
          <h2 className="tw-section-title">License rules, deposit caps, and regulations <em>differ by state and county.</em></h2>
          <p className="tw-section-lede">We manage rentals across Maryland and coastal Delaware. The rules aren&rsquo;t the same on either side of the state line &mdash; our managers track what applies to your property, so you don&rsquo;t have to.</p>
        </div>
        <div className="tw-county-grid">
          <div className="tw-county-list">
            {states.map((st) => (
              <button
                key={st.id}
                className={`tw-county-pill ${st.id === active ? 'is-active' : ''}`}
                onClick={() => setActive(st.id)}
              >
                {st.label}
              </button>
            ))}
            <div style={{ marginTop: 12, borderTop: '1px solid var(--tw-border)', paddingTop: 14 }}>
              <div style={{ fontFamily: 'var(--tw-font-mono)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--tw-fg-subtle)', marginBottom: 8 }}>
                {s.label} areas served
              </div>
              {s.areas.map((area, i) => (
                <div key={i} style={{ fontFamily: 'var(--tw-font-body)', fontSize: 13.5, color: 'var(--tw-fg-muted)', padding: '4px 0', borderBottom: i < s.areas.length - 1 ? '1px solid var(--tw-border)' : 'none' }}>
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="tw-county-card">
            <div className="tw-county-head">
              <div className="tw-county-eyebrow">Selected market</div>
              <h3>{s.label}</h3>
            </div>
            <div className="tw-county-stats">
              {s.facts.map((f, i) => (
                <div key={i} className="tw-county-stat">
                  <div className="tw-county-stat-label">{f.label}</div>
                  <div className="tw-county-stat-val small" dangerouslySetInnerHTML={{ __html: f.val }} />
                </div>
              ))}
            </div>
            <div className="tw-county-notes">
              <div className="tw-county-notes-label">What landlords need to know</div>
              <p dangerouslySetInnerHTML={{ __html: s.note }} />
            </div>
            <div className="tw-county-foot">
              <strong>Rules change.</strong> Our managers track legislative sessions in every market we operate in &mdash; and update your file when they do.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
