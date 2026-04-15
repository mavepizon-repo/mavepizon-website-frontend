import { IGIcon, WAIcon, FBIcon, LIIcon } from './SocialIcons';

const Topbar = () => (
  <div className="topbar">
    <div className="tw">
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
        📞 <a href="tel:8144411103">81444 11103</a>
        &nbsp;|&nbsp;✉{" "}
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@mavepizon.com"
  target="_blank"
  rel="noopener noreferrer"
>
  info@mavepizon.com
</a>
        &nbsp;|&nbsp; 📍 Tirunelveli ·  Coimbatore ·  Nagercoil  ·  Thisyanvilai 
      </div>
      <div className="topbar-r">
        <a href="https://www.instagram.com/mavepizon?igsh=djh5cDA5ODZ5YTc1" target="_blank" rel="noopener noreferrer">
          <IGIcon />
        </a>
        <a href="https://wa.me/918144411103" target="_blank" rel="noopener noreferrer">
          <WAIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61568356146135"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FBIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/mavepizon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LIIcon />
        </a>
      </div>
    </div>
  </div>
);

export default Topbar;
