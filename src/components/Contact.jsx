import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact py-5">
      <Container>
        <h2 className="display-6 fw-bold mb-2 text-center">Get in Touch</h2>
        
        <p className="text-muted text-center mb-5 fs-5">
          Feel free to reach out to me through any of the following channels.
        </p>

        <Row className="gy-4 justify-content-center">
          <Col md={6} lg={4}>
            <div className="card h-100 border-warning text-center">
              <div className="card-body">
                <i className="fa-solid fa-phone text-warning fs-1 mb-3"></i>
                <h5 className="card-title fw-bold">Phone</h5>
                <p className="text-muted">+201044137137</p>
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="card h-100 border-warning text-center">
              <div className="card-body">
                <i className="fa-solid fa-envelope text-warning fs-1 mb-3"></i>
                <h5 className="card-title fw-bold">Email</h5>
                <p className="text-muted">mazenbrkat553@gmail.com</p>
              </div>
            </div>
          </Col>

          <Col md={6} lg={4}>
            <div className="card h-100 border-warning text-center">
              <div className="card-body">
                <i className="fa-solid fa-house text-warning fs-1 mb-3"></i>
                <h5 className="card-title fw-bold">Location</h5>
                <p className="text-muted">Sharkia, Egypt</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
