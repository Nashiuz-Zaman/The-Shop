import React, { useEffect, useState } from "react";
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//styles
import "./LargeCarousel.css";

export default function LargeCarousel({ children = {}, images }) {
  const [curSlide, setCurSlide] = useState(0);

  const {
    handleMouseEnter,
    handleMouseLeave,
    activateCarousel,
    deactivateCarousel,
    goToSlide,
  } = useAnimatedCarousel(images, curSlide, setCurSlide, 3000);

  useEffect(() => {
    activateCarousel();

    return () => {
      deactivateCarousel();
    };
  }, [curSlide, activateCarousel, deactivateCarousel]);

  return (
    <section className="large-carousel">
      {images.map((slide) => {
        return (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="large-carousel__slide"
            key={slide.id}
            style={{
              background: `url(${slide.url})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              transform: `translateX(${100 * (slide.id - curSlide)}%)`,
            }}
          >
            {children &&
              React.cloneElement(children, {
                buttonText: `Browse all ${slide.title} products`,
              })}
          </div>
        );
      })}
      <div className="slider-buttons">
        {images.map((slide) => {
          return (
            <div
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className={`slider-buttons__button ${
                slide.id === curSlide ? "active" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
