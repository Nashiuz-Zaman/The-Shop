//image
import nike from "../assets/nike.jpg";
import adidas from "../assets/adidas.jpg";
import puma from "../assets/puma.jpg";

export default function useImportLargeCarouselHomepageImages() {
  const largeCarouselHomepageImages = [
    { url: nike, title: "nike", id: 0 },
    { url: adidas, title: "adidas", id: 1 },
    { url: puma, title: "puma", id: 2 },
  ];

  return { largeCarouselHomepageImages };
}
