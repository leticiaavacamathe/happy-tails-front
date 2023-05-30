import { NavLink } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul>
        <li>
          <NavLink to="/" title="Home" aria-label="home">
            <img
              src="images/home-icon.svg"
              alt="home icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" title="Add" aria-label="add">
            <img
              src="images/add-icon.svg"
              alt="add icon"
              width={48}
              height={48}
            />
          </NavLink>
        </li>
        <li>
          <button aria-label="logout">
            <img
              src="images/logout-icon.svg"
              alt="logout icon"
              width={48}
              height={48}
            />
          </button>
        </li>
      </ul>
    </NavBarStyled>
  );
};

export default NavBar;
