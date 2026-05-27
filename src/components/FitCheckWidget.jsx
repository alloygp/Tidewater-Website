import { useState } from 'react';

const Q1 = [
  { v: 'small', label: 'Under 100 homes',  sub: 'Townhome or small condo' },
  { v: 'mid',   label: '100–400 homes',    sub: 'Most common in our portfolio' },
  { v: 'large', label: '400+ homes',       sub: 'Master-planned or high-rise' },
];
const Q2 = [
  { v: 'finance', label: 'Financials & reserves',  sub: 'Reporting, audits, funding' },
  { v: 'comms',   label: 'Communication',           sub: 'Slow responses, owners frustrated' },
  { v: 'vendor',  label: 'Vendor management',       sub: 'COIs, quality, accountability' },
  { v: 'all',     label: 'All of the above',        sub: 'Time for a full reset' },
];
const Q3 = [
  { v: 'MD', label: 'Maryland' },      { v: 'VA', label: 'Virginia' },
  { v: 'DC', label: 'Washington DC' }, { v: 'PA', label: 'Pennsylvania' },
  { v: 'DE', label: 'Delaware' },      { v: 'WV', label: 'West Virginia' },
];

export default function FitCheckWidget() {
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({ size: null, pain: null, state: null });

  const answer = (key, v) => {
    setAnswers(a => ({ ...a, [key]: v }));
    setStep(s => s + 1);
  };

  const recommend = () => {
    const tier =
      answers.pain === 'finance' ? 'Financial Only or Flex' :
      answers.pain === 'all'     ? 'Full Service' :
      answers.size === 'small'   ? 'Flex Service' : 'Full Service';
    return { tier };
  };

  return (
    <div className="tw-spotlight tw-fit">
      <div className="tw-spot-head">
        <div className="tw-spot-live">
          <span className="tw-spot-live-dot"></span>
          2-minute fit check — Step {Math.min(step + 1, 4)} of 4
        </div>
      </div>

      <div className="tw-fit-progress">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`tw-fit-pip ${step >= i ? 'on' : ''}`}></div>
        ))}
      </div>

      {step === 0 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">How big is your community?</h3>
          <div className="tw-fit-opts">
            {Q1.map(o => (
              <button key={o.v} className="tw-fit-opt" onClick={() => answer('size', o.v)}>
                <div className="tw-fit-opt-label">{o.label}</div>
                <div className="tw-fit-opt-sub">{o.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">Where&rsquo;s the friction today?</h3>
          <div className="tw-fit-opts">
            {Q2.map(o => (
              <button key={o.v} className="tw-fit-opt" onClick={() => answer('pain', o.v)}>
                <div className="tw-fit-opt-label">{o.label}</div>
                <div className="tw-fit-opt-sub">{o.sub}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="tw-fit-step">
          <h3 className="tw-fit-q">What state is the community in?</h3>
          <div className="tw-fit-states">
            {Q3.map(o => (
              <button key={o.v} className="tw-fit-state" onClick={() => answer('state', o.v)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {step >= 3 && (() => {
        const r = recommend();
        return (
          <div className="tw-fit-result">
            <div className="tw-fit-result-eyebrow">Based on your answers</div>
            <h3 className="tw-fit-result-h">You&rsquo;re a strong fit for <span>{r.tier}</span></h3>
            <div className="tw-fit-result-meta">
              <div className="tw-fit-result-row">
                <span className="tw-fit-result-label">Likely first call</span>
                <span className="tw-fit-result-val">Within 1 business day</span>
              </div>
            </div>
            <div className="tw-fit-result-actions">
              <a href="#contact" className="tw-btn tw-btn-primary">Request a proposal</a>
              <button className="tw-btn tw-btn-ghost" onClick={() => { setStep(0); setAnswers({ size: null, pain: null, state: null }); }}>
                Start over
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
