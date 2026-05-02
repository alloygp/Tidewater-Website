// HOA Homepage — Portal preview (CINC + Stanley AI)
function Portal() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  return (
    <section className="tw-section tw-section-dark" id="portal" style={{padding:'112px 0'}}>
      <div className="tw-container">
        <div className="tw-portal-grid">
          <div className="tw-portal-copy">
            <div className="tw-eyebrow tw-eyebrow-gold">Built On CINC Systems</div>
            <h2 className="tw-section-title tw-section-title-light">A board portal you&rsquo;ll actually use. <em className="gold">An AI assistant named after our founder.</em></h2>
            <p className="tw-section-lede" style={{color:'#cfcdc6'}}>Boards see the full operational picture in real time &mdash; violation tracking, ARC requests, delinquencies, action items, and management reports. Owners get 24/7 access on every device. The Tidewater PM app puts it all in one place.</p>
            <ul className="tw-portal-features">
              <li><Check/>Real-time violation &amp; compliance monitoring</li>
              <li><Check/>Live management plan status &amp; action items</li>
              <li><Check/>ARC request tracking &amp; resident communications</li>
              <li><Check/>Optional StrongRoom invoice approval for boards</li>
              <li><Check/><span><strong style={{color:'var(--tw-gold)'}}>Stanley</strong> &mdash; AI assistant, named for our founder, available to every owner</span></li>
            </ul>
            <a href="#" className="tw-btn tw-btn-outline-cream tw-btn-lg">Tour the board portal →</a>
          </div>
          <div className="tw-portal-mock">
            <div className="tw-portal-mock-bar">
              <div className="tw-portal-mock-bar-dot" style={{background:'#FF6B5C'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#FFBD3D'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#1FC73E'}}></div>
              <div className="tw-portal-mock-bar-url">tidewater.cincwebaxis.com / board</div>
            </div>
            <div className="tw-portal-mock-body">
              <div className="tw-portal-mock-side">
                <div className="tw-portal-mock-side-logo">tidewater PM</div>
                <div className="tw-portal-mock-nav">
                  <div className="tw-portal-mock-nav-item active"><div className="tw-portal-mock-nav-item-dot"></div>Dashboard</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Financials</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Violations</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>ARC Requests</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Mgmt Plan</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Documents</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Resources</div>
                </div>
              </div>
              <div className="tw-portal-mock-main">
                <div className="tw-portal-mock-greeting">Good morning, Marcia.</div>
                <div className="tw-portal-mock-sub">Wynbrook HOA · Board Treasurer · 220 homes</div>
                <div className="tw-portal-mock-cards">
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Operating Acct</div>
                    <div className="tw-portal-mock-card-num">$184,420</div>
                    <div className="tw-portal-mock-card-trend">▲ on budget</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Reserve</div>
                    <div className="tw-portal-mock-card-num teal">$612,910</div>
                    <div className="tw-portal-mock-card-trend">98% funded</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Delinquent</div>
                    <div className="tw-portal-mock-card-num">3 owners</div>
                    <div className="tw-portal-mock-card-trend" style={{color:'var(--tw-clay)'}}>2 in attorney review</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Open ARC</div>
                    <div className="tw-portal-mock-card-num">5</div>
                    <div className="tw-portal-mock-card-trend">3 awaiting board</div>
                  </div>
                </div>
                <div className="tw-portal-mock-stanley">
                  <div className="tw-portal-mock-stanley-avatar">S</div>
                  <div>
                    <div className="tw-portal-mock-stanley-name">Stanley · AI assistant</div>
                    <div className="tw-portal-mock-stanley-text">Fire alarm testing is scheduled in 12 days. I&rsquo;ve drafted resident notice — review?</div>
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
