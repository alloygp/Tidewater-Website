// Rental Property Management — Why Landlords Switch (editorial, asymmetric)
function RentalPains() {
  const ArrowRight = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="13 6 19 12 13 18"/></svg>;
  const Map = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>;
  const Shield = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="M9 12l2 2 4-4"/></svg>;
  const Globe = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
  const Gavel = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 4l6 6"/><path d="M9 9l6 6"/><path d="M4 14l6 6"/><line x1="14" y1="4" x2="20" y2="10"/><line x1="3" y1="21" x2="11" y2="13"/></svg>;

  return (
    <section className="tw-section tw-rwhy" id="why">
      <div className="tw-container">

        {/* Section head */}
        <div className="tw-rwhy-head">
          <div className="tw-rwhy-head-meta">
            <div className="tw-divider"></div>
            <div className="tw-eyebrow">Why Landlords Switch to Tidewater</div>
          </div>
          <h2 className="tw-rwhy-head-title">
            Real estate agents manage properties <span className="tw-rwhy-strike">between sales</span>.
            <br/>
            <em>We manage properties as our business.</em>
          </h2>
          <p className="tw-rwhy-head-lede">Six places that distinction shows up &mdash; in your fee statement, your inspection cadence, and the day a tenant stops paying.</p>
        </div>

        {/* Editorial grid — 6 stories, asymmetric */}
        <div className="tw-rwhy-stories">

          {/* 01 — Hero feature: Fee surprises (full-width with giant pull-quote) */}
          <article className="tw-rwhy-feature">
            <div className="tw-rwhy-feature-tag">
              <span className="tw-rwhy-num">01</span>
              <span className="tw-rwhy-tag-label">The Fee Surprise</span>
            </div>
            <div className="tw-rwhy-feature-body">
              <h3 className="tw-rwhy-feature-headline">One flat percentage. <em>Period.</em></h3>
              <p className="tw-rwhy-feature-copy">Competitors advertise a low monthly rate, then bill per visit, per coordination, per inspection. The rate you sign with us is the rate you pay &mdash; for as long as we manage your property.</p>
            </div>
            <div className="tw-rwhy-feature-pull">
              <div className="tw-rwhy-pull-label">What you actually pay competitors</div>
              <div className="tw-rwhy-pull-stack">
                <div className="tw-rwhy-pull-line"><span>Base fee</span><span className="tw-rwhy-pull-amt">7%</span></div>
                <div className="tw-rwhy-pull-line"><span>+ Property visits</span><span className="tw-rwhy-pull-amt">$95/ea</span></div>
                <div className="tw-rwhy-pull-line"><span>+ Maintenance coord.</span><span className="tw-rwhy-pull-amt">10%</span></div>
                <div className="tw-rwhy-pull-line"><span>+ Annual inspection</span><span className="tw-rwhy-pull-amt">$185</span></div>
                <div className="tw-rwhy-pull-line"><span>+ Lease renewal</span><span className="tw-rwhy-pull-amt">$295</span></div>
                <div className="tw-rwhy-pull-divider"></div>
                <div className="tw-rwhy-pull-result">
                  <span>Tidewater</span>
                  <span className="tw-rwhy-pull-result-amt">One flat fee.</span>
                </div>
              </div>
            </div>
          </article>

          {/* 02 — Map / Maryland regulatory */}
          <article className="tw-rwhy-story tw-rwhy-story-map">
            <div className="tw-rwhy-story-icon"><Map/></div>
            <div className="tw-rwhy-story-numtag">
              <span className="tw-rwhy-num">02</span>
              <span className="tw-rwhy-tag-label">The Maryland Maze</span>
            </div>
            <h3 className="tw-rwhy-story-headline">County by county, we know the rules.</h3>
            <p className="tw-rwhy-story-copy">Eviction timelines vary from 60&ndash;90 days in most Maryland counties, to <strong>up to 12 months in Montgomery County</strong>. Rental licensing requirements differ city to city. A part-time agent can&rsquo;t track all of it &mdash; we can.</p>
            <div className="tw-rwhy-story-meta">
              <span className="tw-rwhy-meta-num">12+</span>
              <span className="tw-rwhy-meta-label">jurisdictions monitored</span>
            </div>
          </article>

          {/* 03 — Tenant quality (data-driven card) */}
          <article className="tw-rwhy-story tw-rwhy-story-tenant">
            <div className="tw-rwhy-story-numtag">
              <span className="tw-rwhy-num">03</span>
              <span className="tw-rwhy-tag-label">The Screening File</span>
            </div>
            <h3 className="tw-rwhy-story-headline">Rigorous screening, presented without bias.</h3>
            <p className="tw-rwhy-story-copy">Each adult applies separately. <strong>No reusable reports.</strong> You see the unbiased file before you decide.</p>
            <ul className="tw-rwhy-checks">
              <li>Credit + background check</li>
              <li>3 years of rental history</li>
              <li>3&times; income verification</li>
              <li>Government-issued ID</li>
            </ul>
          </article>

          {/* 04 — Distant owners (full-width) */}
          <article className="tw-rwhy-feature tw-rwhy-feature-alt">
            <div className="tw-rwhy-feature-side">
              <div className="tw-rwhy-feature-icon"><Globe/></div>
              <div className="tw-rwhy-feature-tag">
                <span className="tw-rwhy-num">04</span>
                <span className="tw-rwhy-tag-label">The Owner 9 Time Zones Away</span>
              </div>
            </div>
            <div className="tw-rwhy-feature-body">
              <h3 className="tw-rwhy-feature-headline">Built for deployed and out-of-state owners.</h3>
              <p className="tw-rwhy-feature-copy">Military families on PCS orders. Federal relocations. Second-home owners watching from another state. We inspect every <strong>3&ndash;6 months</strong>, photo-document everything in AppFolio, and pay your bills from rental funds. You can be anywhere &mdash; the property still gets visited.</p>
              <div className="tw-rwhy-tags">
                <span className="tw-rwhy-pill">Military PCS</span>
                <span className="tw-rwhy-pill">Federal relocation</span>
                <span className="tw-rwhy-pill">Out-of-state second homes</span>
              </div>
            </div>
          </article>

          {/* 05 — Vacancy drag (timeline visual, dark, half-width) */}
          <article className="tw-rwhy-story tw-rwhy-story-time tw-rwhy-story-dark">
            <div className="tw-rwhy-story-numtag">
              <span className="tw-rwhy-num">05</span>
              <span className="tw-rwhy-tag-label">The Vacant Month</span>
            </div>
            <h3 className="tw-rwhy-story-headline">Multiple tour options. Faster fills.</h3>
            <div className="tw-rwhy-time-rail">
              <div className="tw-rwhy-time-step"><div className="tw-rwhy-time-dot"></div><span>Video walkthrough</span></div>
              <div className="tw-rwhy-time-step"><div className="tw-rwhy-time-dot"></div><span>3D Matterport tour</span></div>
              <div className="tw-rwhy-time-step"><div className="tw-rwhy-time-dot"></div><span>Virtual showing</span></div>
              <div className="tw-rwhy-time-step"><div className="tw-rwhy-time-dot"></div><span>In-person</span></div>
            </div>
            <p className="tw-rwhy-story-copy">Applications processed in <strong>3&ndash;5 business days</strong>. The faster a qualified tenant is in, the less rent you lose.</p>
            <div className="tw-rwhy-bigstat">
              <span className="tw-rwhy-bigstat-num">3&ndash;5<span className="tw-rwhy-bigstat-unit">days</span></span>
              <span className="tw-rwhy-bigstat-label">to a signed lease</span>
            </div>
          </article>

          {/* 06 — Eviction / when things go wrong */}
          <article className="tw-rwhy-story tw-rwhy-story-evict">
            <div className="tw-rwhy-story-icon"><Gavel/></div>
            <div className="tw-rwhy-story-numtag">
              <span className="tw-rwhy-num">06</span>
              <span className="tw-rwhy-tag-label">When It Goes Sideways</span>
            </div>
            <h3 className="tw-rwhy-story-headline">Eviction coordinated, not abandoned.</h3>
            <p className="tw-rwhy-story-copy">When non-payment escalates, we coordinate the full eviction in-house through our third-party filing partner with on-site representation. <strong>You don&rsquo;t face the courthouse alone.</strong></p>
            <div className="tw-rwhy-promise">
              <Shield/>
              <span>On-site representation through to resolution.</span>
            </div>
          </article>

        </div>

        {/* Closing CTA bar */}
        <div className="tw-rwhy-cta">
          <div className="tw-rwhy-cta-text">
            Six reasons. <em>One simple decision.</em>
          </div>
          <a href="#contact" className="tw-btn tw-btn-primary">Get a rental market analysis <ArrowRight/></a>
        </div>

      </div>
    </section>
  );
}
window.RentalPains = RentalPains;
