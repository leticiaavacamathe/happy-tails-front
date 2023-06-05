import { screen } from "@testing-library/react";
import { animalsMocks } from "../../mocks/animalMocks";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import AnimalCard from "./AnimalCard";

describe("Given a AnimalCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with an alternative text 'max'", () => {
      const expectAltText = animalsMocks[0].name;

      renderWithProviders(
        wrapWithRouter(<AnimalCard animal={animalsMocks[0]} />)
      );

      const image = screen.getByRole("img", { name: expectAltText });

      expect(image).toBeInTheDocument();
    });
  });
});
