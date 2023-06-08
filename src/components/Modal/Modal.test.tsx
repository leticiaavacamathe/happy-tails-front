import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

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

  describe("When it is rendered with a negative feedback", () => {
    test("Then it should the message 'Incorrect username or password please try again'", () => {
      const expectedText = "Incorrect username or password please try again";

      renderWithProviders(<Modal />, {
        ui: {
          isLoading: true,
          modal: {
            isError: true,
            text: "Incorrect username or password please try again",
            isOn: true,
            title: "",
          },
        },
      });

      const feedback = screen.getByText(expectedText);

      expect(feedback).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on the close button", () => {
    test("Then it should disappear", async () => {
      const expectedAltButtonText = "exit";

      renderWithProviders(<Modal />, {
        ui: {
          isLoading: true,
          modal: {
            isError: true,
            text: "",
            isOn: true,
            title: "",
          },
        },
      });
      const button = screen.getByRole("button", {
        name: expectedAltButtonText,
      });
      await userEvent.click(button);

      expect(button).toBeInTheDocument();
    });
  });
});
