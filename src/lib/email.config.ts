export const EMAIL_CONFIG = {
  brand: {
    name: "Tidewater Companies",
    url:  "https://www.tidewaterproperty.com",
    team: "The Tidewater Team",
  },
  from: {
    notifications: "Tidewater <notifications@tidewaterproperty.com>",
    hello:         "Tidewater <hello@tidewaterproperty.com>",
  },
  notify: [
    "info@tidewaterproperty.com",
  ],
  mailchimp: {
    enabled:     true,
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
        <p>Thanks for reaching out. A regional manager from your area will be in touch within one business day — not a sales rep.</p>
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
