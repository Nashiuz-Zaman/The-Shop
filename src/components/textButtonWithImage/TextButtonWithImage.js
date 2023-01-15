//react
import { Link } from "react-router-dom";

// styles
import styles from "./TextButtonWithImage.module.css";

export default function TextButtonWithImage({
  textButtonsWithImagesInfo = undefined,
}) {
  return (
    <div className={styles["text-button-with-image__container"]}>
      {textButtonsWithImagesInfo.map((singleButton) => {
        return (
          <Link
            key={singleButton.id}
            className={styles["text-button-with-image__button"]}
          >
            <img
              src={singleButton.imageSource}
              alt={`A ${singleButton.text} button`}
            />
            <span>{singleButton.text}</span>
          </Link>
        );
      })}
    </div>
  );
}
