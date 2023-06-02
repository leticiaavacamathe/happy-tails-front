import { renderHook } from "@testing-library/react";
import useToken from "../useToken/useToken";
import { UserTokenDataMock } from "../../mocks/userMocks";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the decoded token", () => {
      const { token } = UserTokenDataMock;

      const { result } = renderHook(() => useToken());
      const { getTokenData } = result.current;

      const tokenData = getTokenData(token);

      expect(tokenData).toStrictEqual(UserTokenDataMock);
    });
  });
});
