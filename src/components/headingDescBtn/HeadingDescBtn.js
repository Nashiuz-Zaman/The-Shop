import React from "react";
import styles from "./HeadingDescBtn.module.css";

export default function HeadingDescBtn({
  heading = "",
  subheading = "",
  extraClass = [],
  button = undefined,
  buttonText = "",
}) {
  return (
    <div
      className={`${styles["heading-desc-btn-textbox"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "Default class"
      }`}
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
      {button &&
        React.cloneElement(button, {
          buttonText: `${
            buttonText === "" ? "Please provide text for button" : buttonText
          }`,
        })}
    </div>
  );
}
