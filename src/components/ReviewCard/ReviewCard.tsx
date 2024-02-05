import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./ReviewCard.css";
import TagUser from "../../svgComponents/TagUser";

function ReviewCard() {
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
      <div className="review-navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide review-number-slide1">
            <p className="review-card-text">
              Jeszcze raz wielkie dzięki! Ciężko nam było foty robić jak
              ustawili te stoły 🥰 ale sam klimat i dekoracja robiła meegaaa
              wrażenie!
            </p>
            <div className="review-tag-wrap">
              <TagUser />
              <p className="review-user-name">Aleksandra Murawska</p>
            </div>
          </div>
          <div className="keen-slider__slide review-number-slide2">
            <p className="review-card-text">
              Baaardzo super ścianka, dziękuję za współpracę 🫶
            </p>
            <div className="review-tag-wrap">
              <TagUser />
              <p className="review-user-name">Anetta Ostalczyk</p>
            </div>
          </div>
          <div className="keen-slider__slide review-number-slide3">
            <p className="review-card-text">
              Ścianka była piękna , bardzo delikatna , Jeszcze raz bardzo
              dziękuję )
            </p>
            <div className="review-tag-wrap">
              <TagUser />
              <p className="review-user-name">Katia Maksymiw</p>
            </div>
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="review-dots">
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
                  "review-dot" + (currentSlide === idx ? " active" : "")
                }
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ReviewCard;
