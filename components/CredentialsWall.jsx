// CredentialsWall — visible, verifiable industry credentials
function CredentialsWall() {
  const items = [
    {
      cls: 'aamc',
      seal: 'AAMC®',
      sealSub: 'Accredited Mgmt Co.',
      title: 'AAMC® Accreditation',
      issuer: 'Community Associations Institute',
      body: 'CAI\u2019s highest company-level credential. Re-audited on a recurring basis against operational, financial, and governance standards. Most regional management companies do not hold it.'
    },
    {
      cls: 'bbb',
      seal: 'A+',
      sealSub: 'BBB Rating',
      title: 'A+ BBB Rating',
      issuer: 'Better Business Bureau',
      body: 'Highest rating issued by the BBB. Reflects 35+ years of accredited operation and continuous response to public concerns.'
    },
    {
      cls: 'cai',
      seal: 'CAI',
      sealSub: 'Chapter Leadership',
      title: 'CAI Chesapeake Chapter',
      issuer: 'Two Tidewater leaders served as Chapter President',
      body: 'Joe Jordan (2012, current Director of QA) and Gail Windisch (multiple terms as President, Vice President, and Secretary). The leaders running our compliance department helped write the regional standards.'
    },
    {
      cls: 'pcam',
      seal: 'PCAM',
      sealSub: 'Top individual cred.',
      title: 'PCAM Holders on Staff',
      issuer: 'CAI Professional Community Association Manager',
      body: 'The President (Marc Greenberg), Senior Director of Operations (Gail Windisch), Director of QA (Joe Jordan), and Delmarva Regional Director (Don Gentry) all hold the PCAM.'
    },
  ];

  return (
    <section className="tw-section tw-section-mist tw-creds" id="credentials">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Credentials &amp; Accreditation</div>
          <h2 className="tw-section-title">Earned, audited, <em>and verifiable.</em></h2>
          <p className="tw-section-lede">Most management companies make claims. We hold the credentials that back them &mdash; some at the company level, some at the individual level, all issued by third parties.</p>
        </div>

        <div className="tw-creds-grid">
          {items.map((c,i) => (
            <article key={i} className={`tw-cred-card tw-cred-${c.cls}`}>
              <div className="tw-cred-seal">
                <div className="tw-cred-seal-mark">{c.seal}</div>
                <div className="tw-cred-seal-sub">{c.sealSub}</div>
              </div>
              <div className="tw-cred-body">
                <h3 className="tw-cred-title">{c.title}</h3>
                <div className="tw-cred-issuer">{c.issuer}</div>
                <p className="tw-cred-text">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="tw-creds-foot">
          <div className="tw-creds-foot-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </div>
          <div className="tw-creds-foot-text">
            <strong>Tidewater pays every CAI designation cost upfront.</strong>
            <span>For managers, administrative staff, and accountants. Most firms make staff foot the bill &mdash; we treat credentials as company infrastructure.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.CredentialsWall = CredentialsWall;
