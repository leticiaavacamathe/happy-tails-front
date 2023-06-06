import {
  LoggedUserStateMock,
  UserTokenMock,
  initialUserStateMock,
  mockExpectedNewState,
} from "../../mocks/userMocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an initial empty user state and a loginUser action with a user and it's data", () => {
    test("Then it should return a new state with the user logged", () => {
      const currentUserState = initialUserStateMock;

      const expectedNewUserState = LoggedUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(UserTokenMock)
      );
      expect(newUserState).toStrictEqual(expectedNewUserState);
    });
  });

  describe("When it receives a user data and a logoutUser reducer", () => {
    test("Then it should return a new state with an unlogged empty user state", () => {
      const newUserState = userReducer(
        mockExpectedNewState,
        logoutUserActionCreator()
      );

      expect(newUserState).toStrictEqual(initialUserStateMock);
    });
  });
});
