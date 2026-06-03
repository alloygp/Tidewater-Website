// AboutHero — editorial hero used across About branch (config-driven)
function AboutHero() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.aboutHero) || {};
  const eyebrow = cfg.eyebrow || 'About Tidewater';
  const titleHtml = cfg.titleHtml || 'Family-owned in the Mid-Atlantic <em>since 1989.</em>';
  const lede = cfg.lede || 'Two generations. One building. ~75 people who never moved on to a corporate parent.';
  const image = cfg.image || 'assets/hero-mission.jpg';
  const imageAlt = cfg.imageAlt || 'Tidewater team';
  const datelineLeft = cfg.datelineLeft || 'Owings Mills, MD';
  const datelineRight = cfg.datelineRight || 'Est. 1989';

  // Side ledger items — each a small fact strip
  const ledger = cfg.ledger || [
    { num: '1989', label: 'Founded by Stanley Greenberg' },
    { num: '2', label: 'Generations family-owned' },
    { num: '~75', label: 'In-house team — all under one roof' },
    { num: '300+', label: 'Communities · 30,000+ homes' },
  ];

  return (
    <section className="tw-about-hero">
      <div className="tw-about-hero-bg">
        <img src={image} alt={imageAlt}/>
      </div>
      <div className="tw-hero-paper" aria-hidden="true"></div>

      <div className="tw-about-hero-grid">
        <div className="tw-about-hero-copy">
          <div className="tw-about-hero-dateline">
            <span>{datelineLeft}</span>
            <span className="tw-about-hero-dateline-rule"></span>
            <span>{datelineRight}</span>
          </div>
          <div className="tw-eyebrow tw-eyebrow-gold">{eyebrow}</div>
          <h1 className="tw-about-hero-title" dangerouslySetInnerHTML={{__html: titleHtml}}></h1>
          <p className="tw-about-hero-lede">{lede}</p>
        </div>

        <aside className="tw-about-hero-ledger" aria-label="At a glance">
          <div className="tw-about-hero-ledger-head">
            <span className="tw-about-hero-ledger-label">At a glance</span>
            <span className="tw-about-hero-ledger-meta">No. 04 · Brief</span>
          </div>
          <ul className="tw-about-hero-ledger-list">
            {ledger.map((l,i) => (
              <li key={i}>
                <span className="tw-about-hero-ledger-num">{l.num}</span>
                <span className="tw-about-hero-ledger-text">{l.label}</span>
              </li>
            ))}
          </ul>
          <div className="tw-about-hero-ledger-foot">
            <span className="tw-about-hero-ledger-stamp">AAMC<sup>®</sup></span>
            <span className="tw-about-hero-ledger-stamp">A+ BBB</span>
            <span className="tw-about-hero-ledger-stamp">CAI Member</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
window.AboutHero = AboutHero;
