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
        { text: "Men", id: 0, nextMenu: "men", link: undefined },
        { text: "Women", id: 1, nextMenu: "women", link: undefined },
        { text: "Kids", id: 2, nextMenu: "kids", link: undefined },
        { text: "Sale", id: 3, nextMenu: "sale", link: undefined },
      ],
    },
    {
      id: "men",
      heading: { text: "Men", link: "/men" },
      options: [
        { text: "Shoes", id: 0, nextMenu: "men-shoes", link: undefined },
        { text: "Clothing", id: 1, nextMenu: "men-clothing", link: undefined },
        {
          text: "Collection",
          id: 2,
          nextMenu: "men-collection",
          link: undefined,
        },
        {
          text: "Accesories & Equipments",
          id: 3,
          nextMenu: "men-accesories",
          link: undefined,
        },
      ],
    },
    {
      id: "men-shoes",
      heading: { text: "Shoes", link: "#" },
      options: [
        { text: "All Shoes", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "men-clothing",
      heading: { text: "Clothing", link: "#" },
      options: [
        { text: "All Clothing", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "men-collection",
      heading: { text: "Collection", link: "#" },
      options: [
        { text: "All Collection", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "men-accesories",
      heading: { text: "Accesories & Equipments", link: "#" },
      options: [
        { text: "All Accesories & Equipments", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "women",
      heading: { text: "Women", link: "/women" },
      options: [
        { text: "Shoes", id: 0, nextMenu: "women-shoes", link: undefined },
        {
          text: "Clothing",
          id: 1,
          nextMenu: "women-clothing",
          link: undefined,
        },
        {
          text: "Collection",
          id: 2,
          nextMenu: "women-collection",
          link: undefined,
        },
        {
          text: "Accesories & Equipments",
          id: 3,
          nextMenu: "women-accesories",
          link: undefined,
        },
      ],
    },
    {
      id: "women-shoes",
      heading: { text: "Shoes", link: "#" },
      options: [
        { text: "All Shoes", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "women-clothing",
      heading: { text: "Clothing", link: "#" },
      options: [
        { text: "All Clothing", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "women-collection",
      heading: { text: "Collection", link: "#" },
      options: [
        { text: "All Collection", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "women-accesories",
      heading: { text: "Accesories & Equipments", link: "#" },
      options: [
        { text: "All Accesories & Equipments", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "kids",
      heading: { text: "Kids", link: "/kids" },
      options: [
        { text: "Shoes", id: 0, nextMenu: "kids-shoes", link: undefined },
        {
          text: "Clothing",
          id: 1,
          nextMenu: "kids-clothing",
          link: undefined,
        },
        {
          text: "Accesories & Equipments",
          id: 2,
          nextMenu: "kids-accesories",
          link: undefined,
        },
      ],
    },
    {
      id: "kids-shoes",
      heading: { text: "Shoes", link: "#" },
      options: [
        { text: "All Shoes", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "kids-clothing",
      heading: { text: "Clothing", link: "#" },
      options: [
        { text: "All Clothing", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "kids-accesories",
      heading: { text: "Accesories & Equipments", link: "#" },
      options: [
        { text: "All Accesories & Equipments", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "sale",
      heading: { text: "Sale", link: "/sale" },
      options: [
        { text: "Shoes", id: 0, nextMenu: "sale-shoes", link: undefined },
        {
          text: "Clothing",
          id: 1,
          nextMenu: "sale-clothing",
          link: undefined,
        },
        {
          text: "Accesories & Equipments",
          id: 2,
          nextMenu: "sale-accesories",
          link: undefined,
        },
      ],
    },
    {
      id: "sale-shoes",
      heading: { text: "Shoes", link: "#" },
      options: [
        { text: "All Shoes", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "sale-clothing",
      heading: { text: "Clothing", link: "#" },
      options: [
        { text: "All Clothing", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
    {
      id: "sale-accesories",
      heading: { text: "Accesories & Equipments", link: "#" },
      options: [
        { text: "All Accesories & Equipments", id: 0, link: "#" },
        { text: "Nike", id: 1, link: "#" },
        { text: "Adidas", id: 2, link: "#" },
        { text: "Puma", id: 3, link: "#" },
      ],
    },
  ];

  return { mainNavOptions, dropdownMenuOptions, mobileNavOptions };
}
