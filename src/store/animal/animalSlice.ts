import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AnimalDataStructure,
  AnimalIdStructure,
  AnimalsApiResponse,
} from "./types";

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

    deleteAnimal: (
      currentAnimalState: AnimalsApiResponse,
      action: PayloadAction<AnimalIdStructure>
    ): AnimalsApiResponse => ({
      ...currentAnimalState,
      animals: currentAnimalState.animals.filter(
        (animal) => animal.id !== action.payload.idAnimal
      ),
    }),
  },
});

export const {
  loadAnimals: loadAnimalsActionCreator,
  deleteAnimal: deleteAnimalActionCreator,
} = animalSlice.actions;
export const animalReducer = animalSlice.reducer;
