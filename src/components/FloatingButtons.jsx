import { WAIcon, CallIcon } from './SocialIcons';

const FloatingButtons = () => (
  <div className="fab-group">
    <a
      className="fab fab-wa"
      href="https://wa.me/918144411103"
      target="_blank"
      rel="noopener noreferrer"
      style={{ position: 'relative' }}
    >
      <div className="fab-ping"></div>
      <WAIcon />
    </a>
    <a className="fab fab-call" href="tel:8144411103">
      <CallIcon />
    </a>
  </div>
);

export default FloatingButtons;

