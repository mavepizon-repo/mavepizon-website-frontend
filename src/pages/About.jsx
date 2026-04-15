const About = ({ onNavigate }) => {
  return (
    <div className="page active">
      <div className="page-banner">
        <div className="container">
          <h1>
            About <span>MavePizon</span>
          </h1>
          <p>Empowering the next generation of IT professionals</p>
          <div className="breadcrumb">
            Home › <span>About Us</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="about-grid">
           <div className="about-vis">
  <h2>Who We Are</h2>

  <p>
    <b>
      At <strong style={{ color: 'var(--sky)' }}>
        MavePizon Tirunelveli, Pollachi, Nagercoil & Thisyanvilai
      </strong>, we specialize in delivering innovative IT solutions tailored to modern business needs.
      Founded in 2023, MavePizon has grown into a trusted technology partner across India and beyond.
      
      Under the leadership of our CEO, D. Immanuel Jeba Balan, we have successfully delivered high-quality
      projects across multiple industries, including web development, mobile applications, AI solutions,
      and enterprise software.
      
      Alongside our IT services, we also offer industry-oriented training programs designed to equip learners
      with real-world skills and hands-on experience in the latest technologies.
      
      At MavePizon, we focus on innovation, reliability, and long-term client success while also empowering
      future professionals through practical learning.
    </b>
  </p>

  <p>
    <b>
      We build smart digital solutions for businesses and nurture talent for the future of technology.
    </b>
  </p>

  <ul className="about-list">
    <li>6+ Years of Industry Experience</li>
    <li>500+ Successful Projects Delivered</li>
    <li>50+ Business Clients & Partners</li>
    <li>4 Branches across Tamil Nadu</li>
    <li>Industry-based Training with Real-time Projects</li>
  </ul>
</div>
            <div>
              <div
                style={{
                  background: 'linear-gradient(135deg,#f0f9ff,#dbeafe)',
                  border: '1.5px solid rgba(14,165,233,.18)',
                  borderRadius: '18px',
                  height: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'radial-gradient(circle at 30% 50%,rgba(14,165,233,.13),transparent 60%)',
                  }}
                ></div>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <span
                    style={{
                      fontSize: '64px',
                      display: 'block',
                      filter: 'drop-shadow(0 8px 18px rgba(14,165,233,.3))',
                    }}
                  >
                    🏫
                  </span>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 800,
                      color: 'var(--dark)',
                      margin: '10px 0 5px',
                    }}
                  >
                    MavePizon IT Company 
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
                   Building smart digital solutions for the future
                    <br />
                   IT Services · Software Development · Professional Training
                  </div>
                </div>
              </div>
              <div className="val-grid">
                {[
  ['🚀', 'Innovation', 'Building smart digital solutions'],
  ['🤝', 'Trust', 'Honest & reliable IT services'],
  ['💻', 'Development', 'Web, App & Software development'],
  ['📈', 'Growth', 'Empowering business & careers'],
].map(([ico, h, p]) => (
                  <div key={h} className="val-item">
                    <h4>
                      {ico} {h}
                    </h4>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* MAPS */}
          <div style={{ marginTop: '48px' }}>
            <div className="sec-hd">
              <div className="sec-tag">Our Locations</div>
              <h2>
                4 Branches Across <span>Tamil Nadu</span>
              </h2>
            </div>
            <div className="maps-grid">
              <div className="map-card">
                <iframe
                  className="map-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1!2d77.6940!3d8.7139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041157dcd88f1b%3A0xe3b45b5e83da0752!2sMavePizon!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="MavePizon Tirunelveli"
                ></iframe>
                <div className="map-info">
                  <h4>📍 Tirunelveli</h4>
                  <p>1st Floor, Gnanamuthu Complex, Palayamkottai, Tirunelveli 627002</p>
                  <button
                    className="map-btn"
                    onClick={() =>
                      window.open(
                        'https://maps.google.com/?q=MavePizon+Tirunelveli',
                        '_blank'
                      )
                    }
                  >
                    🗺️ Open Location
                  </button>
                </div>
              </div>
              <div className="map-card">
                <iframe
                  className="map-embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6!2d77.1!3d10.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2sMave+Pizon!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  title="Mave Pizon Pollachi"
                ></iframe>
                <div className="map-info">
                  <h4>📍 Pollachi</h4>
                  <p>2/2, 1st Floor, Anaimalai Main Road, S.G. Pudur, Pollachi, Coimbatore 642103</p>
                  <button
                    className="map-btn"
                    onClick={() =>
                      window.open('https://maps.google.com/?q=Mave+Pizon+Pollachi', '_blank')
                    }
                  >
                    🗺️ Open Location
                  </button>
                </div>
              </div>
              <div className="map-card">
  <iframe
    className="map-embed"
    src="https://www.google.com/maps?q=Mavepizon+Thisaiyanvilai&output=embed"
    allowFullScreen
    loading="lazy"
    title="Mavepizon Thisaiyanvilai"
  ></iframe>

  <div className="map-info">
    <h4>📍 Thisaiyanvilai</h4>
    <p>
      525H/1A, 2nd Street, Udangudi Road<br />
      Thisaiyanvilai, Tirunelveli – 627657
    </p>

    <button
      className="map-btn"
      onClick={() =>
        window.open(
          'https://www.google.com/maps?q=Mavepizon+Thisaiyanvilai',
          '_blank'
        )
      }
    >
      🗺️ Open Location
    </button>
  </div>
</div>
            </div>
            <div className="branches-grid">
              {[
                ['🏬', 'Tirunelveli', 'Palayamkottai, Tirunelveli'],
                [
                  '🏬',
                  'Thisyanvilai',
                  '525H/1A, 2nd Street, Udangudi Road\nThisaiyanvilai, Tirunelveli – 627 657',
                ],
                ['🏬', 'Pollachi', 'Anaimalai Main Road, Pollachi'],
                ['🏬', 'Nagercoil', 'Nagercoil, Kanyakumari'],
              ].map(([ico, h, p]) => (
                <div key={h} className="branch-card">
                  <span className="branch-icon">{ico}</span>
                  <h4>{h}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

