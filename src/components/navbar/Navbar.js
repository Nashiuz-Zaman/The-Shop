import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navigation-menu">
        <li className="navigation-menu__item">
          New & Featured
          <div className="navigation-decoration-underline"></div>
        </li>
        <li className="navigation-menu__item">
          <Link to="/men">Men</Link>
          <div className="navigation-decoration-underline"></div>
        </li>
        <li className="navigation-menu__item">
          <Link to="/women">Women</Link>
          <div className="navigation-decoration-underline"></div>
        </li>
        <li className="navigation-menu__item">
          <Link to="/sale">Sale</Link>
          <div className="navigation-decoration-underline"></div>
        </li>
      </ul>
    </nav>
  );
}
