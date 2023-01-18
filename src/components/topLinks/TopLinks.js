//react
import { Link } from "react-router-dom";

//styles
import styles from "./TopLinks.module.css";

export default function TopLinks({
  linksInfoArray = undefined,
  externalLink = false,
}) {
  return (
    <div className={styles["top-links"]}>
      {linksInfoArray.map((single) => {
        return externalLink === true ? (
          <a
            className={styles["top-links__link"]}
            key={single.id}
            href={single.link}
          >
            {single.text}
          </a>
        ) : (
          <Link
            className={styles["top-links__link"]}
            key={single.id}
            to={single.link}
          >
            {single.text}
          </Link>
        );
      })}
    </div>
  );
}
