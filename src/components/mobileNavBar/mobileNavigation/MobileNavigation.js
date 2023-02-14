// //react
// import { useContext, useState } from "react";

//components
import MobileNavigationList from "../mobileNavigationList/MobileNavigationList";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import ImageButton from "../../imageButton/ImageButton";
import BrandName from "../../brandName/BrandName";
import HamburgerMenu from "../../hamburgerMenu/HamburgerMenu";
import MobileSearchbar from "../../mobileSearchbar/MobileSearchbar";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useMobileNavigation from "../../../hooks/useMobileNavigation";
import useTextButtonWithImageData from "../../../hooks/useTextButtonWithImageData";
import useImportNavigationUserInfoButtonData from "../../../hooks/useImportNavigationUserInfoButtonData";
import useSearchbar from "../../../hooks/useSearchbar";
import useBackdrop from "../../../hooks/useBackdrop";

export default function MobileNavigation({
  mainNavOptions = undefined,
  brandName = "",
}) {
  const { backdropOpen, closeBackdrop, openBackdrop } = useBackdrop();
  const {
    state,
    handleCloseMobileNavigation,
    handleOpenMobileNavigation,
    goToNext,
    goToPrevious,
  } = useMobileNavigation({ closeBackdrop, openBackdrop });
  const { mobileNavigationButtons } = useTextButtonWithImageData();
  const { userInfoButtonData } = useImportNavigationUserInfoButtonData();
  const {
    searchTerm,
    searchbarOpen,
    setSearchTerm,
    handleOpenSearchbar,
    handleCloseSearchbar,
  } = useSearchbar({ closeBackdrop, openBackdrop });

  const closeBackdropAndEverything = () => {
    handleCloseSearchbar();
    handleCloseMobileNavigation();
  };

  return (
    <nav className={styles["mobile-nav"]}>
      <div className={styles["mobile-nav__brand-and-options"]}>
        <BrandName title={brandName} />
        <MobileSearchbar
          brandName="The Shop."
          searchTerm={searchTerm}
          expand={searchbarOpen}
          setSearchTerm={setSearchTerm}
          handleOpenClick={handleOpenSearchbar}
          handleCloseClick={handleCloseSearchbar}
        />
        {userInfoButtonData.map((single) => {
          return <ImageButton key={single.id} imageSource={single} />;
        })}
        <HamburgerMenu clickHandler={handleOpenMobileNavigation} />
      </div>

      <BackdropBlur
        open={backdropOpen}
        handleCloseClick={closeBackdropAndEverything}
      />
      <div
        className={`${styles["mobile-nav__container"]} ${
          state.containerOpen ? styles["mobile-nav__container--open"] : ""
        }`}
      >
        {mainNavOptions.map((option) => {
          return (
            <MobileNavigationList
              key={option.id}
              navigationOptions={option}
              handleCloseClick={handleCloseMobileNavigation}
              currentMenu={state.currentMenu}
              previousMenuArray={state.previousMenu}
              handleMenuChangeForward={goToNext}
              handleMenuChangeBackward={goToPrevious}
              brandName={"The Shop"}
              learnMoreLink={""}
              textButtonsWithImagesInfo={mobileNavigationButtons}
            />
          );
        })}
      </div>
    </nav>
  );
}
