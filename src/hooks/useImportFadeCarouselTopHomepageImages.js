import nikeNewYear from "../assets/newyear-newgear-nike.jpg";
import adidasNewYear from "../assets//newyear-newgear-adidas.jpg";
import pumaNewYear from "../assets/newyear-newgear-puma.jpg";

export default function useImportFadeCarouselTopHomepageImages() {
  const fadeCarouselTopHomepage = [
    { url: nikeNewYear, title: "nike commercial", id: 0 },
    { url: pumaNewYear, title: "puma commercial", id: 1 },
    { url: adidasNewYear, title: "adidas commercial", id: 2 },
  ];

  return { fadeCarouselTopHomepage };
}
