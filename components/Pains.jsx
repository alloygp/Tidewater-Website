// HOA Homepage — Board pain → resolution grid
function Pains() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.pains) || {};
  const eyebrow = cfg.eyebrow || 'Why Boards Switch to Tidewater';
  const titleHtml = cfg.titleHtml || 'The headaches that <em>shouldn\u2019t</em> come with HOA management.';
  const lede = cfg.lede || 'Volunteer boards have enough to do. We resolve the six issues that drive most management changes — and back each one with an operational standard.';
  const defaultItems = [
    {
      n: '01',
      pain: 'Manager Turnover',
      head: 'A manager who knows your community — and stays.',
      body: 'Average tenure across our management leadership exceeds a decade. Our 15+ year Director of Financial Management has processed virtually every scenario a community can face.'
    },
    {
      n: '02',
      pain: 'Slow Response',
      head: 'Next-business-day response. Real managers on call.',
      body: 'Our after-hours line is answered by Tidewater community managers — not an answering service. <strong>20-minute callback standard</strong>, with all emergency information in CINC.'
    },
    {
      n: '03',
      pain: 'Financial Opacity',
      head: 'Clean, board-readable financials. On the 1st. Every month.',
      body: 'Monthly reports cover prior-month activity, call volume, and management plan status. Real-time delinquency visibility via the board portal — no chasing.'
    },
    {
      n: '04',
      pain: 'Reactive Management',
      head: 'Annual management plans, automatically tracked.',
      body: 'Inspections, testing, and renewals are scheduled at the start of each year and auto-trigger ahead of deadlines. <strong>A second set of eyes from our QA team</strong> tracks every policy across the portfolio.'
    },
    {
      n: '05',
      pain: 'Loss of Control',
      head: 'You retain authority. We run the day-to-day.',
      body: 'Boards can opt into secondary invoice approval via StrongRoom. Real-time visibility into violations, ARC requests, and action items. Your decisions, our execution.'
    },
    {
      n: '06',
      pain: 'Transition Anxiety',
      head: 'Switching is smoother than you expect.',
      body: 'Dedicated transition team. Structured timeline document. Bank account openings, homeowner letters, and balance verification handled — with formal sign-off when complete.'
    }
  ];
  const items = cfg.items || defaultItems;
  return (
    <section className="tw-section tw-section-cream" id="why">
      <div className="tw-container">
        <div className="tw-section-head">
          <div className="tw-eyebrow">{eyebrow}</div>
          <h2 className="tw-section-title" dangerouslySetInnerHTML={{__html: titleHtml}}></h2>
          <p className="tw-section-lede">{lede}</p>
        </div>
        <div className="tw-pain-grid">
          {items.map(it => (
            <div key={it.n} className="tw-pain-row">
              <div className="tw-pain-num">{it.n}</div>
              <div>
                <div className="tw-pain-pain">{it.pain}</div>
                <h3 className="tw-pain-headline">{it.head}</h3>
                <p className="tw-pain-body" dangerouslySetInnerHTML={{__html: it.body}}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pains = Pains;
