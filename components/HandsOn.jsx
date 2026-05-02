// HOA Homepage — Hands-on philosophy: 4 cards
function HandsOn() {
  const Eye = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
  const Calendar = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="15" r="2" fill="currentColor"/></svg>;
  const Phone = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
  const Handshake = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12l4-4 5 5 5-5 4 4"/><path d="M11 13l3 3 3-3"/><path d="M3 17l4 4 4-4"/></svg>;

  const items = [
    { icon: <Eye/>, cls:'', title: 'A second set of eyes on every community.', body: 'Our Quality Assurance department &mdash; led by a former CAI Chesapeake Chapter President &mdash; tracks every association&rsquo;s insurance, safety inspections, tax filings, and budget cadence. Issues are flagged to managers before they become board problems.', meta: 'Internal QA Team · Built-in compliance' },
    { icon: <Calendar/>, cls:'tw-handson-icon-gold', title: 'Annual management plans, scheduled in CINC.', body: 'Inspections, testing, and recurring events are mapped at the start of each year. Action items auto-trigger 15 days before deadlines &mdash; visible in real time on the board portal and in the monthly management report.', meta: 'CINC Systems · Tidewater PM portal' },
    { icon: <Phone/>, cls:'tw-handson-icon-clay', title: 'After-hours, you reach a manager.', body: 'Our 24/7 emergency line rotates through actual Tidewater community managers &mdash; not a third-party answering service. Each on-call manager has emergency information for every community pre-loaded in CINC.', meta: '20-minute callback standard' },
    { icon: <Handshake/>, cls:'tw-handson-icon-sage', title: 'Vendor compliance, in-house. No third-party fees.', body: 'Most regional competitors use platforms that charge boards or vendors &mdash; costs that flow back to your community. We vet vendors through our own CINC-integrated app at no charge to either side.', meta: 'Proprietary compliance app' },
  ];
  return (
    <section className="tw-section tw-section-mist" id="how">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow">How Hands-On Actually Works</div>
          <h2 className="tw-section-title">Proactive isn&rsquo;t a slogan.<br/>It&rsquo;s the way we&rsquo;re built.</h2>
          <p className="tw-section-lede">Four operational systems that give you the resources of a large company &mdash; and the personal attention of a small one.</p>
        </div>
        <div className="tw-handson-grid">
          {items.map((it,i) => (
            <article key={i} className="tw-handson-card">
              <div className={`tw-handson-icon ${it.cls}`}>{it.icon}</div>
              <h3>{it.title}</h3>
              <p dangerouslySetInnerHTML={{__html: it.body}}></p>
              <div className="tw-handson-card-meta">{it.meta}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.HandsOn = HandsOn;
