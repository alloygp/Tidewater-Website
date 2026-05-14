// Resources — Featured download (HOA Board Playbook)
function ResourcesFeatured() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  return (
    <section className="tw-rfeat">
      <div className="tw-container">
        <div className="tw-rfeat-card">
          <div className="tw-rfeat-img">
            {/* Faux booklet mock */}
            <div className="tw-rfeat-mock">
              <div className="tw-rfeat-mock-eye">FREE FOR BOARDS · V3</div>
              <div className="tw-rfeat-mock-title">The HOA Board Playbook</div>
              <div className="tw-rfeat-mock-rule"></div>
              <div className="tw-rfeat-mock-lines">
                <i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
              <div className="tw-rfeat-mock-foot">32 pages &middot; Reserves · Vendor · Cadence</div>
            </div>
          </div>
          <div className="tw-rfeat-body">
            <div className="tw-eyebrow">Featured Download</div>
            <h2 className="tw-rfeat-title">The HOA Board Playbook<br/><em>battle-tested across 300+ Mid-Atlantic communities.</em></h2>
            <p className="tw-rfeat-copy">A 32-page field guide to running a board without burning out. Written by Tidewater&rsquo;s PCAM-credentialed managers from what we&rsquo;ve actually seen on agendas, not theory.</p>
            <ul className="tw-rfeat-bullets">
              <li><Check/><span>Reserve funding before Maryland made it law &mdash; and what we&rsquo;d still recommend</span></li>
              <li><Check/><span>The vendor compliance file every board should keep (and how to audit yours)</span></li>
              <li><Check/><span>Meeting cadence templates by community size, with sample agendas</span></li>
              <li><Check/><span>How to read your monthly management report in 10 minutes</span></li>
            </ul>
            <form className="tw-rfeat-form" onSubmit={e=>{e.preventDefault();alert("Thanks — playbook on its way to your inbox.");}}>
              <input type="email" placeholder="your-board-email@community.org" required/>
              <button className="tw-btn tw-btn-primary tw-btn-pill" type="submit">Email me the playbook</button>
            </form>
            <p className="tw-rfeat-fine">Free. No sales call attached. One follow-up email a quarter, unsubscribe any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ResourcesFeatured = ResourcesFeatured;
