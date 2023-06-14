import { screen } from "@testing-library/react";
import { animalMock, animalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalCard from "./AnimalCard";
import DetailPage from "../../pages/DetailPage/DetailPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Given a AnimalCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'max'", () => {
      const expectedAltText = animalsMocks[0].name;

      renderWithProviders(
        wrapWithRouter(
          <AnimalCard
            actionOnClick={() => ({})}
            animal={animalsMocks[0]}
            isLazy={
              animalsMocks.indexOf(animalsMocks[0]) < 1 ? "eager" : "lazy"
            }
          />
        )
      );

      const image = screen.getByRole("img", { name: expectedAltText });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks on image", () => {
    test("Then it should shows a page with the selected animal details", async () => {
      const routes = [
        {
          path: "/",
          element: (
            <AnimalCard animal={animalMock[0]} actionOnClick={() => ({})} />
          ),
        },
        {
          path: "/animals/:idAnimal",
          element: <DetailPage />,
        },
      ];

      const animalCardRouter = createMemoryRouter(routes);

      renderWithProviders(
        <RouterProvider router={animalCardRouter}></RouterProvider>,
        {
          animal: {
            animals: [],
            animalById: {
              age: 4,
              city: "barcelona",
              description: "he is a nice dog",
              id: "85u48548",
              image: "http://dog.jpg",
              name: "perry",
              sex: "male",
              type: "dog",
              weight: 5,
            },
          },
        }
      );

      const image = screen.getByAltText(`${animalMock[0].name}`);

      await userEvent.click(image);

      const description = screen.getByText(animalMock[0].description);

      expect(description).toBeInTheDocument();
    });
  });
});
