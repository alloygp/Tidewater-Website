// Values — five core values, "the way we work — everyday"
function Values() {
  const values = [
    {
      n: '01',
      name: 'Integrity & Accountability',
      claim: '\u201CWe practice integrity and accountability in all that we do.\u201D',
      proof: 'When we make a mistake, we own it \u2014 including covering association costs out of pocket when we\u2019re not contractually obligated to. Ask any board that\u2019s been with us a decade.'
    },
    {
      n: '02',
      name: 'Innovation & Adaptability',
      claim: '\u201CWe innovate and adapt to client needs, delivering reliable and industry-leading service.\u201D',
      proof: 'CINC Systems for HOA, AppFolio for rental, Microsoft Copilot at every desk, a proprietary in-house vendor compliance app. We invest in tooling so the work shows up faster.'
    },
    {
      n: '03',
      name: 'Support, Education & Clarity',
      claim: '\u201CWe are a resource that provides support, education, and clear expectations.\u201D',
      proof: 'Board education materials, governance guidance, and a deliberately calm tone. Volunteer board members didn\u2019t sign up to read law journals \u2014 our job is to translate.'
    },
    {
      n: '04',
      name: 'Communication Excellence',
      claim: '\u201CWe emphasize honest, respectful, and timely communication.\u201D',
      proof: 'Next-business-day response. 20-minute callback after hours. Monthly management reports on the 1st. Every public review answered same or next day. Standards, not slogans.'
    },
    {
      n: '05',
      name: 'Trust, Teamwork & Growth',
      claim: '\u201CWe create a culture of trust, teamwork, and growth.\u201D',
      proof: 'Tidewater pays for every CAI designation upfront \u2014 for managers, administrators, and accountants. Monthly BBQs. Open-door ownership. Long tenures. The culture inside is the culture clients meet.'
    },
  ];
  return (
    <section className="tw-section tw-section-cream tw-values" id="values">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Our Core Values</div>
          <h2 className="tw-section-title">The way we work &mdash; <em>everyday.</em></h2>
          <p className="tw-section-lede">Five values, stated plainly, with the proof behind each one. We use them on Mondays, in budget meetings, and at 11pm on a Sunday when a pipe lets go.</p>
        </div>

        <ol className="tw-values-list">
          {values.map(v => (
            <li key={v.n} className="tw-values-item">
              <div className="tw-values-num">{v.n}</div>
              <div className="tw-values-body">
                <h3 className="tw-values-name">{v.name}</h3>
                <p className="tw-values-claim">{v.claim}</p>
                <p className="tw-values-proof">{v.proof}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Values = Values;
