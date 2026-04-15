import { useState } from 'react';
import WordCloud from '../components/WordCloud';
import Modal from '../components/Modal';

const Vision = ({ onNavigate }) => {
  const [modal, setModal] = useState(null);

  const visionProjects = [
    [
      '🏪',
      'E-Commerce Platform',
      'Full-stack shop with payment, inventory & analytics.',
      ['React', 'Node.js', 'MongoDB'],
    ],
    [
      '🏪',
      'Hospital Management',
      'Patient records, appointments & billing.',
      ['Django', 'PostgreSQL'],
    ],
    [
      '🤖',
      'AI Chatbot Platform',
      'Custom AI chatbot with WhatsApp integration.',
      ['OpenAI', 'FastAPI'],
    ],
    [
      '📱',
      'Delivery Tracking App',
      'Real-time tracking for logistics company.',
      ['Flutter', 'Firebase'],
    ],
    ['☁️', 'Cloud Migration', 'On-premise to AWS with zero downtime.', ['AWS', 'Terraform']],
    [
      '📊',
      'BI Dashboard',
      'Real-time business intelligence for retail chain.',
      ['Power BI', 'SQL'],
    ],
  ];

  const missionProjects = [
    [
      '🛍️',
      'Shopping App',
      'Cart & payments — Python Full Stack project.',
      ['Django', 'React'],
    ],
    ['💼', 'Job Portal', 'Job listing with recruiter dashboard.', ['MongoDB', 'React']],
    [
      '📱',
      'Food Delivery App',
      'Real-time delivery — Flutter BLoC project.',
      ['Flutter', 'Firebase'],
    ],
    ['🧠', 'Sentiment Analyzer', 'ML model classifying reviews.', ['Python', 'NLP']],
    ['🎨', 'Fintech UI/UX', 'Complete banking app redesign.', ['Figma', 'Research']],
    [
      '📚',
      'LMS Platform',
      'Learning system — Java Full Stack project.',
      ['Spring Boot', 'React'],
    ],
  ];

  return (
    <div className="page active">
      <div className="page-banner">
        <div className="container">
          <h1>
            Vision & <span>Mission</span>
          </h1>
          <p>The values and principles that drive MavePizon</p>
          <div className="breadcrumb">
            Home › <span>Vision & Mission</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          {/* VM cards */}
          <div className="vm-grid">
            <div className="vm-card vm-vision">
              <div className="vm-ring"></div>
              <div className="vm-ring2"></div>
              <span className="vm-icon">🔭</span>
              <h2>Our Vision</h2>
              <p>
               Full focus on placement & IT career
              </p>
              <ul className="vm-list">
                <li>Bridge industry & talent gap</li>
                <li>World-class digital solutions</li>
                <li>100% job-ready professionals</li>
                <li>Building Careers. Empowering Businesses.</li>
              </ul>
              {/* <button className="vm-btn" onClick={() => setModal('vproj')}>
                🚀 View Vision Projects
              </button> */}
            </div>
            <div className="vm-card vm-mission">
              <div className="vm-ring"></div>
              <div className="vm-ring2"></div>
              <span className="vm-icon">🎯</span>
              <h2>Our Mission</h2>
              <p>
                Turning Learning into Careers & Ideas into Solutions
              </p>
              <ul className="vm-list">
                <li>Provide career-focused IT courses with real-time projects and guaranteed placement support</li>
                <li>Train students to become job-ready professionals in the tech industry</li>
                <li>Help businesses adopt modern applications to simplify and scale their operations</li>
                <li>Bridge the gap between skilled talent and business needs</li>
              </ul>
              {/* <button className="vm-btn" onClick={() => setModal('mproj')}>
                🏭️ View Live Projects
              </button> */}
            </div>
          </div>
          {/* SELF DEVELOPMENT WORD CLOUD */}
          <div className="sec-hd" style={{ marginTop: '52px' }}>
            <div className="sec-tag">Self Development</div>
            <h2>
              Our <span>Learning Philosophy</span>
            </h2>
            <p>
              Everything we teach revolves around self development and building real-world skills
            </p>
          </div>
          <WordCloud />
          {/* core values */}
          <div className="sec-hd" style={{ marginTop: '52px' }}>
            <div className="sec-tag">Core Values</div>
            <h2>
              What <span>Drives Us</span>
            </h2>
          </div>
          <div className="srv-grid">
            {[
              ['💡', 'Innovation First', 'Latest technologies for future-ready solutions.'],
              ['🤝', 'Integrity Always', 'Transparent communication and honest pricing.'],
              ['⚡', 'Excellence', 'Highest standards in quality and on-time delivery.'],
              ['🌱', 'Grow Together', 'We celebrate every placement and project launched.'],
              ['🎓', 'Continuous Learning', 'Curriculum updated quarterly to match industry demands.'],
              ['🌍', 'Community Impact', 'Group discounts to make learning accessible for all.'],
            ].map(([ico, h, p], i) => (
              <div key={i} className="srv-card">
                <div className="srv-ico">{ico}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODALS */}
      <Modal isOpen={modal === 'vproj'} onClose={() => setModal(null)}>
        <div className="modal-title">🔭 Vision Projects</div>
        <div className="modal-sub">500+ projects delivered — transforming businesses</div>
        <div className="proj-grid">
          {visionProjects.map(([ico, h, p, tags], i) => (
            <div key={i} className="proj-card">
              <div className="proj-icon">{ico}</div>
              <h4>{h}</h4>
              <p>{p}</p>
              <div className="proj-tags">
                {tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>

      <Modal isOpen={modal === 'mproj'} onClose={() => setModal(null)}>
        <div className="modal-title">🏭️ Live Student Projects</div>
        <div className="modal-sub">
          Real projects built during training — students placed at top companies!
        </div>
        <div className="proj-grid">
          {missionProjects.map(([ico, h, p, tags], i) => (
            <div key={i} className="proj-card">
              <div className="proj-icon">{ico}</div>
              <h4>{h}</h4>
              <p>{p}</p>
              <div className="proj-tags">
                {tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Vision;
