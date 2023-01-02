//react
import { Link } from "react-router-dom";

//styles
import styles from "./Showcase.module.css";

//image source
import showcase from "./assets/showcase.webp";

export default function Showcase({ title, heading, subheading, buttonText }) {
  return (
    <div className="container">
      <section className={styles["showcase"]}>
        <h2 className="section__title">{title}</h2>
        <div
          className={styles["showcase__img"]}
          style={{
            background: `url(${showcase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className={styles["showcase__textbox"]}>
          <h3 className={styles["showcase__textbox--heading"]}>{heading}</h3>
          <p className={styles["showcase__textbox--subheading"]}>
            {subheading}
          </p>
          <Link to="#">{buttonText}</Link>
        </div>
      </section>
    </div>
  );
}
