import { render, screen } from "@testing-library/react";
import App from "./App";
import { tokenMock } from "../../mocks/userMocks";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import theme from "../../styles/theme/theme";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a an image with an alternative text 'happy tails logo'", () => {
      const expectedText = "happy tails logo";

      const token = tokenMock;

      localStorage.setItem("token", token);

      const routes = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const mockRouter = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={mockRouter} />
          </ThemeProvider>
        </Provider>
      );

      const image = screen.getByAltText(expectedText);

      expect(image).toBeInTheDocument();
    });
  });
});
