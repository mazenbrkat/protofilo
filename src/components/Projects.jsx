import { useState } from "react";
import "./project.css";

const getImagePath = (imageName) => `${process.env.PUBLIC_URL}/${imageName}`;

const projectsData = [
  {
    id: 1,
    title: "Secure Website",
    description: "A secure web application with Google authentication, DOS protection, and SQL injection prevention using MongoDB.",
    details:
      "project talk about adding tools security google authentication , and dos and sql injaction with know using mongodb.",
    tech: ["React", "Node.js", "Tailwind CSS","Mongodb"],
    images: [getImagePath("login.jpeg"), getImagePath("register.jpeg"), getImagePath("order1.jpeg"), getImagePath("dashboard.jpeg")],
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Order, menu and services web application.",
    details:
      "Dashboard system for managing orders, menus, services and customer requests with responsive design and scalable components.",
    tech: ["React", "Tailwind CSS"],
    images: [getImagePath("home.png"), getImagePath("menu.jpeg"), getImagePath("order.jpeg"), getImagePath("service.jpeg")],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.images[0]}
                alt={project.title}
                className="project-img"
              />

              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>

                {/* ✅ View Details Button */}
                <button 
                  className="details-btn"
                  onClick={() => setSelected(project)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelected(null)}
        >
          <div 
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
            
            <h3>{selected.title}</h3>
            <p>{selected.details}</p>

            <div className="tech-list">
              {selected.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="modal-images">
              {selected.images.map((img, i) => (
                <img key={i} src={img} alt={`${selected.title} ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;