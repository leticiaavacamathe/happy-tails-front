import useLocalStorage from "../../hooks/useLocalStorage/useLocalStorage";
import useToken from "../../hooks/useToken/useToken";
import { useAppDispatch } from "../../store";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { loginUserActionCreator } from "../../store/user/userSlice";
import { UserTokenStructure } from "../../store/user/types";

const App = (): React.ReactElement => {
  const { getTokenData } = useToken();
  const { getToken } = useLocalStorage();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken("token");

    if (token) {
      const userData = getTokenData(token);
      const userDataToken = { ...userData, token };

      dispatch(loginUserActionCreator(userDataToken as UserTokenStructure));
    }
  }, [dispatch, getToken, getTokenData]);

  return <Layout />;
};

export default App;
