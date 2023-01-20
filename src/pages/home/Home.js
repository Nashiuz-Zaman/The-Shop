//react
import { useContext } from "react";

//components
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import HorizontalScrollGallery from "../../components/horizontalScrollGallery/HorizontalScrollGallery";
import LargeCarousel from "../../components/largeCarousel/LargeCarousel";

import Perks from "../../components/perks/Perks";
import Showcase from "../../components/showcase/Showcase";
import ButtonOnImage from "../../components/buttonOnImage/ButtonOnImage";
import LowHeightShowcase from "../../components/lowHeightShowcase/LowHeightShowcase";
import FadeCarouselNoBtn from "../../components/fadeCarouselNoBtn/FadeCarouselNoBtn";
import GridShowcase from "../../components/gridShowcase/GridShowcase";
import HeadingDescBtn from "../../components/headingDescBtn/HeadingDescBtn";
import PlainButton from "../../components/plainButton/PlainButton";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Hero from "../../components/hero/Hero";

//context
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

//styles
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import "./Home.css";

//image imports
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import basketball from "../../assets/basketball.webp";
import fashion from "../../assets/fashion.webp";
import classic from "../../assets/classic.webp";
import hero from "../../assets/hero.webp";

//hooks
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import useDocumentTitle from "../../hooks/useDocumentTitle";
import useImportLargeCarouselImagesData from "../../hooks/useImportLargeCarouselImagesData";
import useImportFadeCarouselImages from "../../hooks/useImportFadeCarouselImages";
import useImportHorizontalScrollHomepage from "../../hooks/useImportHorizontalScrollHomepage";
import useImportGridShowcaseHome from "../../hooks/useImportGridShowcaseHome";
import usePerks from "../../hooks/usePerks";
import useImportHeroBtnsData from "../../hooks/useImportHeroBtnsData";

export default function Home() {
  useDocumentTitle("The Shop Official Website | The Shop International");

  const { mediaQueryState } = useContext(MediaQueryContext);
  const { largeCarouselHomepageImages, largeCarouselHomepageImagesMobile } =
    useImportLargeCarouselImagesData();
  const { fadeCarouselBrandLogos } = useImportFadeCarouselImages();
  const { popularCategoriesHomepage } = useImportHorizontalScrollHomepage();
  const { gridShowcaseHome } = useImportGridShowcaseHome();
  const { perksHomeTop } = usePerks();
  const { homeHeroButtonsInfo } = useImportHeroBtnsData();

  return (
    <div className="home">
      <section className="hero">
        <Hero
          imageSource={hero}
          heading={
            <>
              New Year.
              <br /> New Gear.
            </>
          }
          subheading={
            <>Give yourself a treat in {new Date().getFullYear() + 1}</>
          }
          group={true}
          button={<ButtonOnImage />}
          buttonInfoArray={homeHeroButtonsInfo}
        />
      </section>

      <section className="perks">
        <Perks textArray={perksHomeTop} />
      </section>

      <section className="all-products-brands">
        {mediaQueryState.mobileMatches && (
          <LargeCarousel
            imagesInfoArray={largeCarouselHomepageImagesMobile}
            button={<ButtonOnImage rightArrow={false} />}
          />
        )}

        {!mediaQueryState.mobileMatches && (
          <LargeCarousel
            imagesInfoArray={largeCarouselHomepageImages}
            button={<ButtonOnImage rightArrow={false} />}
          />
        )}
      </section>

      <section className="popular-categories">
        <SectionTitle
          title={"Popular Categories"}
          extraClass={["section-title__padding"]}
        />
        <HorizontalScrollGallery images={popularCategoriesHomepage} />
      </section>

      <section className="refresh-closet container">
        <SectionTitle title={"Fashion"} />
        <div className="positioning-container">
          <Showcase imageSource={fashion} />
          <HeadingDescBtn
            heading={"Refresh your closet"}
            subheading={
              "Make the new year your year with apparel and footwear to bring out your very best."
            }
            buttonText={"Shop Latest Trends"}
            button={<PlainButton rightArrow={false} />}
          />
        </div>
      </section>

      <section className="classics section-margin">
        <div className="positioning-container">
          <LowHeightShowcase imageSource={classic} />
          <HeadingDescBtn
            extraClass={
              (mediaQueryState.computerScreenMatches ||
                mediaQueryState.largeTabletMatches) && [
                "absolute",
                "position-center-right",
                "textbox-light-font",
              ]
            }
            heading={"FOREVER. CLASSIC."}
            subheading={"Shop classics Old & New"}
            buttonText={"Shop All Classics"}
            button={
              (mediaQueryState.computerScreenMatches ||
                mediaQueryState.largeTabletMatches) === true ? (
                <ButtonOnImage rightArrow={false} />
              ) : (
                <PlainButton rightArrow={false} />
              )
            }
          />
        </div>
      </section>

      <section className="basketball-essentials container">
        <SectionTitle title={"Game time"} />
        <div className="positioning-container">
          <Showcase imageSource={basketball} />
          <HeadingDescBtn
            heading={"Basketball Essentials"}
            subheading={"Everything you need for the court"}
            buttonText={"Shop for Basketball"}
            extraClass={
              (mediaQueryState.computerScreenMatches ||
                mediaQueryState.largeTabletMatches) && [
                "absolute",
                "position-bottom-left",
                "textbox-light-font",
              ]
            }
            button={<ButtonOnImage toUrl={"#"} rightArrow={false} />}
          />
        </div>
      </section>

      <section className="football-tennis">
        <SectionTitle
          title={"Built For Perfomance"}
          extraClass={["section-title__padding"]}
        />
        <GridShowcase
          extraClass={["grid-2", "container"]}
          imagesInfoArray={gridShowcaseHome}
          button={<PlainButton rightArrow={false} />}
        />
      </section>

      <section className="signup container">
        <SectionTitle title={"Free Membership"} />
        <div className="signup-container textbox-light-font">
          <div className="signup-container__text">
            <HeadingDescBtn
              heading="Become A Member"
              subheading="Sign up for free. Join the community."
              group={true}
              buttonInfoArray={[
                { buttonText: "Join Us", id: 0 },
                { buttonText: "Sign In", id: 1 },
              ]}
              button={<PlainButton rightArrow={false} />}
            />
          </div>

          <div className="signup-container__carousel">
            <FadeCarouselNoBtn imagesInfoArray={fadeCarouselBrandLogos} />
          </div>
        </div>
      </section>
    </div>
  );
}
