export default function useOneLevelDropdownData() {
  const mainNavOptions = ["men", "women", "kids", "sale"];

  //data structure for the dropdown menu
  const dropdownMenuOptions = {
    men: [
      {
        heading: { text: "Shoes", link: undefined },
        options: [
          { text: "All Shoes", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Clothing", link: undefined },
        options: [
          { text: "All Clothing", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Collection", link: undefined },
        options: [
          { text: "All Collection", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Accesories & Equipments", link: undefined },
        options: [
          { text: "All Accesories & Equipments", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
    ],

    women: [
      {
        heading: { text: "Shoes", link: undefined },
        options: [
          { text: "All Shoes", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Clothing", link: undefined },
        options: [
          { text: "All Clothing", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Collection", link: undefined },
        options: [
          { text: "All Collection", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Accesories & Equipments", link: undefined },
        options: [
          { text: "All Accesories & Equipments", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
    ],

    kids: [
      {
        heading: { text: "Shoes", link: undefined },
        options: [
          { text: "All Shoes", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Clothing", link: undefined },
        options: [
          { text: "All Clothing", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Accesories & Equipments", link: undefined },
        options: [
          { text: "All Accesories & Equipments", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
    ],

    sale: [
      {
        heading: { text: "Shoes", link: undefined },
        options: [
          { text: "All Shoes", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Clothing", link: undefined },
        options: [
          { text: "All Clothing", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
      {
        heading: { text: "Accesories & Equipments", link: undefined },
        options: [
          { text: "All Accesories & Equipments", link: "#" },
          { text: "Nike", link: "#" },
          { text: "Adidas", link: "#" },
          { text: "Puma", link: "#" },
        ],
      },
    ],
  };

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

  return { mainNavOptions, allOptions, dropdownMenuOptions };
}
