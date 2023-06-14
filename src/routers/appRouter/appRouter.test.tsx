import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given an appRouter router", () => {
  describe("When it is rendered", () => {
    test("Then it should show a image with the alternative text of the 'happy tails logo'", async () => {
      const expectedAltText = "Log in";
      renderWithProviders(<RouterProvider router={appRouter} />);

      const image = await screen.findByRole("button", {
        name: expectedAltText,
      });

      expect(image).toBeInTheDocument();
    });
  });
});
