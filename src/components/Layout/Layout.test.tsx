import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with an image that has an alternative text 'happy tails logo'", () => {
      const expectedAltText = "happy tails logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });

  describe("When it is rendered but it takes time to redirect to the following page", () => {
    test("Then it should a loading spinner", () => {
      const expectedLabelText = "loader-spinner";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: {
          isLoading: true,
          modal: { isError: true, text: "", isOn: true, title: "" },
        },
      });

      const loadingSpinner = screen.getByLabelText(expectedLabelText);

      expect(loadingSpinner).toBeInTheDocument();
    });
  });
});
