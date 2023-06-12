import { render, screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AddAnimalPage from "./AddAnimalPage";
import AnimalsListPage from "../AnimalsListPage/AnimalsListPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import theme from "../../styles/theme/theme";

describe("Given a AddAnimalPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Lets find a home' inside a heading", () => {
      const expectedTitle = "Let's find a home";

      renderWithProviders(wrapWithRouter(<AddAnimalPage />));

      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the handleOnClick function is invoked", () => {
    test("Then it should redirect the user to the home page and show the title 'Adopt me'", async () => {
      const expectedTitle = "Adopt me";

      const routes: RouteObject[] = [
        { path: "/", element: <AddAnimalPage /> },
        { path: "/home", element: <AnimalsListPage /> },
      ];

      const router = createMemoryRouter(routes);

      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </Provider>
      );

      const nameLabel = "Name";
      const typeLabel = "Type of animal";
      const imageLabel = "URL image";
      const sexLabel = "Sex";
      const descriptionLabel = "Description";
      const weightLabel = "Weight (kg)";
      const cityLabel = "City";
      const ageLabel = "Age";

      const nameTextField = "Penny";
      const ageTextField = 7;
      const typeOfAnimalTextField = "Dog";
      const cityTextField = "Barcelona";
      const sexTextField = "Male";
      const weightTextField = 15;
      const imageTextField = "http://pictureofpenny.webp";
      const descriptionTextField = "He likes playing outside";

      await userEvent.type(screen.getByLabelText(nameLabel), nameTextField);
      await userEvent.type(
        screen.getByLabelText(typeLabel),
        typeOfAnimalTextField
      );
      await userEvent.type(screen.getByLabelText(imageLabel), imageTextField);
      await userEvent.type(screen.getByLabelText(sexLabel), sexTextField);
      await userEvent.type(
        screen.getByLabelText(descriptionLabel),
        descriptionTextField
      );
      await userEvent.type(
        screen.getByLabelText(weightLabel),
        weightTextField.toString()
      );
      await userEvent.type(screen.getByLabelText(cityLabel), cityTextField);
      await userEvent.type(
        screen.getByLabelText(ageLabel),
        ageTextField.toString()
      );
      const addButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(addButton);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(router.state.location.pathname).toBe("/home");
      expect(title).toBeInTheDocument();
    });
  });
});
