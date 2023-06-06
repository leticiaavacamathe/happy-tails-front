import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { UserTokenDataMock } from "../../mocks/userMocks";

describe("Given a getTokenData function", () => {
  describe("When it receives a token", () => {
    test("Then it should return the decoded token", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwODQ3NmNiOTcxYzEwMTBhMjA0NjQiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODU2NDE5OTQsImV4cCI6MTY4NjI0Njc5NH0.q811R1SxPahspMHWZ_XzV-W7lXfpMYVFOPVxpXuPWBA";
      const { result } = renderHook(() => useToken());
      const { getTokenData } = result.current;

      const tokenData = getTokenData(token);

      expect(tokenData).toStrictEqual(UserTokenDataMock);
    });
  });
});
