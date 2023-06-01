import { vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";

const actionOnClick = vi.fn();
const expectedUsernameLabelText = "Username";
const expectedPasswordLabelText = "Password";
const expectedButtonText = "Log in";
const usernameInput = "maria";
const passwordInput = "maria";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Log in' inside", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });
      expect(buttonText).toBeInTheDocument();
    });

    test("Then it should two inputs with the labels 'Username' and 'Password'", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const usernameLabelText = screen.getByLabelText(
        expectedUsernameLabelText
      );
      const passwordLabelText = screen.getByLabelText(
        expectedPasswordLabelText
      );

      expect(usernameLabelText).toBeInTheDocument();
      expect(passwordLabelText).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the 'Username' and 'Password' labels are empty", () => {
    test("Then the button should be disabled", () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeDisabled();
    });
  });

  describe("When it is rendered and the inputs fields are compleated", () => {
    test("Then it should show an enabled button", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const usernameLabel = screen.getByLabelText(expectedUsernameLabelText);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabelText);

      await userEvent.type(usernameLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const buttonText = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(buttonText).toBeEnabled();
    });
  });

  describe("When it is rendered and the username field is compleated with the text 'maria'", () => {
    test("The it should show the text 'maria' in the username field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const usernameLabel = screen.getByLabelText(expectedUsernameLabelText);

      await userEvent.type(usernameLabel, usernameInput);

      expect(usernameLabel).toHaveValue(usernameInput);
    });
  });

  describe("When it is rendered and the password field is compleated with the text 'maria'", () => {
    test("The it should show the text 'maria' in the password field", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );

      const passwordLabel = screen.getByLabelText(expectedUsernameLabelText);

      await userEvent.type(passwordLabel, passwordInput);

      expect(passwordLabel).toHaveValue(usernameInput);
    });
  });

  describe("When it is rendered, the user credentials are correct and the login button is clicked", () => {
    test("Then it should call the actionOnClick fuction", async () => {
      renderWithProviders(
        wrapWithRouter(<LoginForm handleOnSubmit={actionOnClick} />)
      );
      const usernameLabel = screen.getByLabelText(expectedUsernameLabelText);
      const passwordLabel = screen.getByLabelText(expectedPasswordLabelText);

      await userEvent.type(usernameLabel, usernameInput);
      await userEvent.type(passwordLabel, passwordInput);

      const button = screen.getByRole("button", { name: expectedButtonText });
      await userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
