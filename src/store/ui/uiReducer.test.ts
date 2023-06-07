import { UiStructure } from "./types";
import {
  hideFeedbackActionCreator,
  hideLoadingActionCreator,
  showFeedbackActionCreator,
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

describe("Given a showFeedback minireducer", () => {
  describe("When it receives an isError property set to true as payload", () => {
    test("Then it should return a new state with that property set to true", () => {
      const currentUiState: UiStructure = {
        modal: { title: "", isError: false, isOn: true, text: "" },
      };

      const newCurrentUiState: UiStructure = {
        modal: { title: "", isError: true, text: "", isOn: true },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        showFeedbackActionCreator({
          isError: true,
          text: "",
          title: "",
          isOn: true,
        })
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});

describe("Given a hideFeedback minireducer", () => {
  describe("When it has a state with the property isOn set to true", () => {
    test("Then it should return the new state with the property set to false", () => {
      const currentUiState: UiStructure = {
        modal: { isError: false, text: "", title: "", isOn: true },
      };

      const newCurrentUiState: UiStructure = {
        modal: { isError: false, text: "", title: "", isOn: false },
      };

      const expectedNewState = uiReducer(
        currentUiState,
        hideFeedbackActionCreator()
      );

      expect(newCurrentUiState).toStrictEqual(expectedNewState);
    });
  });
});
