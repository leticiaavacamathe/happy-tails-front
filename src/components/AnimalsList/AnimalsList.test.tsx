import { screen } from "@testing-library/react";
import { animalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalsList from "./AnimalsList";

describe("Given a AnimalsList component", () => {
  describe("When it is rendered and receives an animal card", () => {
    test("Then it should show the name of that card 'max' inside a heading", () => {
      const expectedText = animalsMocks[0].name;

      const animalsStore = {
        animal: {
          animals: animalsMocks,
        },
      };

      renderWithProviders(wrapWithRouter(<AnimalsList />), animalsStore);

      const title = screen.getByRole("heading", { name: expectedText });

      expect(title).toBeInTheDocument();
    });
  });
});
