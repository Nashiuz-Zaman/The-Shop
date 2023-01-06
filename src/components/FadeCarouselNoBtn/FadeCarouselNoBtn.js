//react
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import { useState, useEffect } from "react";

//custom hooks import
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//styles
import styles from "./FadeCarouselNoBtn.module.css";

//component starts from here
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////

export default function FadeCarouselNoBtn({
  imagesArray = [],
  extraClass = [],
}) {
  const [curSlide, setCurSlide] = useState(0);
  const { activateCarousel, deactivateCarousel } = useAnimatedCarousel(
    imagesArray,
    curSlide,
    setCurSlide,
    2500
  );

  useEffect(() => {
    activateCarousel();

    return () => {
      deactivateCarousel();
    };
  }, [curSlide, activateCarousel, deactivateCarousel]);

  return (
    <div
      className={`${styles["fade-carousel-nobtn"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {imagesArray.map((slide) => {
        return (
          <div
            key={slide.id}
            className={`${styles["fade-carousel-nobtn__slide"]} ${
              slide.id === curSlide ? "active-fade-carousel" : ""
            }`}
            style={{
              background: `url(${slide.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        );
      })}
    </div>
  );
}
