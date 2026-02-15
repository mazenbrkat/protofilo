import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <h2>Get in Touch</h2>

        <p className="contact-desc">
          Feel free to reach out to me through any of the following channels.
        </p>

        <div className="contact-info-grid">

          <div className="contact-card">
           <i className="fa-solid fa-phone" style={{color: "#eb5200"}}></i>
            <h4>Phone</h4>
            <p>+201044137137</p>
          </div>

          <div className="contact-card">
            <i class="fa-solid fa-envelope" style={{color: "#eb5200"}}></i>
            <h4>Email</h4>
            <p>mazenbrkat553@gmail.com</p>
          </div>

          <div className="contact-card">
            <i class="fa-solid fa-house" style={{color: "#eb5200"}}></i>
            <h4>Location</h4>
            <p>Sharkia, Egypt</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;