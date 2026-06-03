// Realty — Lifecycle rail (the signature differentiator)
function RealtyLifecycle() {
  const steps = [
    { num: '01', tag: 'Acquire', title: 'Buy with rental-yield context.', copy: 'Our agents have direct knowledge of Maryland\u2019s rental market from the management side \u2014 vacancy patterns, rent comps, county licensing burden. You see a property the way an operator does, not just a list price.', co: 'Realty Group' },
    { num: '02', tag: 'Manage', title: 'Tidewater rental management takes over at closing.', copy: 'One handoff. Same family-owned company. AppFolio portal, all-inclusive flat fee, proactive 3\u20136 month inspections \u2014 already familiar with the property you just bought.', co: 'Property Management' },
    { num: '03', tag: 'Maintain', title: 'In-house crews already on the file.', copy: 'When the dishwasher fails, our maintenance techs already know your property. Documented in AppFolio. Rental owners receive a discount off standard maintenance rates.', co: 'Property Maintenance' },
    { num: '04', tag: 'Exit', title: 'Sell with the full file in hand.', copy: 'When you\u2019re ready to exit, we already know the property\u2019s rent history, condition, capex log, and tenant cooperation. Foreclosure or short sale? Cody Bishop coordinates personally.', co: 'Realty Group' },
  ];
  return (
    <section className="tw-rlc" id="lifecycle">
      <div className="tw-container">
        <div className="tw-rlc-head">
          <div className="tw-eyebrow" style={{color:'var(--tw-div-deep, #8C7E40)'}}>The Full-Lifecycle Investment Advantage</div>
          <h2 className="tw-rlc-title">Buy. Manage. Maintain. <em>Sell.</em><br/>One family-owned brand. <em>The whole life of the asset.</em></h2>
          <p className="tw-rlc-lede">No other operator in the Maryland market does all four under one roof. When you exit, you&rsquo;re not handing the file to a stranger &mdash; we wrote it.</p>
        </div>

        <div className="tw-rlc-rail">
          {steps.map(s => (
            <div className="tw-rlc-step" key={s.num}>
              <div className="tw-rlc-step-num">{s.num}</div>
              <div className="tw-rlc-step-tag">{s.tag}</div>
              <h3 className="tw-rlc-step-title">{s.title}</h3>
              <p className="tw-rlc-step-copy">{s.copy}</p>
              <div className="tw-rlc-step-co">Run by <strong>Tidewater {s.co}</strong></div>
            </div>
          ))}
        </div>

        <div className="tw-rlc-foot">
          <div className="tw-rlc-foot-text">High home prices have some rental clients ready to sell. <em>We&rsquo;re the only brokerage that already has your file.</em></div>
          <a href="#contact" className="tw-btn tw-btn-primary" style={{background:'var(--tw-gold)',borderColor:'var(--tw-gold)',color:'#2b260f'}}>Request a market analysis</a>
        </div>
      </div>
    </section>
  );
}
window.RealtyLifecycle = RealtyLifecycle;
