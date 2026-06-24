export const EMAIL_CONFIG = {
  brand: {
    name: "Tidewater Companies",
    url:  "https://tidewaterproperty.com",
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
  // ───────────────────────────────────────────────────────────────────────────
  // PER-INTENT EMAIL CONTENT  (intake form → /api/lead)
  // Everything that should differ by form type is here. The client's spreadsheet
  // maps to these four fields per intent. Each intent key matches the form's
  // intent id (proposal | rental | vendor | service | general). `default` is the
  // fallback for any unknown intent.
  //   • label          → staff-notification heading + used in subject
  //   • notifySubject  → subject line of the STAFF notification email
  //   • confirmSubject → subject line of the email the SUBMITTER receives
  //   • confirmBody    → body (HTML) of the email the SUBMITTER receives
  // (Recipient routing per intent lives in `routes` above.)
  // ───────────────────────────────────────────────────────────────────────────
  intents: {
    proposal: {
      label: "Proposal Request",
      notifySubject: (who: string) => `New proposal request — ${who}`,
      confirmSubject: "We received your proposal request — Tidewater Companies",
      confirmBody: (firstName: string, siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks for reaching out about management for your community. Our team will review your request and follow up within one business day.</p>
        <p>In the meantime, you can browse our resources at <a href="${siteUrl}/resources">${siteUrl}/resources</a>.</p>
        <p>— The Tidewater Team</p>`,
    },
    rental: {
      label: "Rental Management Inquiry",
      notifySubject: (who: string) => `New rental management inquiry — ${who}`,
      confirmSubject: "We received your rental management request — Tidewater Companies",
      confirmBody: (firstName: string, siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks for reaching out about managing your rental property. Our rental team will follow up within one business day.</p>
        <p>In the meantime, you can browse our resources at <a href="${siteUrl}/resources">${siteUrl}/resources</a>.</p>
        <p>— The Tidewater Team</p>`,
    },
    vendor: {
      label: "Vendor / Bid Submission",
      notifySubject: (who: string) => `New vendor submission — ${who}`,
      confirmSubject: "We received your submission — Tidewater Companies",
      confirmBody: (firstName: string, _siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks for your interest in working with Tidewater. Our operations team will review your submission and reach out if there's a fit.</p>
        <p>— The Tidewater Team</p>`,
    },
    service: {
      label: "Service Request",
      notifySubject: (who: string) => `New service request — ${who}`,
      confirmSubject: "We received your service request — Tidewater Companies",
      confirmBody: (firstName: string, _siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks — your request has been logged and routed to your community manager. We'll follow up within one business day.</p>
        <p>If this is an emergency, please call <strong>(443) 548-0191</strong>.</p>
        <p>— The Tidewater Team</p>`,
    },
    general: {
      label: "General Inquiry",
      notifySubject: (who: string) => `New general inquiry — ${who}`,
      confirmSubject: "We received your message — Tidewater Companies",
      confirmBody: (firstName: string, _siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks for reaching out. Our team will get back to you within one business day.</p>
        <p>— The Tidewater Team</p>`,
    },
    default: {
      label: "Inquiry",
      notifySubject: (who: string) => `New inquiry — ${who}`,
      confirmSubject: "We received your message — Tidewater Companies",
      confirmBody: (firstName: string, _siteUrl: string) =>
        `<p>Hi ${firstName},</p>
        <p>Thanks for reaching out. Our team will get back to you within one business day.</p>
        <p>— The Tidewater Team</p>`,
    },
  } as Record<string, {
    label: string;
    notifySubject: (who: string) => string;
    confirmSubject: string;
    confirmBody: (firstName: string, siteUrl: string) => string;
  }>,
  copy: {
    contact: {
      confirmSubject: "We received your message — Tidewater Companies",
      confirmBody: (name: string, _siteUrl: string) =>
        `<p>Hi ${name},</p>
        <p>Thanks for reaching out. Our team will be in touch within one business day.</p>
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
