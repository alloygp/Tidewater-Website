import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_B8N826LR.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_H5ptLu_M.mjs';
import { $ as $$Topbar, a as $$Header, b as $$Footer } from '../chunks/Footer_BG5QOMJt.mjs';
import { $ as $$Hero, a as $$Pains, b as $$Tiers, c as $$HandsOn, d as $$Portal } from '../chunks/Portal_uSJ-Q_iv.mjs';
import { $ as $$TrustBar, a as $$Mission, b as $$Testimonials } from '../chunks/Testimonials_CiYmcXsn.mjs';
import { $ as $$Leadership } from '../chunks/Leadership_DiSRXxgG.mjs';
import { $ as $$CTA } from '../chunks/CTA_B0qIY4uZ.mjs';
export { renderers } from '../renderers.mjs';

const $$HoaManagement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tidewater Companies \u2014 HOA Management for the Mid-Atlantic", "description": "Family-owned HOA, condo, and co-op management for Maryland, DC, Virginia, Pennsylvania, Delaware, and West Virginia since 1989. AAMC\xAE accredited." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Topbar", $$Topbar, { "variant": "default" })} ${renderComponent($$result2, "Header", $$Header, { "activeNav": "hoa" })} ${renderComponent($$result2, "Hero", $$Hero, { "config": { heroWidget: "fitcheck" } })} ${renderComponent($$result2, "TrustBar", $$TrustBar, {})} ${renderComponent($$result2, "Pains", $$Pains, {})} ${renderComponent($$result2, "Tiers", $$Tiers, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "HandsOn", $$HandsOn, {})} ${renderComponent($$result2, "Portal", $$Portal, {})} ${renderComponent($$result2, "Leadership", $$Leadership, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/pages/hoa-management.astro", void 0);

const $$file = "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/pages/hoa-management.astro";
const $$url = "/hoa-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HoaManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
