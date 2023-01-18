//components
import FadeCarouselNoBtn from "../fadeCarouselNoBtn/FadeCarouselNoBtn";

//styles

import styles from "./MainSlogan.module.css";

export default function MainSlogan({
  carousel = false,
  heading = "",
  subheading = "",
  imagesInfoArray = [],
}) {
  return (
    <div className={styles["main-slogan"]}>
      <div className={styles["main-slogan__text-part"]}>
        <h1 className={styles["main-slogan__heading"]}>{heading}</h1>
        <p className={styles["main-slogan__subheading"]}>{subheading}</p>
      </div>

      {carousel && (
        <div className={styles["main-slogan__carousel"]}>
          <FadeCarouselNoBtn imagesInfoArray={imagesInfoArray} />
        </div>
      )}
    </div>
  );
}
