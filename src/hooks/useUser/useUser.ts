import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import paths from "../../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const getUserToken = async (
    userCredentials: UserCredentials
  ): Promise<string> => {
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(
        `${apiUrl}${paths.user}${paths.login}`,
        userCredentials
      );

      return token;
    } catch {
      const error = new Error("Wrong credentials");
      throw error;
    }
  };
  return { getUserToken };
};

export default useUser;
