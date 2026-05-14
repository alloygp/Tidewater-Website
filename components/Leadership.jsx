// HOA Homepage — Leadership credentials + CAI banner
function Leadership() {
  const leaders = [
    { initials: 'MG', name: 'Marc Greenberg', creds: 'CMCA · AMS · PCAM', title: 'President — holds all three primary CAI management designations including the industry&rsquo;s highest individual credential.' },
    { initials: 'GW', name: 'Gail Windisch', creds: 'CMCA · AMS · PCAM', title: 'Senior Director of Operations · Former CAI Chesapeake Chapter President, Secretary, and VP. 20+ years with Tidewater.' },
    { initials: 'JJ', name: 'Joe Jordan', creds: 'CMCA · AMS · PCAM', title: 'Director of Quality Assurance · Former CAI Chesapeake Chapter President (2012). Leads our compliance oversight team.' },
    { initials: 'JO', name: 'Jessica Ogle', creds: 'CMCA', title: 'Director of Association Financial Management · 15+ years at Tidewater. Backed by an MBA, CPA Controller.' },
  ];
  return (
    <section className="tw-section tw-section-cream" id="leadership">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Leadership You Can Reach</div>
          <h2 className="tw-section-title">Credentials uncommon at our size. <em>Tenure even rarer.</em></h2>
          <p className="tw-section-lede">Tidewater pays for every CAI designation upfront &mdash; for managers, administrative staff, and accountants. The result is a leadership team whose qualifications are visible, verifiable, and rooted in regional industry leadership.</p>
        </div>
        <div className="tw-lead-grid">
          {leaders.map(l => (
            <article key={l.name} className="tw-lead-card">
              <div className="tw-lead-avatar">{l.initials}</div>
              <h3 className="tw-lead-name">{l.name}</h3>
              <div className="tw-lead-creds">{l.creds}</div>
              <p className="tw-lead-title" dangerouslySetInnerHTML={{__html:l.title}}></p>
            </article>
          ))}
        </div>
        <div className="tw-cai-banner">
          <div className="tw-cai-banner-icon">CAI<br/>LED</div>
          <div className="tw-cai-banner-text">
            <h4>Two Tidewater leaders have served as CAI Chesapeake Chapter President.</h4>
            <p>No management company in the Maryland market is more deeply embedded in the industry&rsquo;s professional leadership structure. The QA Director who oversees compliance for your community is also the person who has helped shape the standards of the profession.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Leadership = Leadership;
