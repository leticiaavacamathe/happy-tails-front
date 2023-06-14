import { screen } from "@testing-library/react";
import { animalMock, fiveAnimalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalsList from "./AnimalsList";
import userEvent from "@testing-library/user-event";

describe("Given a AnimalsList component", () => {
  describe("When it is rendered and receives an animal card", () => {
    test("Then it should show the name of that card 'max' inside a heading", () => {
      const animalsStore = {
        animal: {
          animals: fiveAnimalsMocks,
        },
      };
      const expectedText = fiveAnimalsMocks[0].name;

      renderWithProviders(wrapWithRouter(<AnimalsList />), animalsStore);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered with a list of animals and a delete button is clicked", () => {
    test("Then it should show a list of animals without the animal deleted", async () => {
      const animalsStore = {
        animal: {
          animals: animalMock,
        },
      };
      renderWithProviders(wrapWithRouter(<AnimalsList />), {
        user: {
          id: "64708476cb971c1010a20464",
          isLogged: true,
          name: "",
          token: "",
        },
        animal: animalsStore.animal,
      });

      const title = screen.getByRole("heading", { name: "Max" });

      const button = screen.getByRole("button", { name: "delete button" });

      await userEvent.click(button);

      expect(title).not.toBeInTheDocument();
    });
  });
});
