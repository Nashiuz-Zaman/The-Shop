//styles
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title = undefined, extraClass = [] }) {
  return (
    <h2
      className={`${styles["section-title"]} ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      {title ?? "Title Undefined"}
    </h2>
  );
}
