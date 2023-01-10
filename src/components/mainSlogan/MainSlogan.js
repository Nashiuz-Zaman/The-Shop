//styles
import styles from "./MainSlogan.module.css";

export default function MainSlogan({
  children = undefined,
  heading = "",
  subheading = "",
}) {
  return (
    <div className={styles["main-slogan"]}>
      <div className={styles["main-slogan__text-part"]}>
        <h1 className={styles["main-slogan__heading"]}>{heading}</h1>
        <p className={styles["main-slogan__sub-heading"]}>{subheading}</p>
      </div>

      {children && children}
    </div>
  );
}
