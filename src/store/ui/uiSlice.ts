import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalStructure, UiStructure } from "./types";

const initialUiState: UiStructure = {
  isLoading: false,
  modal: {
    isError: false,
    text: "",
    title: "",
    isOn: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiStructure): UiStructure => ({
      ...currentState,
      isLoading: false,
    }),
    showFeedback: (
      currentState: UiStructure,
      action: PayloadAction<ModalStructure>
    ) => ({
      ...currentState,
      modal: {
        isError: action.payload.isError,
        text: action.payload.text,
        title: action.payload.title,
        isOn: action.payload.isOn,
      },
    }),
    hideFeedback: (currentState: UiStructure) => ({
      ...currentState,
      modal: { isOn: false, isError: false, title: "", text: "" },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showFeedback: showFeedbackActionCreator,
  hideFeedback: hideFeedbackActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
