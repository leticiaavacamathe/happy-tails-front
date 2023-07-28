import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Hero from "./Hero";

describe("Given a Hero component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'A dog with a sign that says adopt me'", () => {
      const expectedAltText = "A dog with a sign that says adopt me";

      renderWithProviders(wrapWithRouter(<Hero />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
