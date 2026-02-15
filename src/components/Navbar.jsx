import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h3 className="logo"><span>.M</span>azen</h3>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
