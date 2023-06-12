import { renderHook } from "@testing-library/react";
import { wrapper } from "../../../testUtils/testUtils";
import { animalMock } from "../../../mocks/animalMocks";
import useAnimals from "../useAnimals";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import { store } from "../../../store";
import {
  deleteModal,
  notDeleteModal,
} from "../../../components/Modal/feedback";

describe("Given a deleteAnimal function", () => {
  describe("When it is called with a valid animal id", () => {
    test("Then it should show a Modal with a feedback message that says 'The animal has been deleted'", async () => {
      server.resetHandlers(...handlers);

      const idAnimal = animalMock[0].id;

      const {
        result: {
          current: { deleteAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await deleteAnimal(idAnimal as string);

      const message = store.getState().ui.modal.text;

      expect(message).toBe(deleteModal.text);
    });
  });

  describe("When it is called with an invalid animal id", () => {
    test("Then it should show a Modal with a feedback message that says 'The animal hasn't been deleted please try again'", async () => {
      server.resetHandlers(...errorHandlers);

      const idAnimal = animalMock[0].id;

      const {
        result: {
          current: { deleteAnimal },
        },
      } = renderHook(() => useAnimals(), { wrapper: wrapper });

      await deleteAnimal(idAnimal as string);

      const message = store.getState().ui.modal.text;

      expect(message).toBe(notDeleteModal.text);
    });
  });
});
