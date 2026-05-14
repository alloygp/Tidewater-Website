// Resources — Newsletter (compact dark teal band)
function ResourcesNewsletter() {
  const [aud, setAud] = React.useState('board');
  const auds = [
    { id: 'board',  label: 'HOA Boards' },
    { id: 'rental', label: 'Rental Owners' },
    { id: 'home',   label: 'Homeowners' },
    { id: 'all',    label: 'Send me everything' },
  ];
  return (
    <section className="tw-rnews">
      <div className="tw-rnews-inner">
        <div>
          <div className="tw-rnews-eyebrow">The Tidewater Brief</div>
          <h2 className="tw-rnews-title">One short email a month. <em>Timed to what your year actually looks like.</em></h2>
          <p className="tw-rnews-copy">Budget season, inspection windows, regulatory changes you should know about. Written by Tidewater&rsquo;s managers &mdash; not by an agency. Skip a month? You won&rsquo;t hear about it.</p>
        </div>
        <form className="tw-rnews-form" onSubmit={e=>{e.preventDefault();alert("Welcome aboard — first issue arrives at the start of next month.");}}>
          <div className="tw-rnews-radio" role="radiogroup" aria-label="Which list?">
            {auds.map(a => (
              <React.Fragment key={a.id}>
                <input
                  type="radio"
                  id={`tw-news-${a.id}`}
                  name="tw-news-aud"
                  checked={aud === a.id}
                  onChange={() => setAud(a.id)}
                />
                <label htmlFor={`tw-news-${a.id}`}>{a.label}</label>
              </React.Fragment>
            ))}
          </div>
          <div className="tw-rnews-row">
            <input type="email" placeholder="you@yourcommunity.org" required/>
            <button className="tw-btn tw-btn-primary tw-btn-pill" type="submit">Subscribe</button>
          </div>
          <p className="tw-rnews-fine">One email a month. Unsubscribe in one click. Never shared with anyone.</p>
        </form>
      </div>
    </section>
  );
}
window.ResourcesNewsletter = ResourcesNewsletter;
