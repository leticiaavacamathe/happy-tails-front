import { RouterProvider } from "react-router-dom";
import appRouter from "./appRouter";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyle/GlobalStyle";

describe("Given an appRouter router", () => {
  describe("When it is rendered", () => {
    test("Then it should show a image with the alternative text of the 'happy tails logo'", () => {
      const expectedAltText = "Log in";
      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={appRouter} />
            <GlobalStyle />
          </ThemeProvider>
        </Provider>
      );

      const image = screen.getByRole("button", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
