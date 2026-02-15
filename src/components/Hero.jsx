import "./hero.css";
import mazenImage from "../assets/mazen.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Mazen</span> 👋
          </h1>

          <p>
            Front-End Web Developer specialized in building modern,
            responsive and clean web applications.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">View Projects</a>
            <a href="#contact" className="secondary-btn">Contact Me</a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/mazenbrkat"
              target="_blank"
              rel="noreferrer"
            >
             <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mazen-barakat-b6a696303/?locale=ar_AE"
              target="_blank"
              rel="noreferrer"
            >
             <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={mazenImage} alt="Mazen Mohamed" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
