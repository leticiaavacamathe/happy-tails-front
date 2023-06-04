import NavBar from "./NavBar";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import userEvent from "@testing-library/user-event";
import paths from "../../routers/paths";
import { LoggedUserStateMock } from "../../mocks/userMocks";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 navigation links and 1 button", () => {
      renderWithProviders(wrapWithRouter(<NavBar />));

      const home = "home";
      const add = "add";
      const logout = "logout";

      const homeLink = screen.getByRole("link", { name: home });
      const addLink = screen.getByRole("link", { name: add });
      const logoutButton = screen.getByRole("button", { name: logout });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect the user to the loginPage", async () => {
      const routes: RouteObject[] = [
        {
          path: "/",
          element: <NavBar />,
          children: [{ path: "/login", element: <LoginPage /> }],
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        user: LoggedUserStateMock,
      });

      const button = screen.getByRole("button", { name: "logout" });

      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.login);
    });
  });
});
