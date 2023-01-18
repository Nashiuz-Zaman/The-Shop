//react
import { Link } from "react-router-dom";

//components
import Dropdown from "../dropdown/Dropdown";
import Searchbar from "../../searchbar/Searchbar";
import BackdropBlur from "../../backdropBlur/BackdropBlur";
import ImageButton from "../../imageButton/ImageButton";

//custom hooks
import useImportNavigationUserInfoButtonData from "../../../hooks/useImportNavigationUserInfoButtonData";
import useBackdrop from "../../../hooks/useBackdrop";

//styles
import "./Navbar.css";
import useSearchbar from "../../../hooks/useSearchbar";

export default function Navbar({
  mainNavOptions = undefined,
  dropdownMenuOptions = undefined,
}) {
  const { backdropOpen, openBackdrop, closeBackdrop } = useBackdrop();
  const {
    searchTerm,
    searchbarOpen,
    setSearchTerm,
    handleOpenSearchbar,
    handleCloseSearchbar,
  } = useSearchbar({ openBackdrop, closeBackdrop });
  const { userInfoButtonData } = useImportNavigationUserInfoButtonData();

  const handleMouseEnterNavigationItem = () => {
    openBackdrop(true);
  };
  const handleMouseLeaveNavigationItem = () => {
    closeBackdrop(false);
  };

  const closeBackdropAndEverything = () => {
    handleCloseSearchbar();
  };

  return (
    <>
      <BackdropBlur
        open={backdropOpen}
        handleCloseClick={closeBackdropAndEverything}
      />
      <nav className="navbar">
        <div className="navbar__brandName"></div>

        <ul className="navigation-menu">
          {mainNavOptions &&
            mainNavOptions.map((option) => {
              return (
                <li
                  onMouseEnter={handleMouseEnterNavigationItem}
                  onMouseLeave={handleMouseLeaveNavigationItem}
                  key={option}
                  className="navigation-menu__item"
                >
                  <Link
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
            expand={searchbarOpen}
            handleOpenClick={handleOpenSearchbar}
            handleCloseClick={handleCloseSearchbar}
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
