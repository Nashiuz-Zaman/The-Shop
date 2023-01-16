//react
import { useState } from "react";

//image source
import searchicon from "../../assets/search.svg";
import closeicon from "../../assets/closelisticon.svg";

//styles
import styles from "./Searchbar.module.css";

export default function Searchbar({
  expand = false,
  handleOpenClick = undefined,
  handleCloseClick = undefined,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm("");
    handleCloseClick();
  };

  return (
    <div
      className={`${styles["form-container"]} ${expand && styles["expand"]}`}
    >
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
        {expand === true && (
          <button onClick={handleCloseClick}>
            <img src={closeicon} alt={"close searchbar"} />
          </button>
        )}
      </form>
    </div>
  );
}
