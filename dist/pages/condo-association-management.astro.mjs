import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_B8N826LR.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$TrustBar, b as $$Mission, c as $$Testimonials } from '../chunks/Testimonials_CzZe11hA.mjs';
import { $ as $$Topbar, a as $$Header, b as $$CTA, c as $$Footer } from '../chunks/Footer_DBY5Lpo4.mjs';
import { $ as $$Hero, a as $$Pains, b as $$Tiers, c as $$HandsOn, d as $$Portal } from '../chunks/Portal_uSJ-Q_iv.mjs';
import { $ as $$Leadership } from '../chunks/Leadership_DiSRXxgG.mjs';
export { renderers } from '../renderers.mjs';

const $$CondoAssociationManagement = createComponent(($$result, $$props, $$slots) => {
  const condoActivity = {
    title: "What condo management looks like, right now",
    sub: "Live across the high-rise, mid-rise, and garden-style condos in our portfolio \u2014 the daily operational details that protect property values and reserves.",
    footNum: "1,150+",
    footText: "condo work items resolved across the portfolio this week",
    events: [
      { time: "8:47am", region: "Baltimore, MD", cls: "teal", label: "Elevator inspection", text: "Annual cab inspection passed on Tower B \u2014 recertification filed with state before deadline." },
      { time: "8:12am", region: "Arlington, VA", cls: "gold", label: "After-hours call", text: "Unit 1404 leak escalated in 9 min \u2014 water shutoff coordinated with engineer, dry-out crew on site by 10am." },
      { time: "Yesterday", region: "Rehoboth, DE", cls: "sage", label: "Reserve study", text: "Roof replacement schedule updated; funding plan delivered to board with 3 funding scenarios." },
      { time: "Yesterday", region: "Silver Spring, MD", cls: "teal", label: "Vendor compliance", text: "HVAC contractor COI + W-9 verified before quarterly chiller service. Auto-tracked in CINC." },
      { time: "2 days ago", region: "Tysons, VA", cls: "clay", label: "Fire/life safety", text: "Sprinkler riser annual test passed. Compliance docs filed with Fairfax County." },
      { time: "2 days ago", region: "Bethesda, MD", cls: "gold", label: "Special assessment", text: "Garage waterproofing assessment communication delivered \u2014 14-day owner Q&A window opened." }
    ]
  };
  const condoPains = {
    eyebrow: "Why Condo Boards Switch to Tidewater",
    titleHtml: "Condo management is <em>different.</em> So is ours.",
    lede: "Shared mechanical systems, complex reserves, and 24/7 resident expectations make condo boards a different beast than HOAs. We resolve the issues that drive most condo management changes.",
    items: [
      { n: "01", pain: "Reserve Underfunding", head: "Reserve studies that boards can actually act on.", body: "We commission and review reserve studies on the schedule your governing docs require \u2014 and translate them into <strong>multi-scenario funding plans</strong> the board can defend to owners." },
      { n: "02", pain: "Building Systems", head: "Elevators, fire, HVAC \u2014 tracked before they fail.", body: "Annual management plans capture every inspection, recertification, and service interval for vertical transportation, life safety, chillers, and roof systems. <strong>Nothing slips past renewal.</strong>" },
      { n: "03", pain: "Owner Communication", head: "Clear comms on assessments, rules, and projects.", body: "Special assessments and capital projects come with structured owner communication \u2014 Q&A windows, FAQ documents, and town halls \u2014 so boards aren't fielding 200 emails alone." },
      { n: "04", pain: "After-Hours Crises", head: "A real manager answers when a unit floods at 2am.", body: "Our after-hours line is answered by Tidewater community managers \u2014 not an answering service. <strong>20-minute callback standard</strong>, with engineer and vendor contacts pre-loaded for every building." },
      { n: "05", pain: "Vendor Accountability", head: "COIs, W-9s, and compliance \u2014 auto-verified.", body: "Every vendor working in your building has current insurance and tax docs on file before they're cleared to bill. Quality reviews on completed work \u2014 including <strong>a second set of eyes from QA</strong>." },
      { n: "06", pain: "Financial Opacity", head: "Board-readable financials. On the 1st. Every month.", body: "Operating + reserve activity, delinquency status, and management plan progress in one report. Real-time visibility via the board portal \u2014 including secondary invoice approval if your board wants it." }
    ]
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tidewater Companies \u2014 Condo Association Management", "description": "High-rise, mid-rise, and garden-style condominium management across the Mid-Atlantic. Family-owned since 1989. AAMC\xAE accredited." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Topbar", $$Topbar, { "variant": "default" })} ${renderComponent($$result2, "Header", $$Header, { "activeNav": "condo" })} ${renderComponent($$result2, "Hero", $$Hero, { "config": {
    eyebrow: "For Condo Association Boards",
    titleHtml: "Condo Management with the <em>Insight Highrises Demand.</em>",
    lede: "From 24-unit garden communities to 300-unit high-rises, our managers know the systems, reserves, and reporting that condo boards actually need. Family-owned in the Mid-Atlantic since 1989.",
    image: "/assets/highrise.jpg",
    imageAlt: "A Mid-Atlantic high-rise condominium managed by Tidewater",
    scrollLabel: "Why condo boards switch",
    heroWidget: "activity",
    activity: condoActivity
  } })} ${renderComponent($$result2, "TrustBar", $$TrustBar, {})} ${renderComponent($$result2, "Pains", $$Pains, { ...condoPains })} ${renderComponent($$result2, "Tiers", $$Tiers, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "HandsOn", $$HandsOn, {})} ${renderComponent($$result2, "Portal", $$Portal, {})} ${renderComponent($$result2, "Leadership", $$Leadership, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/pages/condo-association-management.astro", void 0);

const $$file = "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/pages/condo-association-management.astro";
const $$url = "/condo-association-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CondoAssociationManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
