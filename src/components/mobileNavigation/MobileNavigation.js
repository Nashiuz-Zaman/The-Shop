//react
import { useState } from "react";

//components
import MobileNavigationList from "../mobileNavigationList/MobileNavigationList";

// image source
import listicon from "../../assets/listicon.svg";

//styles
import styles from "./MobileNavigation.module.css";

export default function MobileNavigation({ mainNavOptions = undefined }) {
  const [currentMenu, setCurrentMenu] = useState("");
  const [previousMenu, setPreviousMenu] = useState("");
  const [containerOpen, setContainerOpen] = useState(false);

  const handleOpenClick = () => {
    setContainerOpen(true);
    setPreviousMenu("");
    setCurrentMenu("main");
  };

  const handleMenuChangeForward = (option) => {
    setPreviousMenu(currentMenu);
    setCurrentMenu(option.nextMenu);
  };
  const handleMenuChangeBackward = () => {
    setCurrentMenu(previousMenu);
    setPreviousMenu("");
  };

  const handleCloseClick = () => {
    setContainerOpen(false);
    setPreviousMenu("");
    setCurrentMenu("");
  };

  return (
    <nav className={styles["mobile-nav"]}>
      <button onClick={handleOpenClick} className={styles["listicon"]}>
        <img src={listicon} alt={"mobile nav icon"} />
      </button>

      <div
        className={`${styles["mobile-nav__container"]} ${
          containerOpen ? styles["mobile-nav__container--open"] : ""
        }`}
      >
        {mainNavOptions.map((option) => {
          return (
            <MobileNavigationList
              key={option.id}
              navigationOptions={option}
              handleCloseClick={handleCloseClick}
              currentMenu={currentMenu}
              previousMenu={previousMenu}
              handleMenuChangeForward={handleMenuChangeForward}
              handleMenuChangeBackward={handleMenuChangeBackward}
            />
          );
        })}
      </div>
    </nav>
  );
}
