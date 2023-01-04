import { Link } from "react-router-dom";

//styles
import "./ButtonOnImage.css";

export default function ButtonOnImage({
  buttonText = "",
  extraClassName = {},
}) {
  return (
    <div
      className={`button-on-image ${
        extraClassName.position ?? "no-special-position"
      }`}
    >
      <Link to={`#`} className="button-on-image__button">
        {buttonText} &rarr;
      </Link>
    </div>
  );
}
