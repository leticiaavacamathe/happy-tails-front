import jwt_decode from "jwt-decode";
import { useCallback } from "react";
import { UserTokenStructure } from "../../store/user/types";

const useToken = () => {
  const getTokenData = useCallback(
    (token: string): Partial<UserTokenStructure> => {
      const decodedToken: { sub: string; name: string } = jwt_decode(token);
      const tokenInfo = {
        id: decodedToken.sub,
        name: decodedToken.name,
      };

      return tokenInfo;
    },
    []
  );

  return { getTokenData };
};

export default useToken;
