import { renderHook } from "@testing-library/react";
import { animalsMocks } from "../../mocks/animalMocks";
import useAnimals from "./useAnimals";
import { wrapper } from "../../testUtils/testUtils";
import { AnimalDataStructure } from "../../store/animal/types";

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
});
