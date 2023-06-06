import { UiStructure } from "./types";
import { showLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives an ui state and a showLoading action", () => {
    test("Then it should toogle the isLoading property to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
      };

      const expectedState: UiStructure = {
        isLoading: true,
      };

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
