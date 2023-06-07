import { UiStructure } from "./types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading minireducer", () => {
  describe("When it receives an ui state and a showLoading action", () => {
    test("Then it should toogle the isLoading property to true", () => {
      const currentUiState: UiStructure = {
        isLoading: false,
        modal: { isError: true, text: "", isOn: true, title: "" },
      };

      const expectedUiState: UiStructure = {
        isLoading: true,
        modal: { isError: true, text: "", isOn: true, title: "" },
      };

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});

describe("Given a hideLoading minireducer", () => {
  describe("When it receives an ui state and a hideLoading action", () => {
    test("Then it should toggle the isLoading property to false", () => {
      const currentUiState: UiStructure = {
        isLoading: true,
        modal: { isError: true, text: "", isOn: true, title: "" },
      };

      const expectedUiState: UiStructure = {
        isLoading: false,
        modal: { isError: true, text: "", isOn: true, title: "" },
      };

      const newState = uiReducer(currentUiState, hideLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
