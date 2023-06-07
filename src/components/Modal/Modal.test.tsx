import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a exit button", () => {
      const expectedAltText = "exit";

      renderWithProviders(<Modal />);

      const button = screen.getByRole("button", { name: expectedAltText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show a feedback modal", () => {
      const text = "feedback modal";

      renderWithProviders(<Modal />);

      const modal = screen.getByLabelText(text);

      expect(modal).toBeInTheDocument();
    });
  });
});
