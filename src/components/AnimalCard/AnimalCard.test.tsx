import { screen } from "@testing-library/react";
import { animalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalCard from "./AnimalCard";

describe("Given a AnimalCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'max'", () => {
      const expectedAltText = animalsMocks[0].name;

      renderWithProviders(
        wrapWithRouter(
          <AnimalCard
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
});
