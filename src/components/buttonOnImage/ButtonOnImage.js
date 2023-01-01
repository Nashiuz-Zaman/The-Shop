import { Link } from "react-router-dom";

//styles
import "./ButtonOnImage.css";

export default function ButtonOnImage({ text }) {
  return (
    <div className="button-on-image">
      <Link to={`#`} className="button-on-image__button">
        {text} &rarr;
      </Link>
    </div>
  );
}
