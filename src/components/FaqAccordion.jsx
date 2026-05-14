import { useState } from 'react';

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

export default function FaqAccordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="tw-sol-faq-list">
      {items.map((item, i) => {
        const isOpen = open === i;
        const answerParagraphs = Array.isArray(item.a) ? item.a : [item.a];
        return (
          <div key={i} className={`tw-sol-faq-item${isOpen ? ' is-open' : ''}`}>
            <button
              className="tw-sol-faq-q"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="tw-sol-faq-num">{String(i + 1).padStart(2, '0')}</span>
              <span>{item.q}</span>
              <span className="tw-sol-faq-toggle">
                <PlusIcon />
              </span>
            </button>
            <div className="tw-sol-faq-a">
              <div className="tw-sol-faq-a-inner">
                {answerParagraphs.map((para, j) => (
                  <p key={j} dangerouslySetInnerHTML={{ __html: para }} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
