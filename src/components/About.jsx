import "./about.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">

        
   {/* About Me */}
      <div className="about-hero">
        <h2>About Me</h2>

        <p className="about-lead">
          I’m a <span>Front-End Web Developer</span> passionate about building
          clean, modern, and responsive web interfaces.
        </p>

        <p>
          I enjoy creating dashboard-style applications and scalable UI components
          using modern web technologies, with a strong focus on user experience
          and clean code.
        </p>
      </div>

        {/* Education */}
        <div className="about-section">
          <h3>Education</h3>
          <div className="education-card">
            <h4>Bachelor of Computer Science</h4>
            <span>Information Systems</span>
            <p>2022 – 2026</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="about-section">
          <h3>Technologies I Can Use</h3>

          <div className="tech-grid">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Bootstrap</span>
            <span>Git & GitHub</span>
            <span>Node.js (Basic)</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Certifications */}
       {/*   <div className="about-section">
          <h3>Certifications</h3>

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
