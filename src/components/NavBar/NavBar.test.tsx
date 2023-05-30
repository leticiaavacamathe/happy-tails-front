import NavBar from "./NavBar";
import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";

describe("Given a NavBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 2 navigation links and 1 button", () => {
      renderWithProviders(wrapWithRouter(<NavBar />));

      const homeLink = screen.getByRole("link", { name: "home" });
      const addLink = screen.getByRole("link", { name: "add" });
      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(homeLink).toBeInTheDocument();
      expect(addLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
