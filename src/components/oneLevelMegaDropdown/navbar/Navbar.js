//react
import { Link } from "react-router-dom";

//custom hooks
import useCapitalizeStr from "../../../hooks/useCapitalizeStr";
import useOneLevelDropdownData from "../../../hooks/useOneLevelDropdownData";

//styles
import "./Navbar.css";

//components
import Dropdown from "../dropdown/Dropdown";

export default function Navbar() {
  const { capitalizeStr } = useCapitalizeStr();
  const { mainNavOptions } = useOneLevelDropdownData();

  return (
    <nav className="navbar">
      <ul className="navigation-menu">
        {mainNavOptions.map((option) => {
          return (
            <li key={option} className="navigation-menu__item">
              <Link className="navigation-menu__item--link" to={`/${option}`}>
                {capitalizeStr(option)}
              </Link>
              <div className="dropdown-container">
                <Dropdown navbarMainOption={option} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
