import { useState } from 'react';

const roles = [
  { id: 'board',     label: 'Board member' },
  { id: 'developer', label: 'Developer' },
  { id: 'owner',     label: 'Rental owner' },
  { id: 'realty',    label: 'Real estate client' },
  { id: 'vendor',    label: 'Vendor' },
  { id: 'other',     label: 'Just exploring' },
];

const intent = {
  board:     { title: 'Tell us about your community',    verb: 'Request a proposal' },
  developer: { title: 'Tell us about your development',  verb: 'Request a proposal' },
  owner:     { title: 'Tell us about your property',     verb: 'Get a rental quote' },
  realty:    { title: "Tell us what you're looking for", verb: 'Talk to a Realty advisor' },
  vendor:    { title: 'Tell us about your services',     verb: 'Submit vendor inquiry' },
  other:     { title: 'How can we help?',                verb: 'Send message' },
};

const placeholders = {
  community: { board: 'Wynbrook HOA', developer: 'The Residences at Crondall', vendor: 'Sullivan Plumbing LLC', owner: '3600 Crondall Ln, Owings Mills', realty: 'Ellicott City, MD', other: 'Community or company name' },
  communityLabel: { board: 'Community name', developer: 'Development name', vendor: 'Company name', owner: 'Property address', realty: 'City / area', other: 'Community or company name' },
  message: {
    board:     "Current company we're leaving, frustrations, board priorities, meeting cadence — whatever helps.",
    developer: 'Project name, units, expected first close, common-element scope.',
    owner:     'How many units, current rental situation, target rent.',
    realty:    'Buying, selling, timeline, budget range.',
    vendor:    'Trades you provide, counties you cover, insurance limits.',
    other:     'Tell us what brought you here today.',
  },
};

export default function ProposalForm() {
  const [role, setRole] = useState(null);
  const [homes, setHomes] = useState('50–150');
  const [submitted, setSubmitted] = useState(false);

  const cfg = role ? intent[role] : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="tw-c-form-card">
        <div className="tw-c-form-head">
          <div className="tw-c-form-head-left">
            <h2>Thanks — we'll be in touch.</h2>
            <p>A regional manager will reach back within one business day. Check your email for a quick confirmation.</p>
          </div>
          <div className="tw-c-form-badge">Received</div>
        </div>
        <div style={{ padding: '24px 32px 32px' }}>
          <p style={{ fontFamily: 'var(--tw-font-body)', fontSize: 14, color: 'var(--tw-fg-muted)', margin: '0 0 16px', lineHeight: 1.6 }}>
            While you wait, our most popular board resource:
          </p>
          <a className="tw-btn tw-btn-outline" href="/resources">Download the HOA Board Playbook →</a>
        </div>
      </div>
    );
  }

  return (
    <form className="tw-c-form-card" onSubmit={handleSubmit}>

      {/* Header — changes once a role is selected */}
      <div className="tw-c-form-head">
        <div className="tw-c-form-head-left">
          <h2>{cfg ? `${cfg.title}.` : 'How can we help?'}</h2>
          <p>{cfg ? 'No-pressure. A regional manager from your area reviews every submission personally.' : 'Select who you are and we\'ll show you exactly what we need.'}</p>
        </div>
        <span className="tw-c-form-badge">{cfg ? 'Ready' : 'Step 1 of 2'}</span>
      </div>

      {/* Role selector */}
      <div className="tw-c-role-strip">
        <div className="tw-c-role-label">
          I&rsquo;m a&hellip;
          {!role && <span className="tw-c-role-required">Start here</span>}
        </div>
        <div className="tw-c-role-pills" role="radiogroup" aria-label="What is your role?">
          {roles.map((r, i) => (
            <>
              {i === 2 && <div key="div" className="tw-c-role-divider" aria-hidden="true"></div>}
              <button
                key={r.id}
                type="button"
                role="radio"
                aria-checked={role === r.id}
                className={`tw-c-role-pill${role === r.id ? ' is-selected' : ''}`}
                onClick={() => setRole(r.id)}
              >
                <span className="tw-c-role-check">✓</span>
                {r.label}
              </button>
            </>
          ))}
        </div>
      </div>

      {/* Fields — only shown once a role is selected */}
      {role && (
        <>
          <div className="tw-c-form-body">
            <div className="tw-c-form-row row-2">
              <div className="tw-c-field">
                <label>Name</label>
                <input type="text" placeholder="Marcia Sullivan" required />
              </div>
              <div className="tw-c-field">
                <label>Email</label>
                <input type="email" placeholder="treasurer@yourcommunity.org" required />
              </div>
            </div>

            <div className="tw-c-form-row row-2">
              <div className="tw-c-field">
                <label>Phone <span className="tw-c-opt">(optional)</span></label>
                <input type="tel" placeholder="(410) 555-0148" />
              </div>
              <div className="tw-c-field">
                <label>{placeholders.communityLabel[role]}</label>
                <input type="text" placeholder={placeholders.community[role]} />
              </div>
            </div>

            {(role === 'board' || role === 'developer') && (
              <div className="tw-c-field">
                <label>Size of community</label>
                <div className="tw-c-seg" role="radiogroup" aria-label="Community size">
                  {['Under 50', '50–150', '150–500', '500+'].map(s => (
                    <button
                      key={s}
                      type="button"
                      role="radio"
                      aria-checked={homes === s}
                      className={`tw-c-seg-opt${homes === s ? ' is-selected' : ''}`}
                      onClick={() => setHomes(s)}
                    >{s}</button>
                  ))}
                </div>
              </div>
            )}

            {(role === 'board' || role === 'developer') && (
              <div className="tw-c-field">
                <label>Timing <span className="tw-c-opt">(no commitment)</span></label>
                <select defaultValue="explore">
                  <option value="explore">Just exploring options</option>
                  <option value="6mo">Looking in the next 6 months</option>
                  <option value="60d">Looking in the next 60 days</option>
                  <option value="urgent">Need to transition urgently</option>
                </select>
              </div>
            )}

            {role === 'owner' && (
              <div className="tw-c-field">
                <label>Property type</label>
                <select defaultValue="sfh">
                  <option value="sfh">Single-family home</option>
                  <option value="th">Townhome</option>
                  <option value="condo">Condo unit</option>
                  <option value="multi">2–4 unit building</option>
                </select>
              </div>
            )}

            <div className="tw-c-field">
              <label>
                {role === 'vendor' ? 'Trade & service area' : 'Anything we should know?'}
                <span className="tw-c-opt">(optional)</span>
              </label>
              <textarea placeholder={placeholders.message[role]}></textarea>
            </div>
          </div>

          <div className="tw-c-form-foot">
            <div className="tw-c-form-foot-note">
              <strong>One business day.</strong> A regional manager — not a sales rep — reads every submission. You&rsquo;ll never get a high-pressure follow-up.
            </div>
            <button type="submit" className="tw-btn tw-btn-primary tw-btn-lg">
              {cfg.verb} →
            </button>
          </div>
        </>
      )}
    </form>
  );
}
