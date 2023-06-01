import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in'", () => {
      const expectedText = "Log in";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const buttonText = screen.getByRole("button", { name: expectedText });

      expect(buttonText).toBeInTheDocument();
    });
  });
});
