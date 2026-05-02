// HOA Homepage — Three Service Tiers
function Tiers() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>;
  const Dash = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/></svg>;

  return (
    <section className="tw-section tw-section-linen" id="tiers">
      <div className="tw-container">
        <div className="tw-section-head">
          <div className="tw-eyebrow">Three Tiers. One Standard of Care.</div>
          <h2 className="tw-section-title">A fit for <em>every association.</em></h2>
          <p className="tw-section-lede">Most management companies offer one model. We offer three — so the size of your community, your budget, and your board&rsquo;s appetite for involvement all stay yours to decide.</p>
        </div>
        <div className="tw-tiers">

          <div className="tw-tier">
            <h3 className="tw-tier-name">Financial Only</h3>
            <p className="tw-tier-tagline">For self-managed communities needing accounting depth.</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">Self-managed boards</div>
            </div>
            <ul className="tw-tier-list">
              <li><Check/>Full AR / AP processing</li>
              <li><Check/>Bank reconciliations &amp; account management</li>
              <li><Check/>Budget assistance &amp; reserve transfers</li>
              <li><Check/>Tax return coordination</li>
              <li><Check/>Board financial education</li>
              <li className="muted"><Dash/>On-site presence &amp; inspections</li>
              <li className="muted"><Dash/>Meeting attendance</li>
            </ul>
            <a href="#contact" className="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a>
          </div>

          <div className="tw-tier tw-tier-featured">
            <div className="tw-tier-flag">Most Communities</div>
            <h3 className="tw-tier-name">Full Service</h3>
            <p className="tw-tier-tagline">Comprehensive management — every operational detail handled.</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">HOAs &amp; condo associations</div>
            </div>
            <ul className="tw-tier-list">
              <li><Check/>Dedicated community manager &amp; on-site presence</li>
              <li><Check/>Meeting support, attendance &amp; recording</li>
              <li><Check/>Annual management plan via CINC Systems</li>
              <li><Check/>Full financial controls &amp; collections</li>
              <li><Check/>Vendor management &amp; in-house compliance</li>
              <li><Check/>24/7 emergency line &mdash; real managers</li>
              <li><Check/>QA oversight &amp; insurance tracking</li>
            </ul>
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-block tw-tier-cta" style={{background:'var(--tw-gold)',color:'var(--tw-dark)'}}>Request a proposal</a>
          </div>

          <div className="tw-tier">
            <h3 className="tw-tier-name">Flex Service</h3>
            <p className="tw-tier-tagline">Lower base fee, à-la-carte involvement when you need it.</p>
            <div className="tw-tier-price">
              <div className="tw-tier-price-label">Best for</div>
              <div className="tw-tier-price-value">Established, mature boards</div>
            </div>
            <ul className="tw-tier-list">
              <li><Check/>Reduced base management fee</li>
              <li><Check/>Set hourly rate for meetings</li>
              <li><Check/>Inspections available on-demand</li>
              <li><Check/>Full financial &amp; collections support</li>
              <li><Check/>Owner portal &amp; CINC management plan</li>
              <li><Check/>24/7 emergency coverage</li>
              <li className="muted"><Dash/>Standing on-site presence</li>
            </ul>
            <a href="#contact" className="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a>
          </div>
        </div>
        <p className="tw-tier-foot">All tiers include the Tidewater PM owner portal, the Stanley AI assistant, and our in-house client services team. <a href="#">See full feature comparison →</a></p>
      </div>
    </section>
  );
}
window.Tiers = Tiers;
