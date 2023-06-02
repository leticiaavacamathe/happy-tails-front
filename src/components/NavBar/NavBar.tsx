import { NavLink, useNavigate } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { logoutUserActionCreator } from "../../store/user/userSlice";

const NavBar = (): React.ReactElement => {
  const { removeToken } = useLocalStorage();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutonClick = (): void => {
    removeToken("token");
    dispatch(logoutUserActionCreator);
    navigate("/login", { replace: true });
  };

  return (
    <NavBarStyled>
      <ul>
        <li>
          <NavLink to="/home" title="Home" aria-label="home">
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
          <button aria-label="logout" onClick={logoutonClick}>
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
