//react
import React from "react";

//styles
import styles from "./LowHeightShowcase.module.css";

//image source
import classic from "./assets/classic.webp";

export default function LowHeightShowcase({
  title = "",
  heading = "",
  subheading = "",
  buttonText = "",
  children = null,
  extraClassName = {},
}) {
  return (
    <section className={styles["low-height-showcase"]}>
      {title && <h2 className="section-title">{title}</h2>}
      <div
        className={styles["low-height-showcase__img"]}
        style={{
          background: `url(${classic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div
        className={`${styles["low-height-showcase__textbox"]} ${
          extraClassName.position ?? "no-special-position"
        }`}
      >
        {heading && (
          <h3 className={styles["low-height-showcase__textbox--heading"]}>
            {heading}
          </h3>
        )}
        {subheading && (
          <p className={styles["low-height-showcase__textbox--subheading"]}>
            {subheading}
          </p>
        )}
        {buttonText && React.cloneElement(children, { buttonText: buttonText })}
      </div>
    </section>
  );
}
