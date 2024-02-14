import Envelope from "../../ui/svgComponents/Envelope";
import Handset from "../../ui/svgComponents/Handset";
import { ContactForm } from "../ContactForm/ContactForm";
import "./Contacts.css";

function Contacts() {
  return (
    <section className="section contacts" id="contact-section">
      <div className="contacts-contactBlock-wrap">
        <h2 className="section-title contacts-title">Kontakty</h2>
        <p className="contacts-company-name">
          Confetti - Studio <br /> Dekoracij Balonami <br />
          Warszawa
        </p>
        <div className="contacts-link-wrap">
          <a
            href="tel:+48793351407"
            className="contacts-link"
            aria-label="Link to go to the service to phone call"
          >
            <Handset />
            +48 793 351 407
          </a>

          <a
            href="mailto:confettibalony@gmail.com"
            className="contacts-link"
            aria-label="Link to go to the service to send the email "
          >
            <Envelope />
            confettibalony@gmail.com
          </a>
        </div>
      </div>
      <div className="contacts-formBlock-wrap">
        <img
          className="contacts-top-img"
          src="./image/top-balloons-floating-air.png"
          width="612"
          height="620"
        />
        <ContactForm />
        <img
          className="contacts-bottom-img"
          src="./image/bottom-balloons-floating-air.png"
          width="644"
          height="650"
        />
      </div>
    </section>
  );
}

export default Contacts;
