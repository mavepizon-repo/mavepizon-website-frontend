import React from "react";
import { services } from "../data/services";
import { projectsData } from "../data/projects";

const ITServicesPage = () => {
  return (
    <div className="page active">

      {/* ================= SERVICES ================= */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2><br></br>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="svc-card">
                <div className="svc-card-inner">

                  {/* FRONT */}
                  <div className="svc-face svc-front">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  {/* BACK */}
                  <div
                    className="svc-face svc-back"
                    style={{
                      background: `linear-gradient(135deg,${service.bg[0]},${service.bg[1]})`,
                    }}
                  >
                    <h4>
                      {service.icon} {service.title}
                    </h4>

                    {service.stack.type === "groups" && (
                      <>
                        {service.stack.groups.map((group, gi) => (
                          <div key={gi}>
                            <div className="svc-group-label">{group.label}</div>
                            <div className="svc-chip-list">
                              {group.items.map((item, ii) => (
                                <span key={ii} className="svc-chip">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {service.stack.type === "flat" && (
                      <div className="svc-chip-list">
                        {service.stack.items.map((item, ii) => (
                          <span key={ii} className="svc-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {service.stack.type === "pipeline" && (
                      <div className="svc-flow">
                        {service.stack.items.map((item, ii) => (
                          <span key={ii} className="svc-flow-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section section-light" id="projects">
        <div className="container">
          <h2>Our Projects</h2><br></br>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
<section className="section">
  <div className="container">
    <div className="sec-hd">
      <div className="sec-tag">Success Stories</div>
      {/* <h2>
        5000+ <span>Lives Changed</span>
      </h2> */}
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

export default ITServicesPage;