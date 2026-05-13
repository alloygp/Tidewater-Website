// Manifesto — large pull-quote section, dark, on independence
function Manifesto() {
  return (
    <section className="tw-section tw-section-dark tw-manifesto">
      <div className="tw-container tw-manifesto-inner">
        <div className="tw-manifesto-rule">
          <span className="tw-manifesto-rule-line"></span>
          <span className="tw-manifesto-rule-mark">No. 1</span>
          <span className="tw-manifesto-rule-line"></span>
        </div>
        <div className="tw-eyebrow tw-eyebrow-gold">A note on consolidation</div>
        <h2 className="tw-manifesto-title">
          <span>Still family-owned.</span>
          <span>Still independent.</span>
          <span><em>Still here.</em></span>
        </h2>
        <p className="tw-manifesto-body">Over the last decade, most of our regional peers have been acquired — by national chains, by private equity, by holding companies you&rsquo;ve never heard of. We have been approached. The answer has been the same every time.</p>
        <p className="tw-manifesto-body">We answer to two people whose last name is on the door, not a quarterly board in another time zone. That&rsquo;s the difference. It shows up in every decision &mdash; what we charge, who we hire, how we treat a board that&rsquo;s been with us 22 years.</p>
        <div className="tw-manifesto-sig">
          <div className="tw-manifesto-sig-line">
            <div className="tw-manifesto-sig-name">Stanley Greenberg</div>
            <div className="tw-manifesto-sig-title">CEO &amp; Founder</div>
          </div>
          <div className="tw-manifesto-sig-line">
            <div className="tw-manifesto-sig-name">Marc Greenberg</div>
            <div className="tw-manifesto-sig-title">President · CMCA · AMS · PCAM</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Manifesto = Manifesto;
