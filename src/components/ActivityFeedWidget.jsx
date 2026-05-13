import { useState, useEffect, useRef } from 'react';

const DEFAULT_EVENTS = [
  { time: '9:14am',    region: 'Howard Co, MD',    cls: 'teal', label: 'QA review',         text: 'Manager flagged drainage erosion at clubhouse — work order issued before board notice.' },
  { time: '8:42am',    region: 'Fairfax, VA',       cls: 'gold', label: 'After-hours call',   text: 'Burst pipe answered in 11 min by on-call CAM. Plumber dispatched.' },
  { time: 'Yesterday', region: 'Sussex, DE',         cls: 'sage', label: 'Vendor compliance',  text: 'Landscape contractor COI renewed 4 days before expiry. Auto-tracked.' },
  { time: 'Yesterday', region: 'Anne Arundel, MD',   cls: 'teal', label: 'Reserve update',     text: 'Q3 reserve study delivered to board 6 days ahead of schedule.' },
  { time: '2 days ago',region: 'Bethesda, MD',       cls: 'clay', label: 'Inspection',         text: 'Annual fire alarm test passed. Compliance docs filed with county.' },
  { time: '2 days ago',region: 'Reston, VA',         cls: 'gold', label: 'Owner request',      text: 'ARC modification approved within 48 hrs of complete submission.' },
];

export default function ActivityFeedWidget({ events, title, sub, footNum, footText }) {
  const allEvents = events || DEFAULT_EVENTS;
  const widgetTitle  = title   || 'What "hands-on" looks like, right now';
  const widgetSub    = sub     || 'A sampling of work happening across communities we manage — not headlines, just the daily details that keep boards out of crisis mode.';
  const widgetFootNum  = footNum  || '2,400+';
  const widgetFootText = footText || 'work items resolved across the portfolio this week';

  const [visible, setVisible]   = useState(allEvents.slice(0, 4));
  const [pulseId, setPulseId]   = useState(null);
  const idxRef                  = useRef(4);

  useEffect(() => {
    const t = setInterval(() => {
      const next = allEvents[idxRef.current % allEvents.length];
      idxRef.current++;
      const id = Date.now();
      setVisible(prev => [{ ...next, _id: id }, ...prev.slice(0, 3)]);
      setPulseId(id);
      setTimeout(() => setPulseId(null), 1600);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="tw-spotlight tw-feed">
      <div className="tw-spot-head">
        <div className="tw-spot-head-left">
          <div className="tw-spot-live">
            <span className="tw-spot-live-dot"></span>
            Live across our portfolio
          </div>
        </div>
        <div className="tw-spot-meta">Last 48 hrs</div>
      </div>
      <h3 className="tw-feed-title">{widgetTitle}</h3>
      <p className="tw-feed-sub">{widgetSub}</p>
      <ul className="tw-feed-list">
        {visible.map((e, i) => (
          <li key={e._id || i} className={`tw-feed-item ${e._id === pulseId ? 'is-new' : ''}`}>
            <div className={`tw-feed-dot ${e.cls}`}></div>
            <div className="tw-feed-body">
              <div className="tw-feed-row">
                <span className={`tw-feed-tag ${e.cls}`}>{e.label}</span>
                <span className="tw-feed-meta">{e.region} · {e.time}</span>
              </div>
              <div className="tw-feed-text">{e.text}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="tw-feed-foot">
        <span className="tw-feed-foot-num">{widgetFootNum}</span> {widgetFootText}
      </div>
    </div>
  );
}
