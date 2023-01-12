//react
import { Link } from "react-router-dom";

//custom hooks
import useCapitalizeStr from "../../../hooks/useCapitalizeStr";

//styles
import "./Navbar.css";

//components
import Dropdown from "../dropdown/Dropdown";

export default function Navbar({
  mainNavOptions = undefined,
  dropdownMenuOptions = undefined,
}) {
  const { capitalizeStr } = useCapitalizeStr();

  return (
    <nav className="navbar">
      <ul className="navigation-menu">
        {mainNavOptions &&
          mainNavOptions.map((option) => {
            return (
              <li key={option} className="navigation-menu__item">
                <Link className="navigation-menu__item--link" to={`/${option}`}>
                  {capitalizeStr(option)}
                </Link>
                <div className="dropdown-container">
                  <Dropdown
                    navbarMainOption={option}
                    dropdownMenuOptions={dropdownMenuOptions}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
