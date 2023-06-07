import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import paths from "../../routers/paths";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { wrongCredentials } from "../../components/Modal/feedback";

const useUser = () => {
  const apiUrl = import.meta.env.VITE_APP_URL;

  const dispatch = useAppDispatch();

  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string | undefined> => {
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
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isOn: true,
          title: wrongCredentials.title,
          text: wrongCredentials.text,
        })
      ),
        [dispatch];
    }
  };
  return { getUserToken };
};

export default useUser;
