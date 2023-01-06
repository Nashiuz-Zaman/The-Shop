//subcomponents
import Showcase from "../../components/showcase/Showcase";
import HeadingDescBtn from "../../components/headingDescBtn/HeadingDescBtn";

//styles
import React from "react";
import styles from "./GridShowcase.module.css";

export default function GridShowcase({
  extraClass = [],
  extraClassShowcase = [],
  extraClassHeadingDescBtn = [],
  imagesArray = [],
  button = undefined,
}) {
  return (
    <div
      className={`${styles["grid-showcase"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : ""
      }`}
    >
      {imagesArray.map((image) => {
        return (
          <div
            key={image.id}
            className={`${styles["grid-showcase__block"]} grid-showcase__block`}
          >
            <Showcase imageSource={image.url} extraClass={extraClassShowcase} />
            <HeadingDescBtn
              heading={image.heading}
              subheading={image.subheading}
              buttonText={`Shop For ${image.heading}`}
              extraClass={extraClassHeadingDescBtn}
              button={button}
            />
          </div>
        );
      })}
    </div>
  );
}
