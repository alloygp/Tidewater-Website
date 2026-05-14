// HOA / Condo — Testimonials (config-driven)
function Testimonials() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.testimonials) || {};
  const eyebrow = cfg.eyebrow || 'Voices From Our Communities';
  const titleHtml = cfg.titleHtml || 'The way we work — <em class="gold">everyday.</em>';
  const items = cfg.items || [
    { quote: 'Tidewater knows our community. We never feel like an account number — they answer when we call, and they show up.', name: 'Board President', initials: 'MS', meta: 'Towson HOA · 220 homes' },
    { quote: 'The transition from our previous manager was smoother than we expected. Their proactive approach has saved us money and headaches.', name: 'Treasurer', initials: 'DR', meta: 'Anne Arundel Condo · 88 units' },
    { quote: 'Our manager has been with us six years now. After three companies in five years, that stability has been the biggest gift.', name: 'Board Director', initials: 'AB', meta: 'Howard County HOA · 410 homes' },
  ];
  return (
    <section className="tw-section tw-section-dark">
      <div className="tw-container">
        <div className="tw-section-head-left">
          <div className="tw-eyebrow tw-eyebrow-gold">{eyebrow}</div>
          <h2 className="tw-section-title tw-section-title-light" dangerouslySetInnerHTML={{__html: titleHtml}}></h2>
        </div>
        <div className="tw-quote-grid">
          {items.map((t,i) => (
            <figure key={i} className="tw-quote-card">
              <div className="tw-quote-stars">★★★★★</div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="tw-quote-foot">
                <div className="tw-quote-avatar">{t.initials}</div>
                <div>
                  <div className="tw-quote-name">{t.name}</div>
                  <div className="tw-quote-meta">{t.meta}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
