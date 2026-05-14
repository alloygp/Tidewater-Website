// Resources — Seasonal content calendar (12-month cadence)
function ResourcesSeasonal() {
  const rows = [
    {
      when: 'Jan – Feb',  whenYear: 'Q1 Open',
      moment: 'HOA budget season wrap-up. Annual meetings. New board member onboarding.',
      pubs: [
        { aud: 'HOA', audCls: 'hoa', title: '"New year, new board" — what to expect from your management company' },
        { aud: 'Rental', audCls: 'rental', title: 'Year-end property performance review for landlords' },
      ]
    },
    {
      when: 'Mar – May', whenYear: 'Q2',
      moment: 'Spring inspections. Rental market heats up. Exterior maintenance comes back into view.',
      pubs: [
        { aud: 'Maint.', audCls: 'maint', title: 'Spring property inspection checklist (23-point walk)' },
        { aud: 'Rental', audCls: 'rental', title: 'Is your rental ready for peak leasing season?' },
        { aud: 'HOA', audCls: 'hoa', title: 'Annual meeting prep: agenda, quorum, recordkeeping' },
      ]
    },
    {
      when: 'Jun – Aug', whenYear: 'Q3 Peak',
      moment: 'Peak rental leasing. Military PCS season. Summer maintenance load.',
      pubs: [
        { aud: 'Rental', audCls: 'rental', title: 'Deploying? Here\u2019s why Tidewater is built for military property owners' },
        { aud: 'Maint.', audCls: 'maint', title: 'Summer HVAC and exterior prep for managed properties' },
        { aud: 'Realty', audCls: 'realty', title: 'Investment property buying season — submarket signal report' },
      ]
    },
    {
      when: 'Sep – Oct', whenYear: 'Q4 Plan',
      moment: 'HOA budget preparation begins. Fall maintenance prep.',
      pubs: [
        { aud: 'HOA', audCls: 'hoa', title: 'How to prepare your association\u2019s budget for next year' },
        { aud: 'Maint.', audCls: 'maint', title: 'Fall weatherization and pre-winter inspection cadence' },
      ]
    },
    {
      when: 'Nov – Dec', whenYear: 'Q4 Close',
      moment: 'Year-end financial reporting. Winter emergency preparedness.',
      pubs: [
        { aud: 'Rental', audCls: 'rental', title: 'Year-end landlord financial checklist' },
        { aud: 'HOA', audCls: 'hoa', title: 'Reserve fund planning — what to lock in before January' },
        { aud: 'Maint.', audCls: 'maint', title: 'Freeze preparedness and mitigation readiness brief' },
      ]
    },
  ];

  return (
    <section className="tw-rseason" id="insights">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">Editorial Calendar</div>
          <h2 className="tw-section-title">A year of resources, <em>timed to your year.</em></h2>
          <p className="tw-section-lede">What we publish month by month, mapped to the industry moments that actually drive board decisions and landlord questions.</p>
        </div>

        <div className="tw-rseason-table">
          <div className="tw-rseason-row head">
            <div>When</div>
            <div>Industry Moment</div>
            <div>What We&rsquo;re Publishing</div>
          </div>
          {rows.map(r => (
            <div className="tw-rseason-row" key={r.when}>
              <div className="tw-rseason-when">{r.when}<span>{r.whenYear}</span></div>
              <div className="tw-rseason-moment">{r.moment}</div>
              <div className="tw-rseason-content">
                {r.pubs.map((p,i) => (
                  <div className="tw-rseason-pub" key={i}>
                    <span className={`tw-rseason-pub-aud ${p.audCls}`}>{p.aud}</span>
                    <span className="tw-rseason-pub-title">{p.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ResourcesSeasonal = ResourcesSeasonal;
