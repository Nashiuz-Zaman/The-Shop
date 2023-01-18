//components
import LinkGroup from "../../linkGroup/LinkGroup";

//styles
import styles from "./Dropdown.module.css";

export default function Dropdown({
  navbarMainOption = undefined,
  dropdownMenuOptions = undefined,
}) {
  const dropdownOptionsForMainOption =
    dropdownMenuOptions[`${navbarMainOption}`];

  return (
    <div className={styles["dropdown"]}>
      {dropdownOptionsForMainOption.map((singleListObject) => {
        return (
          <LinkGroup
            key={singleListObject.heading.text}
            singleListObject={singleListObject}
          />
        );
      })}
    </div>
  );
}
