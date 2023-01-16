//react
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import Dropdown from "../dropdown/Dropdown";
import Searchbar from "../../searchbar/Searchbar";
import BackdropBlur from "../../backdropBlur/BackdropBlur";

//custom hooks
import useCapitalizeStr from "../../../hooks/useCapitalizeStr";

//styles
import "./Navbar.css";

export default function Navbar({
  mainNavOptions = undefined,
  dropdownMenuOptions = undefined,
}) {
  const { capitalizeStr } = useCapitalizeStr();
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);

  const handleOpenClick = () => {
    setSearchBoxOpen(true);
    setBackdropOpen(true);
  };

  const handleCloseClick = () => {
    setSearchBoxOpen(false);
    setBackdropOpen(false);
  };

  return (
    <nav className="navbar">
      <BackdropBlur open={backdropOpen} handleCloseClick={handleCloseClick} />

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
      <Searchbar
        expand={searchBoxOpen}
        backdropOpen={backdropOpen}
        handleOpenClick={handleOpenClick}
        handleCloseClick={handleCloseClick}
      />
    </nav>
  );
}
