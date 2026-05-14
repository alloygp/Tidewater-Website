// Rental Property Management — Hero (landlord-focused, not board-focused)
function RentalHero() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.rentalHero) || {};
  const Shield = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
  const Chevron = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>;
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>;

  return (
    <section className="tw-hero">
      <div className="tw-hero-bg">
        <img src={cfg.image || 'assets/hero-mission.jpg'} alt="A Maryland rental property"/>
      </div>
      <div className="tw-hero-paper" aria-hidden="true"></div>

      <div className="tw-hero-grid">
        <div className="tw-hero-copy">
          <div className="tw-hero-eyebrow-row">
            <div className="tw-divider"></div>
            <div className="tw-eyebrow">For Maryland &amp; DC Landlords</div>
          </div>
          <h1 className="tw-hero-title">One flat fee. Everything included. <em>Down to the inspection.</em></h1>
          <p className="tw-hero-lede">Most rental management companies advertise a low monthly rate &mdash; then bill you for every property visit, every inspection, every coordination call. Tidewater doesn&rsquo;t. One transparent percentage. No add-ons. No surprises.</p>
          <div className="tw-hero-actions">
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Get a rental market analysis</a>
            <a href="#fee" className="tw-btn tw-btn-ghost">See what&rsquo;s included →</a>
          </div>
          <div className="tw-hero-trust tw-hero-trust-rental">
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">3&ndash;6 mo</span></div><div className="tw-hero-trust-label">Inspections</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">3&ndash;5 days</span></div><div className="tw-hero-trust-label">App turnaround</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">20 min</span></div><div className="tw-hero-trust-label">After-hours</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">35+ yrs</span></div><div className="tw-hero-trust-label">In MD rentals</div></div>
          </div>
        </div>

        <div className="tw-hero-side">
          <div className="tw-rh-card">
            <div className="tw-rh-card-head">
              <div className="tw-rh-card-eyebrow"><span className="tw-rh-card-dot"></span>What &ldquo;all-inclusive&rdquo; really means</div>
              <div className="tw-rh-card-badge">FLAT FEE</div>
            </div>
            <h3 className="tw-rh-card-title">A side-by-side from a real owner&rsquo;s statement</h3>
            <div className="tw-rh-compare-grid">
              <div className="tw-rh-compare-col tw-rh-compare-them">
                <div className="tw-rh-compare-head">Low-fee competitor</div>
                <ul className="tw-rh-compare-list">
                  <li><span className="tw-rh-line">Base mgmt fee</span><span className="tw-rh-amt">7%</span></li>
                  <li><span className="tw-rh-line">+ Property visits</span><span className="tw-rh-amt">$95 ea</span></li>
                  <li><span className="tw-rh-line">+ Maint. coordination</span><span className="tw-rh-amt">10%</span></li>
                  <li><span className="tw-rh-line">+ Annual inspection</span><span className="tw-rh-amt">$185</span></li>
                  <li><span className="tw-rh-line">+ Lease renewal</span><span className="tw-rh-amt">$295</span></li>
                </ul>
              </div>
              <div className="tw-rh-compare-col tw-rh-compare-us">
                <div className="tw-rh-compare-head">Tidewater</div>
                <ul className="tw-rh-compare-list">
                  <li><Check/><span>Base mgmt fee</span></li>
                  <li><Check/><span>Property visits</span></li>
                  <li><Check/><span>Maint. coordination</span></li>
                  <li><Check/><span>3&ndash;6 mo inspections</span></li>
                  <li><Check/><span>Lease renewals</span></li>
                </ul>
              </div>
            </div>
            <div className="tw-rh-card-foot">
              <Shield/>
              <span><strong>One flat percentage.</strong> That&rsquo;s the whole bill.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-hero-scroll">
        <div className="tw-hero-scroll-line"></div>
        Why landlords switch <Chevron/>
      </div>
    </section>
  );
}
window.RentalHero = RentalHero;
