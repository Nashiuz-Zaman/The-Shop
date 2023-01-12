export default function useNavigationOptionsData() {
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

  const mobileNavOptions = [
    {
      id: "main",
      options: [
        { text: "Men", id: 0, nextMenu: "men" },
        { text: "Women", id: 1, nextMenu: "women" },
        { text: "Kids", id: 2, nextMenu: "kids" },
        { text: "Sale", id: 3, nextMenu: "sale" },
      ],
    },
    {
      id: "men",
      options: [
        { text: "Shoes", id: 0, nextMenu: "men-shoes" },
        { text: "Clothing", id: 1, nextMenu: "men-clothing" },
        { text: "Collection", id: 2, nextMenu: "men-collection" },
        { text: "Accesories & Equipments", id: 3, nextMenu: "men-accesories" },
      ],
    },
  ];

  return { mainNavOptions, dropdownMenuOptions, mobileNavOptions };
}
