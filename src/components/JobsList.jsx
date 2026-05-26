import { useState } from 'react';

const jobs = [
  { title: 'Community Association Manager', dept: 'HOA Management', location: 'Owings Mills, MD', type: 'Full-time', exp: '3+ yrs', cls: 'mgmt' },
  { title: 'Senior Community Association Manager', dept: 'HOA Management', location: 'Owings Mills, MD', type: 'Full-time', exp: '7+ yrs · CMCA req.', cls: 'mgmt' },
  { title: 'Community Association Manager — High-Rise', dept: 'Condo Mgmt', location: 'Bethesda, MD', type: 'Full-time', exp: '5+ yrs · CMCA preferred', cls: 'mgmt' },
  { title: 'Portfolio Manager — Eastern Shore', dept: 'HOA Management', location: 'Salisbury, MD', type: 'Full-time', exp: '5+ yrs', cls: 'mgmt' },
  { title: 'Staff Accountant — Association Financials', dept: 'Finance', location: 'Owings Mills, MD', type: 'Full-time', exp: '2+ yrs', cls: 'fin' },
  { title: 'Collections Specialist', dept: 'Collections', location: 'Owings Mills, MD', type: 'Full-time', exp: '2+ yrs', cls: 'fin' },
  { title: 'Maintenance Technician', dept: 'Tidewater Property Maintenance', location: 'Maryland regional', type: 'Full-time', exp: '3+ yrs trades', cls: 'maint' },
  { title: 'Leasing & Rental Coordinator', dept: 'Rental Mgmt', location: 'Owings Mills, MD', type: 'Full-time', exp: '1+ yrs', cls: 'rental' },
  { title: 'Real Estate Agent — Investment Properties', dept: 'Tidewater Realty Group', location: 'Maryland (licensed)', type: 'Full-time / 1099', exp: 'MD license req.', cls: 'rental' },
  { title: 'Client Services Representative', dept: 'Client Services', location: 'Owings Mills, MD', type: 'Full-time', exp: '1+ yrs', cls: 'admin' },
];

const filters = [
  { key: 'all', label: 'All roles' },
  { key: 'mgmt', label: 'Management' },
  { key: 'fin', label: 'Finance' },
  { key: 'rental', label: 'Rental & Realty' },
  { key: 'maint', label: 'Maintenance' },
  { key: 'admin', label: 'Admin' },
];

export default function JobsList() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? jobs : jobs.filter((j) => j.cls === filter);

  return (
    <section className="tw-section tw-section-linen tw-jobs" id="openings">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Open Roles</div>
          <h2 className="tw-section-title">{visible.length} positions <em>open right now.</em></h2>
          <p className="tw-section-lede">Most roles based at our Owings Mills headquarters; regional roles serve the Mid-Atlantic.</p>
        </div>

        <div className="tw-jobs-filters" role="tablist">
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`tw-jobs-filter ${filter === f.key ? 'is-on' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
              {f.key !== 'all' && (
                <span className="tw-jobs-filter-count">{jobs.filter((j) => j.cls === f.key).length}</span>
              )}
            </button>
          ))}
        </div>

        <ul className="tw-jobs-list">
          {visible.map((j, i) => (
            <li key={i} className="tw-jobs-row">
              <div className="tw-jobs-row-main">
                <h3 className="tw-jobs-row-title">{j.title}</h3>
                <div className="tw-jobs-row-meta">
                  <span className="tw-jobs-row-dept">{j.dept}</span>
                  <span className="tw-jobs-row-bullet" aria-hidden="true">·</span>
                  <span>{j.location}</span>
                  <span className="tw-jobs-row-bullet" aria-hidden="true">·</span>
                  <span>{j.type}</span>
                  <span className="tw-jobs-row-bullet" aria-hidden="true">·</span>
                  <span className="tw-jobs-row-exp">{j.exp}</span>
                </div>
              </div>
              <a className="tw-jobs-row-cta" href="#apply">View &amp; apply <span aria-hidden="true">→</span></a>
            </li>
          ))}
        </ul>

        <div className="tw-jobs-foot">
          <p>Don&rsquo;t see a fit? We&rsquo;re always interested in hearing from experienced HOA managers, accountants, and trades professionals across the Mid-Atlantic.</p>
          <a href="mailto:careers@tidewaterproperty.com" className="tw-btn tw-btn-outline">Send us your résumé</a>
        </div>
      </div>
    </section>
  );
}
