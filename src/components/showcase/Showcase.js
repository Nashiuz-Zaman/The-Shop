//styles
import styles from "./Showcase.module.css";

export default function Showcase({
  title = "",
  imageSource = undefined,
  extraClass = [],
}) {
  return (
    <div
      className={`${styles["showcase"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {title && <h2 className="section__title">{title}</h2>}
      {imageSource === undefined ? (
        <p>Please provide image</p>
      ) : (
        <div
          className={styles["showcase__imgbox"]}
          style={{
            background: `url(${imageSource})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      )}
    </div>
  );
}
