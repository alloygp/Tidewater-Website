// HOA Homepage — Topbar + Header with megamenu
function Topbar() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.topbar) || {};
  const variant = cfg.variant || 'default'; // 'default' | 'homeowner'
  if (variant === 'homeowner') {
    return (
      <div className="tw-topbar">
        <div className="tw-topbar-inner">
          <div className="tw-topbar-left">
            <a href="#"><span className="tw-topbar-em">Pay Assessment</span></a>
            <span style={{opacity:.4}}>·</span>
            <a href="#">Submit a Request</a>
            <span style={{opacity:.4}}>·</span>
            <a href="#">Find My Community</a>
          </div>
          <div className="tw-topbar-right">
            <a href="#"><span className="tw-topbar-em">Emergency:</span> 24/7/365</a>
            <a href="#">(443) 548-0191</a>
            <a href="#" className="tw-topbar-login">Owner Login →</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="tw-topbar">
      <div className="tw-topbar-inner">
        <div className="tw-topbar-left">
          <span><strong>AAMC®</strong> Accredited Association Management Company</span>
          <span style={{opacity:.5}}>·</span>
          <span>Family-Owned Since 1989</span>
        </div>
        <div className="tw-topbar-right">
          <a href="#"><span className="tw-topbar-em">Emergency:</span> 24/7/365</a>
          <a href="#">(443) 548-0191</a>
          <a href="#">applications@tidewaterproperty.com</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.nav) || {};
  const active = cfg.active || null;
  const [openMenu, setOpenMenu] = React.useState(false);
  const navItems = [
    { label: 'About', has: true, menu: 'about', href: 'about.html' },
    { label: 'Management', has: true, menu: 'mgmt', href: 'hoa-management.html', match: ['mgmt','hoa','condo','rental'] },
    { label: 'Maintenance', href: 'maintenance.html', match: ['maintenance'] },
    { label: 'Real Estate', href: 'realty.html', match: ['realty'] },
    { label: 'Resources', href: '/resources/' },
  ];
  const isActive = (n) => {
    if (!active) return false;
    if (n.menu && n.menu === active) return true;
    if (n.match && n.match.indexOf(active) !== -1) return true;
    return false;
  };
  const menus = {
    about: [
      { title: 'Our Story', body: 'Family-owned in the Mid-Atlantic since 1989.', icon: 'shield', href: 'about.html' },
      { title: 'Leadership', body: 'PCAM-credentialed team and chapter presidents.', icon: 'sliders', href: 'about-leadership.html' },
      { title: 'Service Areas', body: 'MD, DC, VA, PA, DE, and West Virginia.', icon: 'chart', href: '/service-areas/' },
      { title: 'Careers', body: 'Join an independent, board-first management firm.', icon: 'building', href: 'about-careers.html' },
    ],
    mgmt: [
      { title: 'HOA Management', body: 'Full-service management for homeowner associations.', icon: 'shield', href: 'hoa-management.html' },
      { title: 'Condo Association Management', body: 'High-rise, mid-rise, and garden-style condo expertise.', icon: 'building', href: 'condo-association-management.html' },
      { title: 'Rental Property Management', body: 'Single-family and small-multifamily rental management.', icon: 'chart', href: 'rental-property-management.html' },
    ],
  };
  const icons = {
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>,
    sliders: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/><circle cx="9" cy="6" r="2.5" fill="currentColor"/><circle cx="14" cy="12" r="2.5" fill="currentColor"/><circle cx="7" cy="18" r="2.5" fill="currentColor"/></svg>,
    chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>,
    building: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="9" y1="13" x2="9.01" y2="13"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>,
  };
  return (
    <header className="tw-header">
      <div className="tw-header-inner">
        <a className="tw-header-logo" href="index.html"><img src="assets/logo-main-black.svg" alt="Tidewater Companies"/></a>
        <nav className="tw-header-nav">
          {navItems.map(n => (
            <div key={n.label} style={{position:'relative'}} onMouseEnter={()=>n.has && setOpenMenu(n.menu)} onMouseLeave={()=>n.has && setOpenMenu(false)}>
              <a href={n.href || '#'} className={`tw-header-nav-link ${isActive(n) ? 'is-active' : ''}`}>
                {n.label}{n.has && <span className="tw-chev">▾</span>}
              </a>
              {n.has && (
                <div className={`tw-megamenu ${n.menu === 'mgmt' ? 'tw-megamenu-2col' : 'tw-megamenu-grid'} ${openMenu === n.menu ? 'is-open' : ''}`}>
                  {n.menu === 'mgmt' && (
                    <a href="#" className="tw-mega-feature">
                      <div className="tw-mega-feature-img">
                        <img src="assets/hero-aerial.jpg" alt="HOA Board Resource Library"/>
                        <div className="tw-mega-feature-overlay"></div>
                      </div>
                      <div className="tw-mega-feature-body">
                        <div className="tw-mega-feature-eyebrow">Free for Boards</div>
                        <div className="tw-mega-feature-title">The HOA Board Playbook</div>
                        <div className="tw-mega-feature-sub">Our 32-page guide to reserves, vendor compliance, and meeting cadence — battle-tested across 300+ Mid-Atlantic communities.</div>
                        <div className="tw-mega-feature-cta">Download the playbook →</div>
                      </div>
                    </a>
                  )}
                  {n.menu === 'mgmt' ? (
                    <div className="tw-mega-list">
                      {menus[n.menu].map(m => (
                        <a key={m.title} href={m.href || '#'} className="tw-mega-item">
                          <div className="tw-mega-icon">{icons[m.icon]}</div>
                          <div>
                            <div className="tw-mega-title">{m.title}</div>
                            <div className="tw-mega-body">{m.body}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    menus[n.menu].map(m => (
                      <a key={m.title} href={m.href || '#'} className="tw-mega-item">
                        <div className="tw-mega-icon">{icons[m.icon]}</div>
                        <div>
                          <div className="tw-mega-title">{m.title}</div>
                          <div className="tw-mega-body">{m.body}</div>
                        </div>
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="tw-header-actions">
          <a href="#" className="tw-header-login">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Owner Login
          </a>
          <a href="#" className="tw-btn tw-btn-primary tw-btn-pill">Request a Proposal</a>
        </div>
      </div>
    </header>
  );
}
window.Topbar = Topbar;
window.Header = Header;
