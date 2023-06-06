import { renderHook } from "@testing-library/react";
import { animalsMocks } from "../../mocks/animalMocks";
import useAnimals from "./useAnimals";
import { wrapper } from "../../testUtils/testUtils";
import { AnimalDataStructure } from "../../store/animal/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

describe("Given a getAnimals function", () => {
  describe("When it is called", () => {
    test("then it should return a list of animals", async () => {
      const expectedAnimalsList: AnimalDataStructure[] = animalsMocks;

      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const animalsList = await getAnimals();

      expect(expectedAnimalsList).toStrictEqual(animalsList);
    });
  });

  describe("When it's called but can't connect to the Api Rest", () => {
    test("Then it should throw a 'Can't get the list of animals' error", () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Can't get the list of Animals";

      const {
        result: {
          current: { getAnimals },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const listOfAnimals = getAnimals();

      expect(listOfAnimals).rejects.toThrowError(expectedError);
    });
  });
});
