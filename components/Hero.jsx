// HOA / Condo / Rental Hero — config-driven via window.PAGE_CONFIG
const HERO_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroWidget": "fitcheck"
}/*EDITMODE-END*/;

function Hero() {
  const cfg = (window.PAGE_CONFIG && window.PAGE_CONFIG.hero) || {};
  const defaults = { ...HERO_DEFAULTS, ...(cfg.defaults || {}) };
  const [tweaks, setTweak] = (window.useTweaks ? window.useTweaks(defaults) : [defaults, () => {}]);
  const variant = (tweaks && tweaks.heroWidget) || 'activity';

  const eyebrow = cfg.eyebrow || 'For HOA, Condo & Co-op Boards';
  const titleHtml = cfg.titleHtml || 'Hands-On Management. <em>Personalized Insight.</em>';
  const lede = cfg.lede || 'We know your community, understand your board\u2019s priorities, and stay connected — down to the details. Family-owned in the Mid-Atlantic since 1989.';
  const scrollTo = cfg.scrollLabel || 'Why boards switch';
  const heroImage = cfg.image || 'assets/hero-aerial.jpg';
  const heroImageAlt = cfg.imageAlt || 'Aerial view of a Mid-Atlantic community managed by Tidewater';

  const Shield = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
  const Chevron = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>;

  return (
    <section className="tw-hero">
      <div className="tw-hero-bg">
        <img src={heroImage} alt={heroImageAlt}/>
      </div>
      <div className="tw-hero-paper" aria-hidden="true"></div>

      <div className="tw-hero-grid">
        <div className="tw-hero-copy">
          <div className="tw-hero-eyebrow-row">
            <div className="tw-divider"></div>
            <div className="tw-eyebrow">{eyebrow}</div>
          </div>
          <h1 className="tw-hero-title" dangerouslySetInnerHTML={{__html: titleHtml}}></h1>
          <p className="tw-hero-lede">{lede}</p>
          <div className="tw-hero-actions">
            <a href="#contact" className="tw-btn tw-btn-primary tw-btn-lg">Request a Proposal</a>
            <a href="#tiers" className="tw-btn tw-btn-ghost">See our service tiers →</a>
          </div>
          <div className="tw-hero-trust">
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">300+</span></div><div className="tw-hero-trust-label">Communities</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">30,000+</span></div><div className="tw-hero-trust-label">Homes Managed</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">35+</span></div><div className="tw-hero-trust-label">Years Independent</div></div>
            <div className="tw-hero-trust-item"><div className="tw-hero-trust-num"><span className="accent">6</span></div><div className="tw-hero-trust-label">States Served</div></div>
          </div>
        </div>

        <div className="tw-hero-side">
          <div className="tw-hero-seal">
            <div className="tw-hero-seal-inner">
              <div className="tw-hero-seal-label">AAMC®</div>
              <div className="tw-hero-seal-sub">Accredited Mgmt Co.</div>
            </div>
          </div>

          {variant === 'activity' && <ActivityFeedWidget cfg={cfg.activity}/>}
          {variant === 'fitcheck' && <FitCheckWidget cfg={cfg.fitcheck}/>}

          <div className="tw-hero-ticker">
            <div className="tw-hero-ticker-icon"><Shield/></div>
            <div className="tw-hero-ticker-text">
              <strong>20-min callback standard</strong> on after-hours emergencies — answered by an actual Tidewater community manager.
            </div>
          </div>
        </div>
      </div>

      <div className="tw-hero-scroll">
        <div className="tw-hero-scroll-line"></div>
        {scrollTo} <Chevron/>
      </div>

      {window.TweaksPanel && (
        <window.TweaksPanel title="Hero Widget">
          <window.TweakRadio
            label="Right-side widget"
            value={variant}
            onChange={(v) => setTweak('heroWidget', v)}
            options={[
              { value: 'activity', label: 'Activity feed' },
              { value: 'fitcheck', label: 'Fit checker' }
            ]}
          />
        </window.TweaksPanel>
      )}
    </section>
  );
}

/* =========== Variant 2: Activity Feed =========== */
function ActivityFeedWidget({ cfg }) {
  const defaultEvents = [
    { time: '9:14am', region: 'Howard Co, MD', cls: 'teal', label: 'QA review', text: 'Manager flagged drainage erosion at clubhouse — work order issued before board notice.' },
    { time: '8:42am', region: 'Fairfax, VA', cls: 'gold', label: 'After-hours call', text: 'Burst pipe answered in 11 min by on-call CAM. Plumber dispatched.' },
    { time: 'Yesterday', region: 'Sussex, DE', cls: 'sage', label: 'Vendor compliance', text: 'Landscape contractor COI renewed 4 days before expiry. Auto-tracked.' },
    { time: 'Yesterday', region: 'Anne Arundel, MD', cls: 'teal', label: 'Reserve update', text: 'Q3 reserve study delivered to board 6 days ahead of schedule.' },
    { time: '2 days ago', region: 'Bethesda, MD', cls: 'clay', label: 'Inspection', text: 'Annual fire alarm test passed. Compliance docs filed with county.' },
    { time: '2 days ago', region: 'Reston, VA', cls: 'gold', label: 'Owner request', text: 'ARC modification approved within 48 hrs of complete submission.' }
  ];
  const allEvents = (cfg && cfg.events) || defaultEvents;
  const title = (cfg && cfg.title) || 'What \u201chands-on\u201d looks like, right now';
  const sub = (cfg && cfg.sub) || 'A sampling of work happening across communities we manage — not headlines, just the daily details that keep boards out of crisis mode.';
  const footNum = (cfg && cfg.footNum) || '2,400+';
  const footText = (cfg && cfg.footText) || 'work items resolved across the portfolio this week';

  const [visible, setVisible] = React.useState(allEvents.slice(0, 4));
  const [pulseId, setPulseId] = React.useState(null);
  const idxRef = React.useRef(4);

  React.useEffect(() => {
    const t = setInterval(() => {
      const next = allEvents[idxRef.current % allEvents.length];
      idxRef.current++;
      const id = Date.now();
      setVisible(prev => [{ ...next, _id: id }, ...prev.slice(0, 3)]);
      setPulseId(id);
      setTimeout(() => setPulseId(null), 1600);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="tw-spotlight tw-feed">
      <div className="tw-spot-head">
        <div className="tw-spot-head-left">
          <div className="tw-spot-live">
            <span className="tw-spot-live-dot"></span>
            Live across our portfolio
          </div>
        </div>
        <div className="tw-spot-meta">Last 48 hrs</div>
      </div>
      <h3 className="tw-feed-title">What &ldquo;hands-on&rdquo; looks like, right now</h3>
      <p className="tw-feed-sub">A sampling of work happening across communities we manage — not headlines, just the daily details that keep boards out of crisis mode.</p>

      <ul className="tw-feed-list">
        {visible.map((e, i) => (
          <li key={e._id || i} className={`tw-feed-item ${e._id === pulseId ? 'is-new' : ''}`}>
            <div className={`tw-feed-dot ${e.cls}`}></div>
            <div className="tw-feed-body">
              <div className="tw-feed-row">
                <span className={`tw-feed-tag ${e.cls}`}>{e.label}</span>
                <span className="tw-feed-meta">{e.region} · {e.time}</span>
              </div>
              <div className="tw-feed-text">{e.text}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="tw-feed-foot">
        <span className="tw-feed-foot-num">2,400+</span> work items resolved across the portfolio this week
      </div>
    </div>
  );
}

/* =========== Variant 3: Fit Checker =========== */
function FitCheckWidget() {
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({ size: null, pain: null, state: null });

  const Q1 = [
    { v: 'small', label: 'Under 100 homes', sub: 'Townhome or small condo' },
    { v: 'mid', label: '100–400 homes', sub: 'Most common in our portfolio' },
    { v: 'large', label: '400+ homes', sub: 'Master-planned or high-rise' }
  ];
  const Q2 = [
    { v: 'finance', label: 'Financials & reserves', sub: 'Reporting, audits, funding' },
    { v: 'comms', label: 'Communication', sub: 'Slow responses, owners frustrated' },
    { v: 'vendor', label: 'Vendor management', sub: 'COIs, quality, accountability' },
    { v: 'all', label: 'All of the above', sub: 'Time for a full reset' }
  ];
  const Q3 = [
    { v: 'MD', label: 'Maryland' }, { v: 'VA', label: 'Virginia' }, { v: 'DC', label: 'Washington DC' },
    { v: 'PA', label: 'Pennsylvania' }, { v: 'DE', label: 'Delaware' }, { v: 'WV', label: 'West Virginia' }
  ];

  const answer = (key, v) => {
    setAnswers(a => ({ ...a, [key]: v }));
    setStep(s => s + 1);
  };

  const recommend = () => {
    const tier = answers.pain === 'finance' ? 'Financial Only or Flex' :
                 answers.pain === 'all' ? 'Full Service' :
                 answers.size === 'small' ? 'Flex Service' : 'Full Service';
    const rd = answers.state === 'MD' || answers.state === 'DC' ? 'Kate Cornell — Baltimore/DC Region' :
               answers.state === 'VA' ? 'Marcus Hill — Northern VA Region' :
               answers.state === 'DE' ? 'Renee Park — Eastern Shore Region' :
               'Stanley Reeves — Pennsylvania &amp; WV Region';
    return { tier, rd };
  };

  return (
    <div className="tw-spotlight tw-fit">
      <div className="tw-spot-head">
        <div className="tw-spot-head-left">
          <div className="tw-spot-live">
            <span className="tw-spot-live-dot"></span>
            2-minute fit check
          </div>
        </div>
        <div className="tw-spot-meta">Step {Math.min(step + 1, 4)} of 4</div>
      </div>

      <div className="tw-fit-progress">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`tw-fit-pip ${step >= i ? 'on' : ''}`}></div>
        ))}
      </div>

      {step === 0 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">How big is your community?</h3>
          <div className="tw-fit-opts">
            {Q1.map(o => (
              <button key={o.v} className="tw-fit-opt" onClick={() => answer('size', o.v)}>
                <div className="tw-fit-opt-label">{o.label}</div>
                <div className="tw-fit-opt-sub">{o.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">Where&rsquo;s the friction today?</h3>
          <div className="tw-fit-opts">
            {Q2.map(o => (
              <button key={o.v} className="tw-fit-opt" onClick={() => answer('pain', o.v)}>
                <div className="tw-fit-opt-label">{o.label}</div>
                <div className="tw-fit-opt-sub">{o.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">What state is the community in?</h3>
          <div className="tw-fit-states">
            {Q3.map(o => (
              <button key={o.v} className="tw-fit-state" onClick={() => answer('state', o.v)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step >= 3 && (() => {
        const r = recommend();
        return (
          <div className="tw-fit-result">
            <div className="tw-fit-result-eyebrow">Based on your answers</div>
            <h3 className="tw-fit-result-h">You&rsquo;re a strong fit for <span>{r.tier}</span></h3>
            <div className="tw-fit-result-meta">
              <div className="tw-fit-result-row">
                <span className="tw-fit-result-label">Regional Director</span>
                <span className="tw-fit-result-val" dangerouslySetInnerHTML={{__html: r.rd}}></span>
              </div>
              <div className="tw-fit-result-row">
                <span className="tw-fit-result-label">Likely first call</span>
                <span className="tw-fit-result-val">Within 1 business day</span>
              </div>
            </div>
            <div className="tw-fit-result-actions">
              <a href="#contact" className="tw-btn tw-btn-primary">Request a proposal</a>
              <button className="tw-btn tw-btn-ghost" onClick={() => { setStep(0); setAnswers({size:null,pain:null,state:null}); }}>Start over</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

window.Hero = Hero;
