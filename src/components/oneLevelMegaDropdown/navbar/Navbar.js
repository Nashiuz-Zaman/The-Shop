//react
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import Dropdown from "../dropdown/Dropdown";
import Searchbar from "../../searchbar/Searchbar";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import ImageButton from "../../imageButton/ImageButton";

//custom hooks
import useImportNavigationUserInfoButtonData from "../../../hooks/useImportNavigationUserInfoButtonData";

//styles
import "./Navbar.css";

export default function Navbar({
  mainNavOptions = undefined,
  dropdownMenuOptions = undefined,
}) {
  const [searchBoxOpen, setSearchBoxOpen] = useState(false);
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { userInfoButtonData } = useImportNavigationUserInfoButtonData();

  const handleOpenClick = () => {
    setSearchBoxOpen(true);
    setBackdropOpen(true);
  };

  const handleCloseClick = () => {
    setSearchBoxOpen(false);
    setBackdropOpen(false);
    setSearchTerm("");
  };

  const handleMouseEnter = () => {
    setBackdropOpen(true);
  };
  const handleMouseLeave = () => {
    setBackdropOpen(false);
  };

  return (
    <>
      <BackdropBlur open={backdropOpen} handleCloseClick={handleCloseClick} />
      <nav className="navbar">
        <div className="navbar__brandName"></div>

        <ul className="navigation-menu">
          {mainNavOptions &&
            mainNavOptions.map((option) => {
              return (
                <li key={option} className="navigation-menu__item">
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="navigation-menu__item--link"
                    to={`/${option}`}
                  >
                    {option}
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

        <div className="navbar__searchbar-and-user-info">
          <Searchbar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            brandName={"The Shop"}
            expand={searchBoxOpen}
            backdropOpen={backdropOpen}
            handleOpenClick={handleOpenClick}
            handleCloseClick={handleCloseClick}
          />

          <div className="navbar__searchbar-and-user-info__user-info">
            {userInfoButtonData.map((single) => {
              return <ImageButton key={single.id} imageSource={single} />;
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
