// Blog Landing — /blog
// Featured post + categorized grid + search + sticky filter chips + pagination

import { useState, useMemo } from 'react';

const BlogIndexIcons = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
};

// All posts — sorted newest-first. The featured post is index 0 when no filter is active.
const ALL_POSTS = [
  {
    slug: 'what-is-quorum-and-why-is-it-important',
    href: '/blog/what-is-quorum-and-why-is-it-important',
    title: 'What is a quorum? <em>Definition,</em> requirements, and why it matters for your board.',
    dek: "A quorum is the minimum number of members who must be present for a meeting's decisions to be legally valid. This guide covers how quorum works for HOA board meetings and annual meetings, what happens when quorum isn't met, and how proxy voting affects the count.",
    category: { id: 'governance', label: 'Board Governance', tone: '' },
    date: 'May 14, 2026', dateIso: '2026-05-14',
    readTime: 8,
    author: 'Marcia Goldstein',
    tone: '',
    featured: true,
  },
  {
    slug: 'how-to-switch-hoa-management-companies',
    href: '/blog/how-to-switch-hoa-management-companies',
    title: 'How to switch HOA management companies: a <em>step-by-step</em> guide.',
    dek: 'Switching HOA management companies follows a predictable process when you know the steps. This guide covers contract review, board votes, notice requirements, financial and records transfer, and how to evaluate your next management partner.',
    category: { id: 'hoa-mgmt', label: 'HOA Management', tone: '' },
    date: 'May 14, 2026', dateIso: '2026-05-14',
    readTime: 9,
    author: 'Rachel Halverson',
    tone: '',
  },
  {
    slug: 'reserve-studies-decoded',
    href: '#',
    title: 'Reserve studies, decoded: how often should your HOA update yours?',
    dek: 'A board’s guide to reserve study cadence — when to refresh, what triggers an off-cycle study, and how to read the funding ratio.',
    category: { id: 'finance', label: 'HOA Finance', tone: 'gold' },
    date: 'May 14, 2026', dateIso: '2026-05-14',
    readTime: 7,
    author: 'Rachel Halverson',
    tone: 'gold',
  },
  {
    slug: 'two-signer-rule',
    href: '#',
    title: 'The 2-signer rule, and why your association needs it.',
    dek: 'Why every vendor payment over $500 should require dual approval — and what to do if your current management company doesn’t enforce it.',
    category: { id: 'finance', label: 'HOA Finance', tone: 'gold' },
    date: 'April 28, 2026', dateIso: '2026-04-28',
    readTime: 5,
    author: 'Rachel Halverson',
    tone: 'gold',
  },
  {
    slug: 'covenant-enforcement-without-friction',
    href: '#',
    title: 'Covenant enforcement without the friction.',
    dek: 'A documented, photo-driven, fair-to-everyone enforcement workflow — the playbook we use across 300+ Mid-Atlantic communities.',
    category: { id: 'ops', label: 'Operations', tone: 'sage' },
    date: 'April 14, 2026', dateIso: '2026-04-14',
    readTime: 6,
    author: 'Cody Whitman',
    tone: 'sage',
  },
  {
    slug: 'open-meetings-md-law',
    href: '#',
    title: 'Open meetings, executive sessions, and what Maryland actually requires.',
    dek: 'Maryland’s HOA & condo open-meeting statute, the executive-session carveouts, and the documentation boards owe their residents.',
    category: { id: 'md-law', label: 'Maryland HOA Law', tone: 'clay' },
    date: 'March 31, 2026', dateIso: '2026-03-31',
    readTime: 8,
    author: 'Cody Whitman',
    tone: 'clay',
  },
  {
    slug: 'self-managed-to-professional',
    href: '/solutions/self-managed-hoa-transition',
    title: 'From self-managed to professional: what actually changes.',
    dek: 'The board still decides; the admin moves to us. A clear-eyed framework for self-managed boards considering professional management.',
    category: { id: 'solutions', label: 'Solutions', tone: '' },
    date: 'March 18, 2026', dateIso: '2026-03-18',
    readTime: 6,
    author: 'Marcia Goldstein',
    tone: '',
  },
  {
    slug: 'first-100-days',
    href: '#',
    title: 'The first 100 days on an HOA board: a survival guide.',
    dek: 'New to your board? Here’s how to get oriented quickly without making the rookie mistakes that haunt every community for a decade.',
    category: { id: 'governance', label: 'Board Governance', tone: '' },
    date: 'March 4, 2026', dateIso: '2026-03-04',
    readTime: 7,
    author: 'Marcia Goldstein',
    tone: '',
  },
  {
    slug: 'reading-financial-statements',
    href: '#',
    title: 'How to read your association’s financial statements.',
    dek: 'Balance sheet, income statement, budget-vs-actual, reserve schedule. What every board member should be able to read in 90 seconds.',
    category: { id: 'finance', label: 'HOA Finance', tone: 'gold' },
    date: 'February 18, 2026', dateIso: '2026-02-18',
    readTime: 8,
    author: 'Rachel Halverson',
    tone: 'gold',
  },
  {
    slug: 'snow-removal-contracts',
    href: '#',
    title: 'Snow removal contracts: per-push, seasonal, or hybrid?',
    dek: 'Three contract structures, real cost data from 60+ Maryland communities, and how to pick the right one before next winter.',
    category: { id: 'ops', label: 'Operations', tone: 'sage' },
    date: 'February 4, 2026', dateIso: '2026-02-04',
    readTime: 6,
    author: 'Cody Whitman',
    tone: 'sage',
  },
  {
    slug: 'arc-process-design',
    href: '#',
    title: 'Designing an ARC process homeowners don’t hate.',
    dek: 'Documented standards, 14-day turnaround, photo logs. How to take the contention out of architectural review.',
    category: { id: 'ops', label: 'Operations', tone: 'sage' },
    date: 'January 22, 2026', dateIso: '2026-01-22',
    readTime: 7,
    author: 'Cody Whitman',
    tone: 'sage',
  },
  {
    slug: 'condo-master-policy',
    href: '#',
    title: 'Condo master policy: what your board should actually understand.',
    dek: 'The split between master policy and unit-owner HO-6 coverage, deductibles, and the gaps boards routinely miss.',
    category: { id: 'finance', label: 'HOA Finance', tone: 'gold' },
    date: 'January 8, 2026', dateIso: '2026-01-08',
    readTime: 9,
    author: 'Rachel Halverson',
    tone: 'gold',
  },
  {
    slug: 'election-season-mechanics',
    href: '#',
    title: 'Election season: the mechanics most boards get wrong.',
    dek: 'Quorum, proxies, ballots, candidate forms, the open-meeting requirement. A pre-flight checklist for your annual meeting.',
    category: { id: 'governance', label: 'Board Governance', tone: '' },
    date: 'December 12, 2025', dateIso: '2025-12-12',
    readTime: 8,
    author: 'Marcia Goldstein',
    tone: '',
  },
];

const ALL_CATEGORIES = [
  { id: 'all',        label: 'All posts' },
  { id: 'hoa-mgmt',  label: 'HOA Management' },
  { id: 'finance',   label: 'HOA Finance' },
  { id: 'governance',label: 'Board Governance' },
  { id: 'ops',       label: 'Operations' },
  { id: 'md-law',    label: 'Maryland HOA Law' },
  { id: 'solutions', label: 'Solutions' },
];

// ─────────────────────────────────────────────────────────────
// Hero
// ─────────────────────────────────────────────────────────────
function BlogIndexHero({ showSearch, query, onQuery, onSubmit }) {
  return (
    <section className="tw-bi-hero">
      <div className="tw-bi-hero-bg"></div>
      <div className="tw-bi-hero-paper"></div>
      <div className="tw-bi-hero-inner">
        <h1>The Tidewater <em>board playbook.</em></h1>
        <p>Practical playbooks for HOA and condo boards across Maryland and the Mid-Atlantic. Reserve studies, switching management, governance mechanics, Maryland HOA law, and the operational systems that work in practice.</p>

        {showSearch && (
          <form className="tw-bi-search" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
            {BlogIndexIcons.search}
            <input
              type="text"
              placeholder="Search 30+ posts — reserves, switching, ARC, Maryland law…"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              aria-label="Search blog posts"
            />
            <button type="submit">Search</button>
          </form>
        )}

        <div className="tw-bi-hero-stats">
          <span><strong>32</strong> posts &amp; growing</span>
          <span><strong>6</strong> categories</span>
          <span><strong>4,200+</strong> board members subscribed</span>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Featured post
// ─────────────────────────────────────────────────────────────
function BlogIndexFeatured({ post }) {
  if (!post) return null;
  return (
    <section className="tw-bi-featured-section">
      <div className="tw-container-wide">
        <div className="tw-bi-featured-eyebrow-row">
          <span className="tw-divider"></span>
          <span className="tw-eyebrow tw-eyebrow-gold">Featured this week</span>
        </div>

        <a href={post.href} className="tw-bi-featured">
          <div className={`tw-bi-featured-img ${post.tone}`}></div>
          <div className="tw-bi-featured-body">
            <span className={`tw-bi-featured-cat ${post.tone}`}>{post.category.label}</span>
            <h2 dangerouslySetInnerHTML={{ __html: post.title }} />
            <p>{post.dek}</p>
            <div className="tw-bi-featured-meta">
              <span>{post.date}</span>
              <span className="sep">·</span>
              <span>{post.readTime} min read</span>
              <span className="sep">·</span>
              <span>{post.author}</span>
              <span className="cta">Read the playbook →</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Category filter (sticky)
// ─────────────────────────────────────────────────────────────
function BlogIndexCats({ active, onSelect, counts }) {
  return (
    <section className="tw-bi-cats">
      <div className="tw-bi-cats-inner">
        {ALL_CATEGORIES.map(c => (
          <button
            key={c.id}
            className={`tw-bi-cat-chip ${active === c.id ? 'is-active' : ''}`}
            onClick={() => onSelect(c.id)}
          >
            <span>{c.label}</span>
            <span className="tw-bi-cat-count">{counts[c.id] || 0}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Posts grid
// ─────────────────────────────────────────────────────────────
function BlogIndexCard({ post }) {
  return (
    <a href={post.href} className="tw-bi-card">
      <div className={`tw-bi-card-img ${post.tone}`}></div>
      <div className="tw-bi-card-body">
        <span className={`tw-bi-card-cat ${post.tone}`}>{post.category.label}</span>
        <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
        <p>{post.dek}</p>
        <div className="tw-bi-card-meta">
          <span>{post.date}</span>
          <span className="sep">·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>
    </a>
  );
}

function BlogIndexGrid({ posts, total, onLoadMore, hasMore, activeCat, query }) {
  const headLabel =
    query ? 'Search results' :
    activeCat === 'all' ? 'All posts' :
    ALL_CATEGORIES.find(c => c.id === activeCat)?.label || 'Posts';

  return (
    <section className="tw-bi-grid-section">
      <div className="tw-container-wide">
        <div className="tw-bi-grid-head">
          <div>
            <h2>{headLabel}</h2>
            <div className="tw-bi-grid-head-count">
              {total} {total === 1 ? 'POST' : 'POSTS'}{query && ` MATCHING "${query.toUpperCase()}"`}
            </div>
          </div>
          <div className="tw-bi-sort">
            Sort by
            <select defaultValue="newest" aria-label="Sort posts">
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="reading-time">Reading time</option>
            </select>
          </div>
        </div>

        <div className="tw-bi-grid">
          {posts.length > 0 ? (
            posts.map((p, i) => <BlogIndexCard key={i} post={p} />)
          ) : (
            <div className="tw-bi-empty">
              <h3>No posts match{query ? ` "${query}"` : ''} yet.</h3>
              <p>Try a different filter, or send us the question and we&rsquo;ll write the post.</p>
              <a href="/request-a-proposal" className="tw-btn tw-btn-primary">Ask a question →</a>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="tw-bi-more">
            <button type="button" onClick={onLoadMore}>Load more posts</button>
            <div className="tw-bi-more-count">Showing {posts.length} of {total}</div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// Newsletter capture
// ─────────────────────────────────────────────────────────────
function BlogIndexNewsletter() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="tw-blog-newsletter">
      <div className="tw-blog-newsletter-inner">
        <div className="tw-blog-newsletter-eyebrow">Tidewater Resources</div>
        <h2>Get the <em>monthly board memo</em> in your inbox.</h2>
        <p>One email a month. Practical board playbooks, Maryland HOA law updates, reserve-study deep-dives. Written for working boards, not vendors. No fluff.</p>
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
export default function BlogIndex({ perPage: initialPerPage = 6, showSearch = true, showFeatured = true, showNewsletter = true }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all');
  const [perPage, setPerPage] = useState(initialPerPage);
  const [submittedQuery, setSubmittedQuery] = useState('');

  const counts = useMemo(() => {
    const c = { all: ALL_POSTS.length };
    ALL_POSTS.forEach(p => { c[p.category.id] = (c[p.category.id] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    let list = ALL_POSTS;
    if (active !== 'all') list = list.filter(p => p.category.id === active);
    if (submittedQuery.trim()) {
      const q = submittedQuery.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.dek.toLowerCase().includes(q) ||
        p.category.label.toLowerCase().includes(q)
      );
    }
    return list;
  }, [active, submittedQuery]);

  const featuredPost = (active === 'all' && !submittedQuery && showFeatured)
    ? ALL_POSTS.find(p => p.featured)
    : null;

  const gridPosts = featuredPost ? filtered.filter(p => p.slug !== featuredPost.slug) : filtered;
  const visiblePosts = gridPosts.slice(0, perPage);
  const hasMore = gridPosts.length > perPage;

  const onSubmitSearch = () => { setSubmittedQuery(query); setActive('all'); };
  const onSelectCat = (id) => {
    setActive(id);
    setSubmittedQuery('');
    setQuery('');
    setPerPage(initialPerPage);
  };

  return (
    <>
      <BlogIndexHero
        showSearch={showSearch}
        query={query}
        onQuery={(v) => { setQuery(v); if (!v.trim()) setSubmittedQuery(''); }}
        onSubmit={onSubmitSearch}
      />

      <BlogIndexCats active={active} onSelect={onSelectCat} counts={counts} />

      {featuredPost && <BlogIndexFeatured post={featuredPost} />}

      <BlogIndexGrid
        posts={visiblePosts}
        total={gridPosts.length}
        onLoadMore={() => setPerPage(p => p + initialPerPage)}
        hasMore={hasMore}
        activeCat={active}
        query={submittedQuery}
      />

      {showNewsletter && <BlogIndexNewsletter />}
    </>
  );
}
