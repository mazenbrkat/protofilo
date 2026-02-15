import { useParams, Link } from "react-router-dom";
import "./project.css";

const projectsData = [
  {
    id: 1,
    title: "Secure Website",
    details:
      "project talk about adding tools security google authentication , and dos and sql injaction with know using mongodb.",
      features: [
        "Google Authentication: Users can securely log in using their Google accounts.",
        "DOS Protection: Implemented measures to prevent Denial of Service attacks.",
        "SQL Injection Prevention: Used parameterized queries to protect against SQL injection attacks.",
      ],
      Myrole:[
        "Implemented Google Authentication using OAuth 2.0.",
        "Designed and implemented security measures to protect against DOS attacks.",
        "Implemented SQL injection prevention techniques in the backend.",
      ],
    tech: ["React", "Node.js", "Tailwind CSS","Mongodb"],
    images: ["/login.jpeg", "/register.jpeg", "/order1.jpeg", "/dashboard.jpeg"],
  },
  {
    id: 2,
    title: "Restaurant Management System",
    details:
      "This project was developed to manage their menus,orders, and services efficiently through a web-based dashboard.",
      features: [
        "Order Management: View,and track customer orders .",
        "Menu Management: menu items with images and descriptions.",
      ],
      Myrole:["Designed and implemented the dashboard UI.", ],
    tech: ["React", "Tailwind CSS"],
    images: ["/home.png", "/service.jpeg", "/order.jpeg", "/menu.jpeg"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) return <p>Project not found</p>;

  return (
    <section className="project-details-page">
      <div className="projects-container">

        <Link to="/" className="back-btn">← Back</Link>

        <h2>{project.title}</h2>
        <p className="details-text">{project.details}</p>
            <h3>Key features include:</h3>
        <ul className="features-list">
          {project.features && project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
          <h3>Technologies used:</h3>
        <div className="tech-list">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

            <h3>My role in this project:</h3>
        <ul className="role-list">
          {project.Myrole && project.Myrole.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>  

        <div className="details-gallery">
          {project.images.map((img, i) => (
            <img key={i} src={img} alt="Project" />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;