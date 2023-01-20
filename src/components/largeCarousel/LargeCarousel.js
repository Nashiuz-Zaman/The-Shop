import React, { useEffect, useState } from "react";
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//styles
import styles from "./LargeCarousel.module.css";

export default function LargeCarousel({
  button = undefined,
  imagesInfoArray = [],
  extraClass = [],
}) {
  const [curSlide, setCurSlide] = useState(0);
  const {
    handleMouseEnter,
    handleMouseLeave,
    activateCarousel,
    deactivateCarousel,
    goToSlide,
  } = useAnimatedCarousel(imagesInfoArray, curSlide, setCurSlide, 3000);

  useEffect(() => {
    activateCarousel();

    return () => {
      deactivateCarousel();
    };
  }, [curSlide, activateCarousel, deactivateCarousel]);

  return (
    <div
      className={`${styles["large-carousel__container-main"]} 
      ${extraClass.length > 0 ? extraClass.join(" ") : "default class"}
      `}
    >
      <div
        className={styles["large-carousel__container-main__inner-container"]}
      >
        {imagesInfoArray.map((slide) => {
          return (
            <div
              className={styles["large-carousel__container-imagebox-button"]}
              key={slide.id}
              style={{
                transform: `translateX(${100 * (slide.id - curSlide)}%)`,
              }}
            >
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles["imagebox"]}
                style={{
                  background: `url(${slide.url})`,
                  backgroundPosition: "top",
                  backgroundSize: "cover",
                }}
              ></div>
              {button &&
                React.cloneElement(button, {
                  key: slide.title,
                  buttonText: `Shop ${slide.title} Products`,
                })}
            </div>
          );
        })}
      </div>

      <div className={styles["slider-buttons"]}>
        {imagesInfoArray.map((slide) => {
          return (
            <div
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className={`${styles["slider-buttons__button"]} ${
                slide.id === curSlide ? "active-slider-button" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
