//react
import { Link } from "react-router-dom";

//image source
import closelisticon from "../../assets/closelisticon.svg";
import rightcaret from "../../assets/caret-right.svg";
import leftcaret from "../../assets/caret-left.svg";

//styles
import styles from "./MobileNavigationList.module.css";

export default function MobileNavigationList({
  navigationOptions = undefined,
  handleCloseClick,
  currentMenu,
  previousMenu,
  handleMenuChangeForward,
  handleMenuChangeBackward,
}) {
  return (
    <div
      className={`${styles["mobile-navigation-list"]} ${
        currentMenu === navigationOptions.id ? styles["open"] : ""
      } ${
        previousMenu === navigationOptions.id ? styles["previously-opened"] : ""
      }`}
    >
      {navigationOptions.id === "main" && (
        <div
          className={styles["mobile-navigation-list__closelisticon-container"]}
        >
          <button
            onClick={handleCloseClick}
            className={styles["closelisticon"]}
          >
            <img src={closelisticon} alt={"mobile nav close icon"} />
          </button>
        </div>
      )}

      {navigationOptions.id !== "main" && (
        <div
          className={styles["mobile-navigation-list__leftcareticon-container"]}
        >
          <button
            onClick={handleMenuChangeBackward}
            className={styles["leftcareticon"]}
          >
            <img src={leftcaret} alt={"mobile nav left caret icon"} />{" "}
            <span>All</span>
          </button>
        </div>
      )}

      <ul className={styles["mobile-navigation-list__list-of-options"]}>
        {navigationOptions.options.map((option) => {
          return (
            <li
              onClick={() => {
                previousMenu = currentMenu;
                handleMenuChangeForward(option);
              }}
              className={
                styles["mobile-navigation-list__list-of-options__single-option"]
              }
              key={option.id}
            >
              <Link to={"#"}>
                {option.text}
                <img src={rightcaret} alt={"right caret"} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
