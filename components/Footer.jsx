// HOA Homepage — CTA + Footer
function CTA() {
  const Check = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>;
  return (
    <section className="tw-cta" id="contact">
      <div className="tw-cta-inner">
        <div>
          <div className="tw-eyebrow">Request a Proposal</div>
          <h2 className="tw-cta-title">Let&rsquo;s talk about your community.</h2>
          <p className="tw-cta-body">Tell us a little about your association and a manager from your region will be in touch within one business day.</p>
          <ul className="tw-cta-points">
            <li><Check/>One-business-day response from a regional manager</li>
            <li><Check/>Free, no-obligation proposal &amp; transition timeline</li>
            <li><Check/>Apples-to-apples comparison vs. your current company</li>
          </ul>
        </div>
        <form className="tw-cta-form" onSubmit={e=>{e.preventDefault();alert("Thanks — we'll be in touch within one business day.");}}>
          <div>
            <h3 className="tw-cta-form-title">Get a proposal</h3>
            <p className="tw-cta-form-sub">All fields are required. We&rsquo;ll never share your information.</p>
          </div>
          <div className="tw-row-2">
            <div className="tw-field"><label>First name</label><input placeholder="Marcia"/></div>
            <div className="tw-field"><label>Last name</label><input placeholder="Sullivan"/></div>
          </div>
          <div className="tw-field"><label>Board email</label><input type="email" placeholder="treasurer@yourcommunity.org"/></div>
          <div className="tw-row-2">
            <div className="tw-field"><label>Community name</label><input placeholder="Wynbrook HOA"/></div>
            <div className="tw-field"><label>Number of homes</label>
              <select defaultValue=""><option value="" disabled>Select…</option><option>Under 50</option><option>50–150</option><option>150–500</option><option>500+</option></select>
            </div>
          </div>
          <div className="tw-field"><label>Service interest</label>
            <select defaultValue="full"><option value="full">Full Service Management</option><option>Flex Service</option><option>Financial Only</option><option>Developer Program</option><option>Not sure yet — I&rsquo;d like to talk it through</option></select>
          </div>
          <button className="tw-btn tw-btn-primary tw-btn-block tw-btn-lg" type="submit">Request my proposal</button>
          <p className="tw-field-fine">Or call <strong>(443) 548-0191</strong> · 24/7 emergency line for current communities</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const offices = [
    { city: 'Owings Mills, MD', sub: 'Headquarters · 3600 Crondall Lane' },
    { city: 'Silver Spring, MD', sub: 'Washington DC Metro' },
    { city: 'Eastern Shore, MD', sub: 'Delmarva regional office' },
  ];
  const services = ['Anne Arundel', 'Annapolis', 'Baltimore', 'Baltimore County', 'Bel Air', 'Bethesda', 'Bowie', 'Cambridge', 'Carroll County', 'Catonsville', 'Charles County', 'Cockeysville', 'College Park', 'Columbia', 'Crofton', 'Easton', 'Ellicott City', 'Frederick', 'Gaithersburg', 'Germantown', 'Glen Burnie', 'Greenbelt', 'Hagerstown', 'Hanover', 'Howard County', 'Hunt Valley', 'Hyattsville', 'Laurel', 'Montgomery County', 'Ocean City', 'Olney', 'Owings Mills', 'Pikesville', 'Potomac', 'Prince George&rsquo;s County', 'Reisterstown', 'Rockville', 'Salisbury', 'Severna Park', 'Silver Spring', 'Towson', 'Washington DC', 'Wheaton', 'White Marsh', 'Northern Virginia', 'Wilmington, DE', 'Rehoboth, DE'];
  return (
    <footer className="tw-footer">
      <div className="tw-container">
        <div className="tw-footer-grid">
          <div className="tw-footer-brand">
            <img src="assets/logo-main-white.svg" alt="Tidewater"/>
            <p>Family-owned. Community-focused. Always moving forward. Hands-on management and personalized insight for the Mid-Atlantic since 1989.</p>
            <div className="tw-footer-social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
          <div>
            <h4>Companies</h4>
            <ul>
              <li><a href="hoa-management.html">HOA Management</a></li>
              <li><a href="condo-association-management.html">Condo Association Management</a></li>
              <li><a href="rental-property-management.html">Rental Property Management</a></li>
              <li><a href="maintenance.html">Tidewater Property Maintenance</a></li>
              <li><a href="realty.html">Tidewater Realty Group</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Owner Login</a></li>
              <li><a href="resources.html">Board Education</a></li>
              <li><a href="resources.html#insights">Insights &amp; Blog</a></li>
              <li><a href="about-careers.html">Careers</a></li>
              <li><a href="#">Pay Your Assessment</a></li>
            </ul>
          </div>
          <div>
            <h4>Office Locations</h4>
            <ul>
              {offices.map(o => (
                <li key={o.city} style={{display:'block'}}>
                  <strong style={{color:'var(--tw-cream)',fontWeight:600}}>{o.city}</strong><br/>
                  <span style={{fontSize:13,color:'#9d9b94'}}>{o.sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tw-footer-areas">
        <div className="tw-footer-areas-inner">
          <span className="tw-footer-areas-label">Service Area</span>
          <span className="tw-footer-areas-list">
            {services.map((s,i) => (
              <React.Fragment key={i}>
                <span dangerouslySetInnerHTML={{__html:s}}></span>
                {i < services.length-1 && <span style={{margin:'0 6px',color:'#5a5851'}}>·</span>}
              </React.Fragment>
            ))}
          </span>
        </div>
      </div>
      <div className="tw-footer-base">
        <div className="tw-footer-base-inner">
          <span>© 2026 Tidewater Companies. All rights reserved. AAMC® · A+ BBB · CAI Member.</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.CTA = CTA;
window.Footer = Footer;
