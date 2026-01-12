import "./index.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">
          <h1>
            Let's Work <br /> Together
          </h1>

          <p>
            Have any questions, feedback, or an exciting project idea in mind?
            Let’s talk! The Contact Us section is the perfect place to start a
            conversation—whether you're looking to collaborate, need
            assistance, or just want to say hello, I’d love to hear from you and
            explore how we can work together.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <FaPhoneAlt />
              <div>
                <span>Phone</span>
                <p>(+91) 9441403009</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <p>bhaskarc2468@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <h2>
            Contact <span>Me!</span>
          </h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Email Subject" />
            </div>

            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
