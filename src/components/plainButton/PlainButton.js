//react
import { Link } from "react-router-dom";

//styles
import styles from "./PlainButton.module.css";

export default function PlainButton({
  buttonText = "",
  toUrl = "#",
  rightArrow = true,
}) {
  return (
    <Link to={toUrl} className={styles["plain-button"]}>
      {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
      {rightArrow && <>&rarr;</>}
    </Link>
  );
}
