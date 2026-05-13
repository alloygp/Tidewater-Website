// Rental — "What's in the flat fee" — replaces 3-tier model with a "single product" feature wall
function RentalFee() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>;

  const sections = [
    {
      title: 'Leasing &amp; Tenant Placement',
      lede: 'Whether you sign on for full management or leasing-only, the work is the same.',
      items: [
        'Property advertising with video tours',
        '3D Matterport &amp; virtual tours with staff',
        'Personal &amp; in-person showings',
        'Credit, background &amp; rental history checks',
        '3-year rental verification &amp; 3&times; income standard',
        'Lease prep, signing &amp; adverse-action notices'
      ]
    },
    {
      title: 'Day-to-Day Management',
      lede: 'Once a tenant is in, the relationship doesn&rsquo;t end &mdash; ours just gets busier.',
      items: [
        'Rent collection via AppFolio',
        'Bookkeeping &amp; monthly owner statements',
        'AP &mdash; mortgage, utilities, HOA dues paid from funds',
        'Move-in / move-out inspections',
        'Interior inspections every 3&ndash;6 months',
        'Photo documentation in AppFolio'
      ]
    },
    {
      title: 'Maintenance &amp; Emergencies',
      lede: 'Coordinated, not just dispatched. With a discount on Tidewater Maintenance.',
      items: [
        '24/7 maintenance line via AppFolio',
        '20-minute callback for true emergencies',
        'Tidewater Property Maintenance discount',
        'Vetted vendor network if you prefer outside contractors',
        'Tenant work-order portal',
        'Mid-Atlantic regional network'
      ]
    },
    {
      title: 'When Things Go Sideways',
      lede: 'You shouldn&rsquo;t have to face Maryland&rsquo;s rental court calendar by yourself.',
      items: [
        'Eviction coordination, in-house',
        'Third-party filing partner with on-site rep',
        'Maryland multi-county regulatory expertise',
        'Lease violation enforcement',
        'Security-deposit reconciliation &amp; documentation',
        'Tenant transition support'
      ]
    }
  ];

  return (
    <section className="tw-section tw-section-linen" id="fee">
      <div className="tw-container">
        <div className="tw-section-head">
          <div className="tw-eyebrow">What the All-Inclusive Fee Includes</div>
          <h2 className="tw-section-title">No add-ons. No à-la-carte. <em>The whole rental lifecycle.</em></h2>
          <p className="tw-section-lede">A simple test: if you&rsquo;ve been managed before, count the line items on last year&rsquo;s statement. Now compare.</p>
        </div>
        <div className="tw-rfee-grid">
          {sections.map((s, i) => (
            <div key={i} className="tw-rfee-card">
              <div className="tw-rfee-num">{String(i+1).padStart(2,'0')}</div>
              <h3 className="tw-rfee-title" dangerouslySetInnerHTML={{__html:s.title}}></h3>
              <p className="tw-rfee-lede" dangerouslySetInnerHTML={{__html:s.lede}}></p>
              <ul className="tw-rfee-list">
                {s.items.map((it, j) => (
                  <li key={j}><Check/><span dangerouslySetInnerHTML={{__html:it}}></span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="tw-tier-foot">Available as full management or leasing-only. <a href="#contact">Talk to our rental team →</a></p>
      </div>
    </section>
  );
}
window.RentalFee = RentalFee;
