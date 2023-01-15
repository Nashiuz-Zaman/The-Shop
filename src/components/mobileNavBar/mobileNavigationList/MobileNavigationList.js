//react
import { Link } from "react-router-dom";

//components
import PlainButton from "../../plainButton/PlainButton";
import TextButtonWithImage from "../../textButtonWithImage/TextButtonWithImage";

//image source
import closelisticon from "../../../assets/closelisticon.svg";
import rightcaret from "../../../assets/caret-right.svg";
import leftcaret from "../../../assets/caret-left.svg";
import rightcaretGray from "../../../assets/caret-right-gray.svg";

//styles
import styles from "./MobileNavigationList.module.css";

export default function MobileNavigationList({
  navigationOptions = undefined,
  handleCloseClick,
  currentMenu,
  handleMenuChangeForward,
  handleMenuChangeBackward,
  previousMenuArray,
  brandName = "",
  learnMoreLink = "",
  joinUsLink = "",
  signInLink = "",
  textButtonsWithImagesInfo = undefined,
}) {
  return (
    <div
      className={`${styles["mobile-navigation-list"]} ${
        currentMenu === navigationOptions.id ? styles["open"] : ""
      } ${
        previousMenuArray.includes(navigationOptions.id)
          ? styles["previously-opened"]
          : ""
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
            <span>Go Back</span>
          </button>
        </div>
      )}

      <ul className={styles["mobile-navigation-list__list-of-options"]}>
        {navigationOptions.heading !== undefined && (
          <li
            onClick={() => {
              if (navigationOptions.heading.link) {
                handleCloseClick();
              }
            }}
            className={
              styles["mobile-navigation-list__list-of-options__heading"]
            }
          >
            <Link to={navigationOptions.heading.link}>
              {navigationOptions.heading.text}
            </Link>
          </li>
        )}

        {navigationOptions.options.map((option) => {
          return navigationOptions.id === "main" ? (
            <li
              onClick={() => {
                option.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(option);
              }}
              key={option.id}
              className={
                styles["mobile-navigation-list__list-of-options__heading"]
              }
            >
              {option.link !== undefined ? (
                <Link to={option.link}>{option.text}</Link>
              ) : (
                <span>
                  {option.text}
                  <img src={rightcaret} alt={"right caret"} />
                </span>
              )}
            </li>
          ) : (
            <li
              onClick={() => {
                option.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(option);
              }}
              className={
                styles["mobile-navigation-list__list-of-options__single-option"]
              }
              key={option.id}
            >
              {option.link === undefined ? (
                <span>
                  {option.text}
                  <img src={rightcaretGray} alt={"right caret"} />
                </span>
              ) : (
                <Link to={option.link}>{option.text}</Link>
              )}
            </li>
          );
        })}
      </ul>

      {navigationOptions.id === "main" && (
        <div className={styles["mobile-navigation-list__signup"]}>
          <p className={styles["mobile-navigation-list__signup__description"]}>
            Become a {brandName} Member for the best products, inspiration and
            stories in sport. <Link to={learnMoreLink}>Learn more</Link>
          </p>

          <div
            className={styles["mobile-navigation-list__signup__button-group"]}
          >
            <PlainButton
              buttonText="Join Us"
              toUrl={joinUsLink}
              rightArrow={false}
            />
            <PlainButton
              buttonText="Sign In"
              toUrl={signInLink}
              rightArrow={false}
            />
          </div>
        </div>
      )}

      {navigationOptions.id === "main" && textButtonsWithImagesInfo && (
        <TextButtonWithImage
          textButtonsWithImagesInfo={textButtonsWithImagesInfo}
        />
      )}
    </div>
  );
}
