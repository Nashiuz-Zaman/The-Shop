export default function useOneLevelDropdownData() {
  const mainNavOptions = ["men", "women", "kids", "sale"];

  //data structure for the dropdown menu
  const allOptions = {
    men: {
      shoes: ["All Shoes", "Nike", "Adidas", "Puma"],
      clothing: ["All Clothing", "Nike", "Adidas", "Puma"],
      shop_collection: ["All Collection", "Nike", "Adidas", "Puma"],
      accesories_and_equipment: [
        "All Accesories & Equipments",
        "Nike",
        "Adidas",
        "Puma",
      ],
    },
    women: {
      shoes: ["All Shoes", "Nike", "Adidas", "Puma"],
      clothing: ["All Clothing", "Nike", "Adidas", "Puma"],
      shop_collection: ["All Collection", "Nike", "Adidas", "Puma"],
      accesories_and_equipment: [
        "All Accesories & Equipments",
        "Nike",
        "Adidas",
        "Puma",
      ],
    },
    kids: {
      shoes: ["All Shoes", "Nike", "Adidas", "Puma"],
      clothing: ["All Clothing", "Nike", "Adidas", "Puma"],
      shop_collection: ["All Collection", "Nike", "Adidas", "Puma"],
      accesories_and_equipment: [
        "All Accesories & Equipments",
        "Nike",
        "Adidas",
        "Puma",
      ],
    },
    sale: {
      shoes: ["All Shoes", "Nike", "Adidas", "Puma"],
      clothing: ["All Clothing", "Nike", "Adidas", "Puma"],
      shop_collection: ["All Collection", "Nike", "Adidas", "Puma"],
    },
  };

  return { mainNavOptions, allOptions };
}
