import "./hero.css";
import mazenImage from "../assets/mazen.jpeg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">

        <div className="row align-items-center gy-5">

          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="hero-title">
              Hi, I’m <span>Mazen</span> 👋
            </h1>

            <p className="hero-desc">
              Front-End Web Developer specialized in building modern,
              responsive and clean web applications.
            </p>

            <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
              <a href="#projects" className="primary-btn">
                View Projects
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="hero-socials justify-content-center justify-content-lg-start">
              <a
                href="https://github.com/mazenbrkat"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mazen-barakat-b6a696303/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center text-lg-end">
            <img
              src={mazenImage}
              alt="Mazen Mohamed"
              className="hero-img"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
