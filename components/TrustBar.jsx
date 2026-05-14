// HOA Homepage — Trust bar (credentials strip)
function TrustBar() {
  const items = [
    { icon: 'AAMC', label: 'AAMC® Accredited', sub: 'CAI&rsquo;s highest company credential', cls: '' },
    { icon: 'PCAM', label: 'PCAM Leadership', sub: 'President holds CMCA, AMS, PCAM', cls: 'tw-trust-icon-gold' },
    { icon: 'CAI', label: 'Two CAI Chapter Presidents', sub: 'Chesapeake Chapter leaders', cls: 'tw-trust-icon-sage' },
    { icon: 'A+', label: 'A+ BBB Rating', sub: 'Backed by 35+ years of work', cls: 'tw-trust-icon-clay' },
  ];
  return (
    <section className="tw-trust-bar" aria-label="Credentials and accreditations">
      <div className="tw-trust-inner">
        <div className="tw-trust-label">Trusted &amp; credentialed by</div>
        <div className="tw-trust-items">
          {items.map((it, i) => (
            <React.Fragment key={i}>
              <div className="tw-trust-item">
                <div className={`tw-trust-icon ${it.cls}`}>{it.icon}</div>
                <div className="tw-trust-item-text">
                  <div>{it.label}</div>
                  <div className="tw-trust-item-sub" dangerouslySetInnerHTML={{__html: it.sub}}></div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
window.TrustBar = TrustBar;
