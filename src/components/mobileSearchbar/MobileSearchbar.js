//react
import { useContext } from "react";

//image source
import searchicon from "../../assets/search.svg";

//styles
import styles from "./MobileSearchbar.module.css";

//context
import { MediaQueryContext } from "../../contexts/MediaQueryContext";

export default function MobileSearchbar({
  brandName = "",
  searchTerm = "",
  setSearchTerm = undefined,
  expand = false,
  handleOpenClick = undefined,
  handleCloseClick = undefined,
}) {
  const { mediaQueryState } = useContext(MediaQueryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseClick();
  };

  return (
    <div
      className={`${styles["form-container"]} ${expand && styles["expand"]}`}
    >
      {!mediaQueryState.mobileMatches && expand && (
        <h2 className={styles["brand-name"]}>{brandName}</h2>
      )}
      <form onSubmit={handleSubmit} className={styles["form-searchbar"]}>
        <label className={styles["form-searchbar__label"]}>
          <img src={searchicon} alt={"magnifying glass"} />
          <input
            onClick={handleOpenClick}
            className={styles["form-searchbar__label__input"]}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            value={searchTerm}
            placeholder={"Search"}
          />
          <input type="submit" hidden />
        </label>
      </form>

      <button onClick={handleCloseClick} className={styles["close-button"]}>
        Cancel
      </button>
    </div>
  );
}
