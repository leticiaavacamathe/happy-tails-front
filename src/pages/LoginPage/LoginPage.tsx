import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppDispatch } from "../../store";
import { UserCredentials } from "../../store/user/types";
import { loginUserActionCreator } from "../../store/user/userSlice";
import useUser from "../../hooks/useUser/useUser";
import useToken from "../../hooks/useToken/useToken";
import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import paths from "../../routers/paths";

const LoginPage = (): React.ReactElement => {
  const { setToken } = useLocalStorage();
  const { getTokenData } = useToken();
  const { getUserToken } = useUser();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginFormSubmit = async (userCredentials: UserCredentials) => {
    const token = await getUserToken(userCredentials);

    if (token) {
      const userLoginData = await getTokenData(token);
      dispatch(loginUserActionCreator(userLoginData));
      setToken("token", token);
      navigate(paths.home);
    }
  };

  return (
    <>
      <img
        className="logo-big"
        src="images/happy-tails-icon-letters.png"
        alt="happy tails logo"
        width={150}
        height={180}
      />
      <LoginForm handleOnSubmit={loginFormSubmit} />
    </>
  );
};

export default LoginPage;
