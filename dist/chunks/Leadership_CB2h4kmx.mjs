import { c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderComponent, a as renderTemplate, d as createAstro } from './astro/server_B8N826LR.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import 'clsx';

const DEFAULT_EVENTS = [
  { time: "9:14am", region: "Howard Co, MD", cls: "teal", label: "QA review", text: "Manager flagged drainage erosion at clubhouse — work order issued before board notice." },
  { time: "8:42am", region: "Fairfax, VA", cls: "gold", label: "After-hours call", text: "Burst pipe answered in 11 min by on-call CAM. Plumber dispatched." },
  { time: "Yesterday", region: "Sussex, DE", cls: "sage", label: "Vendor compliance", text: "Landscape contractor COI renewed 4 days before expiry. Auto-tracked." },
  { time: "Yesterday", region: "Anne Arundel, MD", cls: "teal", label: "Reserve update", text: "Q3 reserve study delivered to board 6 days ahead of schedule." },
  { time: "2 days ago", region: "Bethesda, MD", cls: "clay", label: "Inspection", text: "Annual fire alarm test passed. Compliance docs filed with county." },
  { time: "2 days ago", region: "Reston, VA", cls: "gold", label: "Owner request", text: "ARC modification approved within 48 hrs of complete submission." }
];
function ActivityFeedWidget({ events, title, sub, footNum, footText }) {
  const allEvents = events || DEFAULT_EVENTS;
  const widgetTitle = title || 'What "hands-on" looks like, right now';
  const widgetSub = sub || "A sampling of work happening across communities we manage — not headlines, just the daily details that keep boards out of crisis mode.";
  const widgetFootNum = footNum || "2,400+";
  const widgetFootText = footText || "work items resolved across the portfolio this week";
  const [visible, setVisible] = useState(allEvents.slice(0, 4));
  const [pulseId, setPulseId] = useState(null);
  const idxRef = useRef(4);
  useEffect(() => {
    const t = setInterval(() => {
      const next = allEvents[idxRef.current % allEvents.length];
      idxRef.current++;
      const id = Date.now();
      setVisible((prev) => [{ ...next, _id: id }, ...prev.slice(0, 3)]);
      setPulseId(id);
      setTimeout(() => setPulseId(null), 1600);
    }, 4500);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "tw-spotlight tw-feed", children: [
    /* @__PURE__ */ jsxs("div", { className: "tw-spot-head", children: [
      /* @__PURE__ */ jsx("div", { className: "tw-spot-head-left", children: /* @__PURE__ */ jsxs("div", { className: "tw-spot-live", children: [
        /* @__PURE__ */ jsx("span", { className: "tw-spot-live-dot" }),
        "Live across our portfolio"
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "tw-spot-meta", children: "Last 48 hrs" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "tw-feed-title", children: widgetTitle }),
    /* @__PURE__ */ jsx("p", { className: "tw-feed-sub", children: widgetSub }),
    /* @__PURE__ */ jsx("ul", { className: "tw-feed-list", children: visible.map((e, i) => /* @__PURE__ */ jsxs("li", { className: `tw-feed-item ${e._id === pulseId ? "is-new" : ""}`, children: [
      /* @__PURE__ */ jsx("div", { className: `tw-feed-dot ${e.cls}` }),
      /* @__PURE__ */ jsxs("div", { className: "tw-feed-body", children: [
        /* @__PURE__ */ jsxs("div", { className: "tw-feed-row", children: [
          /* @__PURE__ */ jsx("span", { className: `tw-feed-tag ${e.cls}`, children: e.label }),
          /* @__PURE__ */ jsxs("span", { className: "tw-feed-meta", children: [
            e.region,
            " · ",
            e.time
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "tw-feed-text", children: e.text })
      ] })
    ] }, e._id || i)) }),
    /* @__PURE__ */ jsxs("div", { className: "tw-feed-foot", children: [
      /* @__PURE__ */ jsx("span", { className: "tw-feed-foot-num", children: widgetFootNum }),
      " ",
      widgetFootText
    ] })
  ] });
}

const Q1 = [
  { v: "small", label: "Under 100 homes", sub: "Townhome or small condo" },
  { v: "mid", label: "100–400 homes", sub: "Most common in our portfolio" },
  { v: "large", label: "400+ homes", sub: "Master-planned or high-rise" }
];
const Q2 = [
  { v: "finance", label: "Financials & reserves", sub: "Reporting, audits, funding" },
  { v: "comms", label: "Communication", sub: "Slow responses, owners frustrated" },
  { v: "vendor", label: "Vendor management", sub: "COIs, quality, accountability" },
  { v: "all", label: "All of the above", sub: "Time for a full reset" }
];
const Q3 = [
  { v: "MD", label: "Maryland" },
  { v: "VA", label: "Virginia" },
  { v: "DC", label: "Washington DC" },
  { v: "PA", label: "Pennsylvania" },
  { v: "DE", label: "Delaware" },
  { v: "WV", label: "West Virginia" }
];
function FitCheckWidget() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ size: null, pain: null, state: null });
  const answer = (key, v) => {
    setAnswers((a) => ({ ...a, [key]: v }));
    setStep((s) => s + 1);
  };
  const recommend = () => {
    const tier = answers.pain === "finance" ? "Financial Only or Flex" : answers.pain === "all" ? "Full Service" : answers.size === "small" ? "Flex Service" : "Full Service";
    const rd = answers.state === "MD" || answers.state === "DC" ? "Kate Cornell — Baltimore/DC Region" : answers.state === "VA" ? "Marcus Hill — Northern VA Region" : answers.state === "DE" ? "Renee Park — Eastern Shore Region" : "Stanley Reeves — Pennsylvania & WV Region";
    return { tier, rd };
  };
  return /* @__PURE__ */ jsxs("div", { className: "tw-spotlight tw-fit", children: [
    /* @__PURE__ */ jsxs("div", { className: "tw-spot-head", children: [
      /* @__PURE__ */ jsx("div", { className: "tw-spot-head-left", children: /* @__PURE__ */ jsxs("div", { className: "tw-spot-live", children: [
        /* @__PURE__ */ jsx("span", { className: "tw-spot-live-dot" }),
        "2-minute fit check"
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "tw-spot-meta", children: [
        "Step ",
        Math.min(step + 1, 4),
        " of 4"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "tw-fit-progress", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: `tw-fit-pip ${step >= i ? "on" : ""}` }, i)) }),
    step === 0 && /* @__PURE__ */ jsxs("div", { className: "tw-fit-step", children: [
      /* @__PURE__ */ jsx("h3", { className: "tw-fit-q", children: "How big is your community?" }),
      /* @__PURE__ */ jsx("div", { className: "tw-fit-opts", children: Q1.map((o) => /* @__PURE__ */ jsxs("button", { className: "tw-fit-opt", onClick: () => answer("size", o.v), children: [
        /* @__PURE__ */ jsx("div", { className: "tw-fit-opt-label", children: o.label }),
        /* @__PURE__ */ jsx("div", { className: "tw-fit-opt-sub", children: o.sub })
      ] }, o.v)) })
    ] }),
    step === 1 && /* @__PURE__ */ jsxs("div", { className: "tw-fit-step", children: [
      /* @__PURE__ */ jsx("h3", { className: "tw-fit-q", children: "Where’s the friction today?" }),
      /* @__PURE__ */ jsx("div", { className: "tw-fit-opts", children: Q2.map((o) => /* @__PURE__ */ jsxs("button", { className: "tw-fit-opt", onClick: () => answer("pain", o.v), children: [
        /* @__PURE__ */ jsx("div", { className: "tw-fit-opt-label", children: o.label }),
        /* @__PURE__ */ jsx("div", { className: "tw-fit-opt-sub", children: o.sub })
      ] }, o.v)) })
    ] }),
    step === 2 && /* @__PURE__ */ jsxs("div", { className: "tw-fit-step", children: [
      /* @__PURE__ */ jsx("h3", { className: "tw-fit-q", children: "What state is the community in?" }),
      /* @__PURE__ */ jsx("div", { className: "tw-fit-states", children: Q3.map((o) => /* @__PURE__ */ jsx("button", { className: "tw-fit-state", onClick: () => answer("state", o.v), children: o.label }, o.v)) })
    ] }),
    step >= 3 && (() => {
      const r = recommend();
      return /* @__PURE__ */ jsxs("div", { className: "tw-fit-result", children: [
        /* @__PURE__ */ jsx("div", { className: "tw-fit-result-eyebrow", children: "Based on your answers" }),
        /* @__PURE__ */ jsxs("h3", { className: "tw-fit-result-h", children: [
          "You’re a strong fit for ",
          /* @__PURE__ */ jsx("span", { children: r.tier })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tw-fit-result-meta", children: [
          /* @__PURE__ */ jsxs("div", { className: "tw-fit-result-row", children: [
            /* @__PURE__ */ jsx("span", { className: "tw-fit-result-label", children: "Regional Director" }),
            /* @__PURE__ */ jsx("span", { className: "tw-fit-result-val", children: r.rd })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "tw-fit-result-row", children: [
            /* @__PURE__ */ jsx("span", { className: "tw-fit-result-label", children: "Likely first call" }),
            /* @__PURE__ */ jsx("span", { className: "tw-fit-result-val", children: "Within 1 business day" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "tw-fit-result-actions", children: [
          /* @__PURE__ */ jsx("a", { href: "#contact", className: "tw-btn tw-btn-primary", children: "Request a proposal" }),
          /* @__PURE__ */ jsx("button", { className: "tw-btn tw-btn-ghost", onClick: () => {
            setStep(0);
            setAnswers({ size: null, pain: null, state: null });
          }, children: "Start over" })
        ] })
      ] });
    })()
  ] });
}

const $$Astro$1 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const { config = {} } = Astro2.props;
  const eyebrow = config.eyebrow || "For HOA, Condo & Co-op Boards";
  const titleHtml = config.titleHtml || "Hands-On Management. <em>Personalized Insight.</em>";
  const lede = config.lede || "We know your community, understand your board\u2019s priorities, and stay connected \u2014 down to the details. Family-owned in the Mid-Atlantic since 1989.";
  const scrollTo = config.scrollLabel || "Why boards switch";
  const heroImage = config.image || "/assets/hero-aerial.jpg";
  const heroImageAlt = config.imageAlt || "Aerial view of a Mid-Atlantic community managed by Tidewater";
  const heroWidget = config.heroWidget || "fitcheck";
  const actCfg = config.activity || {};
  return renderTemplate`${maybeRenderHead()}<section class="tw-hero"> <div class="tw-hero-bg"> <img${addAttribute(heroImage, "src")}${addAttribute(heroImageAlt, "alt")}> </div> <div class="tw-hero-paper" aria-hidden="true"></div> <div class="tw-hero-grid"> <div class="tw-hero-copy"> <div class="tw-hero-eyebrow-row"> <div class="tw-divider"></div> <div class="tw-eyebrow">${eyebrow}</div> </div> <h1 class="tw-hero-title">${unescapeHTML(titleHtml)}</h1> <p class="tw-hero-lede">${lede}</p> <div class="tw-hero-actions"> <a href="#contact" class="tw-btn tw-btn-primary tw-btn-lg">Request a Proposal</a> <a href="#tiers" class="tw-btn tw-btn-ghost">See our service tiers →</a> </div> <div class="tw-hero-trust"> <div class="tw-hero-trust-item"><div class="tw-hero-trust-num"><span class="accent">300+</span></div><div class="tw-hero-trust-label">Communities</div></div> <div class="tw-hero-trust-item"><div class="tw-hero-trust-num"><span class="accent">30,000+</span></div><div class="tw-hero-trust-label">Homes Managed</div></div> <div class="tw-hero-trust-item"><div class="tw-hero-trust-num"><span class="accent">35+</span></div><div class="tw-hero-trust-label">Years Independent</div></div> <div class="tw-hero-trust-item"><div class="tw-hero-trust-num"><span class="accent">6</span></div><div class="tw-hero-trust-label">States Served</div></div> </div> </div> <div class="tw-hero-side"> <div class="tw-hero-seal"> <div class="tw-hero-seal-inner"> <div class="tw-hero-seal-label">AAMC®</div> <div class="tw-hero-seal-sub">Accredited Mgmt Co.</div> </div> </div> ${heroWidget === "activity" ? renderTemplate`${renderComponent($$result, "ActivityFeedWidget", ActivityFeedWidget, { "client:load": true, "events": actCfg.events, "title": actCfg.title, "sub": actCfg.sub, "footNum": actCfg.footNum, "footText": actCfg.footText, "client:component-hydration": "load", "client:component-path": "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/ActivityFeedWidget.jsx", "client:component-export": "default" })}` : renderTemplate`${renderComponent($$result, "FitCheckWidget", FitCheckWidget, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/FitCheckWidget.jsx", "client:component-export": "default" })}`} <div class="tw-hero-ticker"> <div class="tw-hero-ticker-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg> </div> <div class="tw-hero-ticker-text"> <strong>20-min callback standard</strong> on after-hours emergencies — answered by an actual Tidewater community manager.
</div> </div> </div> </div> <div class="tw-hero-scroll"> <div class="tw-hero-scroll-line"></div> ${scrollTo} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Pains = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pains;
  const {
    eyebrow = "Why Boards Switch to Tidewater",
    titleHtml = "The headaches that <em>shouldn't</em> come with HOA management.",
    lede = "Volunteer boards have enough to do. We resolve the six issues that drive most management changes \u2014 and back each one with an operational standard.",
    items = [
      { n: "01", pain: "Manager Turnover", head: "A manager who knows your community \u2014 and stays.", body: "Average tenure across our management leadership exceeds a decade. Our 15+ year Director of Financial Management has processed virtually every scenario a community can face." },
      { n: "02", pain: "Slow Response", head: "Next-business-day response. Real managers on call.", body: "Our after-hours line is answered by Tidewater community managers \u2014 not an answering service. <strong>20-minute callback standard</strong>, with all emergency information in CINC." },
      { n: "03", pain: "Financial Opacity", head: "Clean, board-readable financials. On the 1st. Every month.", body: "Monthly reports cover prior-month activity, call volume, and management plan status. Real-time delinquency visibility via the board portal \u2014 no chasing." },
      { n: "04", pain: "Reactive Management", head: "Annual management plans, automatically tracked.", body: "Inspections, testing, and renewals are scheduled at the start of each year and auto-trigger ahead of deadlines. <strong>A second set of eyes from our QA team</strong> tracks every policy across the portfolio." },
      { n: "05", pain: "Loss of Control", head: "You retain authority. We run the day-to-day.", body: "Boards can opt into secondary invoice approval via StrongRoom. Real-time visibility into violations, ARC requests, and action items. Your decisions, our execution." },
      { n: "06", pain: "Transition Anxiety", head: "Switching is smoother than you expect.", body: "Dedicated transition team. Structured timeline document. Bank account openings, homeowner letters, and balance verification handled \u2014 with formal sign-off when complete." }
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-cream" id="why"> <div class="tw-container"> <div class="tw-section-head"> <div class="tw-eyebrow">${eyebrow}</div> <h2 class="tw-section-title">${unescapeHTML(titleHtml)}</h2> <p class="tw-section-lede">${lede}</p> </div> <div class="tw-pain-grid"> ${items.map((it) => renderTemplate`<div class="tw-pain-row"> <div class="tw-pain-num">${it.n}</div> <div> <div class="tw-pain-pain">${it.pain}</div> <h3 class="tw-pain-headline">${it.head}</h3> <p class="tw-pain-body">${unescapeHTML(it.body)}</p> </div> </div>`)} </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Pains.astro", void 0);

const $$Tiers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-linen" id="tiers"> <div class="tw-container"> <div class="tw-section-head"> <div class="tw-eyebrow">Three Tiers. One Standard of Care.</div> <h2 class="tw-section-title">A fit for <em>every association.</em></h2> <p class="tw-section-lede">Most management companies offer one model. We offer three — so the size of your community, your budget, and your board's appetite for involvement all stay yours to decide.</p> </div> <div class="tw-tiers"> <div class="tw-tier"> <h3 class="tw-tier-name">Financial Only</h3> <p class="tw-tier-tagline">For self-managed communities needing accounting depth.</p> <div class="tw-tier-price"> <div class="tw-tier-price-label">Best for</div> <div class="tw-tier-price-value">Self-managed boards</div> </div> <ul class="tw-tier-list"> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Full AR / AP processing</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Bank reconciliations &amp; account management</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Budget assistance &amp; reserve transfers</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Tax return coordination</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Board financial education</li> <li class="muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>On-site presence &amp; inspections</li> <li class="muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>Meeting attendance</li> </ul> <a href="#contact" class="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a> </div> <div class="tw-tier tw-tier-featured"> <div class="tw-tier-flag">Most Communities</div> <h3 class="tw-tier-name">Full Service</h3> <p class="tw-tier-tagline">Comprehensive management — every operational detail handled.</p> <div class="tw-tier-price"> <div class="tw-tier-price-label">Best for</div> <div class="tw-tier-price-value">HOAs &amp; condo associations</div> </div> <ul class="tw-tier-list"> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Dedicated community manager &amp; on-site presence</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Meeting support, attendance &amp; recording</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Annual management plan via CINC Systems</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Full financial controls &amp; collections</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Vendor management &amp; in-house compliance</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>24/7 emergency line — real managers</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>QA oversight &amp; insurance tracking</li> </ul> <a href="#contact" class="tw-btn tw-btn-primary tw-btn-block tw-tier-cta" style="background:var(--tw-gold);color:var(--tw-dark)">Request a proposal</a> </div> <div class="tw-tier"> <h3 class="tw-tier-name">Flex Service</h3> <p class="tw-tier-tagline">Lower base fee, à-la-carte involvement when you need it.</p> <div class="tw-tier-price"> <div class="tw-tier-price-label">Best for</div> <div class="tw-tier-price-value">Established, mature boards</div> </div> <ul class="tw-tier-list"> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Reduced base management fee</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Set hourly rate for meetings</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Inspections available on-demand</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Full financial &amp; collections support</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>Owner portal &amp; CINC management plan</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>24/7 emergency coverage</li> <li class="muted"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>Standing on-site presence</li> </ul> <a href="#contact" class="tw-btn tw-btn-outline tw-btn-block tw-tier-cta">Talk to a manager</a> </div> </div> <p class="tw-tier-foot">All tiers include the Tidewater PM owner portal, the Stanley AI assistant, and our in-house client services team. <a href="#">See full feature comparison →</a></p> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Tiers.astro", void 0);

const $$HandsOn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-mist" id="how"> <div class="tw-container"> <div class="tw-section-head-left"> <div class="tw-eyebrow">How Hands-On Actually Works</div> <h2 class="tw-section-title">Proactive isn&rsquo;t a slogan.<br>It&rsquo;s the way we&rsquo;re built.</h2> <p class="tw-section-lede">Four operational systems that give you the resources of a large company &mdash; and the personal attention of a small one.</p> </div> <div class="tw-handson-grid"> <article class="tw-handson-card"> <div class="tw-handson-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> </div> <h3>A second set of eyes on every community.</h3> <p>Our Quality Assurance department &mdash; led by a former CAI Chesapeake Chapter President &mdash; tracks every association&rsquo;s insurance, safety inspections, tax filings, and budget cadence. Issues are flagged to managers before they become board problems.</p> <div class="tw-handson-card-meta">Internal QA Team · Built-in compliance</div> </article> <article class="tw-handson-card"> <div class="tw-handson-icon tw-handson-icon-gold"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><circle cx="12" cy="15" r="2" fill="currentColor"></circle></svg> </div> <h3>Annual management plans, scheduled in CINC.</h3> <p>Inspections, testing, and recurring events are mapped at the start of each year. Action items auto-trigger 15 days before deadlines &mdash; visible in real time on the board portal and in the monthly management report.</p> <div class="tw-handson-card-meta">CINC Systems · Tidewater PM portal</div> </article> <article class="tw-handson-card"> <div class="tw-handson-icon tw-handson-icon-clay"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> </div> <h3>After-hours, you reach a manager.</h3> <p>Our 24/7 emergency line rotates through actual Tidewater community managers &mdash; not a third-party answering service. Each on-call manager has emergency information for every community pre-loaded in CINC.</p> <div class="tw-handson-card-meta">20-minute callback standard</div> </article> <article class="tw-handson-card"> <div class="tw-handson-icon tw-handson-icon-sage"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12l4-4 5 5 5-5 4 4"></path><path d="M11 13l3 3 3-3"></path><path d="M3 17l4 4 4-4"></path></svg> </div> <h3>Vendor compliance, in-house. No third-party fees.</h3> <p>Most regional competitors use platforms that charge boards or vendors &mdash; costs that flow back to your community. We vet vendors through our own CINC-integrated app at no charge to either side.</p> <div class="tw-handson-card-meta">Proprietary compliance app</div> </article> </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/HandsOn.astro", void 0);

const $$Portal = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-dark" id="portal" style="padding:112px 0"> <div class="tw-container"> <div class="tw-portal-grid"> <div class="tw-portal-copy"> <div class="tw-eyebrow tw-eyebrow-gold">Built On CINC Systems</div> <h2 class="tw-section-title tw-section-title-light">
A board portal you&rsquo;ll actually use. <em class="gold">An AI assistant named after our founder.</em> </h2> <p class="tw-section-lede" style="color:#cfcdc6">
Boards see the full operational picture in real time &mdash; violation tracking, ARC requests, delinquencies, action items, and management reports. Owners get 24/7 access on every device. The Tidewater PM app puts it all in one place.
</p> <ul class="tw-portal-features"> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Real-time violation &amp; compliance monitoring</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Live management plan status &amp; action items</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>ARC request tracking &amp; resident communications</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Optional StrongRoom invoice approval for boards</li> <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span><strong style="color:var(--tw-gold)">Stanley</strong> &mdash; AI assistant, named for our founder, available to every owner</span> </li> </ul> <a href="#" class="tw-btn tw-btn-outline-cream tw-btn-lg">Tour the board portal →</a> </div> <div class="tw-portal-mock"> <div class="tw-portal-mock-bar"> <div class="tw-portal-mock-bar-dot" style="background:#FF6B5C"></div> <div class="tw-portal-mock-bar-dot" style="background:#FFBD3D"></div> <div class="tw-portal-mock-bar-dot" style="background:#1FC73E"></div> <div class="tw-portal-mock-bar-url">tidewater.cincwebaxis.com / board</div> </div> <div class="tw-portal-mock-body"> <div class="tw-portal-mock-side"> <div class="tw-portal-mock-side-logo">tidewater PM</div> <div class="tw-portal-mock-nav"> <div class="tw-portal-mock-nav-item active"><div class="tw-portal-mock-nav-item-dot"></div>Dashboard</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>Financials</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>Violations</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>ARC Requests</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>Mgmt Plan</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>Documents</div> <div class="tw-portal-mock-nav-item"><div class="tw-portal-mock-nav-item-dot"></div>Resources</div> </div> </div> <div class="tw-portal-mock-main"> <div class="tw-portal-mock-greeting">Good morning, Marcia.</div> <div class="tw-portal-mock-sub">Wynbrook HOA · Board Treasurer · 220 homes</div> <div class="tw-portal-mock-cards"> <div class="tw-portal-mock-card"> <div class="tw-portal-mock-card-label">Operating Acct</div> <div class="tw-portal-mock-card-num">$184,420</div> <div class="tw-portal-mock-card-trend">▲ on budget</div> </div> <div class="tw-portal-mock-card"> <div class="tw-portal-mock-card-label">Reserve</div> <div class="tw-portal-mock-card-num teal">$612,910</div> <div class="tw-portal-mock-card-trend">98% funded</div> </div> <div class="tw-portal-mock-card"> <div class="tw-portal-mock-card-label">Delinquent</div> <div class="tw-portal-mock-card-num">3 owners</div> <div class="tw-portal-mock-card-trend" style="color:var(--tw-clay)">2 in attorney review</div> </div> <div class="tw-portal-mock-card"> <div class="tw-portal-mock-card-label">Open ARC</div> <div class="tw-portal-mock-card-num">5</div> <div class="tw-portal-mock-card-trend">3 awaiting board</div> </div> </div> <div class="tw-portal-mock-stanley"> <div class="tw-portal-mock-stanley-avatar">S</div> <div> <div class="tw-portal-mock-stanley-name">Stanley · AI assistant</div> <div class="tw-portal-mock-stanley-text">Fire alarm testing is scheduled in 12 days. I&rsquo;ve drafted resident notice — review?</div> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Portal.astro", void 0);

const $$Leadership = createComponent(($$result, $$props, $$slots) => {
  const leaders = [
    { initials: "MG", name: "Marc Greenberg", creds: "CMCA \xB7 AMS \xB7 PCAM", title: "President \u2014 holds all three primary CAI management designations including the industry&rsquo;s highest individual credential." },
    { initials: "GW", name: "Gail Windisch", creds: "CMCA \xB7 AMS \xB7 PCAM", title: "Senior Director of Operations \xB7 Former CAI Chesapeake Chapter President, Secretary, and VP. 20+ years with Tidewater." },
    { initials: "JJ", name: "Joe Jordan", creds: "CMCA \xB7 AMS \xB7 PCAM", title: "Director of Quality Assurance \xB7 Former CAI Chesapeake Chapter President (2012). Leads our compliance oversight team." },
    { initials: "JO", name: "Jessica Ogle", creds: "CMCA", title: "Director of Association Financial Management \xB7 15+ years at Tidewater. Backed by an MBA, CPA Controller." }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-cream" id="leadership"> <div class="tw-container"> <div class="tw-section-head-left"> <div class="tw-eyebrow">Leadership You Can Reach</div> <h2 class="tw-section-title">Credentials uncommon at our size. <em>Tenure even rarer.</em></h2> <p class="tw-section-lede">Tidewater pays for every CAI designation upfront &mdash; for managers, administrative staff, and accountants. The result is a leadership team whose qualifications are visible, verifiable, and rooted in regional industry leadership.</p> </div> <div class="tw-lead-grid"> ${leaders.map((l) => renderTemplate`<article class="tw-lead-card"> <div class="tw-lead-avatar">${l.initials}</div> <h3 class="tw-lead-name">${l.name}</h3> <div class="tw-lead-creds">${l.creds}</div> <p class="tw-lead-title">${unescapeHTML(l.title)}</p> </article>`)} </div> <div class="tw-cai-banner"> <div class="tw-cai-banner-icon">CAI<br>LED</div> <div class="tw-cai-banner-text"> <h4>Two Tidewater leaders have served as CAI Chesapeake Chapter President.</h4> <p>No management company in the Maryland market is more deeply embedded in the industry&rsquo;s professional leadership structure. The QA Director who oversees compliance for your community is also the person who has helped shape the standards of the profession.</p> </div> </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Leadership.astro", void 0);

export { $$Hero as $, $$Pains as a, $$Tiers as b, $$HandsOn as c, $$Portal as d, $$Leadership as e };
