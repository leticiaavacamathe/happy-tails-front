import { UserStateStructure, UserTokenStructure } from "../store/user/types";

export const tokenMock = "1q2w3e3t2t2s1ds1f2rtr";

export const initialUserStateMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const UserTokenDataMock: UserTokenStructure = {
  name: "maria",
  id: "1",
  token: "7g7ds8sdf7f8sd7f8ds0",
};

export const LoggedUserStateMock: UserStateStructure = {
  ...UserTokenDataMock,
  isLogged: true,
};
