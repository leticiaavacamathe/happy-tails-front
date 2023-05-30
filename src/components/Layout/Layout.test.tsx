import renderWithProviders from "../../testUtils/testUtils";
import { screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with an image that has an alternative text 'happy tails logo'", () => {
      const expectedAltText = "happy tails logo";

      renderWithProviders(<Layout />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
