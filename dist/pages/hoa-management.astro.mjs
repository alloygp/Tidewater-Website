import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BaRvc-HO.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Bth8qSTN.mjs';
import { S as SITE, $ as $$Topbar, a as $$Header, b as $$Footer } from '../chunks/Footer_BcuuNuuY.mjs';
import { $ as $$Hero, a as $$Pains, b as $$Tiers, c as $$HandsOn, d as $$Portal } from '../chunks/Portal_DK-fIPL-.mjs';
import { $ as $$TrustBar, a as $$Mission, b as $$Testimonials } from '../chunks/Testimonials_D2P3uHnc.mjs';
import { $ as $$Leadership } from '../chunks/Leadership_FBwPe5P4.mjs';
import { $ as $$CTA } from '../chunks/CTA_BLOiD6D3.mjs';
import { s as serviceSchema, b as breadcrumbSchema, $ as $$Breadcrumb } from '../chunks/schema_as_xG0ER.mjs';
export { renderers } from '../renderers.mjs';

const $$HoaManagement = createComponent(($$result, $$props, $$slots) => {
  const pageUrl = `${SITE.url}/hoa-management`;
  const pageDesc = "Family-owned HOA, condo, and co-op management for Maryland, DC, Virginia, Pennsylvania, Delaware, and West Virginia since 1989. AAMC\xAE accredited.";
  const schemas = [
    serviceSchema({
      name: "HOA & Community Association Management",
      description: pageDesc,
      url: pageUrl
    }),
    breadcrumbSchema([
      { name: "Home", url: SITE.url + "/" },
      { name: "HOA Management", url: pageUrl }
    ])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Tidewater Companies \u2014 HOA Management for the Mid-Atlantic", "description": pageDesc, "pageSchema": schemas }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Topbar", $$Topbar, { "variant": "default" })} ${renderComponent($$result2, "Header", $$Header, { "activeNav": "hoa" })} ${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "crumbs": [{ label: "Management", href: "/hoa-management/" }, { label: "HOA Management" }] })} ${renderComponent($$result2, "Hero", $$Hero, { "config": { heroWidget: "fitcheck" } })} ${renderComponent($$result2, "TrustBar", $$TrustBar, {})} ${renderComponent($$result2, "Pains", $$Pains, {})} ${renderComponent($$result2, "Tiers", $$Tiers, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "HandsOn", $$HandsOn, {})} ${renderComponent($$result2, "Portal", $$Portal, {})} ${renderComponent($$result2, "Leadership", $$Leadership, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "CTA", $$CTA, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/sessions/stoic-loving-wright/mnt/Tidewater Website/src/pages/hoa-management.astro", void 0);

const $$file = "/sessions/stoic-loving-wright/mnt/Tidewater Website/src/pages/hoa-management.astro";
const $$url = "/hoa-management";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HoaManagement,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
