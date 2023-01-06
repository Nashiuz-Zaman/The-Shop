//styles
import styles from "./Footer.module.css";

//components
import LinkGroup from "../linkGroup/LinkGroup";

export default function Footer({ optionsArray }) {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__links"]}>
        {optionsArray.map((singleListObject) => {
          return <LinkGroup singleListObject={singleListObject} />;
        })}
      </div>
    </footer>
  );
}
