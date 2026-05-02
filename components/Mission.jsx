// HOA Homepage — Mission + Stats
function Mission() {
  return (
    <section className="tw-section tw-section-cream" id="about">
      <div className="tw-container tw-mission-grid">
        <div className="tw-mission-image">
          <img src="assets/hero-mission.jpg" alt="Family-owned community in front of their home"/>
          <div className="tw-mission-image-overlay">
            <p className="tw-mission-image-overlay-quote">&ldquo;Still family-owned. Still independent. Still here.&rdquo;</p>
            <div className="tw-mission-image-overlay-meta">Stanley &amp; Marc Greenberg</div>
          </div>
        </div>
        <div className="tw-mission-copy">
          <div className="tw-eyebrow">Who We Are</div>
          <h2 className="tw-section-title">More than management.<br/><em>Your trusted community resource.</em></h2>
          <p className="tw-section-lede" style={{marginBottom:16}}>Stanley Greenberg founded Tidewater in 1989. His son Marc &mdash; CMCA, AMS, PCAM &mdash; helped grow the company into a regional, full-service operation while keeping it family-owned. As regional competitors are acquired by national firms and private equity, we&rsquo;ve stayed independent on purpose.</p>
          <p className="tw-section-lede">The way that translates: open-door ownership, accessible managers, and the kind of decisions only people who answer to their own neighborhood make.</p>
          <div className="tw-stats">
            <div className="tw-stat"><div className="tw-stat-num">35+</div><div className="tw-stat-label">Years Independent</div></div>
            <div className="tw-stat"><div className="tw-stat-num">300+</div><div className="tw-stat-label">Communities</div></div>
            <div className="tw-stat"><div className="tw-stat-num">~75</div><div className="tw-stat-label">In-house Team</div></div>
            <div className="tw-stat"><div className="tw-stat-num">2</div><div className="tw-stat-label">Generations Family-Owned</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Mission = Mission;
