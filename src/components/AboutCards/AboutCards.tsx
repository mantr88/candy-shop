import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./AboutCards.css";

function AboutCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        disabled: true,
      },
    },
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const needASlider = isMobile;
  console.log("needASlider: ", needASlider);

  return (
    <>
      <div className="about-navigation-wrapper">
        <div ref={sliderRef} className="keen-slider grid">
          <div className="keen-slider__slide about-number-slide1 about-number-slide1">
            <p className="about-card-title">
              Kreatywne podejście i <br />
              dbałość o szczegóły
            </p>
            <p className="about-card-text">
              Specjaliści zapewniają doradztwo i kreatywność przy wyborze
              dekoracji balonowych, z dbałością o szczegóły
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide1 about-number-slide2">
            <p className="about-card-title">
              Materiały przyjazne <br />
              dla środowiska
            </p>
            <p className="about-card-text">
              Wykorzystywane są materiały najwyższej jakości, w tym
              biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
              ślad na środowisku.
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide1 about-number-slide3">
            <p className="about-card-title">
              Szeroka gama kolorów <br />
              do personalizacji
            </p>
            <p className="about-card-text">
              Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
              pozwala spersonalizować wystrój na każdą okazję.
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide1 about-number-slide4">
            <p className="about-card-title">
              Gwarancja dostawy <br /> i montażu
            </p>
            <p className="about-card-text">
              Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
              także ich montaż, zapewniając klientom kompleksową obsługę.
            </p>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && needASlider && (
        <div className="about-dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "about-dot" + (currentSlide === idx ? " active" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default AboutCards;
