import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AddAnimalPage from "./AddAnimalPage";

describe("Given a AddAnimalPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Lets find a home' inside a heading", () => {
      const expectedTitle = "Let's find a home";

      renderWithProviders(<AddAnimalPage />);

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
