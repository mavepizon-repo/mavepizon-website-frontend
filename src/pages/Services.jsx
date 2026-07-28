import React, { useState } from "react";
import { services } from "../data/services";
import { projectsData } from "../data/projects";

const ITServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ FILTER LOGIC
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.category === selectedCategory
        );

  // ✅ CLICK HANDLE + SCROLL
  const handleServiceClick = (category) => {
    setSelectedCategory(category);

    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="page active">

      {/* ================= SERVICES ================= */}
      <section className="section">
        <div className="container">
          <h2>Our Services</h2><br></br>

          <div className="services-grid">

            {/* ALL */}
            <div
              className={`service-card ${
                selectedCategory === "All" ? "active" : ""
              }`}
              onClick={() => handleServiceClick("All")}
            >
              <div className="service-icon">🎯</div>
              <h3>All Services</h3>
              <p>View all projects</p>
              <div className="service-count">
                {projectsData.length} Projects
              </div>
            </div>

            {/* SERVICES */}
            {services.map((service) => {
              const projectCount = projectsData.filter(
                (p) => p.category === service.projectCategory
              ).length;

              return (
                <div
                  key={service.id}
                  className={`service-card ${
                    selectedCategory === service.projectCategory
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleServiceClick(service.projectCategory)
                  }
                >
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  {/* ✅ CLICKABLE PROJECT COUNT */}
                  <div
                    className="service-count"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent double click
                      handleServiceClick(service.projectCategory);
                    }}
                  >
                    {projectCount} Project
                    {projectCount !== 1 ? "s" : ""}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section section-light" id="projects">
        <div className="container">
          <h2>
            {selectedCategory === "All"
              ? "All Projects"
              : `${selectedCategory} Projects`}
          </h2><br></br>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
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

          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <h3>No projects found</h3>
            </div>
          )}
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