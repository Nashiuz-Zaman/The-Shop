//react
import React from "react";

//styles
import styles from "./LowHeightShowcase.module.css";

export default function LowHeightShowcase({
  title = "",
  extraClassName = [],
  imageSource = "",
}) {
  return (
    <div
      className={`${styles["low-height-showcase"]} ${
        extraClassName.length > 0 ? extraClassName.join(" ") : "default class"
      }`}
    >
      {title && <h2 className="section-title">{title}</h2>}
      <div
        className={styles["low-height-showcase__img"]}
        style={{
          background: `url(${imageSource})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
