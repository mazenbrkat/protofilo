import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        © {year} All Rights Reserved by Mazen Mohamed.
      </div>
    </footer>
  );
};

export default Footer;