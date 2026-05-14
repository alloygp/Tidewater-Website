// Resources — Filterable library grid
function ResourcesLibrary() {
  const all = [
    { type: 'guide',     time: '32 min read', title: 'Reserve funding for HOA boards: a Maryland-first guide', desc: 'How fully-funded reserves protect property values, why Tidewater insisted on them before the law required it, and a worksheet for boards starting late.', aud: ['HOA'] },
    { type: 'checklist', time: 'Print PDF', title: 'Spring property inspection checklist', desc: '23-point exterior walk: gutters, weep holes, siding seal, irrigation, mulch beds, ADA-curbs, lighting. Used by Tidewater managers every spring.', aud: ['HOA','Maintenance'] },
    { type: 'article',   time: '8 min read', title: 'Deploying overseas? Why Tidewater is built for military landlords', desc: 'PCS orders, AppFolio portal, 3-6 month inspections, paying owner bills from rental funds. A guide for owners about to leave the country.', aud: ['Rental'] },
    { type: 'guide',     time: '18 min read', title: 'Maryland rental licensing, county by county', desc: 'Twelve jurisdictions, twelve sets of rules. Licensing thresholds, lead-paint registration, and the inspection cadence each county actually enforces.', aud: ['Rental'] },
    { type: 'video',     time: '6 min video',  title: 'How to read your monthly HOA management report', desc: 'A walkthrough of the Tidewater monthly financial packet: variance lines, AR aging, reserves, and what to flag at the next board meeting.', aud: ['HOA'] },
    { type: 'checklist', time: 'Print PDF', title: 'Year-end landlord financial checklist', desc: 'Schedule E categories, depreciation reset, AppFolio export sequence, and the 1099 timing window for vendors and contractors.', aud: ['Rental'] },
    { type: 'article',   time: '7 min read', title: 'The all-inclusive fee: what competitors don\u2019t advertise', desc: 'Property visits. Maintenance coordination. Inspection charges. Lease renewals. The four line items low-fee operators add back — and what they cost in year one.', aud: ['Rental','Investor'] },
    { type: 'guide',     time: '14 min read', title: 'Choosing between Full Service, Flex, and Financial-Only', desc: 'Tidewater\u2019s three management tiers, mapped to community size, board capacity, and budget. A decision tree for boards.', aud: ['HOA'] },
    { type: 'article',   time: '5 min read', title: 'The exit playbook: selling a rental you\u2019ve managed for years', desc: 'Tenant coordination, condition baseline, capex log, market timing. How Tidewater Realty handles the handoff from managed-rental to listed-property.', aud: ['Rental','Investor'] },
  ];

  const tabs = [
    { id: 'all',    label: 'All Resources' },
    { id: 'HOA',    label: 'HOA Boards' },
    { id: 'Rental', label: 'Rental Owners' },
    { id: 'Maintenance', label: 'Maintenance' },
    { id: 'Investor', label: 'Investors' },
  ];

  const [tab, setTab] = React.useState('all');
  const items = tab === 'all' ? all : all.filter(x => x.aud.includes(tab));

  const audClass = (a) => {
    if (a === 'HOA') return 'tw-rseason-pub-aud hoa';
    if (a === 'Rental') return 'tw-rseason-pub-aud rental';
    if (a === 'Maintenance') return 'tw-rseason-pub-aud maint';
    if (a === 'Investor') return 'tw-rseason-pub-aud realty';
    return 'tw-rseason-pub-aud';
  };

  return (
    <section className="tw-rlib" id="library">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">The Library</div>
          <h2 className="tw-section-title">Written by managers, <em>not marketing.</em></h2>
          <p className="tw-section-lede">Filter by audience. Everything below is free and downloadable &mdash; no gate, no sales call.</p>
        </div>

        <div className="tw-rlib-tabs" role="tablist">
          {tabs.map(t => {
            const count = t.id === 'all' ? all.length : all.filter(x => x.aud.includes(t.id)).length;
            return (
              <button
                key={t.id}
                className={`tw-rlib-tab ${tab === t.id ? 'is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}<span className="tw-rlib-tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="tw-rlib-grid">
          {items.map((r, i) => (
            <article className="tw-rlib-card" key={i}>
              <div className="tw-rlib-card-meta">
                <span className={`tw-rlib-card-type ${r.type}`}>{r.type}</span>
                <span className="tw-rlib-card-time">{r.time}</span>
              </div>
              <h3 className="tw-rlib-card-title">{r.title}</h3>
              <p className="tw-rlib-card-desc">{r.desc}</p>
              <div className="tw-rlib-card-foot">
                <div className="tw-rlib-card-aud">
                  {r.aud.map(a => (
                    <span key={a} className={audClass(a)} style={{padding:'3px 8px',fontSize:10}}>{a}</span>
                  ))}
                </div>
                <span className="tw-rlib-card-link">Open →</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ResourcesLibrary = ResourcesLibrary;
