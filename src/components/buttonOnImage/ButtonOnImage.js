//react
import { Link } from "react-router-dom";

//styles
import styles from "./ButtonOnImage.module.css";

export default function ButtonOnImage({
  buttonText = "",
  toUrl = "#",
  rightArrow = true,
  external = false,
}) {
  return (
    <div className={styles["button-on-image"]}>
      {/* If they are external link then use the normal html <a> tag */}
      {external && (
        <a href={toUrl} className={styles["button-on-image__button"]}>
          {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
          {rightArrow && <>&rarr;</>}
        </a>
      )}
      {/* If not external link then use the React Link Component */}
      {!external && (
        <Link to={`/${toUrl}`} className={styles["button-on-image__button"]}>
          {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
          {rightArrow && <>&rarr;</>}
        </Link>
      )}
    </div>
  );
}
