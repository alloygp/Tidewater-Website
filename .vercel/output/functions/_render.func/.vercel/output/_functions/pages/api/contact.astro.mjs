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
    const message = data.get("message")?.toString().trim() ?? "";
    const subscribe = data.get("subscribe") === "true";
    const source = data.get("source")?.toString().trim() ?? "";
    if (!email || !name || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required." }),
        { status: 400 }
      );
    }
    const { error: notifyError } = await resend.emails.send({
      from: EMAIL_CONFIG.from.notifications,
      to: EMAIL_CONFIG.notify,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p><strong>Subscribe:</strong> ${subscribe ? "Yes" : "No"}</p>
        ${source ? `<hr><p style="color:#888;font-size:13px"><strong>Source</strong><br>${source.replace(/\n/g, "<br>")}</p>` : ""}
      `
    });
    if (notifyError) console.error("Resend notify error:", notifyError);
    const { error: confirmError } = await resend.emails.send({
      from: EMAIL_CONFIG.from.hello,
      to: email,
      subject: EMAIL_CONFIG.copy.contact.confirmSubject,
      html: EMAIL_CONFIG.copy.contact.confirmBody(name, EMAIL_CONFIG.brand.url)
    });
    if (confirmError) console.error("Resend confirm error:", confirmError);
    if (subscribe && EMAIL_CONFIG.mailchimp.enabled) {
      try {
        await mailchimp.lists.addListMember(undefined                                     , {
          email_address: email,
          status: "subscribed",
          merge_fields: { FNAME: name.split(" ")[0] }
        });
      } catch (err) {
        console.error("Mailchimp opt-in error:", err?.response?.body ?? err);
      }
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
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
