import "./about.css";

const About = () => {
  return (
    <section id="about" className="about py-5">
      <div className="container">

        {/* About Me */}
  <div className="about-hero mb-5 text-center mx-auto">
  <h2 className="fw-bold mb-3">About Me</h2>

  <p className="fs-5 text-muted">
    I’m a <span>Front-End Web Developer</span> passionate about building
    clean, modern, and responsive web interfaces.
  </p>

  <p className="text-muted">
    I enjoy creating dashboard-style applications and scalable UI
    components using modern web technologies, with a strong focus on
    user experience and clean code.
  </p>
</div>

        {/* Education */}
    <div className="about-section mb-5">
  <h3 className="fw-semibold mb-4 text-center">Education</h3>

  <div className="row justify-content-center">
    <div className="col-md-6 col-lg-5">
      <div className="card border-warning p-4 text-center">
        <h5 className="mb-1">Bachelor of Computer Science</h5>
        <span className="text-muted">Information Systems</span>
        <p className="mb-0 text-muted">2022 – 2026</p>
      </div>
    </div>
  </div>
</div>

        {/* Technologies */}
        <div className="about-section mb-5 text-center">
  <h3 className="fw-semibold mb-4">Technologies I Can Use</h3>

  <div className="d-flex flex-wrap gap-2 justify-content-center">
    {[
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Bootstrap",
      "Git & GitHub",
      "Node.js (Basic)",
      "REST APIs",
    ].map((tech, i) => (
      <span
        key={i}
        className="badge bg-light text-dark px-3 py-2"
      >
        {tech}
      </span>
    ))}
  </div>
</div>
        {/* Certifications 
        <div className="about-section">
          <h3 className="fw-semibold mb-3">Certifications</h3>

          <div className="cert-grid">
            <img src="/cert1.jpg" alt="Certificate 1" />
            <img src="/cert2.jpg" alt="Certificate 2" />
            <img src="/cert3.jpg" alt="Certificate 3" />
          </div>
        </div>*/}

      </div>
    </section>
  );
};

export default About;
