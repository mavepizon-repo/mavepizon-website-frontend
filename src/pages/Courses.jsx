import FlipCard from '../components/FlipCard';
import { courseList } from '../data/coursesData';

import img1 from '../projectimages/Patrick.jpg';
import img2 from '../projectimages/Abishek.jpg';
import img3 from '../projectimages/Joshua.jpg';
import img4 from '../projectimages/Ruban.jpg';
import img5 from '../projectimages/Joy.jpg';
import img6 from '../projectimages/abi.jpg';
import img7 from '../projectimages/Anushiya.jpg';
import img8 from '../projectimages/Muvaffika.jpg';
import img9 from '../projectimages/faitha.jpg';
import img10 from '../projectimages/jothi.jpg';

const Courses = ({ onNavigate = () => {} }) => {
  return (
    <div className="page active">

      {/* HEADER */}
      <div className="page-banner">
        <div className="container">
          <h1>All <span>Courses</span></h1>
          <p>Hover cards for details · Offline & Online pricing · Group discounts!</p>
          <div className="breadcrumb">
            Home › <span>Courses</span>
          </div>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="section">
        <div className="container">

          {/* FILTER */}
          <div className="cf-row">
            {['All', 'Full Stack', 'Data', 'Cloud', 'Mobile', 'Design'].map((f) => (
              <button key={f} className={`cf-btn${f === 'All' ? ' active' : ''}`}>
                {f}
              </button>
            ))}
          </div>

          {/* COURSE CARDS */}
          <div className="courses-grid">
            {courseList.map((c, i) => (
              <FlipCard key={i} course={c} onNavigate={onNavigate} />
            ))}
          </div>

          {/* OFFERS */}
          <div style={{ marginTop: '52px' }}>
            <div className="sec-hd">
              <div className="sec-tag">🎉 Students Only Offer</div>
              <h2>Group Enrollment <span>Discounts</span></h2>
            </div>

            <div className="offer-note">
              ⚠️ This offer is strictly for <strong>students only</strong> · Valid on any ₹25,000 course
            </div>

            <div className="offer-grid">

              <div className="ocard">
                <div className="obadge">👤</div>
                <h3>Solo Student</h3>
                <div className="ocond">1 Person</div>
                <div className="oprice">₹25,000</div>
                <div className="onote">Standard price</div>

                <button className="btn-sky" style={{ width: '100%', marginTop: '12px' }}
                  onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}>
                  Enroll
                </button>
              </div>

              <div className="ocard feat">
                <div className="obadge">👥</div>
                <h3>Invite 5 members</h3>
                <div className="ocond">Get ₹3,000 OFF</div>
                <div className="oprice">₹22,000</div>
                <div className="onote">Save ₹18,000 total!</div>

                <button className="btn-sky" style={{ width: '100%', marginTop: '12px' }}
                  onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}>
                  Claim Offer
                </button>
              </div>

              <div className="ocard">
                <div className="obadge">🏆</div>
                <h3>Invite 10 members</h3>
                <div className="ocond">Get ₹6,000 OFF</div>
                <div className="oprice">₹19,000</div>
                <div className="onote">Save ₹60,000 total!</div>

                <button className="btn-sky" style={{ width: '100%', marginTop: '12px' }}
                  onClick={() => window.open('https://forms.gle/UdLnunkbyizwoYGNA', '_blank')}>
                  Claim Offer
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ✅ SUCCESS STORIES */}
      <section className="section">
        <div className="container">

          <div className="sec-hd">
            <div className="sec-tag">Success Stories</div>
          </div>

          <div className="testi-grid">
            {[
  ['S','linear-gradient(135deg,#0ea5e9,#38bdf8)','Sam Patrick','Tirunelveli',"Learned complete Python course from MavePizon. Basically I am a non-IT guy, but through the coaching of the staff at the company, I became much more interested in the IT field and followed their course plan. Now I am placed in a Chennai-based IT firm with a decent salary. Thanks to MavePizon and staff Ajitha Mam and Frank Mam.", img1],

  ['A','linear-gradient(135deg,#8b5cf6,#7c3aed)','Abhishek','Tirunelveli',"I'm very happy to say that my decision was right as I chose MavePizon for that. Here I learned a lot more new skills in python programming and at the end of my course I got placed in NIIT...", img2],

  ['J','linear-gradient(135deg,#059669,#047857)','Joshua','Tirunelveli',"I am currently working in kgisl pv. Ltd my position is ass. TL when I was studied in college time I joined the course in full stack developer I learned lot of codes and also very use working place and special thank to learning lagange academy what ever doubt is there they are learn...", img3],

  ['R','linear-gradient(135deg,#ec4899,#db2777)','Ruban','Coimbatore',"Enrolling at MavePizon for Python Full Stack Development was the best career decision I ever made. Working under the tutelage of Ms. Ajitha, I was imparted a solid foundation in Python, front-end, and Django for back-end development. The practical project-based curriculum educated me in developing a full-featured web application from scratch. The real-time problem-solving classes, along with the hands-on training, instilled a lot of self-confidence. Currently, I'm working in internships and freelancing projects, developing websites for genuine clients. I'm grateful to Ms. Ajitha and MavePizon for leading me toward a successful career in the tech industry.", img4],

  ['J','linear-gradient(135deg,#f59e0b,#d97706)','Joy','Andrapradesh',"I Felt Coding is literally harder and I would never had an opportunity to learn about it but everything had been reversed after my handshake to MavePizon. They taught me what is coding and I gained the depth wisdom in Python and in my Full stack course. Thank you MavePizon for sharpening by dufus brain in Coding. Now I can proudly say myself as an excellent coder.", img5],

  ['A','linear-gradient(135deg,#10b981,#059669)','Abi.K','Tirunelveli',"Creating a voice assistant with AI at Mavepizon was an unforgettable journey. Suman made JavaScript fun and simple, while Prathish clearly explained the Python backend and AI logic. With their guidance and support, we built something magical!", img6],

  ['A','linear-gradient(135deg,#6366f1,#4f46e5)','Anushiya.P','Tirunelveli',"Working on the Task Flow app at MavePizon was an incredible journey. Suman made React Native easy to grasp, while Prathish guided us through Firebase and backend logic. Their support helped us grow and build something we were truly proud of.", img7],

  ['M','linear-gradient(135deg,#14b8a6,#0d9488)','Muvaffika Fathima','Tuticorin',"Working on the Sign Learning Interpretation Project at MavePizon was truly rewarding. Mr. Senthil’s expert guidance and support made learning smooth and meaningful. Contributing to a project that helps bridge communication for the hearing-impaired community was an unforgettable experience.", img8],

  ['F','linear-gradient(135deg,#f43f5e,#e11d48)','Faitha','Tirunelveli',"We attended internship on the topic mern stack which is of 15 day. The internship starts with basic and they guide us to learn topic as much as could be covered in 15 days. They provided tasks that improved our learning. Overall the internship is worth for time and money.", img9],

  ['J','linear-gradient(135deg,#22c55e,#16a34a)','Jothi','Tirunelveli',"During my 15-day internship focused on frontend development, I gained invaluable hands-on experience with technologies such as HTML, CSS, JavaScript, and frameworks like React. The MavePizon offered a structured yet dynamic learning environment where I honed my coding skills and developed practical solutions for real-world challenges. The mentorship I received was exceptional, providing not only technical guidance but also insights into the best practices of frontend development.", img10]

            ].map(([av, bg, name, role, text, image], i) => (
              <div key={i} className="t-card">

                <div className="t-stars">★★★★★</div>
                <p className="t-text">{text}</p>

                <div className="t-author">

                  <div className="t-av">
                    {image ? (
                      <img src={image} alt={name} />
                    ) : (
                      <span>{av}</span>
                    )}
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

      {/* CTA */}
      <div className="cta-strip">
        <div className="container">
          <h2>Not Sure Which Course?</h2>
          <p>Free counselling · Call: <strong>81444 11103</strong></p>

         <button
  className="btn-wh"
  onClick={() => window.location.href = 'tel:8144411103'}
>
  Get Free Counselling →
</button>
        </div>
      </div>

    </div>
  );
};

export default Courses;