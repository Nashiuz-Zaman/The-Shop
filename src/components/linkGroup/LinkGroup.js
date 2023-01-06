//react
import { Link } from "react-router-dom";

//styles
import styles from "./LinkGroup.module.css";

export default function LinkGroup({ singleListObject }) {
  return (
    <div className={styles["link-group"]}>
      {singleListObject.heading && (
        <h3 className={styles["link-group__heading"]}>
          {singleListObject.heading}
        </h3>
      )}
      {singleListObject.options.length > 0 && (
        <ul className={styles["link-group__list"]}>
          {singleListObject.options.map((option) => {
            return (
              <li className={styles["link-group__list-item"]}>{option}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
