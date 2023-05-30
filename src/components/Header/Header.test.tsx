import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Describe given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'happy tails logo'", () => {
      const expectedAltText = "happy tails logo";

      renderWithProviders(wrapWithRouter(<Header />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
