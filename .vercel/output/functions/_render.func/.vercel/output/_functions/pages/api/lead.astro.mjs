import { Resend } from 'resend';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { E as EMAIL_CONFIG } from '../../chunks/email.config_CD5lZId1.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
mailchimp.setConfig({
  apiKey: undefined                                 ,
  server: undefined                                       
});
const POST = async ({ request }) => {
  try {
    const data = await request.formData();
    const honeypot = data.get("website")?.toString() ?? "";
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const company = data.get("company")?.toString().trim() ?? "";
    const source = data.get("source")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const community = data.get("community")?.toString().trim() ?? "";
    const role = data.get("role")?.toString().trim() ?? "";
    const communitySize = data.get("communitySize")?.toString().trim() ?? "";
    const timing = data.get("timing")?.toString().trim() ?? "";
    const propertyType = data.get("propertyType")?.toString().trim() ?? "";
    const notes = data.get("notes")?.toString().trim() ?? "";
    if (!email || !name) {
      return new Response(
        JSON.stringify({ error: "Name and email are required." }),
        { status: 400 }
      );
    }
    const { error: notifyError } = await resend.emails.send({
      from: EMAIL_CONFIG.from.notifications,
      to: EMAIL_CONFIG.notify,
      subject: `New lead: ${company || community || name}`,
      html: `
        <h2>New Lead Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${community ? `<p><strong>Community:</strong> ${community}</p>` : ""}
        ${role ? `<p><strong>Role:</strong> ${role}</p>` : ""}
        ${communitySize ? `<p><strong>Community Size:</strong> ${communitySize}</p>` : ""}
        ${timing ? `<p><strong>Timing:</strong> ${timing}</p>` : ""}
        ${propertyType ? `<p><strong>Property Type:</strong> ${propertyType}</p>` : ""}
        ${notes ? `<p><strong>Notes:</strong><br>${notes.replace(/\n/g, "<br>")}</p>` : ""}
        ${source ? `<hr><p style="color:#888;font-size:13px"><strong>Source</strong><br>${source.replace(/\n/g, "<br>")}</p>` : ""}
      `
    });
    if (notifyError) console.error("Resend notify error:", notifyError);
    const { error: confirmError } = await resend.emails.send({
      from: EMAIL_CONFIG.from.hello,
      to: email,
      subject: EMAIL_CONFIG.copy.lead.confirmSubject,
      html: EMAIL_CONFIG.copy.lead.confirmBody(name, company || community, EMAIL_CONFIG.brand.url)
    });
    if (confirmError) console.error("Resend confirm error:", confirmError);
    if (EMAIL_CONFIG.mailchimp.enabled) {
      try {
        await mailchimp.lists.addListMember(undefined                                     , {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: name.split(" ")[0],
            LNAME: name.split(" ").slice(1).join(" "),
            COMPANY: company || community
          },
          tags: EMAIL_CONFIG.mailchimp.defaultTags
        });
      } catch (err) {
        console.error("Mailchimp lead error:", err?.response?.body ?? err);
      }
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Lead API error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
