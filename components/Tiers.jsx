// HOA / Condo — Three Service Tiers (config-driven)
function Tiers() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>;
  const Dash = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/></svg>;

  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.tiers) || {};
  const eyebrow = cfg.eyebrow || 'Three Tiers. One Standard of Care.';
  const titleHtml = cfg.titleHtml || 'A fit for <em>every association.</em>';
  const lede = cfg.lede || 'Most management companies offer one model. We offer three — so the size of your community, your budget, and your board\u2019s appetite for involvement all stay yours to decide.';

  const featuredBestFor = cfg.featuredBestFor || 'HOAs & condo associations';
  const featuredTagline = cfg.featuredTagline || 'Comprehensive management — every operational detail handled.';
  const featuredFeatures = cfg.featuredFeatures || [
    'Dedicated community manager & on-site presence',
    'Meeting support, attendance & recording',
    'Annual management plan via CINC Systems',
    'Full financial controls & collections',
    'Vendor management & in-house compliance',
    '24/7 emergency line — real managers',
    'QA oversight & insurance tracking',
  ];

  const flexBestFor = cfg.flexBestFor || 'Established, mature boards';
  const flexTagline = cfg.flexTagline || 'Lower base fee, à-la-carte involvement when you need it.';
  const flexFeatures = cfg.flexFeatures || [
    { text: 'Reduced base management fee' },
    { text: 'Set hourly rate for meetings' },
    { text: 'Inspections available on-demand' },
    { text: 'Full financial & collections support' },
    { text: 'Owner portal & CINC management plan' },
    { text: '24/7 emergency coverage' },
    { text: 'Standing on-site presence', muted: true },
  ];

  const financialBestFor = cfg.financialBestFor || 'Self-managed boards';
  const financialTagline = cfg.financialTagline || 'For self-managed communities needing accounting depth.';
  const financialFeatures = cfg.financialFeatures || [
    { text: 'Full AR / AP processing' },
    { text: 'Bank reconciliations & account management' },
    { text: 'Budget assistance & reserve transfers' },
    { text: 'Tax return coordination' },
    { text: 'Board financial education' },
    { text: 'On-site presence & inspections', muted: true },
    { text: 'Meeting attendance', muted: true },
  ];

  const foot = cfg.footHtml || 'All tiers include the Tidewater PM owner portal, the Stanley AI assistant, and our in-house client services team. <a href="#">See full feature comparison →</a>';

  return (
    <section className="tw-section tw-section-linen" id="tiers">
      <div className="tw-container">
        <div className="tw-section-head">
          <div className="tw-eyebrow">{eyebrow}</div>
          <h2 className="tw-section-title" dangerouslySetInnerHTML={{__html: titleHtml}}></h2>
          <p className="tw-section-lede">{lede}</p>
        </div>
        <div className="tw-tiers">

          <div className="tw-tier">
            <h3 className="tw-tier-name">Financial Only</h3>
            <p className="tw-tier-tagline">{financialTagline}</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">{financialBestFor}</div>
            </div>
            <ul className="tw-tier-list">
              {financialFeatures.map((f,i) => (
                <li key={i} className={f.muted?'muted':''}>{f.muted?<Dash/>:<Check/>}<span dangerouslySetInnerHTML={{__html:f.text}}/></li>
              ))}
            </ul>
            <a href="#contact" className="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a>
          </div>

          <div className="tw-tier tw-tier-featured">
            <div className="tw-tier-flag">Most Communities</div>
            <h3 className="tw-tier-name">Full Service</h3>
            <p className="tw-tier-tagline">{featuredTagline}</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">{featuredBestFor}</div>
            </div>
            <ul className="tw-tier-list">
              {featuredFeatures.map((f,i) => (
                <li key={i}><Check/><span dangerouslySetInnerHTML={{__html:f}}/></li>
              ))}
            </ul>
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-block tw-tier-cta" style={{background:'var(--tw-gold)',color:'var(--tw-dark)'}}>Request a proposal</a>
          </div>

          <div className="tw-tier">
            <h3 className="tw-tier-name">Flex Service</h3>
            <p className="tw-tier-tagline">{flexTagline}</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">{flexBestFor}</div>
            </div>
            <ul className="tw-tier-list">
              {flexFeatures.map((f,i) => (
                <li key={i} className={f.muted?'muted':''}>{f.muted?<Dash/>:<Check/>}<span dangerouslySetInnerHTML={{__html:f.text}}/></li>
              ))}
            </ul>
            <a href="#contact" className="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a>
          </div>
        </div>
        <p className="tw-tier-foot" dangerouslySetInnerHTML={{__html: foot}}></p>
      </div>
    </section>
  );
}
window.Tiers = Tiers;
