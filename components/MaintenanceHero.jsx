// Maintenance — Hero (dark, with live work-order card)
function MaintenanceHero() {
  return (
    <section className="tw-mh">
      <div className="tw-mh-grid">
        <div className="tw-mh-copy">
          <div className="tw-mh-eyebrow">
            <span className="tw-mh-eyebrow-dot"></span>
            Tidewater Property Maintenance
          </div>
          <h1 className="tw-mh-title">Reliable. Professional. <em>Detail-driven.</em></h1>
          <p className="tw-mh-lede">In-house technicians who already know your property, your tenants, and Maryland&rsquo;s rental compliance rules &mdash; because we manage thousands of properties across the state every day.</p>
          <div className="tw-mh-actions">
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Request service</a>
            <a href="#services" className="tw-btn tw-btn-ghost">See what we handle →</a>
          </div>
          <div className="tw-mh-meta">
            <div className="tw-mh-meta-cell"><span className="num">24/7</span><span className="lab">Emergency line</span></div>
            <div className="tw-mh-meta-cell"><span className="num">MD&nbsp;+&nbsp;DE</span><span className="lab">Service area</span></div>
            <div className="tw-mh-meta-cell"><span className="num">In-house</span><span className="lab">Vendor compliance</span></div>
            <div className="tw-mh-meta-cell"><span className="num">Discount</span><span className="lab">Tidewater rentals</span></div>
          </div>
        </div>

        {/* Side: live work-order card */}
        <div className="tw-mh-side">
          <div className="tw-mh-card">
            <div className="tw-mh-card-head">
              <span className="id">WO #4421-MD &middot; Owings Mills</span>
              <span className="status">In progress</span>
            </div>
            <div className="tw-mh-card-body">
              <div className="tw-mh-card-pills">
                <span className="tw-mh-card-pill acc">Water mitigation</span>
                <span className="tw-mh-card-pill">Single-family rental</span>
                <span className="tw-mh-card-pill">Tidewater-managed</span>
              </div>
              <h3 className="tw-mh-card-title">Pipe burst &mdash; basement standing water reported 6:42 AM</h3>
              <div className="tw-mh-timeline">
                <div className="tw-mh-tl-row">
                  <span className="tw-mh-tl-time">6:42 AM</span>
                  <div className="tw-mh-tl-dot"></div>
                  <div className="tw-mh-tl-body"><strong>Tenant call routed via AppFolio triage</strong><span>Auto-categorized as emergency. On-call manager paged.</span></div>
                </div>
                <div className="tw-mh-tl-row">
                  <span className="tw-mh-tl-time">7:01 AM</span>
                  <div className="tw-mh-tl-dot"></div>
                  <div className="tw-mh-tl-body"><strong>Callback &amp; dispatch confirmed</strong><span>19-minute callback &mdash; under the 20-min standard.</span></div>
                </div>
                <div className="tw-mh-tl-row">
                  <span className="tw-mh-tl-time">8:14 AM</span>
                  <div className="tw-mh-tl-dot"></div>
                  <div className="tw-mh-tl-body"><strong>Tech on-site, water shut</strong><span>Two mitigation fans staged. Owner notified with photos.</span></div>
                </div>
                <div className="tw-mh-tl-row muted">
                  <span className="tw-mh-tl-time">Today</span>
                  <div className="tw-mh-tl-dot"></div>
                  <div className="tw-mh-tl-body"><strong>Insurance documentation prepared</strong><span>Claim packet routed to owner&rsquo;s adjuster.</span></div>
                </div>
              </div>
            </div>
            <div className="tw-mh-card-foot">
              <span>Tech: <strong>J. Ramirez</strong> &middot; Vendor compliance current</span>
              <span style={{color:'var(--tw-sage)',fontWeight:700,fontFamily:'var(--tw-font-mono)',fontSize:12,letterSpacing:'0.08em'}}>LIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.MaintenanceHero = MaintenanceHero;
