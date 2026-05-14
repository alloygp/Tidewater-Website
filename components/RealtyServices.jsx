// Realty — Services + Broker spotlight
function RealtyServices() {
  const Home = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-8 9 8"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>;
  const Chart = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>;
  const Building = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="3" width="16" height="18" rx="1"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><line x1="9" y1="17" x2="15" y2="17"/></svg>;
  const Gavel = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 4l6 6M9 9l6 6M4 14l6 6"/><line x1="3" y1="21" x2="11" y2="13"/></svg>;
  const Compass = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>;
  const Refresh = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>;

  const services = [
    { Icon: Home,     name: 'Buying — Residential', sub: 'Single-family homes, condos, townhomes across Maryland and DC.' },
    { Icon: Chart,    name: 'Buying — Investment Property', sub: 'Rental-yield modeling, county-specific licensing review, tenant-corridor analysis.' },
    { Icon: Building, name: 'Selling — Owner-Occupied', sub: 'Local market positioning, staging guidance, and a network of investment buyers.' },
    { Icon: Refresh,  name: 'Selling — Rental Properties', sub: 'Exit a managed rental cleanly: tenant coordination, repair triage, and a full file in hand.' },
    { Icon: Gavel,    name: 'Foreclosures & Short Sales', sub: 'Distressed-sale navigation with lender coordination and protective timelines.' },
    { Icon: Compass,  name: 'Market Analysis (CMA)', sub: 'A real number, not a Zestimate. Free, no-obligation, and grounded in rent comps.' },
  ];

  return (
    <section className="tw-section tw-rsv">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow" style={{color:'var(--tw-div-deep, #8C7E40)'}}>What we handle</div>
          <h2 className="tw-section-title">Buying or selling. <em>Especially the deals where management context matters.</em></h2>
          <p className="tw-section-lede">A small team, deliberately. Every client gets personalized support through every step &mdash; not a hand-off to an agent assistant after listing.</p>
        </div>

        <div className="tw-rsv-grid">
          <div className="tw-rsv-list">
            {services.map(s => (
              <div className="tw-rsv-item" key={s.name}>
                <div className="tw-rsv-item-icon"><s.Icon/></div>
                <div>
                  <div className="tw-rsv-item-name">{s.name}</div>
                  <div className="tw-rsv-item-sub">{s.sub}</div>
                </div>
                <div className="tw-rsv-item-arrow">→</div>
              </div>
            ))}
          </div>

          <div className="tw-rsv-broker">
            <div className="tw-rsv-broker-img">[broker portrait — Cody Bishop, on-site]</div>
            <div className="tw-rsv-broker-body">
              <div className="tw-rsv-broker-name">Cody Bishop</div>
              <div className="tw-rsv-broker-role">Broker &middot; Director of Rental Management &middot; Tidewater Realty Group, LLC</div>
              <p className="tw-rsv-broker-quote">&ldquo;I run both rental management and the brokerage. That&rsquo;s rare, and it&rsquo;s on purpose. The same person handing you a listing comp can tell you what the unit two doors down actually rents for &mdash; because we manage it.&rdquo;</p>
              <div className="tw-rsv-broker-cred">
                <span>Licensed Broker</span>
                <span>Director, Rental</span>
                <span>MD &amp; DC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.RealtyServices = RealtyServices;
