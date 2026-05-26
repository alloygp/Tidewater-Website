const PORTAL_URL = 'https://tidewaterproperty.apscareerportal.com/jobs?locale=en-US';

const categories = [
  { label: 'HOA & Condo Management', icon: '🏘', hint: 'CAM, Portfolio Manager, High-Rise Specialist' },
  { label: 'Finance & Collections', icon: '📊', hint: 'Staff Accountant, Collections Specialist' },
  { label: 'Client Services', icon: '💬', hint: 'Client Services Representative, Admin Support' },
  { label: 'Rental Management', icon: '🔑', hint: 'Leasing Coordinator, Property Manager' },
  { label: 'Realty', icon: '🏡', hint: 'Real Estate Agent — Investment Properties' },
  { label: 'Maintenance & Trades', icon: '🔧', hint: 'Maintenance Technician, Regional roles' },
];

export default function JobsList() {
  return (
    <section className="tw-section tw-section-linen tw-jobs" id="openings">
      <div className="tw-container">
        <div className="tw-jobs-portal-layout">
          <div className="tw-jobs-portal-head">
            <div className="tw-eyebrow">Open Roles</div>
            <h2 className="tw-section-title">Join a team that&rsquo;s been <em>doing this since 1989.</em></h2>
            <p className="tw-section-lede">We hire HOA managers, accountants, client services staff, and trades professionals across the Mid-Atlantic. All current openings are listed on our careers portal — updated in real time.</p>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-btn tw-btn-dark tw-btn-lg"
            >
              View open positions &rarr;
            </a>
          </div>

          <ul className="tw-jobs-cats">
            {categories.map((c, i) => (
              <li key={i} className="tw-jobs-cat">
                <span className="tw-jobs-cat-icon" aria-hidden="true">{c.icon}</span>
                <div>
                  <div className="tw-jobs-cat-label">{c.label}</div>
                  <div className="tw-jobs-cat-hint">{c.hint}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="tw-jobs-foot">
          <p>Don&rsquo;t see a fit? We&rsquo;re always interested in hearing from experienced HOA managers, accountants, and trades professionals across the Mid-Atlantic.</p>
          <a href="mailto:careers@tidewaterproperty.com" className="tw-btn tw-btn-outline">Send us your résumé</a>
        </div>
      </div>
    </section>
  );
}
