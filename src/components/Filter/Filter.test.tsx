import { screen } from "@testing-library/react";
import Filter from "./Filter";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select with multiple options", () => {
      const expectedAriaText = "filter by category";

      renderWithProviders(wrapWithRouter(<Filter />));

      const select = screen.getByLabelText(expectedAriaText);

      expect(select).toBeInTheDocument();
    });
  });
});
