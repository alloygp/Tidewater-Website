// OriginStory — 2-col founding narrative with pull-quote
function OriginStory() {
  return (
    <section className="tw-section tw-section-cream tw-origin">
      <div className="tw-container">
        <div className="tw-origin-grid">
          <aside className="tw-origin-aside">
            <div className="tw-origin-portrait">
              <div className="tw-origin-portrait-frame">
                <div className="tw-origin-portrait-img">
                  <span className="tw-origin-portrait-initials">SG<br/>+<br/>MG</span>
                </div>
                <div className="tw-origin-portrait-tape tw-origin-portrait-tape--tl"></div>
                <div className="tw-origin-portrait-tape tw-origin-portrait-tape--br"></div>
              </div>
              <figcaption className="tw-origin-portrait-cap">
                Stanley Greenberg <em>(left)</em> founded the company in 1989. His son Marc <em>(right)</em>, CMCA, AMS, PCAM, joined a decade later and now serves as President.
              </figcaption>
            </div>
          </aside>

          <div className="tw-origin-body">
            <div className="tw-eyebrow">The Founding Story</div>
            <h2 className="tw-section-title">It started with a phone, a card table, and a handful of commercial condo boards <em>who wanted someone to actually pick up.</em></h2>

            <div className="tw-origin-prose">
              <p className="tw-origin-dropcap">
                <span className="tw-origin-drop">S</span>tanley Greenberg founded Tidewater in 1989, working from connections built during his career with the City of Baltimore. The first clients were commercial condos and developer projects — small accounts with real people on the other end of the phone.
              </p>
              <p>His son Marc joined in the late 1990s and brought a different lens: existing communities, homeowner-controlled boards, and the long, patient work of community association management. Marc earned his CMCA, then AMS, then PCAM — the highest individual credential the industry offers.</p>
              <p>The company grew. It crossed state lines into DC, Virginia, Pennsylvania, Delaware, and West Virginia. It picked up the AAMC® accreditation — the highest company-level credential CAI awards. It hired a Controller with an MBA and CPA, a Director of HR with SHRM-CP, a Director of QA with a PCAM and a former chapter presidency. It now manages roughly 300 communities and more than 30,000 homes.</p>
              <p><strong>And Stanley still walks the halls.</strong> Marc is still in the building. Their door is open to every employee and every board chair who wants to talk to ownership, not a regional vice-president three time zones away.</p>
            </div>

            <blockquote className="tw-origin-quote">
              <span className="tw-origin-quote-mark" aria-hidden="true">&ldquo;</span>
              <p>The way we work isn&rsquo;t a wall poster. It&rsquo;s the call you get back the same morning, the financial report on the 1st, and the manager who knew your community before you joined the board.</p>
              <footer><strong>Marc Greenberg</strong> · President, CMCA · AMS · PCAM</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
window.OriginStory = OriginStory;
