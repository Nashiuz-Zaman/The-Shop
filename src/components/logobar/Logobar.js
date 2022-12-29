//react stuff
import { Link } from "react-router-dom";

//styles
import "./Logobar.css";

//images
import nike from "./assets/logobar/nikelogo.png";
import adidas from "./assets/logobar/adidaslogo.png";
import puma from "./assets/logobar/pumalogo.png";

export default function Logobar() {
  return (
    <div className="logobar">
      <Link to="/" className="websitelogo">
        The Shop<span className="largeperiod">.</span>
      </Link>
      <ul className="sportslogos">
        <li>
          <img src={adidas} alt="adidas logo" />
        </li>
        <li>
          <img src={nike} alt="nike logo" />
        </li>
        <li>
          <img src={puma} alt="puma logo" />
        </li>
      </ul>
    </div>
  );
}
