//image source
import searchicon from "../../assets/search.svg";
// import closeicon from "../../assets/closelisticon.svg";

//styles
import styles from "./Searchbar.module.css";

export default function Searchbar({
  searchTerm = "",
  setSearchTerm = undefined,
  brandName = "",
  expand = false,
  handleOpenClick = undefined,
  handleCloseClick = undefined,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseClick();
  };

  return (
    <div
      className={`${styles["form-container"]} ${expand && styles["expand"]}`}
    >
      {expand && <h2 className={styles["brand-name"]}>{brandName}.</h2>}
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
      {/* {expand === true && ( */}
      <button onClick={handleCloseClick} className={styles["close-button"]}>
        Cancel
      </button>
      {/* )} */}
    </div>
  );
}
