import { renderHook } from "@testing-library/react";
import useUser from "./useUser.js";
import { tokenMock, userCredentialsMock } from "../../mocks/userMocks.js";
import { server } from "../../mocks/server.js";
import { UserCredentials } from "../../store/user/types.js";
import { errorHandlers } from "../../mocks/handlers.js";

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

  describe("When it is called with invalid credentials", () => {
    test("Then it should return a response method status with a 401", async () => {
      server.resetHandlers(...errorHandlers);

      const invalidUser: UserCredentials = {
        username: "maria",
        password: "maria123",
      };

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const getToken = async () => {
        await getUserToken(invalidUser);
      };

      expect(getToken).rejects.toThrowError();
    });
  });
});
