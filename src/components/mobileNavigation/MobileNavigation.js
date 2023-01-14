//components
import MobileNavigationList from "../mobileNavigationList/MobileNavigationList";
import BackdropBlur from "../backdropBlur/BackdropBlur";

//image source
import listicon from "../../assets/listicon.svg";

//styles
import styles from "./MobileNavigation.module.css";

//custom hooks
import useMobileNavigation from "../../hooks/useMobileNavigation";

export default function MobileNavigation({ mainNavOptions = undefined }) {
  const { state, handleClose, handleOpen, goToNext, goToPrevious } =
    useMobileNavigation();
  console.log(state.backdropOpen);

  return (
    <nav className={styles["mobile-nav"]}>
      <BackdropBlur open={state.backdropOpen} handleCloseClick={handleClose} />
      <button onClick={handleOpen} className={styles["listicon"]}>
        <img src={listicon} alt={"mobile nav icon"} />
      </button>

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
              handleCloseClick={handleClose}
              currentMenu={state.currentMenu}
              previousMenuArray={state.previousMenu}
              // previousMenu={
              //   state.previousMenu.length > 0
              //     ? state.previousMenu[state.previousMenu.length - 1]
              //     : ""
              // }
              handleMenuChangeForward={goToNext}
              handleMenuChangeBackward={goToPrevious}
            />
          );
        })}
      </div>
    </nav>
  );
}
