import { Container } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white py-5 mt-5">
      <Container className="text-center">
        <p className="mb-0">
          © {year} All Rights Reserved by <span className="text-warning fw-bold">Mazen Mohamed</span>.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
