//styles
import styles from "./Perks.module.css";

export default function Perks({ textArray = [] }) {
  return (
    <section className={styles["perks"]}>
      {textArray.map((text) => {
        return (
          <h2 key={text} className={styles["perks__perk"]}>
            {text}
          </h2>
        );
      })}
    </section>
  );
}
