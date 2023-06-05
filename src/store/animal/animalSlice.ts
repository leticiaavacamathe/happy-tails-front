import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AnimalDataStructure } from "./types";

export interface AnimalState {
  animals: AnimalDataStructure[];
}

export const initialAnimalState: AnimalState = {
  animals: [],
};

const animalSlice = createSlice({
  name: "animal",
  initialState: initialAnimalState,
  reducers: {
    loadAnimals: (
      currentAnimalState: AnimalState,
      action: PayloadAction<AnimalDataStructure[]>
    ): AnimalState => ({
      ...currentAnimalState,
      animals: [...action.payload],
    }),
  },
});

export const { loadAnimals: loadAnimalsActionCreator } = animalSlice.actions;
export const animalReducer = animalSlice.reducer;
