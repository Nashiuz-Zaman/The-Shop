//components
import HorizontalScrollGallery from "../../components/horizontalScrollGallery/HorizontalScrollGallery";
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";
import MainSlogan from "../../components/mainSlogan/MainSlogan";
import Perks from "../../components/perks/Perks";
import Showcase from "../../components/showcase/Showcase";
import ButtonOnImage from "../../components/buttonOnImage/ButtonOnImage";
import LowHeightShowcase from "../../components/lowHeightShowcase/LowHeightShowcase";
import FadeCarouselNoBtn from "../../components/fadeCarouselNoBtn/FadeCarouselNoBtn";
import GridShowcase from "../../components/gridShowcase/GridShowcase";
import HeadingDescBtn from "../../components/headingDescBtn/HeadingDescBtn";

//styles
import "./Home.css";

//image imports
import basketball from "../../assets/basketball.webp";
import fashion from "../../assets/fashion.webp";
import classic from "../../assets/classic.webp";

//hooks
import useImportLargeCarouselHomepageImages from "../../hooks/useImportLargeCarouselHomepageImages";
import useImportFadeCarouselTopHomepageImages from "../../hooks/useImportFadeCarouselTopHomepageImages";
import useImportHorizontalScrollHomepage from "../../hooks/useImportHorizontalScrollHomepage";
import useImportGridShowcaseHome from "../../hooks/useImportGridShowcaseHome";

export default function Home() {
  const { largeCarouselHomepageImages } =
    useImportLargeCarouselHomepageImages();
  const { fadeCarouselTopHomepage } = useImportFadeCarouselTopHomepageImages();
  const { popularCategoriesHomepage } = useImportHorizontalScrollHomepage();
  const { gridShowcaseHome } = useImportGridShowcaseHome();

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

      <Showcase title={"Fashion"} source={fashion}>
        <HeadingDescBtn
          heading={"Refresh your closet"}
          subheading={
            "Make the new year your year with apparel and footwear to bring out your very best."
          }
          buttonText={"Shop"}
          extraClassName={["refresh-closet"]}
        />
      </Showcase>

      <LowHeightShowcase
        heading={"FOREVER. CLASSIC."}
        subheading={"Shop classics Old & New"}
        buttonText={"Shop Now"}
        extraClassName={{ position: "position-center-right absolute" }}
        imgSrc={classic}
      >
        <ButtonOnImage />
      </LowHeightShowcase>

      <Showcase title={"Game Time"} source={basketball}>
        <HeadingDescBtn
          heading={"Basketball Essentials"}
          subheading={"Everything you need for the court."}
          buttonText={"Shop"}
          extraClassName={[
            "position-bottom-left",
            "absolute",
            "textbox-light-font",
            "basketball-essentials",
          ]}
        />
      </Showcase>

      <GridShowcase
        extraClassName={{ grid: "grid-2 ", container: "container" }}
        images={gridShowcaseHome}
      >
        <HeadingDescBtn extraClassName={["football-tennis"]} />
      </GridShowcase>
    </div>
  );
}
