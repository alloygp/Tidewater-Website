// Timeline — vertical chronology of company milestones
function Timeline() {
  const events = [
    { year: '1989', title: 'Tidewater is founded', body: 'Stanley Greenberg starts the company in Owings Mills, Maryland — initially serving commercial condominium associations and developer-phase communities.', tag: 'Founded' },
    { year: 'Late 1990s', title: 'Marc Greenberg joins', body: 'Stanley\u2019s son joins the firm, expanding focus into homeowner-controlled HOA management. The first multi-county portfolio takes shape.', tag: 'Generation II' },
    { year: '2000s', title: 'Regional expansion', body: 'Operations extend across Maryland, into DC and Northern Virginia, then to the Eastern Shore and Delaware. The company grows past 100 communities under management.' },
    { year: '2012', title: 'Joe Jordan elected CAI Chesapeake Chapter President', body: 'Tidewater\u2019s Director of Quality Assurance leads the regional CAI chapter — beginning a sustained pattern of Tidewater leaders shaping the standards of the profession.' },
    { year: '2010s', title: 'AAMC® Accreditation earned', body: 'Tidewater earns CAI\u2019s highest company-level credential — a designation most regional management firms do not hold. The QA department is formalized.', tag: 'Highest credential' },
    { year: '2010s\u20132020s', title: 'Gail Windisch leads the Chesapeake Chapter', body: 'Senior Director of Operations Gail Windisch serves as Chapter President, Vice President, and Secretary &mdash; making Tidewater one of the most embedded firms in regional CAI leadership.' },
    { year: '2020s', title: 'Rental + Realty + Maintenance unify', body: 'Tidewater Property Maintenance and Tidewater Realty Group come fully online under the parent brand. Investment owners can buy, manage, maintain, and sell under one roof.' },
    { year: 'Today', title: '~300 communities. ~75 in-house staff. Independent.', body: 'Manage roughly 300 associations and 30,000+ homes across six states. AAMC®, A+ BBB. Two CAI Chapter Presidents on staff. Still owned by Stanley and Marc.', tag: 'Still here' },
  ];
  return (
    <section className="tw-section tw-section-linen tw-timeline-section" id="timeline">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">35+ years, in order</div>
          <h2 className="tw-section-title">A timeline you can verify. <em>Most competitors can&rsquo;t.</em></h2>
          <p className="tw-section-lede">Independent operation isn&rsquo;t a bullet point — it&rsquo;s 35+ years of continuous decisions to stay that way.</p>
        </div>

        <ol className="tw-timeline">
          {events.map((e, i) => (
            <li key={i} className="tw-timeline-item">
              <div className="tw-timeline-rail">
                <span className="tw-timeline-dot"></span>
              </div>
              <div className="tw-timeline-card">
                <div className="tw-timeline-meta">
                  <span className="tw-timeline-year">{e.year}</span>
                  {e.tag && <span className="tw-timeline-tag">{e.tag}</span>}
                </div>
                <h3 className="tw-timeline-title">{e.title}</h3>
                <p className="tw-timeline-body" dangerouslySetInnerHTML={{__html: e.body}}></p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
window.Timeline = Timeline;
