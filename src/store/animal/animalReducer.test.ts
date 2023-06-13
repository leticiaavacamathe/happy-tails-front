import { animalSingleMock, animalsMocks } from "../../mocks/animalMocks";
import {
  AnimalState,
  addAnimalActionCreator,
  animalReducer,
  deleteAnimalActionCreator,
  loadAnimalsActionCreator,
  loadSelectedAnimalActionCreator,
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

  describe("When it receives a list of animals and a new animal and it's data", () => {
    test("Then it should return a new state of the list with the new animal that was created", () => {
      const currentAnimalsState: AnimalsStateStructure = {
        animals: [animalsMocks[0]],
      };

      const newAnimalState: AnimalsStateStructure = animalReducer(
        currentAnimalsState,
        addAnimalActionCreator(animalsMocks[1])
      );

      expect(newAnimalState).toStrictEqual({ animals: animalsMocks });
    });
  });

  describe("When it receives a list of animals as a current state, a valid id and a loadSelectedAnimal action", () => {
    test("Then it should return a new state with the selected", () => {
      const currentAnimalsState: AnimalsStateStructure = {
        animals: animalsMocks,
      };

      const expectedAnimalState = {
        ...currentAnimalsState,
        selectedAnimal: animalSingleMock,
      };

      const newAnimalsState = animalReducer(
        currentAnimalsState,
        loadSelectedAnimalActionCreator(animalSingleMock)
      );

      expect(expectedAnimalState).toStrictEqual(newAnimalsState);
    });
  });
});
