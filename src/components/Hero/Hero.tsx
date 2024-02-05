import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <img
        className="hero-top-img"
        src="./public/image/top-balloons-floating-air.png"
        width="155"
        height="157"
      />
      <h2 className="hero-title">
        Tworzymy unikalne
        <br />i niepowtarzalne{" "}
        <span className="hero-accent-text">dekoracje balonowe</span>
        <br />
        na imprezy
      </h2>
      <img
        className="hero-bottom-img"
        src="./public/image/bottom-balloons-floating-air.png"
        width="155"
        height="157"
      />
    </section>
  );
}

export default Hero;
