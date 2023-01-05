//styles
import React from "react";
import styles from "./GridShowcase.module.css";

export default function GridShowcase({
  extraClassName = {},
  images = [],

  children = undefined,
}) {
  return (
    <section
      className={`${styles["grid-showcase"]} ${
        extraClassName.container ?? "no-container"
      } ${extraClassName.grid ?? "no-manual-grid"}`}
    >
      {images.map((image) => {
        return (
          <div
            key={image.id}
            className={`${styles["grid-showcase__block"]} grid-showcase__block`}
          >
            <div
              className={`${styles["grid-showcase__block--img"]} grid-showcase__block--img`}
              style={{
                background: `url(${image.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            {children &&
              React.cloneElement(children, {
                heading: image.title,
                subheading: image.subheading,
                buttonText: `Shop for ${image.title}`,
              })}
          </div>
        );
      })}
    </section>
  );
}
