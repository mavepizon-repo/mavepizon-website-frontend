import { useState } from 'react';
import image1 from '../projectimages/mavepizon4.jpeg';

const Navbar = ({ currentPage, onNavigate, navItems }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (pageId) => {
    onNavigate(pageId);
    setMobileOpen(false); // 🔥 menu close
  };

  return (
    <>
      <nav>
        <div className="nav-inner">
          <div className="logo-wrap" onClick={() => handleNav('home')}>
            <div className="logo-svg-wrap">
              <img src={image1} alt="MavePizon Logo" className="logo-img" />
            </div>
          </div>

          <ul className="nav-links">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  className={currentPage === n.id ? 'active' : ''}
                  onClick={() => handleNav(n.id)}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      {mobileOpen && (
        <div
          className="overlay"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* 🔥 MOBILE NAV */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {navItems.map((n) => (
          <a
            key={n.id}
            className={currentPage === n.id ? 'active' : ''}
            onClick={() => handleNav(n.id)}
          >
            {n.label}
          </a>
        ))}

        <a className="m-cta" onClick={() => handleNav('contact')}>
          Contact Us
        </a>
      </div>
    </>
  );
};

export default Navbar;