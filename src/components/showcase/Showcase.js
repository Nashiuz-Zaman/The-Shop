//react
import { Link } from "react-router-dom";

//styles
import styles from "./Showcase.module.css";

export default function Showcase({
  title = "",
  heading = "",
  subheading = "",
  buttonText = "",
  extraClassName = {},
  source = "",
}) {
  return (
    <div className="container">
      <section className={styles["showcase"]}>
        {title && <h2 className="section__title">{title}</h2>}
        <div
          className={styles["showcase__img"]}
          style={{
            background: `url(${source})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div
          className={`${styles["showcase__textbox"]} ${
            extraClassName.position ?? "no-special-position"
          }  ${extraClassName.text ?? "no-special-text"}`}
        >
          {heading && (
            <h3 className={styles["showcase__textbox--heading"]}>{heading}</h3>
          )}
          {subheading && (
            <p className={styles["showcase__textbox--subheading"]}>
              {subheading}
            </p>
          )}
          {buttonText && <Link to="#">{buttonText} &rarr;</Link>}
        </div>
      </section>
    </div>
  );
}
