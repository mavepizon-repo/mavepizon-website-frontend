import React from 'react';
import HeroCards from '../components/HeroCards';
import Counter from '../components/Counter';
import FlipCard from '../components/FlipCard';
import { courseList } from '../data/coursesData';

const Home = ({ onNavigate }) => {
  const partners = [
    'TCS', 'Infosys', 'HCL', 'Wipro', 'Cognizant', 
    'Accenture', 'IBM', 'Capgemini', 'Zoho', 
    'Tech Mahindra', 'SAP Labs',
  ];

  return (
    <div className="page active" id="page-home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-dots"></div>
        <div className="blob1"></div>
        <div className="blob2"></div>
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-tag">
              <div className="hero-dot"></div>
              No.1 IT Training & Services – Tamil Nadu
            </div>
            <h1>
              Building Tomorrow's
              <br />
              <span className="hl">Growing Brands</span>
            </h1>
            <p className="hero-desc">
              World-class IT services & professional training at Tirunelveli, Thisyanvilai,
              Pollachi & Nagercoil. Live projects, expert mentors & 100% placement support.
            </p>
            <div className="hero-btns">
              <button className="btn-sky" onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}>

                📅 Book Free Demo
              </button>
              <button className="btn-ghost" onClick={() => onNavigate('courses')}>
                Explore Courses →
              </button>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hstat-val">
                  <Counter target={5000} suffix="+" />
                </div>
                <div className="hstat-lbl">Students</div>
              </div>
              <div className="hstat-sep"></div>
              <div>
                <div className="hstat-val">
                  <Counter target={95} suffix="%" />
                </div>
                <div className="hstat-lbl">Placement</div>
              </div>
              <div className="hstat-sep"></div>
              <div>
                <div className="hstat-val">4</div>
                <div className="hstat-lbl">Branches</div>
              </div>
              <div className="hstat-sep"></div>
              <div>
                <div className="hstat-val">
                  <Counter target={50} suffix="+" />
                </div>
                <div className="hstat-lbl">Partners</div>
              </div>
            </div>
          </div>
          <HeroCards onNav={onNavigate} />
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <div className="partners">
        <div className="partners-lbl">Our Trusted Hiring Partners</div>
        <div className="mq-wrap">
          <div className="mq-track">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="mq-pill">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-tag">What We Do</div>
            <h2>Our <span>IT Services</span></h2>
            <p>End-to-end digital solutions to transform your business</p>
          </div>
          <div className="srv-grid">
            {[
              ['🌐', 'Web Development', 'Custom websites & apps with React, Next.js & Node.js.', ['React', 'Next.js', 'Node'], 'Starting ₹15,000'],
              ['📱', 'Mobile App Development', 'Flutter & React Native cross-platform iOS & Android apps.', ['Flutter', 'React Native'], 'Starting ₹25,000'],
              ['🤖', 'AI & ML Solutions', 'Intelligent automation, NLP & predictive analytics.', ['TensorFlow', 'NLP'], 'Starting ₹40,000'],
              ['☁️', 'Cloud & DevOps', 'AWS, Azure, GCP infrastructure & CI/CD pipelines.', ['AWS', 'Docker'], 'Starting ₹20,000'],
              ['🎨', 'UI/UX Design', 'Figma designs that convert visitors to loyal customers.', ['Figma', 'Prototype'], 'Starting ₹10,000'],
              ['📊', 'Digital Marketing', 'SEO, Google Ads & social media to grow revenue.', ['SEO', 'Ads'], '₹8,000/month']
            ].map(([ico, title, desc, tags, price], i) => (
              <div key={i} className="srv-card" onClick={() => onNavigate('services')}>
                <div className="srv-ico">{ico}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="srv-tags">
                  {tags.map((t) => <span key={t} className="srv-tag">{t}</span>)}
                </div>
                <span className="srv-price">{price} →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-tag">Success Stories</div>
            <h2>What Our <span>Students Say</span></h2>
          </div>
          <div className="testi-grid">
            {[
              [
                'S',
                'linear-gradient(135deg,#0ea5e9,#38bdf8)',
                'Sam Patrick',
                'Tirunelveli',
                "Learned complete Python course from MavePizon. Basically I am a non-IT guy, but through the coaching of the staff at the company, I became much more interested in the IT field and followed their course plan. Now I am placed in a Chennai-based IT firm with a decent salary. Thanks to MavePizon and staff Ajitha Mam and Frank Mam.",


              ],
              [
                'A',
                'linear-gradient(135deg,#8b5cf6,#7c3aed)',
                'Abhishek',
                'Tirunelveli',
                "I'm very happy to say that my decision was right as I chose MavePizon for that. Here I learned a lot more new skills in python programming and at the end of my course I got placed in NIIT...",
              ],
              [
                'R',
                'linear-gradient(135deg,#059669,#047857)',
                'Ruban',
                'Coimbatore',
                "Enrolling at MavePizon for Python Full Stack Development was the best career decision I ever made. Working under the tutelage of Ms. Ajitha, I was imparted a solid foundation in Python...",
              ],
            ].map(([av, bg, name, role, text], i) => (
              <div key={i} className="t-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{text}</p>
                <div className="t-author">
                  <div className="t-av" style={{ background: bg }}>{av}</div>
                  <div>
                    <div className="t-name">{name}</div>
                    <div className="t-role">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <div className="cta-strip">
        <div className="container">
          <h2>Ready to Transform Your Career?</h2>
          <p>Call us: <strong>94872 27157</strong> · 4 Branches across Tamil Nadu</p>
          <button className="btn-wh" onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}>
            📅 Book Free Demo →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;