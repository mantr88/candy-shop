import Envelope from "../../ui/svgComponents/Envelope";
import Handset from "../../ui/svgComponents/Handset";
import { ContactForm } from "../ContactForm/ContactForm";
import "./Contacts.css";

function Contacts() {
  return (
    <section className="section contacts" id="contact-section">
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
      <ContactForm />
    </section>
  );
}

export default Contacts;
