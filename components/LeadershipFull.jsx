// LeadershipFull — comprehensive leadership directory for /about/leadership
function LeadershipFull() {
  const groups = [
    {
      group: 'Ownership',
      blurb: 'Two generations. Same building. Open door.',
      people: [
        { initials: 'SG', name: 'Stanley Greenberg', creds: 'CEO & Founder', tenure: 'Founded 1989', body: 'Founded Tidewater in 1989 through connections built during his career with the City of Baltimore. Started with commercial condos and developer clients; has overseen the firm\u2019s growth into a regional, full-service operation across six states.' },
        { initials: 'MG', name: 'Marc Greenberg', creds: 'CMCA · AMS · PCAM', tenure: 'President', body: 'Stanley\u2019s son. Holds all three primary CAI management designations \u2014 including the PCAM, the industry\u2019s highest individual credential. Brought the company\u2019s focus to existing-community HOA management, accelerating growth.' },
      ]
    },
    {
      group: 'Operations & Quality',
      blurb: 'The team that keeps standards visible across the portfolio.',
      people: [
        { initials: 'GW', name: 'Gail Windisch', creds: 'CMCA · AMS · PCAM', tenure: 'Senior Director of Operations · 20+ yrs', body: 'Oversees marketing, business development, and general office operations across all locations. Has served on the CAI Chesapeake Chapter as President, Vice President, and Secretary \u2014 among the highest sustained levels of local CAI involvement in the region.' },
        { initials: 'JJ', name: 'Joe Jordan', creds: 'CMCA · AMS · PCAM', tenure: 'Director of Quality Assurance', body: 'Leads the QA and Compliance team. Former CAI Chesapeake Chapter President (2012). Background includes Senior Project Manager experience at a leading engineering firm \u2014 a structural mind for a structural function.' },
        { initials: 'SS', name: 'Stacey Schaffer', creds: 'SHRM-CP', tenure: 'Director of Human Resources', body: 'SHRM-certified HR professional. Leads company-wide HR standards, expectations, and staff development. Formal HR leadership at a 75-person firm is uncommon and intentional.' },
      ]
    },
    {
      group: 'Regional Direction',
      blurb: 'The people boards actually meet.',
      people: [
        { initials: 'KC', name: 'Kate Cornell', creds: '15+ years industry experience', tenure: 'Baltimore & Washington DC Metro Regional Director', body: 'Oversees direction and professional development of the Community Association Management team in the Owings Mills and Silver Spring offices. Co-leads the developer management program.' },
        { initials: 'DG', name: 'Don Gentry', creds: 'CMCA · AMS · PCAM', tenure: 'Delmarva Regional Director', body: '20+ years in customer service and real estate. Prior background as a hotel General Manager, building engineer, and government contract specialist. Oversees the Eastern Shore, Ocean City, and Delaware portfolio.' },
        { initials: 'CB', name: 'Cody Bishop', creds: 'Licensed Broker', tenure: 'Director of Rental Mgmt · Realty', body: 'Oversees operations and growth of both the rental management and Realty divisions. Primary point of contact for new rental management inquiries; handles investment property sales for rental clients exiting the market.' },
      ]
    },
    {
      group: 'Finance, Collections & Growth',
      blurb: 'The functions most management companies outsource. We don\u2019t.',
      people: [
        { initials: 'RB', name: 'Rick Bowling', creds: 'MBA · CPA', tenure: 'Controller', body: 'Focuses on company finance administration, streamlining accounting processes and procedures. MBA and CPA credentials bring a level of financial rigor uncommon for a firm of this size.' },
        { initials: 'JO', name: 'Jessica Ogle', creds: 'CMCA', tenure: 'Director of Association Financial Mgmt · 15+ yrs', body: 'Oversees the full association financial management team. Her tenure means the financial function is led by someone who has processed virtually every scenario a community association can face financially.' },
        { initials: 'MM', name: 'Matthew Merckel', creds: 'CMCA · AMS', tenure: 'Director of Business Development', body: 'Oversees sales and marketing for Tidewater Property Management. Has led company growth over the past five years and has earned Tidewater\u2019s service and business awards on multiple occasions.' },
        { initials: 'RS', name: 'Reesa Szikman', creds: 'Director of Collections', tenure: 'Collections', body: 'Oversees Tidewater\u2019s collections department \u2014 past-due account management, coordination with collections attorneys, and management of front-foot benefit company relationships.' },
      ]
    },
  ];

  return (
    <section className="tw-section tw-section-cream tw-leadfull">
      <div className="tw-container">
        {groups.map((g, gi) => (
          <div key={gi} className="tw-leadfull-group">
            <div className="tw-leadfull-grouphead">
              <div className="tw-leadfull-grouplabel">{`No. 0${gi+1}`}</div>
              <div>
                <h2 className="tw-leadfull-grouptitle">{g.group}</h2>
                <p className="tw-leadfull-groupblurb">{g.blurb}</p>
              </div>
            </div>
            <div className="tw-leadfull-grid">
              {g.people.map(p => (
                <article key={p.name} className="tw-leadfull-card">
                  <div className="tw-leadfull-portrait">
                    <span className="tw-leadfull-initials">{p.initials}</span>
                  </div>
                  <div className="tw-leadfull-meta">
                    <h3 className="tw-leadfull-name">{p.name}</h3>
                    <div className="tw-leadfull-creds">{p.creds}</div>
                    <div className="tw-leadfull-title">{p.tenure}</div>
                    <p className="tw-leadfull-body">{p.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.LeadershipFull = LeadershipFull;
