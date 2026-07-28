import image1 from '../projectimages/mavepizon4.jpeg';

import { IGIcon, WAIcon, FBIcon, LIIcon } from './SocialIcons';

const Footer = ({ onNavigate }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="fb">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '11px',
                cursor: 'pointer',
              }}
              onClick={() => onNavigate('home')}
            >
               <img src={image1} alt="MavePizon Logo" className="logo-img" />
              <div className="logo-txt" style={{ color: '#fff' }}>
                Mave<span>Pizon</span>
              </div>
            </div>
            <p>
              Building Tomorrow's Growing Brands through innovative IT solutions and world-class
              training. 4 Branches across Tamil Nadu.
            </p>
            <p className="fp">📞 81444 11103</p>
            <p style={{ color: 'rgba(255,255,255,.35)', fontSize: '11.5px', marginTop: '3px' }}>
              Tirunelveli ·  coimbatore · Nagercoil . Thisyanvilai 
            </p>
            <div className="fb-soc" style={{ marginTop: '12px' }}>
              <a
                className="s-b s-b-ig"
                href="https://www.instagram.com/mavepizon?igsh=djh5cDA5ODZ5YTc1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IGIcon />
              </a>
              <a
                className="s-b s-b-wa"
                href="https://wa.me/918144411103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WAIcon />
              </a>
              <a
                className="s-b s-b-fb"
                href="https://www.facebook.com/profile.php?id=61568356146135"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FBIcon />
              </a>
              <a
                className="s-b s-b-li"
                href="https://www.linkedin.com/company/mavepizon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LIIcon />
              </a>
            </div>
          </div>
          <div className="fc">
            <h4>IT Services</h4>
            <ul>
              {[
                'Web Development',
                'Mobile Apps',
                'Cloud & DevOps',
                'UI/UX Design',
                'Digital Marketing',
                'AI & ML Solutions',
              ].map((s) => (
                <li key={s}>
                  <a onClick={() => onNavigate('services')}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="fc">
            <h4>Courses</h4>
            <ul>
              {[
                'Full Stack Development',
                'Flutter Mobile App',
                'AI & Machine Learning',
                'Data Analytics',
                'Python Programming',
                'Java Programming',
                'UI/UX Design',
                'Blockchain Dev',
              ].map((s) => (
                <li key={s}>
                  <a onClick={() => onNavigate('courses')}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="fc">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['About Us', 'about'],
                ['Vision & Mission', 'vision'],
                ['Placements', 'testimonials'],
                ['Contact Us', 'contact'],
                ['Group Offers', 'courses'],
              ].map(([label, pageId]) => (
                <li key={label}>
                  <a onClick={() => onNavigate(pageId)}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2024 MavePizon Technologies Pvt Ltd. All Rights Reserved · 📞 81444 11103 · Made with
        ❤️ in Tamil Nadu
      </div>
    </footer>
  );
};

export default Footer;
