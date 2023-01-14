//styles
import styles from "./BackdropBlur.module.css";

export default function BackdropBlur({
  open = false,
  handleCloseClick = undefined,
}) {
  return (
    <div
      onClick={handleCloseClick}
      className={`${styles["backdrop-blur"]} 
     ${open ? styles["show"] : "hide"}
        `}
    ></div>
  );
}
