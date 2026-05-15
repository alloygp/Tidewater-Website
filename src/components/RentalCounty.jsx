import { useState } from 'react';

const counties = [
  { id: 'montgomery', name: 'Montgomery County', evict: 'Up to 12 months', license: 'County license + annual inspection', deposit: '2 mo max', notes: 'CCOC arbitration; some of the strictest tenant protections in MD.' },
  { id: 'baltcity',   name: 'Baltimore City',    evict: '60–90 days',     license: 'Annual rental license + lead cert',   deposit: '2 mo max', notes: 'Lead-paint registration mandatory. Inspection cadence enforced.' },
  { id: 'baltco',     name: 'Baltimore County',  evict: '60–90 days',     license: 'Per-property license required',       deposit: '2 mo max', notes: 'Local rent-court calendar varies. Notice timing matters.' },
  { id: 'aa',         name: 'Anne Arundel',      evict: '60–90 days',     license: 'Per-property registration',           deposit: '2 mo max', notes: 'Fort Meade / NSA corridor — high military-tenant volume.' },
  { id: 'howard',     name: 'Howard County',     evict: '75–120 days',    license: 'Single-family license required',      deposit: '2 mo max', notes: 'Tenant Bill of Rights; pre-eviction notice extended.' },
  { id: 'pg',         name: "Prince George\'s",   evict: '75–120 days',    license: 'Annual rental license',               deposit: '2 mo max', notes: 'Right to counsel; document everything in writing.' },
  { id: 'frederick',  name: 'Frederick County',  evict: '60–90 days',     license: 'Varies by municipality',              deposit: '2 mo max', notes: 'City of Frederick has its own rental ordinance.' },
  { id: 'harford',    name: 'Harford County',    evict: '60–90 days',     license: 'No countywide license; check city',   deposit: '2 mo max', notes: 'Aberdeen Proving Ground military-owner population.' },
];

export default function RentalCounty() {
  const [active, setActive] = useState('montgomery');
  const c = counties.find((x) => x.id === active) || counties[0];

  return (
    <section className="tw-section tw-section-mist" id="counties">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Maryland Is Not One Rental Market</div>
          <h2 className="tw-section-title">Eviction timelines, license rules, and deposit caps <em>change at every county line.</em></h2>
          <p className="tw-section-lede">A real-estate agent in one market can&rsquo;t keep up. We operate across all of them &mdash; and our managers are paying attention to the rules that change every legislative session.</p>
        </div>
        <div className="tw-county-grid">
          <div className="tw-county-list">
            {counties.map((cc) => (
              <button
                key={cc.id}
                className={`tw-county-pill ${cc.id === active ? 'is-active' : ''}`}
                onClick={() => setActive(cc.id)}
              >
                {cc.name}
              </button>
            ))}
          </div>
          <div className="tw-county-card">
            <div className="tw-county-head">
              <div className="tw-county-eyebrow">Selected market</div>
              <h3>{c.name}</h3>
            </div>
            <div className="tw-county-stats">
              <div className="tw-county-stat">
                <div className="tw-county-stat-label">Eviction Timeline</div>
                <div className="tw-county-stat-val">{c.evict}</div>
              </div>
              <div className="tw-county-stat">
                <div className="tw-county-stat-label">Rental Licensing</div>
                <div className="tw-county-stat-val small">{c.license}</div>
              </div>
              <div className="tw-county-stat">
                <div className="tw-county-stat-label">Security Deposit Cap</div>
                <div className="tw-county-stat-val">{c.deposit}</div>
              </div>
            </div>
            <div className="tw-county-notes">
              <div className="tw-county-notes-label">What landlords need to know</div>
              <p>{c.notes}</p>
            </div>
            <div className="tw-county-foot">
              <strong>Heads up:</strong> rules change. Our managers track legislative sessions in every county we operate in &mdash; and update your file when they do.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
