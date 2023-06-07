import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import paths from "../../routers/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_APP_URL;

  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      dispatch(hideLoadingActionCreator());

      return token;
    } catch {
      const error = new Error("Wrong credentials");
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
