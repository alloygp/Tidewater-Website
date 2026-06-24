export const EMAIL_CONFIG = {
  brand: {
    name: "Tidewater Companies",
    url:  "https://www.tidewaterproperty.com",
    team: "The Tidewater Team",
  },
  // All outbound mail sends from notifications@, displayed as the company name.
  from: {
    notifications: "Tidewater Companies <notifications@tidewaterproperty.com>",
    hello:         "Tidewater Companies <notifications@tidewaterproperty.com>",
  },
  // Replies to any of our emails route to a monitored inbox.
  replyTo: "info@tidewaterproperty.com",
  // Default inbox — used by unknown intents (fallback). info@ + Alloy admin.
  notify: [
    "info@tidewaterproperty.com",
    "admin@alloygp.co",
  ],
  // Per-intent routing — the intake form sends `intent`; /api/lead routes here.
  // admin@alloygp.co is CC'd on every form. Each value can be one address or several.
  routes: {
    proposal: ["gwindisch@tidewaterproperty.com", "bjordan@tidewaterproperty.com", "admin@alloygp.co"], // HOA/condo board
    rental:   ["cbishop@tidewaterproperty.com", "bjordan@tidewaterproperty.com", "admin@alloygp.co"],   // rental owners
    service:  ["logles@tidewaterproperty.com", "admin@alloygp.co"],                                     // resident requests
    general:  ["bjordan@tidewaterproperty.com", "info@tidewaterproperty.com", "admin@alloygp.co"],      // catch-all
    contact:  ["bjordan@tidewaterproperty.com", "info@tidewaterproperty.com", "admin@alloygp.co"],      // /api/contact
    // vendor: no inbox assigned yet → falls back to `notify` (info@ + admin)
  } as Record<string, string[]>,
  mailchimp: {
    enabled:     false, // OFF until MAILCHIMP_* keys are added to Vercel — flip to true then
    defaultTags: ["website-lead"],
  },
  copy: {
    contact: {
      confirmSubject: "We received your message — Tidewater Companies",
      confirmBody: (name: string, _siteUrl: string) =>
        `<p>Hi ${name},</p>
        <p>Thanks for reaching out. A regional manager will be in touch within one business day.</p>
        <p>— The Tidewater Team</p>`,
    },
    lead: {
      confirmSubject: "We received your proposal request — Tidewater Companies",
      confirmBody: (name: string, _company: string, siteUrl: string) =>
        `<p>Hi ${name},</p>
        <p>Thanks for reaching out. A regional manager from your area will be in touch within one business day.</p>
        <p>In the meantime, you can browse our resources at <a href="${siteUrl}/resources">${siteUrl}/resources</a>.</p>
        <p>— The Tidewater Team</p>`,
    },
    subscribe: {
      confirmSubject: "You're subscribed — Tidewater Board Memo",
      confirmBody: (name: string) =>
        `<p>Hi${name ? ` ${name}` : ""},</p>
        <p>You're on the list. The monthly board memo lands the first Tuesday of each month — practical HOA governance, Maryland law updates, and reserve study deep-dives. No fluff.</p>
        <p>— The Tidewater Team</p>`,
    },
  },
};
