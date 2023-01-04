import backpacks from "../assets/backpacks.webp";
import basketballshoes from "../assets/basketballshoes.webp";
import footballshoes from "../assets/footballshoes.webp";
import hoodies from "../assets/hoodies.webp";
import leggings from "../assets/leggings.webp";
import runningshoes from "../assets/runningshoes.webp";
import sportsbras from "../assets/sportsbras.webp";
import sweatshirts from "../assets/sweatshirts.webp";
import tennisskirts from "../assets/tennisskirts.webp";
import football from "../assets/football.webp";

export default function useImportHorizontalScrollHomepage() {
  const popularCategoriesHomepage = [
    { id: 0, productCategoryName: "Backpacks", url: backpacks },
    { id: 1, productCategoryName: "Basketball Shoes", url: basketballshoes },
    { id: 2, productCategoryName: "Football Shoes", url: footballshoes },
    { id: 3, productCategoryName: "Hoodies", url: hoodies },
    { id: 4, productCategoryName: "Leggings", url: leggings },
    { id: 5, productCategoryName: "Running Shoes", url: runningshoes },
    { id: 6, productCategoryName: "Sports Bras", url: sportsbras },
    { id: 7, productCategoryName: "Sweatshirts", url: sweatshirts },
    { id: 8, productCategoryName: "Tennis Skirts", url: tennisskirts },
    { id: 9, productCategoryName: "Accesories & Equipments", url: football },
  ];

  return { popularCategoriesHomepage };
}
