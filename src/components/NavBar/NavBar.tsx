import { NavLink } from "react-router-dom";

const NavBar = (): React.ReactElement => {
  return (
    <div>
      <NavLink to="/" title="Home icon" aria-label="Home icon">
        <img
          src="images/home-icon.svg"
          alt="Home icon"
          width={48}
          height={48}
        />
      </NavLink>
      <NavLink to="/add" title="Add icon" aria-label="Add icon">
        <img src="images/add-icon.svg" alt="Add icon" width={48} height={48} />
      </NavLink>
      <NavLink to="/login" title="logout icon" aria-label="logout icon">
        <img
          src="images/logout-icon.svg"
          alt="logout icon"
          width={48}
          height={48}
        />
      </NavLink>
    </div>
  );
};

export default NavBar;
