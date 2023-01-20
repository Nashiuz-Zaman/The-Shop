import nikelogobig from "../assets/nike-big.webp";
import pumalogobig from "../assets/puma-big.webp";
import adidaslogobig from "../assets/adidas-big.webp";

export default function useImportFadeCarouselImages() {
  const fadeCarouselBrandLogos = [
    { url: nikelogobig, title: "nike logo", id: 0 },
    { url: pumalogobig, title: "puma logo", id: 1 },
    { url: adidaslogobig, title: "adidas logo", id: 2 },
  ];

  return { fadeCarouselBrandLogos };
}
