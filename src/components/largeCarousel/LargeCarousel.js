import React, { useEffect, useState } from "react";
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//styles
import styles from "./LargeCarousel.module.css";

export default function LargeCarousel({
  button = undefined,
  imagesArray = [],
  extraClass = [],
}) {
  const [curSlide, setCurSlide] = useState(0);

  const {
    handleMouseEnter,
    handleMouseLeave,
    activateCarousel,
    deactivateCarousel,
    goToSlide,
  } = useAnimatedCarousel(imagesArray, curSlide, setCurSlide, 3000);

  useEffect(() => {
    activateCarousel();

    return () => {
      deactivateCarousel();
    };
  }, [curSlide, activateCarousel, deactivateCarousel]);

  return (
    <div
      className={`${styles["large-carousel"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {imagesArray.map((slide) => {
        return (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles["large-carousel__slide"]}
            key={slide.id}
            style={{
              background: `url(${slide.url})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              transform: `translateX(${100 * (slide.id - curSlide)}%)`,
            }}
          >
            {button &&
              React.cloneElement(button, {
                buttonText: `Show all ${slide.title} products`,
              })}
          </div>
        );
      })}
      <div className={styles["slider-buttons"]}>
        {imagesArray.map((slide) => {
          return (
            <div
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className={`${styles["slider-buttons__button"]} ${
                slide.id === curSlide ? "active" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
