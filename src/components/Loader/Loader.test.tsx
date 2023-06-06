import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a loading spinner", () => {
      const expectedText = "loader-spinner";

      renderWithProviders(<Loader />);

      const loaderSpinner = screen.getByLabelText(expectedText);

      expect(loaderSpinner).toBeInTheDocument();
    });
  });
});
