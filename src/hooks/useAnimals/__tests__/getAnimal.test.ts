import { renderHook } from "@testing-library/react";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../testUtils/testUtils";
import { animalSingleMock } from "../../../mocks/animalMocks";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { store } from "../../../store";

const id = "64875e9253c6552afd33b442";

describe("Given a getAnimal function", () => {
  describe("When it is called with a valid animal id", () => {
    test("Then it should return the animal that corresponds to that id", async () => {
      server.resetHandlers(...handlers);

      const expectedResponse = animalSingleMock;

      const { result } = renderHook(() => useAnimals(), {
        wrapper: wrapper,
      });
      const { getAnimal } = result.current;

      const response = await getAnimal(id);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When it is called with a invalid animal id", () => {
    test("Then it should return a status code 404 and the error message 'Can't get the animal'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = "Animal not found";

      const {
        result: {
          current: { getAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await getAnimal(id);

      const message = store.getState().ui.modal.text;

      expect(message).toBe(expectedError);
    });
  });
});
