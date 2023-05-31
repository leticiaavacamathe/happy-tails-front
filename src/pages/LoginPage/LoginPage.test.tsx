import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says 'happy tails logo'", () => {
      const expectedText = "happy tails logo";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const image = screen.getByRole("img", { name: expectedText });

      expect(image).toBeInTheDocument();
    });
  });
});
