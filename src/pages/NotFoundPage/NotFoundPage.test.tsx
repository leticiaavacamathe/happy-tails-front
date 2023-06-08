import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the message 'Page not found' inside a heading", () => {
      const expectedText = "Page not found";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const message = screen.getByRole("heading", { name: expectedText });

      expect(message).toBeInTheDocument();
    });
  });
});
