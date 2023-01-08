//react
import { Link } from "react-router-dom";

//styles
import styles from "./ImageButton.module.css";

export default function ImageButton({
  extraClass = [],
  imageSource = undefined,
  externalLink = false,
}) {
  return imageSource.source === undefined ? (
    <p>Please provide button image</p>
  ) : (
    <div
      className={`${styles["image-button"]}  ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {externalLink === true && (
        <a
          href={imageSource.link ?? "No url provided"}
          className={`${styles["image-button__link"]}`}
          style={{
            background: `url(${imageSource.source})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      )}

      {externalLink === false && (
        <Link
          to={imageSource.link ?? "No url provided"}
          className={`${styles["image-button__link"]}`}
          style={{
            background: `url(${imageSource.source})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />
      )}
    </div>
  );
}
