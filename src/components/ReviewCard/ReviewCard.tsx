import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./ReviewCard.css";
import TagUser from "../../ui/svgComponents/TagUser";
import ArrowSliderLeft from "../../ui/svgComponents/ArrowSliderLeft";
import ArrowSliderRight from "../../ui/svgComponents/ArrowSliderRight";

function ReviewCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1280);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
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
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 3,
          spacing: 26,
        },
      },
    },
  });

  const handlePrev = () => {
    if (slider) {
      slider.current?.prev();
    }
  };

  const handleNext = () => {
    if (slider) {
      slider.current?.next();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsDesktop(window.innerWidth > 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      {loaded && slider.current && isMobile && (
        <div className="review-dots">
          {[...Array(slider.current.track.details.slides.length).keys()].map(
            (idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.current?.moveToIdx(idx);
                  }}
                  className={
                    "review-dot" + (currentSlide === idx ? " active" : "")
                  }
                ></button>
              );
            }
          )}
        </div>
      )}

      {!isMobile && !isDesktop && (
        <div className="review-btn-wrap">
          <button
            className="review-btn"
            onClick={handlePrev}
            aria-label="Button to go to the previous slide"
          >
            <ArrowSliderLeft />
          </button>
          <button
            className="review-btn"
            onClick={handleNext}
            aria-label="Button to go to the next slide"
          >
            <ArrowSliderRight />
          </button>
        </div>
      )}
    </>
  );
}

export default ReviewCard;
