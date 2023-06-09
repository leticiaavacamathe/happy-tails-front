import { animalsMocks } from "../../mocks/animalMocks";
import {
  AnimalState,
  animalReducer,
  deleteAnimalActionCreator,
  loadAnimalsActionCreator,
} from "./animalSlice";
import { AnimalDataStructure, AnimalsStateStructure } from "./types";

describe("Given a animalReducer", () => {
  describe("When it receives an empty initial state and a loadAnimals action", () => {
    test("Then it should return the new state with a list of 2 animals", () => {
      const initialAnimalsState: AnimalDataStructure[] = [];

      const currentState: AnimalState = { animals: initialAnimalsState };

      const animals = loadAnimalsActionCreator(animalsMocks);

      const expectedNewAnimalsState: AnimalState = {
        ...initialAnimalsState,
        animals: animalsMocks,
      };

      const newState: AnimalState = animalReducer(currentState, animals);

      expect(expectedNewAnimalsState).toStrictEqual(newState);
    });
  });

  describe("When it receives a list of animals as a current state, a valid id and a deleteAnimal action", () => {
    test("Then it should return a new list without the animal linked to the id", () => {
      const currentAnimalState: AnimalsStateStructure = {
        animals: animalsMocks,
      };

      const expectedNewAnimalState = {
        ...currentAnimalState,
        animals: animalsMocks.slice(0, 1),
      };

      const newAnimalState = animalReducer(
        currentAnimalState,
        deleteAnimalActionCreator({ idAnimal: "7f8ds7f8ds" })
      );

      expect(newAnimalState).toStrictEqual(expectedNewAnimalState);
    });
  });
});
