import { renderHook } from "@testing-library/react";
import { animalSingleMock } from "../../../mocks/animalMocks";
import useAnimals from "../useAnimals";
import { wrapper } from "../../../testUtils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { vi } from "vitest";
import { store } from "../../../store";
import { notCreateModal } from "../../../components/Modal/feedback";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a addAnimnal function", () => {
  describe("When it's called with a valid new animal data", () => {
    test("Then it should return the new Animal and it's data", async () => {
      server.resetHandlers(...handlers);

      const expectedNewAnimal = animalSingleMock;

      const {
        result: {
          current: { addAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      const newAnimal = await addAnimal(animalSingleMock);

      expect(newAnimal).toStrictEqual(expectedNewAnimal);
    });
  });

  describe("When it's called but there was a problem on adding the new animal", () => {
    test("Then it should show a feedback message with the text 'The Animal was not created'", async () => {
      server.resetHandlers(...errorHandlers);

      const animal = animalSingleMock;

      const {
        result: {
          current: { addAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await addAnimal(animal);

      const message = store.getState().ui.modal.text;

      expect(message).toBe(notCreateModal.text);
    });
  });
});
