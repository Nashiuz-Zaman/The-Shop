import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navigation-menu">
        <li className="navigation-menu__item">
          <Link>New & Featured</Link>
        </li>
        <li className="navigation-menu__item">
          <Link to="/men">Men</Link>
        </li>
        <li className="navigation-menu__item">
          <Link to="/women">Women</Link>
        </li>
        <li className="navigation-menu__item">
          <Link to="/sale">Sale</Link>
        </li>
      </ul>
    </nav>
  );
}
