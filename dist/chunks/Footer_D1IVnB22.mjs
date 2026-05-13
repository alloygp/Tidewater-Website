import { c as createComponent, b as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate, d as createAstro, m as maybeRenderHead, r as renderComponent, F as Fragment } from './astro/server_B8N826LR.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="stylesheet" href="/styles.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Topbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topbar;
  const { variant = "default" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tw-topbar"> <div class="tw-topbar-inner"> ${variant === "homeowner" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="tw-topbar-left"> <a href="#"><span class="tw-topbar-em">Pay Assessment</span></a> <span style="opacity:.4">·</span> <a href="#">Submit a Request</a> <span style="opacity:.4">·</span> <a href="#">Find My Community</a> </div> <div class="tw-topbar-right"> <a href="#"><span class="tw-topbar-em">Emergency:</span> 24/7/365</a> <a href="#">(443) 548-0191</a> <a href="#" class="tw-topbar-login">Owner Login →</a> </div> ` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="tw-topbar-left"> <span><strong>AAMC®</strong> Accredited Association Management Company</span> <span style="opacity:.5">·</span> <span>Family-Owned Since 1989</span> </div> <div class="tw-topbar-right"> <a href="#"><span class="tw-topbar-em">Emergency:</span> 24/7/365</a> <a href="#">(443) 548-0191</a> <a href="#">applications@tidewaterproperty.com</a> </div> ` })}`} </div> </div>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Topbar.astro", void 0);

const $$Astro = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { activeNav = null } = Astro2.props;
  const navItems = [
    { label: "About", menu: "about", href: "/about/" },
    { label: "Management", menu: "mgmt", href: "/hoa-management/", match: ["mgmt", "hoa", "condo"] },
    { label: "Maintenance", href: "/maintenance/" },
    { label: "Real Estate", href: "/real-estate/" },
    { label: "Resources", href: "/resources/" }
  ];
  const isActive = (n) => {
    if (!activeNav) return false;
    if (n.menu && n.menu === activeNav) return true;
    if (n.match && n.match.includes(activeNav)) return true;
    return false;
  };
  return renderTemplate`${maybeRenderHead()}<header class="tw-header"> <div class="tw-header-inner"> <a class="tw-header-logo" href="/"> <img src="/assets/logo-main-black.svg" alt="Tidewater Companies"> </a> <nav class="tw-header-nav" id="tw-nav"> <!-- About --> <div class="tw-nav-item" data-menu="about"> <a href="/about/"${addAttribute(`tw-header-nav-link ${isActive(navItems[0]) ? "is-active" : ""}`, "class")}>
About<span class="tw-chev">▾</span> </a> <div class="tw-megamenu tw-megamenu-grid"> <a href="/about/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg> </div> <div> <div class="tw-mega-title">Our Story</div> <div class="tw-mega-body">Family-owned in the Mid-Atlantic since 1989.</div> </div> </a> <a href="/about/leadership/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line><circle cx="9" cy="6" r="2.5" fill="currentColor"></circle><circle cx="14" cy="12" r="2.5" fill="currentColor"></circle><circle cx="7" cy="18" r="2.5" fill="currentColor"></circle></svg> </div> <div> <div class="tw-mega-title">Leadership</div> <div class="tw-mega-body">PCAM-credentialed team and chapter presidents.</div> </div> </a> <a href="/service-areas/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="M7 14l4-4 4 4 5-6"></path></svg> </div> <div> <div class="tw-mega-title">Service Areas</div> <div class="tw-mega-body">MD, DC, VA, PA, DE, and West Virginia.</div> </div> </a> <a href="/careers/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="1"></rect><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line><line x1="9" y1="13" x2="9.01" y2="13"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg> </div> <div> <div class="tw-mega-title">Careers</div> <div class="tw-mega-body">Join an independent, board-first management firm.</div> </div> </a> </div> </div> <!-- Management --> <div class="tw-nav-item" data-menu="mgmt"> <a href="/hoa-management/"${addAttribute(`tw-header-nav-link ${isActive(navItems[1]) ? "is-active" : ""}`, "class")}>
Management<span class="tw-chev">▾</span> </a> <div class="tw-megamenu tw-megamenu-2col"> <a href="#" class="tw-mega-feature"> <div class="tw-mega-feature-img"> <img src="/assets/hero-aerial.jpg" alt="HOA Board Resource Library"> <div class="tw-mega-feature-overlay"></div> </div> <div class="tw-mega-feature-body"> <div class="tw-mega-feature-eyebrow">Free for Boards</div> <div class="tw-mega-feature-title">The HOA Board Playbook</div> <div class="tw-mega-feature-sub">Our 32-page guide to reserves, vendor compliance, and meeting cadence — battle-tested across 300+ Mid-Atlantic communities.</div> <div class="tw-mega-feature-cta">Download the playbook →</div> </div> </a> <div class="tw-mega-list"> <a href="/hoa-management/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"></path><path d="M9 12l2 2 4-4"></path></svg> </div> <div> <div class="tw-mega-title">HOA Management</div> <div class="tw-mega-body">Full-service management for homeowner associations.</div> </div> </a> <a href="/condo-association-management/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="1"></rect><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line><line x1="9" y1="13" x2="9.01" y2="13"></line><line x1="15" y1="13" x2="15.01" y2="13"></line><line x1="9" y1="17" x2="15" y2="17"></line></svg> </div> <div> <div class="tw-mega-title">Condo Association Management</div> <div class="tw-mega-body">High-rise, mid-rise, and garden-style condo expertise.</div> </div> </a> <a href="/rental-property-management/" class="tw-mega-item"> <div class="tw-mega-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"></path><path d="M7 14l4-4 4 4 5-6"></path></svg> </div> <div> <div class="tw-mega-title">Rental Property Management</div> <div class="tw-mega-body">Single-family and small-multifamily rental management.</div> </div> </a> </div> </div> </div> <!-- Simple links --> <div class="tw-nav-item"> <a href="/maintenance/" class="tw-header-nav-link">Maintenance</a> </div> <div class="tw-nav-item"> <a href="/real-estate/" class="tw-header-nav-link">Real Estate</a> </div> <div class="tw-nav-item"> <a href="/resources/" class="tw-header-nav-link">Resources</a> </div> </nav> <div class="tw-header-actions"> <a href="#" class="tw-header-login"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
Owner Login
</a> <a href="#contact" class="tw-btn tw-btn-primary tw-btn-pill">Request a Proposal</a> <button class="tw-mobile-toggle" id="tw-mobile-toggle" aria-label="Open menu"> <span></span><span></span><span></span> </button> </div> </div> </header> `;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Header.astro", void 0);

const $$TrustBar = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { icon: "AAMC", label: "AAMC\xAE Accredited", sub: "CAI's highest company credential", cls: "" },
    { icon: "PCAM", label: "PCAM Leadership", sub: "President holds CMCA, AMS, PCAM", cls: "tw-trust-icon-gold" },
    { icon: "CAI", label: "Two CAI Chapter Presidents", sub: "Chesapeake Chapter leaders", cls: "tw-trust-icon-sage" },
    { icon: "A+", label: "A+ BBB Rating", sub: "Backed by 35+ years of work", cls: "tw-trust-icon-clay" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="tw-trust-bar" aria-label="Credentials and accreditations"> <div class="tw-trust-inner"> <div class="tw-trust-label">Trusted &amp; credentialed by</div> <div class="tw-trust-items"> ${items.map((it) => renderTemplate`<div class="tw-trust-item"> <div${addAttribute(`tw-trust-icon ${it.cls}`, "class")}>${it.icon}</div> <div class="tw-trust-item-text"> <div>${it.label}</div> <div class="tw-trust-item-sub">${it.sub}</div> </div> </div>`)} </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/TrustBar.astro", void 0);

const $$Mission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-cream" id="about"> <div class="tw-container tw-mission-grid"> <div class="tw-mission-image"> <img src="/assets/hero-mission.jpg" alt="Family-owned community in front of their home"> <div class="tw-mission-image-overlay"> <p class="tw-mission-image-overlay-quote">&ldquo;Still family-owned. Still independent. Still here.&rdquo;</p> <div class="tw-mission-image-overlay-meta">Stanley &amp; Marc Greenberg</div> </div> </div> <div class="tw-mission-copy"> <div class="tw-eyebrow">Who We Are</div> <h2 class="tw-section-title">More than management.<br><em>Your trusted community resource.</em></h2> <p class="tw-section-lede" style="margin-bottom:16px">
Stanley Greenberg founded Tidewater in 1989. His son Marc &mdash; CMCA, AMS, PCAM &mdash; helped grow the company into a regional, full-service operation while keeping it family-owned. As regional competitors are acquired by national firms and private equity, we&rsquo;ve stayed independent on purpose.
</p> <p class="tw-section-lede">
The way that translates: open-door ownership, accessible managers, and the kind of decisions only people who answer to their own neighborhood make.
</p> <div class="tw-stats"> <div class="tw-stat"><div class="tw-stat-num">35+</div><div class="tw-stat-label">Years Independent</div></div> <div class="tw-stat"><div class="tw-stat-num">300+</div><div class="tw-stat-label">Communities</div></div> <div class="tw-stat"><div class="tw-stat-num">~75</div><div class="tw-stat-label">In-house Team</div></div> <div class="tw-stat"><div class="tw-stat-num">2</div><div class="tw-stat-label">Generations Family-Owned</div></div> </div> </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Mission.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const items = [
    { quote: "Tidewater knows our community. We never feel like an account number \u2014 they answer when we call, and they show up.", name: "Board President", initials: "MS", meta: "Towson HOA \xB7 220 homes" },
    { quote: "The transition from our previous manager was smoother than we expected. Their proactive approach has saved us money and headaches.", name: "Treasurer", initials: "DR", meta: "Anne Arundel Condo \xB7 88 units" },
    { quote: "Our manager has been with us six years now. After three companies in five years, that stability has been the biggest gift.", name: "Board Director", initials: "AB", meta: "Howard County HOA \xB7 410 homes" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="tw-section tw-section-dark"> <div class="tw-container"> <div class="tw-section-head-left"> <div class="tw-eyebrow tw-eyebrow-gold">Voices From Our Communities</div> <h2 class="tw-section-title tw-section-title-light">The way we work — <em class="gold">everyday.</em></h2> </div> <div class="tw-quote-grid"> ${items.map((t) => renderTemplate`<figure class="tw-quote-card"> <div class="tw-quote-stars">★★★★★</div> <blockquote>&ldquo;${t.quote}&rdquo;</blockquote> <figcaption class="tw-quote-foot"> <div class="tw-quote-avatar">${t.initials}</div> <div> <div class="tw-quote-name">${t.name}</div> <div class="tw-quote-meta">${t.meta}</div> </div> </figcaption> </figure>`)} </div> </div> </section>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Testimonials.astro", void 0);

const $$CTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="tw-cta" id="contact"> <div class="tw-cta-inner"> <div> <div class="tw-eyebrow">Request a Proposal</div> <h2 class="tw-cta-title">Let&rsquo;s talk about your community.</h2> <p class="tw-cta-body">Tell us a little about your association and a manager from your region will be in touch within one business day.</p> <ul class="tw-cta-points"> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>One-business-day response from a regional manager</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Free, no-obligation proposal &amp; transition timeline</li> <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>Apples-to-apples comparison vs. your current company</li> </ul> </div> <form class="tw-cta-form" id="proposal-form"> <div> <h3 class="tw-cta-form-title">Get a proposal</h3> <p class="tw-cta-form-sub">All fields are required. We&rsquo;ll never share your information.</p> </div> <div class="tw-row-2"> <div class="tw-field"><label>First name</label><input placeholder="Marcia"></div> <div class="tw-field"><label>Last name</label><input placeholder="Sullivan"></div> </div> <div class="tw-field"><label>Board email</label><input type="email" placeholder="treasurer@yourcommunity.org"></div> <div class="tw-row-2"> <div class="tw-field"><label>Community name</label><input placeholder="Wynbrook HOA"></div> <div class="tw-field"> <label>Number of homes</label> <select> <option value="" disabled selected>Select…</option> <option>Under 50</option> <option>50–150</option> <option>150–500</option> <option>500+</option> </select> </div> </div> <div class="tw-field"> <label>Service interest</label> <select> <option value="full">Full Service Management</option> <option>Flex Service</option> <option>Financial Only</option> <option>Developer Program</option> <option>Not sure yet — I&rsquo;d like to talk it through</option> </select> </div> <button class="tw-btn tw-btn-primary tw-btn-block tw-btn-lg" type="submit">Request my proposal</button> <p class="tw-field-fine">Or call <strong>(443) 548-0191</strong> · 24/7 emergency line for current communities</p> </form> </div> </section> `;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/CTA.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const offices = [
    { city: "Owings Mills, MD", sub: "Headquarters \xB7 3600 Crondall Lane" },
    { city: "Silver Spring, MD", sub: "Washington DC Metro" },
    { city: "Eastern Shore, MD", sub: "Delmarva regional office" }
  ];
  const services = [
    "Anne Arundel",
    "Annapolis",
    "Baltimore",
    "Baltimore County",
    "Bel Air",
    "Bethesda",
    "Bowie",
    "Cambridge",
    "Carroll County",
    "Catonsville",
    "Charles County",
    "Cockeysville",
    "College Park",
    "Columbia",
    "Crofton",
    "Easton",
    "Ellicott City",
    "Frederick",
    "Gaithersburg",
    "Germantown",
    "Glen Burnie",
    "Greenbelt",
    "Hagerstown",
    "Hanover",
    "Howard County",
    "Hunt Valley",
    "Hyattsville",
    "Laurel",
    "Montgomery County",
    "Ocean City",
    "Olney",
    "Owings Mills",
    "Pikesville",
    "Potomac",
    "Prince George's County",
    "Reisterstown",
    "Rockville",
    "Salisbury",
    "Severna Park",
    "Silver Spring",
    "Towson",
    "Washington DC",
    "Wheaton",
    "White Marsh",
    "Northern Virginia",
    "Wilmington, DE",
    "Rehoboth, DE"
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="tw-footer"> <div class="tw-container"> <div class="tw-footer-grid"> <div class="tw-footer-brand"> <img src="/assets/logo-main-white.svg" alt="Tidewater"> <p>Family-owned. Community-focused. Always moving forward. Hands-on management and personalized insight for the Mid-Atlantic since 1989.</p> <div class="tw-footer-social"> <a href="#" aria-label="LinkedIn">in</a> <a href="#" aria-label="Facebook">f</a> <a href="#" aria-label="Instagram">ig</a> </div> </div> <div> <h4>Companies</h4> <ul> <li><a href="/hoa-management/">HOA Management</a></li> <li><a href="/condo-association-management/">Condo Association Management</a></li> <li><a href="#">Rental Property Management</a></li> <li><a href="#">Tidewater Property Maintenance</a></li> <li><a href="#">Tidewater Realty Group</a></li> </ul> </div> <div> <h4>Resources</h4> <ul> <li><a href="#">Owner Login</a></li> <li><a href="#">Board Education</a></li> <li><a href="#">Insights &amp; Blog</a></li> <li><a href="#">Careers</a></li> <li><a href="#">Pay Your Assessment</a></li> </ul> </div> <div> <h4>Office Locations</h4> <ul> ${offices.map((o) => renderTemplate`<li style="display:block"> <strong style="color:var(--tw-cream);font-weight:600">${o.city}</strong><br> <span style="font-size:13px;color:#9d9b94">${o.sub}</span> </li>`)} </ul> </div> </div> </div> <div class="tw-footer-areas"> <div class="tw-footer-areas-inner"> <span class="tw-footer-areas-label">Service Area</span> <span class="tw-footer-areas-list"> ${services.map((s, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>${s}</span> ${i < services.length - 1 && renderTemplate`<span style="margin:0 6px;color:#5a5851">·</span>`}` })}`)} </span> </div> </div> <div class="tw-footer-base"> <div class="tw-footer-base-inner"> <span>© 2026 Tidewater Companies. All rights reserved. AAMC® · A+ BBB · CAI Member.</span> <div> <a href="#">Privacy Policy</a> <a href="#">Terms</a> <a href="#">Accessibility</a> <a href="#">Sitemap</a> </div> </div> </div> </footer>`;
}, "/sessions/gallant-eager-hamilton/mnt/Tidewater Website/src/components/Footer.astro", void 0);

export { $$BaseLayout as $, $$Topbar as a, $$Header as b, $$TrustBar as c, $$Mission as d, $$Testimonials as e, $$CTA as f, $$Footer as g };
