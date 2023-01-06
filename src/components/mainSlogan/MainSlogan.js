//styles
import styles from "./MainSlogan.module.css";

export default function MainSlogan({ children = undefined }) {
  return (
    <div className={styles["main-slogan"]}>
      <div className={styles["main-slogan__text-part"]}>
        <h1 className={styles["main-slogan__heading"]}>
          New Year
          <br /> New Gear.
        </h1>
        <p className={styles["main-slogan__sub-heading"]}>
          Give yourself a treat in
          {` ${new Date().getFullYear() + 1}`}
        </p>
      </div>

      {children && children}
    </div>
  );
}
