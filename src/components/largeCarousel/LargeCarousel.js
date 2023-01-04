import React, { useEffect, useState } from "react";
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//image
import nike from "./assets/largeCarousel/nike.jpg";
import adidas from "./assets/largeCarousel/adidas.jpg";
import puma from "./assets/largeCarousel/puma.jpg";

//styles
import "./LargeCarousel.css";

const slides = [
  { url: nike, title: "nike", id: 0 },
  { url: adidas, title: "adidas", id: 1 },
  { url: puma, title: "puma", id: 2 },
];

export default function LargeCarousel({ children = null }) {
  const [curSlide, setCurSlide] = useState(0);

  const {
    handleMouseEnter,
    handleMouseLeave,
    activateCarousel,
    deactivateCarousel,
    goToSlide,
  } = useAnimatedCarousel(slides, curSlide, setCurSlide, 3000);

  useEffect(() => {
    activateCarousel();

    return () => {
      deactivateCarousel();
    };
  }, [curSlide, activateCarousel, deactivateCarousel]);

  return (
    <section className="large-carousel">
      {slides.map((slide) => {
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
        {slides.map((slide) => {
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
