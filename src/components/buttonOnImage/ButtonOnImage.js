import { Link } from "react-router-dom";

//styles
import "./ButtonOnImage.css";

export default function ButtonOnImage({
  buttonText = "",
  extraClass = [],
  toUrl = "#",
  rightArrow = true,
}) {
  return (
    <div
      className={`button-on-image ${
        extraClass.length > 0 ? extraClass.join(" ") : "default class"
      }`}
    >
      <Link to={toUrl} className="button-on-image__button">
        {buttonText === "" ? "Please provide text for button" : buttonText}{" "}
        {rightArrow && <>&rarr;</>}
      </Link>
    </div>
  );
}
