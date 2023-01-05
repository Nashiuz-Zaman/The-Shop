//styles
import styles from "./Showcase.module.css";

export default function Showcase({
  title = "",
  children = undefined,
  source = undefined,
}) {
  return (
    <div className="container">
      <section className={styles["showcase"]}>
        {title && <h2 className="section__title">{title}</h2>}
        <div
          className={styles["showcase__img"]}
          style={{
            background: `url(${source ?? "Please provide image"})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {children && children}
      </section>
    </div>
  );
}
