//custom hooks import
import useAnimatedCarousel from "../../hooks/useAnimatedCarousel";

//react
import { useState, useEffect } from "react";

//styles
import "./FadeCarouselNoBtn.css";

//import image sources
import nike from "./assets/FadeCarouselNoBtn/nike.jpg";
import adidas from "./assets/FadeCarouselNoBtn/adidas.jpg";
import puma from "./assets/FadeCarouselNoBtn/puma.jpg";

//images array
const slides = [
  { url: nike, title: "nike commercial", id: 0 },
  { url: puma, title: "puma commercial", id: 1 },
  { url: adidas, title: "adidas commercial", id: 2 },
];

export default function FadeCarouselNoBtn() {
  const [curSlide, setCurSlide] = useState(0);
  const { activateCarousel, deactivateCarousel } = useAnimatedCarousel(
    slides,
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

  return slides.map((slide) => {
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
