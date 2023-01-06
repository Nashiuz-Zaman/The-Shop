//components
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
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
import PlainButton from "../../components/plainButton/PlainButton";

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

//hooks
//////////////////////////////////
//////////////////////////////////
//////////////////////////////////
import useImportLargeCarouselHomepageImages from "../../hooks/useImportLargeCarouselHomepageImages";
import useImportFadeCarouselImages from "../../hooks/useImportFadeCarouselImages";
import useImportHorizontalScrollHomepage from "../../hooks/useImportHorizontalScrollHomepage";
import useImportGridShowcaseHome from "../../hooks/useImportGridShowcaseHome";
import usePerks from "../../hooks/usePerks";

export default function Home() {
  const { largeCarouselHomepageImages } =
    useImportLargeCarouselHomepageImages();
  const { fadeCarouselTopHomepage, fadeCarouselBrandLogos } =
    useImportFadeCarouselImages();
  const { popularCategoriesHomepage } = useImportHorizontalScrollHomepage();
  const { gridShowcaseHome } = useImportGridShowcaseHome();
  const { perksHomeTop } = usePerks();

  return (
    <div className="home">
      <section className="slogan">
        <MainSlogan>
          <FadeCarouselNoBtn imagesArray={fadeCarouselTopHomepage} />
        </MainSlogan>
      </section>

      <Perks textArray={perksHomeTop} />

      <section className="all-products-brands">
        <LargeCarousel
          imagesArray={largeCarouselHomepageImages}
          button={
            <ButtonOnImage extraClass={["position-bottom-left", "absolute"]} />
          }
        />
      </section>

      <HorizontalScrollGallery
        title={"Popular Categories"}
        images={popularCategoriesHomepage}
      />

      <section className="refresh-closet container section-margin">
        <div className="showcase-headingdescbtn-container">
          <Showcase title={"Fashion"} imageSource={fashion} />
          <HeadingDescBtn
            heading={"Refresh your closet"}
            subheading={
              "Make the new year your year with apparel and footwear to bring out your very best."
            }
            buttonText={"Shop"}
            button={<PlainButton />}
          />
        </div>
      </section>

      <section className="classics section-margin">
        <div className="showcase-headingdescbtn-container">
          <LowHeightShowcase imageSource={classic} />
          <HeadingDescBtn
            extraClass={[
              "absolute",
              "position-center-right",
              "textbox-light-font",
            ]}
            heading={"FOREVER. CLASSIC."}
            subheading={"Shop classics Old & New"}
            buttonText={"Shop Now"}
            button={<ButtonOnImage />}
          />
        </div>
      </section>

      <section className="basketball-essentials section-margin container">
        <div className="showcase-headingdescbtn-container">
          <Showcase title={"Game Time"} imageSource={basketball} />
          <HeadingDescBtn
            heading={"Basketball Essentials"}
            subheading={"Everything you need for the court"}
            buttonText={"Shop"}
            extraClass={[
              "absolute",
              "position-bottom-left",
              "textbox-light-font",
            ]}
            button={<PlainButton toUrl={"#"} />}
          />
        </div>
      </section>

      <section className="football-tennis section-margin container">
        <GridShowcase
          extraClass={["grid-2"]}
          imagesArray={gridShowcaseHome}
          button={<PlainButton toUrl={"#"} />}
        />
      </section>

      <div className="container section-margin">
        <section className="signup textbox-light-font grid-2">
          <div>
            <HeadingDescBtn
              heading="Become A Member"
              subheading="Sign up for free. Join the community."
            />

            <div className="button-grouping">
              <PlainButton buttonText="Join Us" rightArrow={false} />
              <PlainButton buttonText="Sign In" rightArrow={false} />
            </div>
          </div>

          <div>
            <FadeCarouselNoBtn imagesArray={fadeCarouselBrandLogos} />
          </div>
        </section>
      </div>
    </div>
  );
}
