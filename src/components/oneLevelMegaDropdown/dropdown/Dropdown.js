//components
import LinkGroup from "../../linkGroup/LinkGroup";

//custom hooks
import useOneLevelDropdownData from "../../../hooks/useOneLevelDropdownData";

//styles
import styles from "./Dropdown.module.css";

export default function Dropdown({ navbarMainOption }) {
  const { dropdownMenuOptions } = useOneLevelDropdownData();
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
