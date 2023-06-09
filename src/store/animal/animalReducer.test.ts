import { animalsMocks } from "../../mocks/animalMocks";
import {
  AnimalState,
  animalReducer,
  loadAnimalsActionCreator,
} from "./animalSlice";
import { AnimalDataStructure } from "./types";

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
});
