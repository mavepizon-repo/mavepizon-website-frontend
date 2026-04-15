import Counter from '../components/Counter';

const Placements = ({ onNavigate }) => {
  return (
    <div className="page active">
      <div className="page-banner">
        <div className="container">
          <h1>
            Student <span>Placements</span>
          </h1>
          <p>Real stories from students who built careers with MavePizon</p>
          <div className="breadcrumb">
            Home › <span>Placements</span>
          </div>
        </div>
      </div>
      <section className="stats-bar" style={{ padding: '36px 0' }}>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">🎓</span>
            <div className="stat-num">
              <Counter target={5000} suffix="+" />
            </div>
            <div className="stat-lbl">Students Trained</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎯</span>
            <div className="stat-num">
              <Counter target={95} suffix="%" />
            </div>
            <div className="stat-lbl">Placement Rate</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">⭐</span>
            <div className="stat-num">
              4.9<span className="su">★</span>
            </div>
            <div className="stat-lbl">Average Rating</div>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🏬</span>
            <div className="stat-num">4</div>
            <div className="stat-lbl">Branches</div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="sec-hd">
            <div className="sec-tag">Success Stories</div>
            <h2>
              5000+ <span>Lives Changed</span>
            </h2>
          </div>
          <div className="testi-grid">
            {[
              [
                'T',
                'linear-gradient(135deg,#0ea5e9,#38bdf8)',
                'Thusindragnanaraj',
                'Coco Galaxy',
                "The app’s interactive labs and coding challenges helped our team upskill faster. The UI is clean and the performance is top-notch",

              ],
              [
                'N',
                'linear-gradient(135deg,#8b5cf6,#7c3aed)',
                'Nambi doss',
                'KAC',
                'From onboarding to deployment, the support was seamless. The app is stable, fast, and our students love using it daily',
              ],
              [
                'S',
                'linear-gradient(135deg,#059669,#047857)',
                'Sasi Kumar',
                'Gold App',
                'The design is elegant and the user experience is smooth. Our customers are engaging more than ever—great work!',
              ],
              [
                'V',
                'linear-gradient(135deg,#ec4899,#db2777)',
                'Mr. Vignesh R.',
                'Gent camp',
                'Our online lab platform is running flawlessly, thanks to the clean and responsive design. Great collaboration!',
              ],
              [
                'C',
                'linear-gradient(135deg,#0ea5e9,#0284c7)',
                'Charu',
                'Prime Tutor',
                'The platform is intuitive and flexible. Tutors can manage sessions easily, and students find it super convenient. Excellent job!',
              ],
              [
                'P',
                'linear-gradient(135deg,#f97316,#ea580c)',
                'Peter',
                'Voice Over Translater',
                'The translation quality is impressive. Voices sound natural and the dubbing process is fast. A game-changer for our content!',
              ],
            ].map(([av, bg, name, role, text], i) => (
              <div key={i} className="t-card">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{text}</p>
                <div className="t-author">
                  <div className="t-av" style={{ background: bg }}>
                    {av}
                  </div>
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
    </div>
  );
};

export default Placements;
