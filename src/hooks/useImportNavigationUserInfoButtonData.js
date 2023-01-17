//image source
import navbag from "../assets/navbag.svg";
import heart from "../assets/heart.svg";

export default function useImportNavigationUserInfoButtonData() {
  const userInfoButtonData = [
    { id: 0, source: heart, title: "Favorites", link: "#" },
    { id: 1, source: navbag, title: "Shopping Bag", link: "#" },
  ];

  return { userInfoButtonData };
}
