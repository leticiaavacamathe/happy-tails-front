import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AnimalDataStructure,
  AnimalIdStructure,
  AnimalsStateStructure,
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
      currentAnimalState: AnimalsStateStructure,
      action: PayloadAction<AnimalIdStructure>
    ): AnimalsStateStructure => ({
      ...currentAnimalState,
      animals: currentAnimalState.animals.filter(
        (animal) => animal.id !== action.payload.idAnimal
      ),
    }),

    addAnimal: (
      currentAnimalState: AnimalsStateStructure,
      action: PayloadAction<AnimalDataStructure>
    ): AnimalsStateStructure => ({
      ...currentAnimalState,
      animals: [...currentAnimalState.animals, action.payload],
    }),
  },
});

export const {
  loadAnimals: loadAnimalsActionCreator,
  deleteAnimal: deleteAnimalActionCreator,
  addAnimal: addAnimalActionCreator,
} = animalSlice.actions;
export const animalReducer = animalSlice.reducer;
