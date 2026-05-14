// Realty — Hero with investment-listing card on the side
function RealtyHero() {
  const ArrowRight = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
  return (
    <section className="tw-rh2">
      <div className="tw-rh2-grid">
        <div>
          <div className="tw-rh2-eye">
            <span className="tw-rh2-eye-dot"></span>
            Tidewater Realty Group, LLC
          </div>
          <h1 className="tw-rh2-title">Your guide in <em>buying and selling.</em></h1>
          <p className="tw-rh2-lede">The only family-owned brokerage in Maryland that has <strong>managed your rental, maintained your rental, and can now sell your rental</strong> &mdash; with knowledge of its full management history. Built for investment-minded buyers and sellers.</p>
          <div className="tw-rh2-actions">
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Request a market analysis</a>
            <a href="#lifecycle" className="tw-btn tw-btn-ghost">See the lifecycle advantage <ArrowRight/></a>
          </div>
          <div className="tw-rh2-meta">
            <div className="tw-rh2-meta-cell"><span className="num">35+</span><span className="lab">Years in MD market</span></div>
            <div className="tw-rh2-meta-cell"><span className="num">MD&nbsp;+&nbsp;DC</span><span className="lab">License footprint</span></div>
            <div className="tw-rh2-meta-cell"><span className="num">In-house</span><span className="lab">Mgmt + maintenance</span></div>
            <div className="tw-rh2-meta-cell"><span className="num">Broker-led</span><span className="lab">Cody Bishop, principal</span></div>
          </div>
        </div>

        <div>
          <div className="tw-rh2-card">
            <div className="tw-rh2-card-img">
              <img src="assets/highrise.jpg" alt="Investment property under consideration" onError={(e)=>{e.target.style.display='none';}}/>
              <span className="tw-rh2-card-badge matched">Investment-matched · Cap 7.4%</span>
            </div>
            <div className="tw-rh2-card-body">
              <div className="tw-rh2-card-price">$385,000</div>
              <div className="tw-rh2-card-addr">3-bed townhome &middot; Odenton, MD &middot; Near Fort Meade / NSA</div>
              <div className="tw-rh2-card-stats">
                <span><strong>3</strong> bed</span>
                <span><strong>2.5</strong> bath</span>
                <span><strong>1,620</strong> sqft</span>
                <span><strong>$2,375</strong> est. rent/mo</span>
              </div>
              <div className="tw-rh2-card-pitch">
                <div className="tw-rh2-card-pitch-eye">Why our team flagged it</div>
                Heavy military-tenant corridor &mdash; <strong>9-month average tenancy</strong> in our managed portfolio one mile out. Lead-paint cert current; Anne Arundel rental license transferable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.RealtyHero = RealtyHero;
