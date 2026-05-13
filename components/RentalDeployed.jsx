// Rental — Deployed/Out-of-state owner spotlight + military proof
function RentalDeployed() {
  return (
    <section className="tw-section tw-section-cream" id="deployed">
      <div className="tw-container">
        <div className="tw-deployed-grid">
          <div className="tw-deployed-copy">
            <div className="tw-eyebrow">Built for Distance</div>
            <h2 className="tw-section-title">When you can&rsquo;t be there, <em>we are.</em></h2>
            <p className="tw-section-lede">Maryland and DC have one of the highest concentrations of federal employees, military families, and second-home owners in the country. A meaningful share of our owners haven&rsquo;t set foot on their property in a year &mdash; and don&rsquo;t need to.</p>
            <ul className="tw-deployed-list">
              <li><strong>Inspections every 3&ndash;6 months</strong> &mdash; photo-documented in AppFolio. Reviewable from anywhere.</li>
              <li><strong>Bills paid from rental funds</strong> &mdash; mortgage, utilities, HOA dues. One reconciled statement.</li>
              <li><strong>Lease renewals handled in-portal</strong> &mdash; no scanning paper from a forward base.</li>
              <li><strong>Time-zone-friendly comms</strong> &mdash; email + portal, escalation by phone only when you ask for it.</li>
              <li><strong>Cross-service brokerage</strong> &mdash; ready to list when you decide to sell.</li>
            </ul>
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Get a deployment-ready setup →</a>
          </div>
          <div className="tw-deployed-quote">
            <div className="tw-deployed-quote-mark">&ldquo;</div>
            <p className="tw-deployed-quote-text">Tidewater has been managing my property in Odenton, MD, for nearly 5 years. They&rsquo;ve been excellent in supporting my needs, and leave me feeling confident that my property is in good hands while deployed.</p>
            <div className="tw-deployed-quote-attr">
              <div className="tw-deployed-quote-name">Ben C.</div>
              <div className="tw-deployed-quote-meta">Owner · Odenton, MD · Deployed during management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.RentalDeployed = RentalDeployed;
