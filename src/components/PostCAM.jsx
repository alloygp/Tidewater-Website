// Blog spoke — What Is a Community Association Manager?
// URL: /blog/what-is-a-community-association-manager

import { useState, useEffect } from 'react';

const CAMIcons = {
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  cal:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  copy:  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>,
  twitter: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  email:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>,
  info:    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>,
  check:   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

// ─────────────────────────────────────────────────────────────
function CAMReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? Math.min(1, scrolled / total) : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);
  return <div className="tw-blog-progress" style={{transform: `scaleX(${pct})`}}/>;
}

// ─────────────────────────────────────────────────────────────
function CAMHero({ post }) {
  return (
    <section className="tw-blog-hero">
      <div className="tw-blog-hero-inner">
        <span className={`tw-blog-category ${post.category.tone}`}>{post.category.label}</span>

        <h1 className="tw-blog-title" dangerouslySetInnerHTML={{__html: post.title}}/>
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
          <div className="tw-blog-meta-item">{CAMIcons.cal} {post.date}</div>
          <div className="tw-blog-meta-divider"></div>
          <div className="tw-blog-meta-item">{CAMIcons.clock} {post.readTime} min read</div>
          <div className="tw-blog-share">
            <button title="Share on LinkedIn" aria-label="Share on LinkedIn">{CAMIcons.linkedin}</button>
            <button title="Share on X" aria-label="Share on X">{CAMIcons.twitter}</button>
            <button title="Share by email" aria-label="Share by email">{CAMIcons.email}</button>
            <button title="Copy link" aria-label="Copy link">{CAMIcons.copy}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CAMCover({ post }) {
  return (
    <div className="tw-blog-cover">
      <div className="tw-blog-cover-inner">
        <img
          src="/assets/what-is-a-community-association-manager.png"
          alt="Community association manager shaking hands with HOA board members outside a community clubhouse"
        />
        <div className="tw-blog-cover-paper"></div>
      </div>
      <p className="tw-blog-cover-caption">{post.coverCaption}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
function CAMToc({ items }) {
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
              dangerouslySetInnerHTML={{__html: it.label}}
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────
function CAMArticleBody() {
  return (
    <article className="tw-blog-article">

      <p>
        A community association manager (CAM) is the professional hired by an HOA or condominium association&rsquo;s board of directors to handle the day-to-day operations of the community. The manager serves as the board&rsquo;s operational partner, handling everything from financial management and vendor coordination to community inspections and homeowner communication so that volunteer directors don&rsquo;t have to do it all themselves.
      </p>

      <p>
        The exact scope of the role depends on the size of the community, the terms of the management contract, and the specific needs outlined in the association&rsquo;s governing documents. This guide covers what a community association manager does, how the role works alongside the board, what credentials to look for, and how to evaluate whether your HOA manager is meeting the standard your community deserves.
      </p>

      <h2 id="what-cam-does">What Does a Community Association Manager Do?</h2>

      <p>
        A community association manager handles the operational and administrative responsibilities that keep a community running, on behalf of and under the direction of the board of directors. The role has two distinct dimensions that boards should understand, because most management problems trace back to one or both being neglected.
      </p>

      <p>
        <strong>The first dimension is day-to-day operations &mdash; the visible, recurring work that keeps the community functioning.</strong> This includes community inspections and property walks, homeowner communication and inquiry resolution, vendor and contractor coordination, maintenance request management, covenant enforcement and violation processing, architectural review request processing, meeting preparation and attendance, and emergency response coordination. These are the activities residents see and feel most directly, and they&rsquo;re the ones boards hear about when something goes wrong.
      </p>

      <p>
        How this work gets done varies by management company. At some firms, the CAM handles all of it personally &mdash; every phone call, every inspection, every violation letter. At others, the manager is supported by a team: a client services group that handles routine homeowner inquiries on first contact, administrative staff who process architectural reviews and violation correspondence, and accounting professionals who manage the financial reporting. That structure frees the manager to focus on on-site presence, board relationships, vendor oversight, and the strategic work that actually moves the community forward. When evaluating a management company, it&rsquo;s worth asking how the workload is distributed &mdash; a manager buried in phone calls and paperwork has less time for the things only they can do.
      </p>

      <p>
        The second dimension is strategic and advisory support &mdash; the less visible work that shapes the community&rsquo;s direction over time. This includes budget preparation and financial guidance, reserve study coordination, governance support and policy recommendations, risk and insurance review, long-range planning and capital improvement coordination, and board education on governing documents and compliance obligations. This is where a manager&rsquo;s experience and professional judgment matter most. Any manager can process a work order. A good one helps the board plan a capital reserve strategy three years out.
      </p>

      <p>
        The best community association managers don&rsquo;t just react to problems &mdash; they anticipate them. Scheduled inspections, preventive maintenance calendars, and advance budget planning are what separate proactive management from the kind that keeps a board in permanent crisis mode. If your board is spending meetings putting out fires rather than making decisions, the management model deserves a closer look.
      </p>

      <h2 id="board-relationship">How the CAM Works with the Board of Directors</h2>

      <p>
        The community association manager works <em>for</em> the board, not above it. The board retains full decision-making authority while the manager handles execution and provides professional guidance.
      </p>

      <p>
        <strong>Understanding this dynamic is the single most important thing a new board member can learn about the management relationship.</strong>
      </p>

      <div className="tw-blog-callout">
        <div className="tw-blog-callout-icon">{CAMIcons.info}</div>
        <div className="tw-blog-callout-content">
          <h4>The board decides, the manager executes</h4>
          <p>
            The board sets policy, approves budgets, and makes governance decisions. The manager implements those decisions, manages daily operations, and reports back. The manager advises and recommends, but does not make decisions on the board&rsquo;s behalf unless specifically authorized for routine operational items within defined contract thresholds. When a vendor needs to be hired, the manager sources bids and presents options &mdash; the board selects the vendor. When a covenant violation requires escalation, the manager recommends the course of action &mdash; the board approves it.
          </p>
        </div>
      </div>

      <p>
        <em>Communication and reporting.</em> A good manager provides regular, structured reporting &mdash; monthly management reports, financial statements, and action item updates &mdash; so the board always knows the state of the community. Directors shouldn&rsquo;t have to chase updates. If your board is spending meeting time asking for basic status information, that&rsquo;s a reporting problem, not a board problem.
      </p>

      <p>
        <em>Meeting support.</em> The manager prepares agendas, assembles board packets, attends meetings, and records action items. Board members should come to meetings prepared to make decisions, not spend the session asking questions that should have been answered in advance by the management report.
      </p>

      <p>
        <em>Accountability.</em> Boards should expect responsiveness, follow-through, and transparency. If the manager isn&rsquo;t meeting those standards, the board has the authority and the obligation to address it. The management company works at the board&rsquo;s direction &mdash; not the other way around.
      </p>

      <h2 id="cam-vs-pm">Community Association Manager vs. Property Manager: What&rsquo;s the Difference?</h2>

      <p>
        A community association manager specializes in managing associations governed by a board of directors and shared governing documents. A property manager manages rental properties on behalf of individual property owners. The terms get used interchangeably, but they describe fundamentally different roles.
      </p>

      <p>
        <strong>The key distinction is governance: a CAM operates within a framework of CC&amp;Rs, bylaws, and board-approved rules, while a property manager operates under a lease agreement.</strong>
      </p>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Community Association Manager</th>
            <th>Property Manager</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Client</strong></td>
            <td>Board of directors / association entity</td>
            <td>Individual landlord or property owner</td>
          </tr>
          <tr>
            <td><strong>Governance framework</strong></td>
            <td>CC&amp;Rs, bylaws, board resolutions</td>
            <td>Lease agreement</td>
          </tr>
          <tr>
            <td><strong>Scope</strong></td>
            <td>Association financials (assessments, reserves, budgets), common area maintenance, governance support, compliance</td>
            <td>Tenant placement, rent collection, unit maintenance, lease enforcement</td>
          </tr>
          <tr>
            <td><strong>Typical credentials</strong></td>
            <td>CAI designations (CMCA, AMS, PCAM)</td>
            <td>IREM designations (CPM, ARM) or NARPM designations (RMP, MPM); state real estate license may also be required</td>
          </tr>
        </tbody>
      </table>

      <p>
        Some management companies provide both community association management and rental property management under the same umbrella. The important thing for boards to understand is that the skill sets are different, the governance frameworks are different, and the reporting relationships are different. When you&rsquo;re evaluating a management company for your HOA or condo association, look for one that specializes in community association management specifically &mdash; not one that manages rental units and treats your association the same way.
      </p>

      <h2 id="credentials">CAM Credentials: What to Look For</h2>

      <p>
        Industry credentials signal a level of training, ethics, and professional commitment that boards should understand when evaluating a management company. That said, many capable community association managers are early in their careers and actively working toward their first designation. A manager without credentials isn&rsquo;t necessarily a bad manager &mdash; but the company they work for should be investing in their professional development and should have credentialed leaders overseeing the operation.
      </p>

      <p>
        <strong>The credential ladder from the <a href="https://www.caionline.org" target="_blank" rel="noopener">Community Associations Institute (CAI)</a> is the industry standard for individual and company-level qualifications.</strong>
      </p>

      <ul>
        <li><strong>CMCA&reg; (Certified Manager of Community Associations):</strong> The baseline professional credential, administered by <a href="https://www.camicb.org" target="_blank" rel="noopener">CAMICB</a>. Requires passing a national exam covering governance, financial management, and community operations.</li>
        <li><strong>AMS&reg; (Association Management Specialist):</strong> An intermediate designation requiring additional coursework and documented professional experience beyond the CMCA.</li>
        <li><strong>PCAM&reg; (Professional Community Association Manager):</strong> The highest individual credential from CAI. Requires extensive education, years of experience, and a case study demonstrating advanced management competence.</li>
        <li><strong>AAMC&reg; (Accredited Association Management Company):</strong> A company-level accreditation from CAI requiring audited operational processes, trained staff, and ongoing compliance. Not all management companies hold this, and it&rsquo;s one of the most meaningful differentiators a board can evaluate.</li>
      </ul>

      <p>
        When evaluating a management company, ask about credentials at the leadership level and whether the company actively supports its managers in earning designations. A company that pays for credentialing upfront and has PCAM-holders in leadership is making an institutional investment in the profession &mdash; and that investment benefits every community in the portfolio, even if your day-to-day manager is still early in the credential ladder. Company-level AAMC&reg; accreditation is an even stronger signal, because it means the organization&rsquo;s processes, not just individual talent, have been audited to a professional standard.
      </p>

      <h2 id="signs-of-great">Signs of Great Community Association Management</h2>

      <p>
        Knowing what a community association manager does is one thing. Knowing whether yours is doing it well is another.
      </p>

      <p>
        <strong>The difference between adequate management and excellent management usually comes down to whether the approach is proactive or reactive.</strong> Here&rsquo;s what boards should look for:
      </p>

      <ul>
        <li><strong>Proactive, not reactive.</strong> Scheduled inspections, preventive maintenance calendars, and advance budget planning rather than scrambling to respond after things break. The best management companies build annual management plans with every deliverable scheduled in advance and visible to the board in real time.</li>
        <li><strong>Consistent communication.</strong> Regular reporting on a set schedule, next-business-day response to board and homeowner inquiries, and a client services team that can resolve common questions without routing every call to the manager.</li>
        <li><strong>Financial transparency.</strong> Clean, board-readable financial statements delivered monthly. Real-time access to association accounts. Clear reserve fund reporting. In-house accounting teams rather than outsourced third-party bookkeepers. A CPA-level controller overseeing the financial operation is a strong signal.</li>
        <li><strong>Low manager turnover.</strong> The manager knows your community, your vendors, and your governing documents because they&rsquo;ve been there long enough to learn them. The industry average for CAM tenure is roughly two years &mdash; companies that retain managers well beyond that standard are doing something right.</li>
        <li><strong>Structured accountability.</strong> Documented processes, a quality assurance function that monitors operations across the portfolio, and management plans with scheduled deliverables the board can track. If the only accountability mechanism is the board calling to complain, the system is missing a layer.</li>
        <li><strong>Board education and support.</strong> Helping directors understand their obligations, not just processing their requests. The best managers treat new board member orientation as a core responsibility, not an afterthought.</li>
      </ul>

      <p>
        If your current management company doesn&rsquo;t meet this standard, it may be worth having a conversation about what you should expect. Not every management company operates at the same level, and boards that know what good looks like are in a much stronger position to demand it.
      </p>

      <div className="tw-blog-takeaways">
        <div className="tw-blog-takeaways-label">Key takeaways</div>
        <h3>The CAM role, in five lines</h3>
        <ul>
          <li><strong>A CAM works for the board,</strong> handling operations and advising on strategy &mdash; not making policy decisions.</li>
          <li><strong>The role has two dimensions:</strong> day-to-day operations and longer-horizon strategic guidance.</li>
          <li><strong>CAMs are not property managers.</strong> Different client, different governance framework, different credentials.</li>
          <li><strong>Credentials matter at the company level.</strong> Ask about PCAM&reg; leadership and AAMC&reg; accreditation.</li>
          <li><strong>Great management is proactive,</strong> not reactive &mdash; with structured reporting, financial transparency, and low turnover.</li>
        </ul>
      </div>

      <h2 id="faq">Frequently Asked Questions</h2>

      <h3>What does a community association manager do on a daily basis?</h3>
      <p>
        On a typical day, a community association manager handles a mix of community inspections, homeowner inquiries, vendor coordination, maintenance oversight, and board communication. The exact daily mix depends on the size and complexity of the community. Large communities may require full-time on-site presence, while smaller associations may share a portfolio manager across several communities. The constant across all is communication, follow-through, and operational oversight.
      </p>

      <h3>What is the difference between a community association manager and a property manager?</h3>
      <p>
        A community association manager serves an HOA or condo association&rsquo;s board of directors and manages shared community operations under a framework of governing documents. A property manager serves individual landlords and manages rental units under lease agreements. The client, the governance framework, the scope of work, and the typical credentials are all different. When hiring management for an association, look for a company that specializes in community association management specifically.
      </p>

      <h3>Does a community association manager make decisions for the board?</h3>
      <p>
        No. The board of directors retains full decision-making authority. The manager advises, recommends, and executes, but policy decisions, budget approvals, and governance actions are the board&rsquo;s responsibility. For routine operational items like scheduling minor repairs or processing standard requests, the board may authorize the manager to act within defined thresholds. Strategic decisions always remain with the board.
      </p>

      <h3>What credentials should a community association manager have?</h3>
      <p>
        Look for credentials at the leadership level and ask whether the company supports its managers in earning designations. The CAI credential ladder starts with CMCA&reg; (Certified Manager of Community Associations), moves through AMS&reg; (Association Management Specialist), and tops out at PCAM&reg; (Professional Community Association Manager). Many working managers are still building toward their first designation, and that&rsquo;s normal &mdash; what matters is that the company invests in professional development and has credentialed leaders overseeing the operation. At the company level, AAMC&reg; (Accredited Association Management Company) accreditation indicates audited operational standards across the organization.
      </p>

      <h3>How do I know if my community association manager is doing a good job?</h3>
      <p>
        Evaluate against clear standards: consistent communication on a set schedule, proactive maintenance rather than reactive scrambling, transparent and timely financial reporting, responsiveness to board and homeowner inquiries, and documented follow-through on action items. If your board is spending meetings chasing status updates, fielding homeowner complaints about responsiveness, or struggling to get clean financial reports, those are signs the management relationship needs to be re-evaluated.
      </p>

      <h2 id="conclusion">The Operational Backbone of a Well-Run Community</h2>

      <p>
        A great community association manager is the operational backbone of a well-run HOA or condo association &mdash; handling the daily work so the board can focus on governance and the community can focus on living. The key is knowing what to expect and holding your management company to that standard. Boards that understand the role, the relationship, and the credentials are in the strongest position to ensure their community gets the management it deserves.
      </p>

      <div className="tw-blog-cta">
        <div className="tw-blog-cta-eyebrow">Looking for a management partner?</div>
        <h3>Management that&rsquo;s proactive, transparent, and built on <em>35+ years</em> of community association expertise.</h3>
        <p>If your board is looking for management that meets the standard above, we&rsquo;d welcome the conversation &mdash; no high-pressure follow-up, no transition fees, just a clear picture of what working with us would look like.</p>
        <a href="/request-a-proposal" className="tw-btn tw-btn-primary tw-btn-lg">Request a proposal to see what professional community association management looks like &rarr;</a>
      </div>

      <div className="tw-blog-tags">
        <span className="tw-blog-tags-label">Tagged</span>
        <a href="#" className="tw-blog-tag">Community association manager</a>
        <a href="#" className="tw-blog-tag">HOA management</a>
        <a href="#" className="tw-blog-tag">Board governance</a>
        <a href="#" className="tw-blog-tag">CAM responsibilities</a>
        <a href="#" className="tw-blog-tag">HOA manager</a>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
function CAMAuthorBio({ author }) {
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
          <a href="#">{CAMIcons.linkedin} LinkedIn</a>
          <a href={`mailto:${author.email}`}>{CAMIcons.email} {author.email}</a>
          <a href="/about/leadership">View bio &rarr;</a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
function CAMRelatedPosts({ posts }) {
  return (
    <section className="tw-blog-related">
      <div className="tw-blog-related-inner">
        <div className="tw-blog-related-head">
          <div className="tw-blog-related-eyebrow">Continue Reading</div>
          <h2>More on <em>HOA management.</em></h2>
        </div>
        <div className="tw-blog-related-grid">
          {posts.map((p, i) => (
            <a key={i} href={p.href} className="tw-blog-related-card">
              <div className={`tw-blog-related-card-img ${p.tone}`}></div>
              <div className="tw-blog-related-card-body">
                <div className={`tw-blog-related-card-cat ${p.tone}`}>{p.category}</div>
                <h3>{p.title}</h3>
                <p>{p.dek}</p>
                <div className="tw-blog-related-card-meta">{p.date} &middot; {p.readTime} min read</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
function CAMNewsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="tw-blog-newsletter">
      <div className="tw-blog-newsletter-inner">
        <div className="tw-blog-newsletter-eyebrow">Tidewater Resources</div>
        <h2>Get the <em>monthly board memo</em> in your inbox.</h2>
        <p>One email a month. Practical board playbooks, Maryland HOA law updates, governance deep-dives. Written for working boards, not vendors. No fluff.</p>
        {submitted ? (
          <div style={{fontFamily:'var(--tw-font-heading)',fontWeight:700,fontSize:15,color:'var(--tw-gold)'}}>Thanks &mdash; first issue lands the first Tuesday of next month.</div>
        ) : (
          <form className="tw-blog-newsletter-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <input type="email" placeholder="board@yourcommunity.org" aria-label="Email address" required/>
            <button type="submit">Subscribe</button>
          </form>
        )}
        <div className="tw-blog-newsletter-fine">Unsubscribe any time &middot; We never share your email &middot; 4,200+ board members subscribed</div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
export default function PostCAM() {
  const post = {
    title: 'What is a <em>community association manager?</em> Roles, responsibilities, and what your board should expect.',
    dek: 'A community association manager (CAM) is the professional hired by an HOA or condo board to handle day-to-day community operations. This guide covers what a CAM does, how the role works with the board, what credentials matter, and how to tell if your management company is meeting the standard.',
    category: { label: 'HOA Management', tone: '' },
    author: {
      name: 'Marcia Goldstein',
      creds: 'PCAM®',
      initials: 'MG',
      role: 'Senior Community Manager, Tidewater',
      bio: 'Marcia is a senior community manager at Tidewater with 18 years of experience managing HOA and condo association boards across Maryland. PCAM-credentialed; former CAI Chesapeake Chapter committee member. [PLACEHOLDER — confirm bio and credentials with client before publish.]',
      email: 'marcia@tidewaterproperty.com',
    },
    date: 'May 15, 2026',
    dateIso: '2026-05-15',
    readTime: 9,
    coverCaption: 'A community association manager greets HOA board members outside the community clubhouse — partnership, accountability, and local connection are the daily work of the role.',
  };

  const toc = [
    { id: 'what-cam-does',      label: 'What a CAM does' },
    { id: 'board-relationship', label: 'Working with the board' },
    { id: 'cam-vs-pm',          label: 'CAM vs. property manager' },
    { id: 'credentials',        label: 'Credentials to look for' },
    { id: 'signs-of-great',     label: 'Signs of great management' },
    { id: 'faq',                label: 'FAQ' },
    { id: 'conclusion',         label: 'Closing thought' },
  ];

  const related = [
    {
      tone: '', category: 'HOA Management',
      title: 'How to switch HOA management companies: a step-by-step guide.',
      dek: 'Contract review, board votes, notice requirements, financial and records transfer, and how to evaluate your next management partner.',
      date: 'May 14, 2026', readTime: 9,
      href: '/blog/how-to-switch-hoa-management-companies',
    },
    {
      tone: '', category: 'Board Governance',
      title: 'What is a quorum? Definition, requirements, and why it matters for your board.',
      dek: "How quorum works for HOA board meetings and annual meetings, what happens when quorum isn't met, and how proxy voting affects the count.",
      date: 'May 14, 2026', readTime: 8,
      href: '/blog/what-is-quorum-and-why-is-it-important',
    },
    {
      tone: '', category: 'Solutions',
      title: 'From self-managed to professional: what actually changes.',
      dek: 'The board still decides; the admin moves to us. A clear-eyed framework for self-managed boards considering professional management.',
      date: 'March 18, 2026', readTime: 6,
      href: '/solutions/self-managed-hoa-transition',
    },
  ];

  return (
    <>
      <CAMReadingProgress/>
      <CAMHero post={post}/>
      <CAMCover post={post}/>

      <div className="tw-blog-body-wrap">
        <div className="tw-blog-layout">
          <CAMToc items={toc}/>
          <div>
            <CAMArticleBody/>
            <CAMAuthorBio author={post.author}/>
          </div>
        </div>
      </div>

      <CAMRelatedPosts posts={related}/>
      <CAMNewsletter/>
    </>
  );
}
