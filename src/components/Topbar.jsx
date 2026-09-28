import { IGIcon, WAIcon, FBIcon, LIIcon } from './SocialIcons';
// import logo from '../projectimages/mavepizon4.jpeg';

const Topbar = () => (
  <div className="topbar">
    <div className="tw">

      {/* Brand */}
      <div className="topbar-brand">
        {/* <img src={logo} alt="Mavepizon Logo" className="topbar-logo" /> */}
        <div className="topbar-company">
          <span className="topbar-name">MAVEPIZON TECHNOLOGIES PRT LIMITED</span>
          <span className="topbar-branches">
            <span className="branches-scroll">
              <span className="pulse-dot"></span>
              Tirunelveli <span className="hq">(Head Office)</span> &nbsp;·&nbsp;
              Coimbatore &nbsp;·&nbsp;  Thisyanvilai
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="pulse-dot"></span>
              Tirunelveli <span className="hq">(Head Office)</span> &nbsp;·&nbsp;
              Coimbatore &nbsp;·&nbsp;  Thisyanvilai
            </span>
          </span>
        </div>
      </div>

      {/* Marquee Contact */}
      <div className="topbar-contact">
        <span className="contact-track">
          📞 <a href="tel:8144411103">81444 11103</a>
          <span className="sep">|</span>
          ✉ <a href="https://mail.google.com/mail/?view=cm&fs=1&to=projects@mavepizon.com"
               target="_blank" rel="noopener noreferrer">projects@mavepizon.com</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          📞 <a href="tel:8144411103">81444 11103</a>
          <span className="sep">|</span>
          ✉ <a href="https://mail.google.com/mail/?view=cm&fs=1&to=projects@mavepizon.com"
               target="_blank" rel="noopener noreferrer">projects@mavepizon.com</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </div>

      {/* Social */}
      <div className="topbar-r">
        <a href="https://www.instagram.com/mavepizon?igsh=djh5cDA5ODZ5YTc1" target="_blank" rel="noopener noreferrer"><IGIcon /></a>
        <a href="https://wa.me/918144411103" target="_blank" rel="noopener noreferrer"><WAIcon /></a>
        <a href="https://www.facebook.com/profile.php?id=61568356146135" target="_blank" rel="noopener noreferrer"><FBIcon /></a>
        <a href="https://www.linkedin.com/company/mavepizon/" target="_blank" rel="noopener noreferrer"><LIIcon /></a>
      </div>

    </div>
    <div className="topbar-shimmer"></div>
  </div>
);

export default Topbar;