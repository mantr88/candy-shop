import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero-section">
      <img
        className="hero-top-img"
        src="./public/image/top-balloons-floating-air.png"
        width="205"
        height="207"
      />
      <h2 className="hero-title">
        Tworzymy unikalne
        <br />i niepowtarzalne
        <br />
        <span className="hero-accent-text">dekoracje balonowe</span>
        <br />
        na imprezy
      </h2>
      <img
        className="hero-bottom-img"
        src="./public/image/bottom-balloons-floating-air.png"
        width="227"
        height="230"
      />
    </section>
  );
}

export default Hero;
