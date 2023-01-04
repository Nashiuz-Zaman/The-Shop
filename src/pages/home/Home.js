//components
import HorizontalScrollGallery from "../../components/horizontalScrollGallery/HorizontalScrollGallery";
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";
import MainSlogan from "../../components/mainSlogan/MainSlogan";
import Perks from "../../components/perks/Perks";
import Showcase from "../../components/showcase/Showcase";
import ButtonOnImage from "../../components/buttonOnImage/ButtonOnImage";
import LowHeightShowcase from "../../components/lowHeightShowcase/LowHeightShowcase";

//styles
import "./Home.css";

//image sources
import basketball from "../../assets/basketball.webp";
import fashion from "../../assets/fashion.webp";
import backpacks from "../../assets/backpacks.webp";
import basketballshoes from "../../assets/basketballshoes.webp";
import footballshoes from "../../assets/footballshoes.webp";
import hoodies from "../../assets/hoodies.webp";
import leggings from "../../assets/leggings.webp";
import runningshoes from "../../assets/runningshoes.webp";
import sportsbras from "../../assets/sportsbras.webp";
import sweatshirts from "../../assets/sweatshirts.webp";
import tennisskirts from "../../assets/tennisskirts.webp";
import football from "../../assets/football.webp";

// horizontal scroll gallery
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

export default function Home() {
  return (
    <div className="home">
      <MainSlogan />
      <Perks />
      <LargeCarousel>
        <ButtonOnImage
          extraClassName={{ position: "position-bottom-left absolute" }}
        />
      </LargeCarousel>
      <HorizontalScrollGallery
        title={"Popular Categories"}
        images={popularCategoriesHomepage}
      />
      <Showcase
        title={"Fashion"}
        heading={"Refresh your closet"}
        subheading={
          "Make the new year your year with apparel and footwear to bring out your very best."
        }
        buttonText={"Shop"}
        source={fashion}
      />
      <LowHeightShowcase
        heading={"FOREVER. CLASSIC."}
        subheading={"Shop classics Old & New"}
        buttonText={"Shop Now"}
        extraClassName={{ position: "position-center-right absolute" }}
      >
        <ButtonOnImage />
      </LowHeightShowcase>
      <Showcase
        className="game-time"
        title={"Game Time"}
        heading={"Basketball Essentials"}
        subheading={"Everything you need for the court."}
        buttonText={"Shop"}
        source={basketball}
        extraClassName={{
          position: "position-bottom-left absolute",
          text: "textbox-light-narrow",
        }}
      />
    </div>
  );
}
