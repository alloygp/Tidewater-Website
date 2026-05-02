// Tidewater Homepage — homeowner-and-board lead-gen sections
function HomeHero() {
  const Arrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
  const Shield = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
  return (
    <section className="tw-home-hero">
      <div className="tw-hero-bg">
        <img src="assets/hero-aerial.jpg" alt="Aerial view of a Mid-Atlantic community managed by Tidewater"/>
      </div>
      <div className="tw-hero-paper" aria-hidden="true"></div>

      <div className="tw-home-hero-inner">
        <div className="tw-home-hero-eyebrow-row">
          <div className="tw-divider"></div>
          <div className="tw-eyebrow">Family-Owned. Community-Focused. Since 1989.</div>
        </div>
        <h1 className="tw-home-hero-title">Hands-On Management for the <em>Mid-Atlantic.</em></h1>
        <p className="tw-home-hero-lede">
          Tidewater Companies is a family-owned management firm serving 300+ HOA, condo, and rental communities across MD, DC, VA, PA, DE, and WV — with the same operational standard we&rsquo;ve held for over 35 years.
        </p>

        <div className="tw-home-hero-paths">
          <a href="#contact" className="tw-home-path tw-home-path-primary">
            <div className="tw-home-path-eyebrow">For HOA &amp; Condo Boards</div>
            <div className="tw-home-path-title">Get a free management proposal</div>
            <div className="tw-home-path-sub">One-business-day callback from a regional manager who knows your area.</div>
            <div className="tw-home-path-cta">Request a proposal <Arrow/></div>
          </a>
          <a href="#" className="tw-home-path tw-home-path-secondary">
            <div className="tw-home-path-eyebrow">For Homeowners</div>
            <div className="tw-home-path-title">Owner portal &amp; quick actions</div>
            <div className="tw-home-path-sub">Pay your assessment, submit a request, or log in to your community portal.</div>
            <div className="tw-home-path-cta">Owner login <Arrow/></div>
          </a>
        </div>

        <div className="tw-home-hero-trust">
          <div className="tw-home-hero-trust-item"><span className="accent">300+</span> Communities</div>
          <div className="tw-home-hero-trust-item"><span className="accent">30,000+</span> Homes Managed</div>
          <div className="tw-home-hero-trust-item"><span className="accent">35+</span> Years Independent</div>
          <div className="tw-home-hero-trust-item"><span className="accent">6</span> States Served</div>
          <div className="tw-home-hero-trust-seal"><Shield/> AAMC® Accredited</div>
        </div>
      </div>
    </section>
  );
}

function OwnerActions() {
  const Card = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
  const Wrench = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-3 3-2-2 3-3z"/></svg>;
  const Doc = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>;
  const Pin = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
  const User = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  const items = [
    { icon: <Card/>, title: 'Pay Assessment', sub: 'Online via the owner portal', href: '#' },
    { icon: <Wrench/>, title: 'Submit a Request', sub: 'Maintenance, ARC, violations', href: '#' },
    { icon: <Doc/>, title: 'Documents', sub: 'Bylaws, rules, meeting minutes', href: '#' },
    { icon: <Pin/>, title: 'Find My Community', sub: 'Search by name or address', href: '#' },
    { icon: <User/>, title: 'Owner Login', sub: 'Powered by CINC', href: '#' },
  ];
  return (
    <section className="tw-owner-actions" id="owner">
      <div className="tw-container-wide">
        <div className="tw-owner-actions-head">
          <div>
            <div className="tw-eyebrow">For Homeowners in Tidewater-Managed Communities</div>
            <h2 className="tw-owner-actions-title">Quick actions for residents.</h2>
          </div>
          <a href="#" className="tw-btn tw-btn-outline">Visit the help center →</a>
        </div>
        <div className="tw-owner-actions-grid">
          {items.map(it => (
            <a key={it.title} href={it.href} className="tw-owner-action">
              <div className="tw-owner-action-icon">{it.icon}</div>
              <div className="tw-owner-action-title">{it.title}</div>
              <div className="tw-owner-action-sub">{it.sub}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarSplit() {
  const Arrow = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
  return (
    <section className="tw-section tw-section-cream" id="services">
      <div className="tw-container-wide">
        <div className="tw-section-head">
          <div className="tw-eyebrow">Association Management</div>
          <h2 className="tw-section-title">Built for the way <em>your</em> board works.</h2>
          <p className="tw-section-lede">Different communities have different mechanics, governing docs, and risk profiles. Our practice is structured around the two biggest.</p>
        </div>
        <div className="tw-pillar-grid">
          <a href="hoa-management.html" className="tw-pillar-card">
            <div className="tw-pillar-img">
              <img src="assets/hero-aerial.jpg" alt="HOA managed by Tidewater"/>
              <div className="tw-pillar-img-overlay"></div>
              <div className="tw-pillar-tag">HOA</div>
            </div>
            <div className="tw-pillar-body">
              <h3 className="tw-pillar-title">HOA Management</h3>
              <p className="tw-pillar-sub">Townhome associations, master-planned communities, and single-family HOAs across the Mid-Atlantic. Three service tiers — Full, Flex, and Financial Only.</p>
              <ul className="tw-pillar-list">
                <li>Annual management plans &amp; QA review</li>
                <li>Vendor compliance &amp; COI tracking</li>
                <li>Real-manager after-hours emergency line</li>
                <li>Board portal with real-time financial visibility</li>
              </ul>
              <div className="tw-pillar-cta">Explore HOA management <Arrow/></div>
            </div>
          </a>
          <a href="condo-association-management.html" className="tw-pillar-card">
            <div className="tw-pillar-img">
              <img src="assets/highrise.jpg" alt="Condo high-rise managed by Tidewater"/>
              <div className="tw-pillar-img-overlay"></div>
              <div className="tw-pillar-tag">Condo</div>
            </div>
            <div className="tw-pillar-body">
              <h3 className="tw-pillar-title">Condo Association Management</h3>
              <p className="tw-pillar-sub">High-rise, mid-rise, and garden-style condominiums. Specialized in shared mechanical systems, complex reserves, and 24/7 resident expectations.</p>
              <ul className="tw-pillar-list">
                <li>Reserve studies translated into action plans</li>
                <li>Elevator, fire, HVAC management plans</li>
                <li>Special-assessment communication frameworks</li>
                <li>Building-system vendor pre-qualification</li>
              </ul>
              <div className="tw-pillar-cta">Explore condo management <Arrow/></div>
            </div>
          </a>
        </div>
        <div className="tw-pillar-meta">
          <div className="tw-pillar-meta-item">
            <span className="tw-pillar-meta-num">300+</span> communities under management
          </div>
          <div className="tw-pillar-meta-divider"></div>
          <div className="tw-pillar-meta-item">
            <span className="tw-pillar-meta-num">6 states</span> across the Mid-Atlantic
          </div>
          <div className="tw-pillar-meta-divider"></div>
          <div className="tw-pillar-meta-item">
            <span className="tw-pillar-meta-num">AAMC®</span> accredited management company
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeReasons() {
  const items = [
    { n: '01', title: 'A manager who knows your community',
      body: 'Average tenure across our management leadership exceeds a decade. The same person — not a rotating roster — runs your account.' },
    { n: '02', title: 'A real human answers when it\u2019s 2am',
      body: 'After-hours line is answered by Tidewater community managers, not an answering service. 20-minute callback standard, every time.' },
    { n: '03', title: 'Financials boards can actually read',
      body: 'Clean, board-readable monthly reports on the 1st. Real-time delinquency visibility via portal. Optional secondary invoice approval.' },
    { n: '04', title: 'A second set of eyes on every plan',
      body: 'Annual management plans are tracked across the portfolio by our QA team — so deadlines, inspections, and renewals never slip past your manager.' },
  ];
  return (
    <section className="tw-section">
      <div className="tw-container">
        <div className="tw-section-head">
          <div className="tw-eyebrow">Why Boards Choose Tidewater</div>
          <h2 className="tw-section-title">Hands-on operations. <em>No-surprises</em> reporting.</h2>
        </div>
        <div className="tw-reasons-grid">
          {items.map(it => (
            <div key={it.n} className="tw-reason">
              <div className="tw-reason-num">{it.n}</div>
              <h3 className="tw-reason-title">{it.title}</h3>
              <p className="tw-reason-body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HomeHero = HomeHero;
window.OwnerActions = OwnerActions;
window.PillarSplit = PillarSplit;
window.HomeReasons = HomeReasons;
