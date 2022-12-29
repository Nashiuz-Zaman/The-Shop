//react stuff
import { Link } from "react-router-dom";

//custom hooks
import useCapitalizeStr from "../../../hooks/useCapitalizeStr";
import useNormalizeStr from "../../../hooks/useNormalizeStr";
import useOneLevelDropdownData from "../../../hooks/useOneLevelDropdownData";

//styles
import "./Dropdown.css";

export default function Dropdown({ mainNavOption }) {
  const { capitalizeStr } = useCapitalizeStr();
  const { normalizeStr } = useNormalizeStr();
  const { allOptions } = useOneLevelDropdownData();

  const subNavWithOptions = allOptions[`${mainNavOption}`];
  let subNavs = [];
  let subNavOptions = [];

  for (const [key, value] of Object.entries(subNavWithOptions)) {
    subNavs.push(capitalizeStr(normalizeStr(key)));
    subNavOptions.push(value);
  }

  return subNavs.map((subNav, i) => {
    return (
      <div className="subnav" key={subNav}>
        <h2 className="subnav__heading">{subNav}</h2>
        <ul className="subnav__list">
          {subNavOptions[i].map((option) => {
            return (
              <li className="subnav__list-item" key={option}>
                <Link className="subnav__list-item--link" to="#">
                  {option}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
}
