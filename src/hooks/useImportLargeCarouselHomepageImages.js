//image
import nike from "../assets/nike.jpg";
import adidas from "../assets/adidas.jpg";
import puma from "../assets/puma.jpg";
import nike600 from "../assets/nike-600.webp";
import puma600 from "../assets/puma-600.webp";
import adidas600 from "../assets/adidas-600.webp";

export default function useImportLargeCarouselHomepageImages() {
  const largeCarouselHomepageImages = [
    { url: nike, title: "nike", id: 0 },
    { url: adidas, title: "adidas", id: 1 },
    { url: puma, title: "puma", id: 2 },
  ];

  const largeCarouselHomepageImagesMobile = [
    { url: nike600, title: "nike", id: 0 },
    { url: adidas600, title: "adidas", id: 1 },
    { url: puma600, title: "puma", id: 2 },
  ];

  return { largeCarouselHomepageImages, largeCarouselHomepageImagesMobile };
}
