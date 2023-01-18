//react stuff
import { Link } from "react-router-dom";

//components
import BrandName from "../brandName/BrandName";

//styles
import "./Logobar.css";

//image source
import nike from "./assets/logobar/nikelogo.png";
import adidas from "./assets/logobar/adidaslogo.png";
import puma from "./assets/logobar/pumalogo.png";

export default function Logobar({ title = "" }) {
  return (
    <div className="logobar">
      <BrandName title={title} />
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
