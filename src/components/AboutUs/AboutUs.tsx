import AboutCards from "../AboutCards/AboutCards";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section" id="about-section">
      <h2 className="section-title">Kreatywny zespół dekoratorów</h2>
      <p className="about-text">
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </p>
      <AboutCards />
    </section>
  );
}

export default AboutUs;
