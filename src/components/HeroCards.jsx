import { useState, useEffect, useRef } from 'react';

const heroCards = [
  {
    type: 'dark',
    icon: '🌐',
    title: 'Web Development',
    sub: 'React · Next.js · Node.js',
    badge: 'From ₹15,000',
    page: 'services',
  },
  {
    type: 'dark',
    icon: '🤖',
    title: 'AI & ML Solutions',
    sub: 'TensorFlow · Python · NLP',
    badge: 'Enterprise Ready',
    page: 'services',
  },
  {
    type: 'sky',
    icon: '🎓',
    title: 'Professional Courses',
    sub: '12 Programs · 100% Placement',
    badge: 'Enroll Now',
    page: 'courses',
  },
  {
    type: 'white',
    icon: '📱',
    title: 'Mobile Apps',
    sub: 'Flutter · BLoC · Firebase',
    badge: '₹25,000',
    page: 'courses',
  },
  {
    type: 'white',
    icon: '📊',
    title: 'Data Science',
    sub: 'Python · ML · Tableau',
    badge: '₹25,000',
    page: 'courses',
  },
];

const HeroCards = ({ onNav }) => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const N = heroCards.length;

  const go = (i) => {
    setCur(((i % N) + N) % N);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur((p) => (p + 1) % N), 3000);
  };

  useEffect(() => {
    reset();
    return () => clearInterval(timerRef.current);
  }, []);

  const getPos = (idx) => ((idx - cur + N) % N);

  return (
    <div className="hero-right">
      <div className="cards-scene">
        {heroCards.map((c, i) => {
          const pos = getPos(i);
          const cls = `h-card hc-${c.type}`;
          return (
            <div
              key={i}
              className={cls}
              data-pos={pos}
              onClick={() => {
                 {
                  go(i);
                  reset();
                }
              }}
            >
              <div className="hc-icon">{c.icon}</div>
              <div className="hc-title">{c.title}</div>
              <div className="hc-sub">{c.sub}</div>
              {/* <div className="hc-badge">{c.badge}</div> */}
            </div>
          );
        })}
        <div className="orbit-dot-only"></div>
      </div>
      <div className="carousel-nav">
        <button
          className="c-arr"
          onClick={() => {
            go(cur - 1);
            reset();
          }}
        >
          ‹
        </button>
        {heroCards.map((_, i) => (
          <button
            key={i}
            className={`c-dot${i === cur ? ' on' : ''}`}
            onClick={() => {
              go(i);
              reset();
            }}
          />
        ))}
        <button
          className="c-arr"
          onClick={() => {
            go(cur + 1);
            reset();
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroCards;
