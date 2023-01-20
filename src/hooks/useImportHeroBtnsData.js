export default function useImportHeroBtnsData() {
  const homeHeroButtonsInfo = [
    { buttonText: "Shop Women", id: 0, link: "/women" },
    { buttonText: "Shop Men", id: 1, link: "/men" },
    { buttonText: "Shop Kids", id: 2, link: "/kids" },
  ];

  return { homeHeroButtonsInfo };
}
