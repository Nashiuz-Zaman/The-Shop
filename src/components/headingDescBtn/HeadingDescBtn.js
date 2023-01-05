import styles from "./HeadingDescBtn.module.css";
import { Link } from "react-router-dom";

export default function HeadingDescBtn({
  heading = "",
  subheading = "",
  buttonText = "",
  extraClassName = [],
}) {
  return (
    <div
      className={`${styles["heading-desc-btn-textbox"]} ${extraClassName.join(
        " "
      )}`}
    >
      {heading && (
        <h3 className={styles["heading-desc-btn-textbox__heading"]}>
          {heading}
        </h3>
      )}
      {subheading && (
        <p className={styles["heading-desc-btn-textbox__subheading"]}>
          {subheading}
        </p>
      )}
      {buttonText && (
        <Link className={styles["heading-desc-btn-textbox__button"]}>
          {buttonText} &rarr;
        </Link>
      )}
    </div>
  );
}
