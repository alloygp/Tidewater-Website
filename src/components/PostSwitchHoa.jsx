// Blog spoke — How to Switch HOA Management Companies
// URL: /blog/how-to-switch-hoa-management-companies
// Schema: Article + FAQPage + HowTo (emitted via BaseLayout pageSchema)

import { useState, useEffect } from 'react';

const SwitchIcons = {
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  cal:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  copy:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>,
  twitter: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  email:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>,
  alert:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// Reading progress bar
// ─────────────────────────────────────────────────────────────
function SwitchReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? Math.min(1, h.scrollTop / total) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div className="tw-blog-progress" style={{ transform: `scaleX(${pct})` }} />;
}

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function SwitchHero({ post }) {
  return (
    <section className="tw-blog-hero">
      <div className="tw-blog-hero-inner">
        <span className={`tw-blog-category ${post.category.tone}`}>{post.category.label}</span>

        <h1 className="tw-blog-title" dangerouslySetInnerHTML={{ __html: post.title }} />
        <p className="tw-blog-dek">{post.dek}</p>

        <div className="tw-blog-meta">
          <div className="tw-blog-meta-author">
            <div className="tw-blog-meta-avatar">{post.author.initials}</div>
            <div>
              <div className="tw-blog-meta-name">{post.author.name}</div>
              <div className="tw-blog-meta-role">{post.author.role}</div>
            </div>
          </div>
          <div className="tw-blog-meta-divider"></div>
          <div className="tw-blog-meta-item">{SwitchIcons.cal} {post.date}</div>
          <div className="tw-blog-meta-divider"></div>
          <div className="tw-blog-meta-item">{SwitchIcons.clock} {post.readTime} min read</div>
          <div className="tw-blog-share">
            <button title="Share on LinkedIn" aria-label="Share on LinkedIn">{SwitchIcons.linkedin}</button>
            <button title="Share on X" aria-label="Share on X">{SwitchIcons.twitter}</button>
            <button title="Share by email" aria-label="Share by email">{SwitchIcons.email}</button>
            <button title="Copy link" aria-label="Copy link">{SwitchIcons.copy}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SwitchCover({ post }) {
  return (
    <div className="tw-blog-cover">
      <div className="tw-blog-cover-inner">
        <img
          src="/assets/how-to-switch-hoa-management-companies.png"
          alt="HOA board members reviewing management company transition steps with structured transition timeline documents"
        />
        <div className="tw-blog-cover-paper"></div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sticky TOC
// ─────────────────────────────────────────────────────────────
function SwitchToc({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map(it => document.getElementById(it.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-110px 0px -60% 0px', threshold: 0 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  const click = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="tw-blog-toc">
      <div className="tw-blog-toc-label">In this article</div>
      <ul className="tw-blog-toc-list">
        {items.map(it => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={active === it.id ? 'is-active' : ''}
              onClick={(e) => click(e, it.id)}
            >{it.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────
// Article body
// ─────────────────────────────────────────────────────────────
function SwitchArticleBody() {
  return (
    <article className="tw-blog-article">

      <p>
        You&rsquo;re fielding complaints from homeowners, chasing your association manager for updates that never come, and spending more time managing your management company than running your community. If that sounds familiar, you&rsquo;ve probably started wondering how to switch HOA management companies &mdash; and whether the process is worth the disruption.
      </p>

      <p>
        The short answer: it is, and it&rsquo;s more manageable than most boards expect. Switching management companies follows a predictable sequence of steps, and understanding those steps up front takes most of the uncertainty out of the process. This guide walks your board through the full transition, from reviewing your current contract to handing off the keys to a new partner &mdash; including the financial and records transfer details that most guides leave out.
      </p>

      <h2 id="contract">Review Your Management Contract First</h2>

      <p>
        The first step in switching HOA management companies is reading your current management agreement, specifically the termination clause. Every management contract includes provisions for how either party can end the relationship, and those provisions define the timeline and conditions your board needs to follow.
      </p>

      <p>
        <strong>Look for four things in the contract: the required notice period, any early termination fees, the auto-renewal date, and the language governing records and financial account transfer upon termination.</strong> Most management contracts require 30 to 90 days of written notice before the termination takes effect. Some contracts include early termination penalties if you end the agreement before its natural expiration &mdash; though many do not. Auto-renewal clauses are common, so check whether your contract renews automatically on a specific date each year and whether there&rsquo;s a window during which the board must provide notice to prevent renewal.
      </p>

      <p>
        In Maryland, the management contract is between the association and the management company, not between individual board members and the firm. That means the board has the authority to terminate the agreement according to the contract&rsquo;s terms. If any provisions feel unclear, especially around financial obligations at termination, have your association&rsquo;s attorney review the contract before you take the next step. Starting with a thorough management contract review protects the board and prevents surprises later in the process.
      </p>

      <h2 id="alignment">Get Board Alignment and Vote</h2>

      <p>
        Switching management companies is a board decision, and most governing documents require a formal board vote to authorize it. Before scheduling that vote, it&rsquo;s worth having candid conversations among directors about what&rsquo;s not working and what the community needs from its next management partner.
      </p>

      <p>
        <strong>Building consensus before the formal vote prevents a split decision that could slow the process or create confusion with homeowners.</strong> Review your bylaws to confirm the vote threshold required &mdash; a simple majority is typical for vendor decisions, but your community&rsquo;s documents may specify otherwise. Document the vote in your board meeting minutes, including the reasons for the change. This creates a governance record that protects the board&rsquo;s decision.
      </p>

      <p>
        One question boards often ask: does the community need homeowner approval to change management companies? In most cases, no. Hiring and terminating a management company is a board-level decision established in the bylaws, not a matter that requires a homeowner vote. That said, always confirm against your own governing documents. Transparent communication with homeowners about the decision is good governance, even when their formal approval isn&rsquo;t required.
      </p>

      <h2 id="notice">Send Proper Notice to Your Current Company</h2>

      <p>
        Once the board votes to make a change, the next step is delivering written termination notice per your contract&rsquo;s notice requirements. This is a formal business communication, and handling it professionally sets the tone for a smoother transition.
      </p>

      <p>
        <strong>Send the notice via certified mail so you have documented proof of delivery and the date it was received.</strong> The notice should include the effective termination date (calculated from your contract&rsquo;s required notice period), a request for all association records and financial documents, and a request for a final accounting of all association funds. Be specific about what you expect returned: financial statements, bank account information, accounts receivable and payable records, governing documents, vendor contracts, and any other association property held by the management company.
      </p>

      <p>
        In Maryland, associations should confirm any state-specific notice requirements with their attorney, as provisions in the <a href="https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=grp&section=11B-112&enession=2024RS" target="_blank" rel="noopener">Maryland Homeowners Association Act</a> may apply depending on your community&rsquo;s structure. Regardless of state, keep the relationship professional throughout the notice period. Your current company will be handling association operations until the transition date, and a respectful approach makes the records handoff significantly smoother for everyone involved.
      </p>

      <div className="tw-blog-callout warning">
        <div className="tw-blog-callout-icon">{SwitchIcons.alert}</div>
        <div className="tw-blog-callout-content">
          <h4>Don&rsquo;t skip certified mail</h4>
          <p>If your current company later disputes the notice date &mdash; whether to extend the auto-renewal window or claim insufficient notice for records release &mdash; certified-mail receipts are the only proof that holds up. The $8 it costs to send is the cheapest insurance in the entire transition.</p>
        </div>
      </div>

      <h2 id="transition">What to Expect During the Transition</h2>

      <p>
        The transition period typically runs 30 to 60 days from the notice date to full handoff, and knowing what happens during that window reduces most of the anxiety boards feel about switching. An HOA management transition follows a predictable pattern once both companies are coordinating, and understanding the categories of information that need to transfer gives your board a way to track progress.
      </p>

      <p>
        <strong>Everything the outgoing company holds on behalf of your association belongs to the association &mdash; not the management company &mdash; and must be transferred in full.</strong> Here&rsquo;s what moves during a transition:
      </p>

      <p>
        <em>Financial records and accounts.</em> This is the transfer that concerns boards most, and for good reason. Operating accounts, reserve fund accounts, current-year financial statements, accounts receivable and payable records, assessment payment histories, and bank account documentation all need to move to the new company or to accounts the association controls directly. The outgoing company is required to turn over all association funds. Your board should request a full financial reconciliation before the transition closes, confirming that every dollar is accounted for and that reserve fund transfer is complete.
      </p>

      <p>
        <em>Governing documents and association records.</em> CC&amp;Rs, bylaws, amendments, board meeting minutes, architectural review files, violation records, insurance policies, and any other official association records. These are the institutional memory of your community &mdash; make sure nothing is left behind.
      </p>

      <p>
        <em>Vendor and service contracts.</em> The new management company will review all existing vendor contracts to determine which agreements transfer, which need renegotiation, and which should go out for competitive bidding. This review often uncovers cost savings or service improvements that weren&rsquo;t visible under the previous management.
      </p>

      <p>
        <em>Homeowner communication.</em> Your new management company should handle resident notification directly &mdash; updating contact information, payment portal instructions, emergency numbers, and all communication channels. An experienced management company will have a documented onboarding process that covers each of these items with a clear timeline, so homeowners know exactly what&rsquo;s changing and when.
      </p>

      <p>
        For boards working through a management transition for the first time, the <a href="https://hoaresources.caionline.org" target="_blank" rel="noopener">Community Associations Institute (CAI)</a> offers additional guidance on what boards should expect during the handoff process.
      </p>

      <figure className="tw-blog-figure">
        <div className="tw-blog-figure-image">
          <img
            src="/assets/hoa-management-transition-community.png"
            alt="Residential community common area representing an HOA management transition"
          />
        </div>
      </figure>

      <h2 id="evaluate">How to Evaluate Your Next Management Company</h2>

      <p>
        Switching only works if you switch to the right partner, so knowing what to look for before you start interviewing companies saves time and prevents repeating the same problems. Use this as a transition checklist when evaluating candidates:
      </p>

      <ul>
        <li><strong>Industry credentials and accreditation.</strong> Look for the AAMC&reg; designation (Accredited Association Management Company), which is CAI&rsquo;s highest company-level credential. It reflects operational standards across staffing, financial controls, and governance support that go well beyond basic licensing.</li>
        <li><strong>Manager-to-community ratio and dedicated assignment.</strong> Ask how many communities each association manager handles and whether your community will have a single dedicated point of contact. Manager turnover and overloaded portfolios are two of the most common reasons boards become dissatisfied.</li>
        <li><strong>Financial management rigor.</strong> Ask about the qualifications of the accounting team, how financial reports are prepared and delivered, and whether the board has real-time access to financial data. CPA-level oversight and clean, readable reporting matter.</li>
        <li><strong>Technology platform.</strong> Board portals, homeowner communication tools, online payment systems, and document libraries should all be part of the package. Ask for a demo, not just a description.</li>
        <li><strong>Vendor management process.</strong> Find out whether the company vets vendors in-house or relies on third-party platforms, and how competitive bidding works for larger projects.</li>
        <li><strong>References from similar communities.</strong> Ask specifically for references from associations similar to yours in size, type, and complexity. A company that manages 4-unit condos may not be the right fit for a 500-home HOA, and vice versa.</li>
        <li><strong>Transparent contract terms.</strong> Read the proposed contract carefully. Watch for hidden fees, unclear termination provisions, and auto-renewal clauses. If the contract isn&rsquo;t straightforward, that tells you something about the relationship ahead.</li>
      </ul>

      <p>
        A company that checks every box on this list has probably handled hundreds of transitions and can tell you exactly what the onboarding process looks like before you sign anything. That level of transparency is a good sign.
      </p>

      <div className="tw-blog-takeaways">
        <div className="tw-blog-takeaways-label">Key takeaways</div>
        <h3>The 5-step transition, at a glance</h3>
        <ul>
          <li><strong>Review your current contract.</strong> Notice period, early termination fees, auto-renewal date, records-transfer language.</li>
          <li><strong>Get board alignment and vote.</strong> Document the decision in the meeting minutes. Homeowner approval typically not required.</li>
          <li><strong>Send written notice by certified mail.</strong> Include the termination date and a specific request for records and financial accounting.</li>
          <li><strong>Manage the 30&ndash;60 day transition.</strong> Track financials, governing documents, vendor contracts, and homeowner communication.</li>
          <li><strong>Choose the right next partner.</strong> AAMC accreditation, dedicated managers, real references, transparent contracts.</li>
        </ul>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>Can you fire your HOA management company?</h3>
      <p>
        Yes. The board has the authority to terminate the management company per the terms of the management contract. The process involves reviewing the termination clause in your current agreement, voting as a board to authorize the change, and providing written notice within the required timeframe. Homeowner approval is typically not required &mdash; this is a board-level vendor decision, similar to hiring any other service provider for the association.
      </p>

      <h3>How long does it take to switch HOA management companies?</h3>
      <p>
        Most transitions take 30 to 90 days from the board&rsquo;s decision to full handoff. The timeline depends on the notice period in your current contract, where you are in the association&rsquo;s financial year, and how quickly the outgoing company cooperates with the records and financial transfer. Boards that begin the evaluation process before sending notice can shorten the gap between the old company&rsquo;s departure and the new company&rsquo;s start.
      </p>

      <h3>What happens to our reserve funds when we change management companies?</h3>
      <p>
        Reserve funds belong to the association, not the management company, and must be transferred in full. The outgoing company should provide a final reserve fund statement and facilitate the transfer of all associated bank accounts. Your board should request a complete financial reconciliation before the transition closes to confirm that operating balances, reserve balances, and any outstanding receivables or payables are all accounted for.
      </p>

      <h3>Does the board need homeowner approval to change management companies?</h3>
      <p>
        In most cases, no. Selecting and terminating a management company is a board-level decision, and the board&rsquo;s authority to hire and manage vendors is typically established in the bylaws. However, boards should confirm this against their own governing documents, as some associations have unique provisions. Regardless of whether approval is required, communicating the decision to homeowners transparently &mdash; including the reasons for the change and what residents can expect during the transition &mdash; is a best practice that builds community trust.
      </p>

      <h2 id="conclusion">Making the Switch Is Responsible Governance</h2>

      <p>
        Switching HOA management companies is a structured process with clear steps and predictable timelines. Review your contract, align your board, provide proper notice, manage the transition, and choose your next partner carefully. Every one of those steps is something your board can handle with confidence.
      </p>

      <p>
        If the current management isn&rsquo;t serving your community&rsquo;s best interests, making a change isn&rsquo;t a disruption &mdash; it&rsquo;s responsible governance. The boards that have been through it consistently say the same thing: they wish they&rsquo;d done it sooner.
      </p>

      <div className="tw-blog-cta">
        <div className="tw-blog-cta-eyebrow">Considering a switch?</div>
        <h3>Tidewater&rsquo;s team can walk you through the transition.</h3>
        <p>From the first conversation through full onboarding &mdash; no high-pressure sales calls, no transition fees, just a clear picture of what the move would look like for your community.</p>
        <a href="/request-a-proposal" className="tw-btn tw-btn-primary tw-btn-lg">Request a proposal →</a>
      </div>

      <div className="tw-blog-tags">
        <span className="tw-blog-tags-label">Tagged</span>
        <a href="#" className="tw-blog-tag">HOA management transition</a>
        <a href="#" className="tw-blog-tag">Switching management companies</a>
        <a href="#" className="tw-blog-tag">Board governance</a>
        <a href="#" className="tw-blog-tag">HOA contracts</a>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// Author bio
// ─────────────────────────────────────────────────────────────
function SwitchAuthorBio({ author }) {
  return (
    <div className="tw-blog-author-bio">
      <div className="tw-blog-author-bio-avatar">{author.initials}</div>
      <div>
        <div className="tw-blog-author-bio-eyebrow">About the author</div>
        <div className="tw-blog-author-bio-name">
          {author.name} <span>{author.creds}</span>
        </div>
        <div className="tw-blog-author-bio-role">{author.role}</div>
        <p className="tw-blog-author-bio-blurb">{author.bio}</p>
        <div className="tw-blog-author-bio-links">
          <a href="#">{SwitchIcons.linkedin} LinkedIn</a>
          <a href={`mailto:${author.email}`}>{SwitchIcons.email} {author.email}</a>
          <a href="/about/leadership">View bio →</a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Related posts
// ─────────────────────────────────────────────────────────────
function SwitchRelatedPosts({ posts }) {
  return (
    <section className="tw-blog-related">
      <div className="tw-blog-related-inner">
        <div className="tw-blog-related-head">
          <div className="tw-blog-related-eyebrow">Continue Reading</div>
          <h2>More on the <em>switching playbook.</em></h2>
        </div>
        <div className="tw-blog-related-grid">
          {posts.map((p, i) => (
            <a key={i} href={p.href} className="tw-blog-related-card">
              <div className={`tw-blog-related-card-img ${p.tone}`}>
                {p.coverImage && <img src={p.coverImage} alt={p.coverAlt || p.title} />}
              </div>
              <div className="tw-blog-related-card-body">
                <div className={`tw-blog-related-card-cat ${p.tone}`}>{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.dek}</p>
                <div className="tw-blog-related-card-meta">{p.date} · {p.readTime} min read</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Newsletter capture
// ─────────────────────────────────────────────────────────────
function SwitchNewsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="tw-blog-newsletter">
      <div className="tw-blog-newsletter-inner">
        <div className="tw-blog-newsletter-eyebrow">Tidewater Resources</div>
        <h2>Get the <em>monthly board memo</em> in your inbox.</h2>
        <p>One email a month. Practical board playbooks, Maryland HOA law updates, transition guides. Written for working boards, not vendors. No fluff.</p>
        {submitted ? (
          <div style={{ fontFamily: 'var(--tw-font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--tw-gold)' }}>
            Thanks &mdash; first issue lands the first Tuesday of next month.
          </div>
        ) : (
          <form className="tw-blog-newsletter-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input type="email" placeholder="board@yourcommunity.org" aria-label="Email address" required />
            <button type="submit">Subscribe</button>
          </form>
        )}
        <div className="tw-blog-newsletter-fine">Unsubscribe any time &middot; We never share your email &middot; 4,200+ board members subscribed</div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Page composer
// ─────────────────────────────────────────────────────────────
export default function PostSwitchHoa() {
  const post = {
    title: 'How to switch HOA management companies: a <em>step-by-step</em> guide.',
    dek: 'Switching HOA management companies follows a predictable process when you know the steps. This guide covers contract review, board votes, notice requirements, financial and records transfer, and how to evaluate your next management partner.',
    category: { label: 'HOA Management', tone: '' },
    author: {
      name: 'Rachel Halverson',
      creds: 'MBA, CPA',
      initials: 'RH',
      role: 'Director of Association Finance, Tidewater',
      bio: 'Rachel leads the finance team at Tidewater, overseeing financial management for 300+ associations across the Mid-Atlantic. 14 years at Tidewater; previously a senior audit manager at a regional CPA firm with a CAI practice.',
      email: 'rachel@tidewaterproperty.com',
    },
    date: 'May 14, 2026',
    readTime: 9,
    coverCaption: 'Image placeholder: warm photography of 2–3 board members reviewing transition documents together in a bright meeting room or community common area. Mid-Atlantic setting, natural light.',
  };

  const toc = [
    { id: 'contract',   label: 'Review your contract' },
    { id: 'alignment',  label: 'Board alignment & vote' },
    { id: 'notice',     label: 'Send proper notice' },
    { id: 'transition', label: 'What to expect' },
    { id: 'evaluate',   label: 'Evaluate your next partner' },
    { id: 'faq',        label: 'FAQ' },
    { id: 'conclusion', label: 'Closing thought' },
  ];

  const related = [
    {
      tone: '', category: 'Solutions',
      title: 'Switching HOA management, done right.',
      dek: 'The companion solutions page — week-by-week transition timeline, side-by-side comparison, top 10 board questions answered.',
      date: 'April 30, 2026', readTime: 7, href: '/solutions/switching-hoa-management-company',
    },
    {
      tone: ‘’, category: ‘HOA Management’,
      title: ‘What is a community association manager? Roles, responsibilities, and what your board should expect.’,
      dek: ‘A community association manager (CAM) is the professional hired by an HOA or condo board to handle day-to-day operations. This guide covers what a CAM does, how the role works with the board, and what credentials matter.’,
      date: ‘May 15, 2026’, readTime: 9, href: ‘/blog/what-is-a-community-association-manager’,
      coverImage: ‘/assets/what-is-a-community-association-manager.png’,
      coverAlt: ‘Community association manager meeting with HOA board members’,
    },
    {
      tone: ‘’, category: ‘Board Governance’,
      title: ‘What is a quorum? Definition, requirements, and why it matters for your board.’,
      dek: ‘A quorum is the minimum number of members who must be present for a meeting\’s decisions to be legally valid. This guide covers how quorum works for HOA meetings and what happens when quorum isn\’t met.’,
      date: ‘May 14, 2026’, readTime: 8, href: ‘/blog/what-is-quorum-and-why-is-it-important’,
      coverImage: ‘/assets/quorum-community-manager.jpg’,
      coverAlt: ‘Community association manager at an HOA meeting’,
    },
  ];

  return (
    <>
      <SwitchReadingProgress />
      <SwitchHero post={post} />
      <SwitchCover post={post} />

      <div className="tw-blog-body-wrap">
        <div className="tw-blog-layout">
          <SwitchToc items={toc} />
          <div>
            <SwitchArticleBody />
            <SwitchAuthorBio author={post.author} />
          </div>
        </div>
      </div>

      <SwitchRelatedPosts posts={related} />
      <SwitchNewsletter />
    </>
  );
}
