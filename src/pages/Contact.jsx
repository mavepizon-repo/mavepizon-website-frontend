import { IGIcon, WAIcon, FBIcon, LIIcon } from '../components/SocialIcons';
const Contact = ({ onNavigate }) => {
  
  const handleSubmit = async () => {
  // Get values manually (no state change needed)
  const firstName = document.querySelector('input[placeholder="Your first name"]').value;
  const lastName = document.querySelector('input[placeholder="Your last name"]').value;
  const whatsappNumber = document.querySelector('input[type="tel"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const preferredBranch = document.querySelector('select').value;
  const interestedIn = document.querySelectorAll('select')[1].value;
  const message = document.querySelector('textarea').value;

  const formData = {
     
  firstName,
  lastName,
  whatsappNumber,
  email,
  preferredBranch,
  interestedIn,
  message,
}
  try {
    const res = await fetch("http://localhost:5000/api/form/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert('✅ Message sent! We will contact you on WhatsApp shortly.');
    } else {
      alert('❌ Failed to send message');
    }

  } catch (err) {
    console.error(err);
    alert('⚠️ Server error');
  }
};

  return (
    <div className="page active">
      <div className="page-banner">
        <div className="container">
          <h1>
            Get In <span>Touch</span>
          </h1>
          <p>
            📞 <strong style={{ color: 'var(--sky2)' }}>81444 11103</strong> · WhatsApp · We
            respond within 1 hour!
          </p>
          <div className="breadcrumb">
            Home › <span>Contact Us</span>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-wrap">
            <div className="c-info">
              <h2>
                Let's <span>Connect</span>
              </h2>
              <p>4 branches across Tamil Nadu — call, WhatsApp or visit us anytime!</p>
              <div className="c-item">
                <div className="c-ico">📞</div>
                <div>
                  <h4>Phone / WhatsApp</h4>
                  <p>+91 81444 11103</p>
                </div>
              </div>
              <div className="c-item">
                <div className="c-ico">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@mavepizon.com</p>
                </div>
              </div>
              <div className="c-item">
                <div className="c-ico">📍</div>
                <div>
                  <h4>Tirunelveli</h4>
                  <p>1st Floor, Gnanamuthu Complex, Palayamkottai, Tirunelveli 627002</p>
                </div>
              </div>
              <div className="c-item">
                <div className="c-ico">📍</div>
                <div>
                  <h4>Thisyanvilai</h4>
                  <p>
                    525H/1A, 2nd Street, Udangudi Road, Thisaiyanvilai, Tirunelveli Dist – 627 657
                  </p>
                </div>
              </div>
              <div className="c-item">
                <div className="c-ico">📍</div>
                <div>
                  <h4>Pollachi</h4>
                  <p>2/2, 1st Floor, Anaimalai Main Road, S.G. Pudur, Pollachi, Coimbatore</p>
                </div>
              </div>
              <div className="c-item">
                <div className="c-ico">⏰</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
              <button
                className="c-call"
                onClick={() => window.open('https://wa.me/919487227157', '_blank')}
              >
                <span style={{ fontSize: '24px' }}>💬</span>
                <div>
                  <h3>81444 11103</h3>
                  <p>WhatsApp us · Free career counselling</p>
                </div>
              </button>
             <div className="c-socs">

  <a
    className="c-soc"
    href="https://www.instagram.com/mavepizon?igsh=djh5cDA5ODZ5YTc1"
    target="_blank"
    rel="noopener noreferrer"
    style={{ background: '#e1306c' }}
  >
    <IGIcon />
  </a>

  <a
    className="c-soc"
    href="https://wa.me/918144411103"
    target="_blank"
    rel="noopener noreferrer"
    style={{ background: '#25d366' }}
  >
    <WAIcon />
  </a>

  <a
    className="c-soc"
    href="https://www.facebook.com/profile.php?id=61568356146135"
    target="_blank"
    rel="noopener noreferrer"
    style={{ background: '#1877f2' }}
  >
    <FBIcon />
  </a>

  <a
    className="c-soc"
    href="https://www.linkedin.com/company/mavepizon/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ background: '#0a66c2' }}
  >
    <LIIcon />
  </a>

</div>
            </div>
            <div className="c-form">
              <h3>📤 Send Us a Message</h3>
              <div className="form-row">
                <div className="fg">
                  <label>First Name</label>
                  <input type="text" placeholder="Your first name" />
                </div>
                <div className="fg">
                  <label>Last Name</label>
                  <input type="text" placeholder="Your last name" />
                </div>
              </div>
              <div className="fg">
                <label>Phone Number</label>
                <input type="tel" placeholder="Enter your mobile number" />
              </div>
              <div className="fg">
                <label>Email</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="fg">
                <label>Preferred Branch</label>
                <select>
                  <option>Select Branch</option>
                  <option>Tirunelveli</option>
                  <option>Thisyanvilai</option>
                  <option>Pollachi</option>
                  <option>Nagercoil</option>
                  <option>Online</option>
                </select>
              </div>
              <div className="fg">
                <label>Interested In</label>
                <select>
                  <option>Select a course / service</option>
                  <option>Full Stack (₹25,000 / Online ₹24,000)</option>
                  <option>Frontend (₹12,500 / Online ₹11,500)</option>
                  <option>Backend (₹12,500 / Online ₹11,500)</option>
                  <option>Flutter (₹25,000 / Online ₹24,000)</option>
                  <option>AI & ML (₹25,000 / Online ₹24,000)</option>
                  <option>Data Analytics (₹10,000 / Online ₹9,000)</option>
                  <option>Blockchain (₹25,000 / Online ₹24,000)</option>
                  <option>Python (₹7,000 / Online ₹6,000)</option>
                  <option>Java (₹8,500 / Online ₹7,500)</option>
                  <option>UI/UX Design (₹25,000 / Online ₹24,000)</option>
                  <option>Data Science (₹25,000 / Online ₹24,000)</option>
                  <option>Cybersecurity (₹25,000 / Online ₹24,000)</option>
                  <option>Group Offer – 5 Students (₹22,000 each)</option>
                  <option>Group Offer – 10 Students (₹19,000 each)</option>
                  <option>Web Development Service</option>
                  <option>Mobile App Service</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="fg">
                <label>Message</label>
                <textarea placeholder="Tell us about your goal or project..."></textarea>
              </div>
              <button
                className="btn-sky"
                style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '13px' }}
                onClick={handleSubmit}
              >
                📤 Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
