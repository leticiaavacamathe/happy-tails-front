import { screen } from "@testing-library/react";
import { animalMock, animalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalsList from "./AnimalsList";
import userEvent from "@testing-library/user-event";

describe("Given a AnimalsList component", () => {
  describe("When it is rendered and receives an animal card", () => {
    test("Then it should show the name of that card 'max' inside a heading", () => {
      const animalsStore = {
        animal: {
          animals: animalsMocks,
        },
      };
      const expectedText = animalsMocks[0].name;

      renderWithProviders(wrapWithRouter(<AnimalsList />), animalsStore);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and a delete button is clicked", () => {
    test("Then it should show a list of animals without the animal deleted", async () => {
      const animalsStore = {
        animal: {
          animals: animalMock,
        },
      };
      renderWithProviders(wrapWithRouter(<AnimalsList />), animalsStore);

      const title = screen.getByRole("heading", { name: "Max" });

      const button = screen.getByRole("button", { name: "delete button" });

      await userEvent.click(button);

      expect(title).not.toBeInTheDocument();
    });
  });
});
