import { renderHook } from "@testing-library/react";
import useUser from "./useUser.js";
import { tokenMock, userCredentialsMock } from "../../mocks/userMocks.js";

describe("Given a getUserToken function", () => {
  describe("When it is called with the username 'admin' and the password 'admin'", () => {
    test("Then it should return a token", async () => {
      const expectedToken = tokenMock;
      const user = userCredentialsMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const token = await getUserToken(user);

      expect(token).toBe(expectedToken);
    });
  });
});
