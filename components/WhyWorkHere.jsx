// WhyWorkHere — reasons + benefits
function WhyWorkHere() {
  const reasons = [
    {
      n: '01',
      title: 'Credentials, paid upfront',
      body: 'CMCA, AMS, PCAM, SHRM, CPA, real estate licensing &mdash; we cover the cost of every CAI designation for managers, administrators, and accountants. Career growth without a tuition bill.'
    },
    {
      n: '02',
      title: 'Open-door ownership',
      body: 'Stanley and Marc are in the building. Department lunches, monthly BBQs, daily motivation sessions. Family ownership isn\u2019t in the brochure \u2014 it\u2019s the calendar invite.'
    },
    {
      n: '03',
      title: 'In-house everything',
      body: 'Accounting, HR, QA, marketing, vendor compliance, maintenance, brokerage, technology. Nothing outsourced &mdash; which means cross-team problems get solved across the hallway.'
    },
    {
      n: '04',
      title: 'Built on real tooling',
      body: 'CINC Systems, AppFolio, Microsoft Copilot at every desk, a proprietary in-house vendor compliance app, SharePoint workflow library. We invest in the tools so the work shows up faster.'
    },
    {
      n: '05',
      title: 'Career runway',
      body: 'Many of our directors started as community managers. The Senior Director of Operations has been here 20+ years. Tenure isn\u2019t the exception &mdash; it\u2019s the pattern.'
    },
    {
      n: '06',
      title: 'A book of business worth being part of',
      body: '~300 communities. 30,000+ homes. Six states. The largest privately-owned firm in the region &mdash; and one that&rsquo;s been chosen, not acquired.'
    },
  ];

  const benefits = [
    'Medical, dental, vision',
    '401(k) plan',
    'Paid CAI designations (CMCA, AMS, PCAM)',
    'Paid time off & holidays',
    'Quarterly reviews & growth path',
    'Monthly team BBQs',
    'Annual events (golf, bowling)',
    'Daily motivation sessions',
    'Microsoft Copilot license',
    'Hybrid roles available by team',
  ];

  return (
    <section className="tw-section tw-section-cream tw-why" id="why">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Why work here</div>
          <h2 className="tw-section-title">A real career, not <em>a regional account.</em></h2>
          <p className="tw-section-lede">If you&rsquo;ve worked in property management, you know the difference between firms that invest in their people and firms that don&rsquo;t. Here&rsquo;s what investment looks like at Tidewater.</p>
        </div>

        <div className="tw-why-grid">
          {reasons.map(r => (
            <article key={r.n} className="tw-why-card">
              <div className="tw-why-num">{r.n}</div>
              <h3 className="tw-why-title">{r.title}</h3>
              <p className="tw-why-body">{r.body}</p>
            </article>
          ))}
        </div>

        <div className="tw-benefits">
          <div className="tw-benefits-head">
            <div className="tw-eyebrow">Benefits at a glance</div>
            <h3 className="tw-benefits-title">What we offer the whole team.</h3>
          </div>
          <ul className="tw-benefits-list">
            {benefits.map((b,i) => (
              <li key={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
window.WhyWorkHere = WhyWorkHere;
