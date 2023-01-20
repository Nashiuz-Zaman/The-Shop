//styles
import styles from "./Hero.module.css";

//components
import HeadingDescBtn from "../headingDescBtn/HeadingDescBtn";

export default function Hero({
  imageSource = "",
  buttonInfoArray = [],
  buttonText = "",
  button = undefined,
  group = false,
  heading = "",
  subheading = "",
}) {
  return (
    <div className={styles["hero-container"]}>
      <div
        style={{
          background: `url(${imageSource})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className={styles["hero-background-image"]}
      ></div>

      <HeadingDescBtn
        heading={heading}
        subheading={subheading}
        group={group}
        button={button}
        buttonText={buttonText}
        buttonInfoArray={buttonInfoArray}
      />
    </div>
  );
}
