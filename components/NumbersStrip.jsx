// NumbersStrip — proof bar across the page
function NumbersStrip() {
  const stats = [
    { num: '35+', label: 'Years independent', sub: 'Family-owned since 1989' },
    { num: '300+', label: 'Communities managed', sub: '~50/50 HOA / condo' },
    { num: '30K+', label: 'Homes under management', sub: 'Across 6 states' },
    { num: '~75', label: 'In-house team', sub: 'No outsourced functions' },
    { num: '2', label: 'CAI Chapter Presidents', sub: 'On staff today' },
    { num: '24/7/365', label: 'Emergency coverage', sub: '20-min callback standard' },
  ];
  return (
    <section className="tw-numstrip">
      <div className="tw-container">
        <div className="tw-numstrip-grid">
          {stats.map((s,i) => (
            <div key={i} className="tw-numstrip-cell">
              <div className="tw-numstrip-num">{s.num}</div>
              <div className="tw-numstrip-label">{s.label}</div>
              <div className="tw-numstrip-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.NumbersStrip = NumbersStrip;
