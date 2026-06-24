// Blog post interactivity — vanilla JS, shared across all blog posts.
// Keyed off the standard .tw-blog-* markup so one bundled file serves every post.
// All blocks no-op gracefully if their elements aren't on the page.

// 1) Reading-progress bar
(() => {
  const bar = document.getElementById('tw-blog-progress');
  if (!bar) return;
  const update = () => {
    const h = document.documentElement;
    const total = h.scrollHeight - h.clientHeight;
    bar.style.transform = `scaleX(${total > 0 ? Math.min(1, h.scrollTop / total) : 0})`;
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();

// 2) Table-of-contents scroll-spy + smooth scroll
(() => {
  const toc = document.querySelector('.tw-blog-toc');
  if (!toc) return;
  const links = [...toc.querySelectorAll('a[href^="#"]')];
  if (!links.length) return;
  const sections = links
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  links.forEach(a => a.addEventListener('click', (e) => {
    const el = document.getElementById(a.getAttribute('href').slice(1));
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }));

  const setActive = (id) => links.forEach(a =>
    a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
  if (sections[0]) setActive(sections[0].id);

  const obs = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    setActive(visible[0].target.id);
  }, { rootMargin: '-110px 0px -60% 0px', threshold: 0 });
  sections.forEach(s => obs.observe(s));
})();

// 3) Share buttons (LinkedIn / X / email / copy link)
(() => {
  const buttons = document.querySelectorAll('.tw-blog-share [data-share]');
  if (!buttons.length) return;
  buttons.forEach(btn => btn.addEventListener('click', async () => {
    const url = window.location.href;
    const title = document.title;
    const kind = btn.getAttribute('data-share');
    if (kind === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener');
    } else if (kind === 'x') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener');
    } else if (kind === 'email') {
      window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
    } else if (kind === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        const prev = btn.getAttribute('title');
        btn.setAttribute('title', 'Link copied!');
        btn.classList.add('is-copied');
        setTimeout(() => { btn.setAttribute('title', prev || 'Copy link'); btn.classList.remove('is-copied'); }, 1800);
      } catch { /* clipboard unavailable */ }
    }
  }));
})();

// 4) Newsletter form — real subscribe via /api/subscribe, honeypot-guarded
(() => {
  const form = document.querySelector('.tw-blog-newsletter-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.website && form.website.value) return; // honeypot tripped — silently drop
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Subscribing…'; }
    try { await fetch('/api/subscribe', { method: 'POST', body: new FormData(form) }); } catch { /* show success regardless */ }
    const thanks = form.parentElement.querySelector('.tw-blog-newsletter-thanks');
    form.hidden = true;
    if (thanks) thanks.hidden = false;
  });
})();
