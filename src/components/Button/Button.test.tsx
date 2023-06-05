import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should an icon with an alternative text 'delete button'", () => {
      const expectedAltText = "delete button";

      renderWithProviders(
        wrapWithRouter(<Button accesibility={expectedAltText} />)
      );

      const button = screen.getByRole("button", { name: expectedAltText });

      expect(button).toBeInTheDocument();
    });
  });
});
