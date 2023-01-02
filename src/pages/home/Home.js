//components
import HorizontalScrollGallery from "../../components/horizontalScrollGallery/HorizontalScrollGallery";
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";
import MainSlogan from "../../components/mainSlogan/MainSlogan";
import Perks from "../../components/perks/Perks";
import Showcase from "../../components/showcase/Showcase";

//styles
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <MainSlogan />
      <Perks />
      <LargeCarousel />
      <HorizontalScrollGallery galleryName={"Popular Categories"} />
      <Showcase
        title={"Fashion"}
        heading={"Refresh your closet"}
        subheading={
          "Make the new year your year with apparel and footwear to bring out your very best."
        }
        buttonText={"Shop"}
      />
    </div>
  );
}
