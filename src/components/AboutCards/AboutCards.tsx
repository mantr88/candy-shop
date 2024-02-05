import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "./AboutCards.css";

function AboutCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <>
      <div className="about-navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide about-number-slide1">
            <h3 className="about-card-title">
              Kreatywne podejście i <br />
              dbałość o szczegóły
            </h3>
            <p className="about-card-text">
              Specjaliści zapewniają doradztwo i kreatywność przy wyborze
              dekoracji balonowych, z dbałością o szczegóły
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide2">
            <h3 className="about-card-title">
              Materiały przyjazne <br />
              dla środowiska
            </h3>
            <p className="about-card-text">
              Wykorzystywane są materiały najwyższej jakości, w tym
              biodegradowalne materiały balonowe, aby pozostawić jak najmniejszy
              ślad na środowisku.
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide3">
            <h3 className="about-card-title">
              Szeroka gama kolorów <br />
              do personalizacji
            </h3>
            <p className="about-card-text">
              Balony i dekoracje są wybierane z szerokiej gamy kolorów, co
              pozwala spersonalizować wystrój na każdą okazję.
            </p>
          </div>
          <div className="keen-slider__slide about-number-slide4">
            <h3 className="about-card-title">
              Gwarancja dostawy <br /> i montażu
            </h3>
            <p className="about-card-text">
              Firma gwarantuje nie tylko wysokiej jakości dostawę zamówień, ale
              także ich montaż, zapewniając klientom kompleksową obsługę.
            </p>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
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
