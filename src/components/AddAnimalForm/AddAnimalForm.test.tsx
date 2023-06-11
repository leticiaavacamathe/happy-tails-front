import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddAnimalForm from "./AddAnimalForm";

describe("Given a AddAnimalForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Create' inside", () => {
      const expectedButtonText = "Create";
      renderWithProviders(wrapWithRouter(<AddAnimalForm />));

      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(buttonText).toBeInTheDocument();
    });
  });
});
