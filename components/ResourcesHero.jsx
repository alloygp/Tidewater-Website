// Resources — Hero with library search + audience picker
function ResourcesHero() {
  const Board = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
  const Landlord = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>;
  const Homeowner = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 12 0v1"/><circle cx="18" cy="16" r="2"/></svg>;
  const Investor = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>;

  const auds = [
    { Icon: Board,     title: 'HOA Boards',         sub: 'Reserves, vendor compliance, meeting cadence, fiduciary essentials.', n: '38 resources' },
    { Icon: Landlord,  title: 'Rental Owners',      sub: 'Maryland county rules, deployment guides, screening playbooks.',       n: '24 resources' },
    { Icon: Homeowner, title: 'Homeowners & Residents', sub: 'Pay assessments, submit requests, find your community portal.',     n: '12 resources' },
    { Icon: Investor,  title: 'Investors',          sub: 'Cap-rate models, submarket rent data, exit-strategy guides.',          n: '9 resources' },
  ];

  return (
    <section className="tw-rsh" id="resources">
      <div className="tw-rsh-grid">
        <div>
          <div className="tw-eyebrow">Resources &amp; Insights</div>
          <h1 className="tw-rsh-title">More than management. <em>Your trusted community resource.</em></h1>
          <p className="tw-rsh-lede">Three decades of HOA, rental, and investment-management practice &mdash; written down. Board playbooks, county-by-county rental rule guides, seasonal maintenance checklists, and what we&rsquo;ve learned about reserves the hard way.</p>
          <div className="tw-rsh-search">
            <input placeholder="Search guides, articles, checklists…"/>
            <button className="tw-btn tw-btn-primary tw-btn-pill">Search</button>
          </div>
        </div>
        <div>
          <div style={{fontSize:12,letterSpacing:'0.14em',textTransform:'uppercase',fontWeight:700,color:'var(--tw-fg-subtle)',marginBottom:14}}>I&rsquo;m here for…</div>
          <div className="tw-rsh-picker">
            {auds.map(a => (
              <a key={a.title} href="#library" className="tw-rsh-aud">
                <div className="tw-rsh-aud-icon"><a.Icon/></div>
                <div className="tw-rsh-aud-title">{a.title}</div>
                <div className="tw-rsh-aud-sub">{a.sub}</div>
                <div className="tw-rsh-aud-meta">{a.n} →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.ResourcesHero = ResourcesHero;
