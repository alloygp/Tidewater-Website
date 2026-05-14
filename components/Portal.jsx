// HOA / Condo — Portal preview (CINC + Stanley AI), config-driven
function Portal() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;

  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.portal) || {};
  const eyebrow = cfg.eyebrow || 'Built On CINC Systems';
  const titleHtml = cfg.titleHtml || 'A board portal you&rsquo;ll actually use. <em class="gold">An AI assistant named after our founder.</em>';
  const lede = cfg.lede || 'Boards see the full operational picture in real time — violation tracking, ARC requests, delinquencies, action items, and management reports. Owners get 24/7 access on every device.';
  const features = cfg.features || [
    'Real-time violation & compliance monitoring',
    'Live management plan status & action items',
    'ARC request tracking & resident communications',
    'Optional StrongRoom invoice approval for boards',
  ];
  const stanleyText = cfg.stanleyText || 'Fire alarm testing is scheduled in 12 days. I\u2019ve drafted resident notice — review?';
  const ctaHref = cfg.ctaHref || '#';
  const ctaLabel = cfg.ctaLabel || 'Tour the board portal →';

  // Mock dashboard config
  const mock = cfg.mock || {};
  const mockUrl = mock.url || 'tidewater.cincwebaxis.com / board';
  const mockGreeting = mock.greeting || 'Good morning, Marcia.';
  const mockSub = mock.sub || 'Wynbrook HOA · Board Treasurer · 220 homes';
  const mockNav = mock.nav || ['Dashboard','Financials','Violations','ARC Requests','Mgmt Plan','Documents','Resources'];
  const mockCards = mock.cards || [
    { label: 'Operating Acct', num: '$184,420', trend: '▲ on budget', cls:'' },
    { label: 'Reserve', num: '$612,910', trend: '98% funded', cls:'teal' },
    { label: 'Delinquent', num: '3 owners', trend: '2 in attorney review', trendClay: true },
    { label: 'Open ARC', num: '5', trend: '3 awaiting board' },
  ];

  return (
    <section className="tw-section tw-section-dark" id="portal" style={{padding:'112px 0'}}>
      <div className="tw-container">
        <div className="tw-portal-grid">
          <div className="tw-portal-copy">
            <div className="tw-eyebrow tw-eyebrow-gold">{eyebrow}</div>
            <h2 className="tw-section-title tw-section-title-light" dangerouslySetInnerHTML={{__html: titleHtml}}></h2>
            <p className="tw-section-lede" style={{color:'#cfcdc6'}}>{lede}</p>
            <ul className="tw-portal-features">
              {features.map((f,i) => (
                <li key={i}><Check/><span dangerouslySetInnerHTML={{__html:f}}/></li>
              ))}
              <li><Check/><span><strong style={{color:'var(--tw-gold)'}}>Stanley</strong> &mdash; AI assistant, named for our founder, available to every owner</span></li>
            </ul>
            <a href={ctaHref} className="tw-btn tw-btn-outline-cream tw-btn-lg">{ctaLabel}</a>
          </div>
          <div className="tw-portal-mock">
            <div className="tw-portal-mock-bar">
              <div className="tw-portal-mock-bar-dot" style={{background:'#FF6B5C'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#FFBD3D'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#1FC73E'}}></div>
              <div className="tw-portal-mock-bar-url">{mockUrl}</div>
            </div>
            <div className="tw-portal-mock-body">
              <div className="tw-portal-mock-side">
                <div className="tw-portal-mock-side-logo">tidewater PM</div>
                <div className="tw-portal-mock-nav">
                  {mockNav.map((item,i) => (
                    <div key={i} className={`tw-portal-mock-nav-item${i===0?' active':''}`}>
                      <div className="tw-portal-mock-nav-item-dot"></div>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="tw-portal-mock-main">
                <div className="tw-portal-mock-greeting">{mockGreeting}</div>
                <div className="tw-portal-mock-sub">{mockSub}</div>
                <div className="tw-portal-mock-cards">
                  {mockCards.map((c,i) => (
                    <div key={i} className="tw-portal-mock-card">
                      <div className="tw-portal-mock-card-label">{c.label}</div>
                      <div className={`tw-portal-mock-card-num${c.cls===' teal'||c.cls==='teal'?' teal':''}`}>{c.num}</div>
                      <div className="tw-portal-mock-card-trend" style={c.trendClay?{color:'var(--tw-clay)'}:undefined}>{c.trend}</div>
                    </div>
                  ))}
                </div>
                <div className="tw-portal-mock-stanley">
                  <div className="tw-portal-mock-stanley-avatar">S</div>
                  <div>
                    <div className="tw-portal-mock-stanley-name">Stanley · AI assistant</div>
                    <div className="tw-portal-mock-stanley-text">{stanleyText}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Portal = Portal;
