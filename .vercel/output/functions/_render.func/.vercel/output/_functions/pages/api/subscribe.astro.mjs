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
    const email = data.get("email")?.toString().trim() ?? "";
    const firstName = data.get("firstName")?.toString().trim() ?? "";
    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required." }),
        { status: 400 }
      );
    }
    if (EMAIL_CONFIG.mailchimp.enabled) {
      try {
        await mailchimp.lists.addListMember(undefined                                     , {
          email_address: email,
          status: "subscribed",
          merge_fields: { FNAME: firstName }
        });
      } catch (err) {
        const alreadyExists = err?.response?.body?.title === "Member Exists";
        if (!alreadyExists) {
          console.error("Mailchimp subscribe error:", err?.response?.body ?? err);
          return new Response(
            JSON.stringify({ error: "Could not subscribe. Please try again." }),
            { status: 500 }
          );
        }
      }
    }
    const { error: welcomeError } = await resend.emails.send({
      from: EMAIL_CONFIG.from.hello,
      to: email,
      subject: EMAIL_CONFIG.copy.subscribe.confirmSubject,
      html: EMAIL_CONFIG.copy.subscribe.confirmBody(firstName)
    });
    if (welcomeError) console.error("Resend welcome error:", welcomeError);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Subscribe API error:", err);
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
