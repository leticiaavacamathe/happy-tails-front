import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../store/user/types";

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODQ3NmNiOTcxYzEwMTBhMjA0NjQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDE5OTQsImV4cCI6MTY4NjI0Njc5NH0.q811R1SxPahspMHWZ_XzV-W7lXfpMYVFOPVxpXuPWBA";

export const initialUserStateMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const UserTokenDataMock: UserTokenStructure = {
  name: "admin",
  id: "64708476cb971c1010a20464",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODQ3NmNiOTcxYzEwMTBhMjA0NjQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDE5OTQsImV4cCI6MTY4NjI0Njc5NH0.q811R1SxPahspMHWZ_XzV-W7lXfpMYVFOPVxpXuPWBA",
};

export const LoggedUserStateMock: UserStateStructure = {
  ...UserTokenDataMock,
  isLogged: true,
};

export const userCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};
