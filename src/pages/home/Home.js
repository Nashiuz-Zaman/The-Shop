//components
import HorizontalScrollGallery from "../../components/horizontalScrollGallery/HorizontalScrollGallery";
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";
import MainSlogan from "../../components/mainSlogan/MainSlogan";
import Perks from "../../components/perks/Perks";
import Showcase from "../../components/showcase/Showcase";
import ButtonOnImage from "../../components/buttonOnImage/ButtonOnImage";
import LowHeightShowcase from "../../components/lowHeightShowcase/LowHeightShowcase";
import FadeCarouselNoBtn from "../../components/fadeCarouselNoBtn/FadeCarouselNoBtn";

//styles
import "./Home.css";

//image imports
import basketball from "../../assets/basketball.webp";
import fashion from "../../assets/fashion.webp";

//hooks
import useImportLargeCarouselHomepageImages from "../../hooks/useImportLargeCarouselHomepageImages";
import useImportFadeCarouselTopHomepageImages from "../../hooks/useImportFadeCarouselTopHomepageImages";
import useImportHorizontalScrollHomepage from "../../hooks/useImportHorizontalScrollHomepage";

export default function Home() {
  const { largeCarouselHomepageImages } =
    useImportLargeCarouselHomepageImages();
  const { fadeCarouselTopHomepage } = useImportFadeCarouselTopHomepageImages();
  const { popularCategoriesHomepage } = useImportHorizontalScrollHomepage();

  return (
    <div className="home">
      <MainSlogan>
        <FadeCarouselNoBtn images={fadeCarouselTopHomepage} />
      </MainSlogan>
      <Perks />
      <LargeCarousel images={largeCarouselHomepageImages}>
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
