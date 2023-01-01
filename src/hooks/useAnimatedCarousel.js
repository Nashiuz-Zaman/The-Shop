export default function useAnimatedCarousel(
  slides,
  curSlide,
  setCurSlide,
  gap
) {
  let carouselTimer;

  const activateCarousel = () => {
    carouselTimer = null;
    if (carouselTimer === null) {
      carouselTimer = setTimeout(() => {
        clearTimeout(carouselTimer);
        carouselTimer = null;
        setCurSlide(curSlide === slides.length - 1 ? 0 : curSlide + 1);
      }, gap);
    }
  };

  const deactivateCarousel = () => {
    if (carouselTimer) {
      clearTimeout(carouselTimer);
      carouselTimer = null;
    }
  };

  const goToSlide = (slide) => {
    clearTimeout(carouselTimer);
    carouselTimer = null;
    setCurSlide(slide);
  };

  const handleMouseEnter = () => {
    deactivateCarousel();
  };

  const handleMouseLeave = () => {
    activateCarousel();
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    activateCarousel,
    deactivateCarousel,
    goToSlide,
  };
}
