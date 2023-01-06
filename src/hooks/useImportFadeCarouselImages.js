import nikeNewYear from "../assets/newyear-newgear-nike.jpg";
import adidasNewYear from "../assets//newyear-newgear-adidas.jpg";
import pumaNewYear from "../assets/newyear-newgear-puma.jpg";

import nikelogobig from "../assets/nike-big.png";
import pumalogobig from "../assets/puma-big.jpg";
import adidaslogobig from "../assets/adidas-big.png";

export default function useImportFadeCarouselImages() {
  const fadeCarouselTopHomepage = [
    { url: nikeNewYear, title: "nike commercial", id: 0 },
    { url: pumaNewYear, title: "puma commercial", id: 1 },
    { url: adidasNewYear, title: "adidas commercial", id: 2 },
  ];

  const fadeCarouselBrandLogos = [
    { url: nikelogobig, title: "nike logo", id: 0 },
    { url: pumalogobig, title: "puma logo", id: 1 },
    { url: adidaslogobig, title: "adidas logo", id: 2 },
  ];

  return { fadeCarouselTopHomepage, fadeCarouselBrandLogos };
}
