// LeadershipIntro — short intro section before LeadershipFull on /leadership page
function LeadershipIntro() {
  return (
    <section className="tw-section tw-section-cream tw-leadintro" id="leadership-intro">
      <div className="tw-container">
        <div className="tw-leadintro-grid">
          <div className="tw-leadintro-copy">
            <div className="tw-eyebrow">Leadership</div>
            <h2 className="tw-section-title">The team you can <em>actually reach.</em></h2>
            <p className="tw-section-lede">In most management companies, leadership is a directory. At Tidewater, the people listed here are in the building — accessible to staff, to boards, and to the homeowners who depend on the work we do.</p>
          </div>
          <div className="tw-leadintro-stats">
            <div className="tw-leadintro-stat">
              <div className="tw-leadintro-stat-num">4</div>
              <div className="tw-leadintro-stat-label">PCAM holders<br/>on staff</div>
            </div>
            <div className="tw-leadintro-stat">
              <div className="tw-leadintro-stat-num">2</div>
              <div className="tw-leadintro-stat-label">CAI Chapter<br/>Presidents</div>
            </div>
            <div className="tw-leadintro-stat">
              <div className="tw-leadintro-stat-num">15+</div>
              <div className="tw-leadintro-stat-label">Years average<br/>director tenure</div>
            </div>
            <div className="tw-leadintro-stat">
              <div className="tw-leadintro-stat-num">100%</div>
              <div className="tw-leadintro-stat-label">CAI designations<br/>paid by company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.LeadershipIntro = LeadershipIntro;
