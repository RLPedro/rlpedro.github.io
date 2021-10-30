import "./styles/Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    // <Fade right duration={3000}>
    <div className="contact" id="contact">
      <p className="contact__title">CONTACT</p>
      <p className="contact__text">
        I would love to hear from you! <br />
        <br />I am currently available for professional enquiries through{" "}
        <a href="https://salt.study/" target="_blank" className="salt-link">
          SALT
        </a>{" "}
        (&lt;/salt&gt;).
        <br />
        Contact Salt's sales team at{" "}
        <a href="mailto: consultants@salt.dev" className="contact__email-salt">
          consultants@salt.dev
        </a>{" "}
        or reach me out at{" "}
        <a
          href="mailto: ricardoleitaopedro@gmail.com"
          className="contact__email"
        >
          ricardoleitaopedro@gmail.com
        </a>
        .
      </p>
    </div>
    // </Fade>
  );
};

export default Contact;
