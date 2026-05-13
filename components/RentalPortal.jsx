// Rental — AppFolio portal mock (different from CINC portal — landlord/tenant focused)
function RentalPortal() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  return (
    <section className="tw-section tw-section-dark" id="portal" style={{padding:'112px 0'}}>
      <div className="tw-container">
        <div className="tw-portal-grid">
          <div className="tw-portal-copy">
            <div className="tw-eyebrow tw-eyebrow-gold">Built On AppFolio</div>
            <h2 className="tw-section-title tw-section-title-light">An owner portal that <em className="gold">shows you the property &mdash; not just the deposit.</em></h2>
            <p className="tw-section-lede" style={{color:'#cfcdc6'}}>Real-time rent collection, photo-documented inspections, maintenance history, and bill-pay activity. Your tenants get the same caliber of self-service &mdash; happier tenants stay longer, and that&rsquo;s your bottom line.</p>
            <ul className="tw-portal-features">
              <li><Check/>Live rent &amp; deposit activity</li>
              <li><Check/>3&ndash;6 month inspection photos in your file</li>
              <li><Check/>Owner-paid bills (mortgage, utilities, HOA) on one statement</li>
              <li><Check/>Tenant maintenance requests &amp; resolution log</li>
              <li><Check/>1099 &amp; year-end reporting in one click</li>
            </ul>
            <a href="#" className="tw-btn tw-btn-outline-cream tw-btn-lg">Tour the owner portal →</a>
          </div>
          <div className="tw-portal-mock">
            <div className="tw-portal-mock-bar">
              <div className="tw-portal-mock-bar-dot" style={{background:'#FF6B5C'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#FFBD3D'}}></div>
              <div className="tw-portal-mock-bar-dot" style={{background:'#1FC73E'}}></div>
              <div className="tw-portal-mock-bar-url">tidewater.appfolio.com / owner</div>
            </div>
            <div className="tw-portal-mock-body">
              <div className="tw-portal-mock-side">
                <div className="tw-portal-mock-side-logo">tidewater PM</div>
                <div className="tw-portal-mock-nav">
                  <div className="tw-portal-mock-nav-item active"><div className="tw-portal-mock-nav-item-dot"></div>Dashboard</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Rent &amp; Income</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Bills Paid</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Inspections</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Maintenance</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Documents</div>
                  <div className="tw-portal-mock-nav-item"><div className="tw-portal-mock-nav-item-dot"></div>Tax &amp; 1099</div>
                </div>
              </div>
              <div className="tw-portal-mock-main">
                <div className="tw-portal-mock-greeting">Welcome back, Major Carter.</div>
                <div className="tw-portal-mock-sub">2 properties · Odenton + Pasadena, MD · Deployed: Ramstein</div>
                <div className="tw-portal-mock-cards">
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">May Rent</div>
                    <div className="tw-portal-mock-card-num">$4,250</div>
                    <div className="tw-portal-mock-card-trend">▲ collected on the 1st</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">YTD Net</div>
                    <div className="tw-portal-mock-card-num teal">$18,940</div>
                    <div className="tw-portal-mock-card-trend">+6% vs last yr</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Last Inspection</div>
                    <div className="tw-portal-mock-card-num">Apr 12</div>
                    <div className="tw-portal-mock-card-trend">42 photos on file</div>
                  </div>
                  <div className="tw-portal-mock-card">
                    <div className="tw-portal-mock-card-label">Open Work Orders</div>
                    <div className="tw-portal-mock-card-num">1</div>
                    <div className="tw-portal-mock-card-trend" style={{color:'var(--tw-clay)'}}>HVAC follow-up</div>
                  </div>
                </div>
                <div className="tw-portal-mock-stanley">
                  <div className="tw-portal-mock-stanley-avatar">S</div>
                  <div>
                    <div className="tw-portal-mock-stanley-name">Stanley · AI assistant</div>
                    <div className="tw-portal-mock-stanley-text">Your Pasadena lease renews in 47 days. The tenant is interested in a 2-yr renewal at +3% &mdash; review terms?</div>
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
window.RentalPortal = RentalPortal;
