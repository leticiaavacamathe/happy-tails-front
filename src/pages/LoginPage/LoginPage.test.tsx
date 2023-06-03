import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import paths from "../../routers/paths";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text that says 'happy tails logo'", () => {
      const expectedText = "happy tails logo";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const image = screen.getByRole("img", { name: expectedText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When the user fill the inputs with wright credentials and clicks on the 'Log in' button", () => {
    test("Then it should login the user and redirect to '/home' path", async () => {
      const usernameInputText = "Username";
      const passwordInputText = "Password";
      const userUsername = "maria";
      const userPassword = "maria123";
      const buttonText = "Log in";

      const route: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        {
          path: "/home",
        },
      ];

      const router = createMemoryRouter(route);

      renderWithProviders(<RouterProvider router={router} />);

      const usernameTextField = screen.getByLabelText(usernameInputText);
      const passwordTextField = screen.getByLabelText(passwordInputText);
      const loginButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(usernameTextField, userUsername);
      await userEvent.type(passwordTextField, userPassword);
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toStrictEqual(paths.home);
    });
  });
});
