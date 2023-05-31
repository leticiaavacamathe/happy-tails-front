import {
  LoggedUserStateMock,
  UserTokenDataMock,
  initialUserStateMock,
} from "../../mocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an initial empty user state and a loginUser action with a user and it's data", () => {
    test("Then it should return a new state with the user logged", () => {
      const currentUserState = initialUserStateMock;

      const expectedNewUserState = LoggedUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(UserTokenDataMock)
      );
      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });
});