// Maintenance — Services ledger
function MaintenanceServices() {
  const rows = [
    { code: 'GC',  name: 'General Contracting',                desc: 'Everyday property needs — drywall, plumbing, electrical, doors, locks, appliances, paint, flooring, carpentry.', tag: 'Standard' },
    { code: 'WM',  name: 'Water Damage & Flood Mitigation',    desc: 'Emergency response, water extraction, structural drying, dehumidification, and documentation for insurance claims.', tag: 'Emergency', tagClass: 'emergency' },
    { code: 'HOA', name: 'HOA Infrastructure Repair',          desc: 'Gates, fencing, signage, common-area lighting, mailboxes, playground inspection and repair, asphalt patching.', tag: 'HOA / Condo' },
    { code: 'BTR', name: 'Bulk Trash & Property Walks',        desc: 'Move-out cleanouts, illegal dumping removal, scheduled property walks with photo documentation in AppFolio.', tag: 'Standard' },
    { code: 'ICS', name: 'Insurance Claim Support',            desc: 'Photo evidence, scope-of-loss documentation, adjuster coordination, and follow-through to claim resolution.', tag: 'Standard' },
    { code: 'PM',  name: 'Preventive Maintenance Programs',    desc: 'Customized seasonal calendars: HVAC servicing, gutter cleaning, weatherization, exterior inspection cadence.', tag: 'HOA / Condo' },
    { code: 'WO',  name: 'Individual Owner Work Orders',       desc: 'A one-off project at your property — even if Tidewater doesn&rsquo;t manage it. Standard rates; Tidewater rental clients receive a discount.', tag: 'Commercial', tagClass: 'commercial' },
    { code: 'EM',  name: '24/7 Emergency Repair',              desc: 'Routed through AppFolio triage line for rentals and rotating on-call manager for HOAs. Documented from first call to resolution.', tag: 'Emergency', tagClass: 'emergency' },
  ];

  return (
    <section className="tw-section tw-mserv" id="services">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow" style={{color:'var(--tw-sage)'}}>What we handle</div>
          <h2 className="tw-section-title">Eight service lines. <em>One vetted team.</em></h2>
          <p className="tw-section-lede">Residential and commercial scope, primarily in Maryland and Delaware. Trusted supplier network for the work that&rsquo;s outside our direct lines.</p>
        </div>

        <div className="tw-mserv-ledger">
          <div className="tw-mserv-row head">
            <div>Code</div>
            <div>Service</div>
            <div>What&rsquo;s included</div>
            <div style={{textAlign:'right'}}>Scope</div>
          </div>
          {rows.map(r => (
            <div className="tw-mserv-row" key={r.code}>
              <div className="tw-mserv-code">{r.code}</div>
              <div className="tw-mserv-name">{r.name}</div>
              <div className="tw-mserv-desc" dangerouslySetInnerHTML={{__html: r.desc}}></div>
              <div className={`tw-mserv-tag ${r.tagClass || ''}`}>{r.tag}</div>
            </div>
          ))}
          <div className="tw-mserv-foot">
            <span><strong>Service area:</strong> primarily Maryland &amp; Delaware. Commercial and residential scope.</span>
            <a href="#contact">Request a maintenance assessment →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.MaintenanceServices = MaintenanceServices;
