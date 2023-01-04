//custom hooks import
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//react
import { useState, useEffect } from "react";

//styles
import "./FadeCarouselNoBtn.css";

//import image sources

export default function FadeCarouselNoBtn({ images }) {
  const [curSlide, setCurSlide] = useState(0);
  const { activateCarousel, deactivateCarousel } = useAnimatedCarousel(
    images,
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

  return images.map((slide) => {
    return (
      <div
        key={slide.id}
        className={`fade-carousel-nobtn-slide ${
          slide.id === curSlide ? "active" : ""
        }`}
        style={{
          background: `url(${slide.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    );
  });
}
