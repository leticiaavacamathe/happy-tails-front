import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AnimalsListPage from "./AnimalsListPage";

describe("Given a AnimalsListPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Adopt me' title", () => {
      const expectedTitle = "Adopt me";

      renderWithProviders(<AnimalsListPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
