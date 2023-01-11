//subcomponents
import Showcase from "../../components/showcase/Showcase";
import HeadingDescBtn from "../../components/headingDescBtn/HeadingDescBtn";

//styles
import React from "react";
import styles from "./GridShowcase.module.css";

export default function GridShowcase({
  extraClass = undefined,
  imagesInfoArray = undefined,
  button = undefined,
}) {
  return (
    <div
      className={`${styles["grid-showcase"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {imagesInfoArray.map((imageInfo) => {
        return (
          <div
            key={imageInfo.id}
            className={styles["grid-showcase__single-showcase-container"]}
          >
            <Showcase imageSource={imageInfo.url} />
            <HeadingDescBtn
              heading={imageInfo.heading}
              subheading={imageInfo.subheading}
              buttonText={`Shop For ${imageInfo.heading}`}
              button={button}
            />
          </div>
        );
      })}
    </div>
  );
}
