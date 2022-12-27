//styles
import "./Logobar.css";

//images
import nike from "../../assets/logobar/nikelogo.png";
import adidas from "../../assets/logobar/adidaslogo.png";
import puma from "../../assets/logobar/pumalogo.png";

export default function Logobar() {
  return (
    <div className="logobar">
      <p className="websitelogo">
        The Shop<span className="largeperiod">.</span>
      </p>
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
