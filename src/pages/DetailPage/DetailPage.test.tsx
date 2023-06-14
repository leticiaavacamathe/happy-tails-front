import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import DetailPage from "./DetailPage";

describe("Given a DetailPage page", () => {
  describe("When it is rendered with a valid id animal", () => {
    test("Then it should show a location icon next to the location title of the animal", () => {
      const expectedAltText = "location-icon";

      renderWithProviders(<DetailPage />, {
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
      });

      const title = screen.getByRole("img", { name: expectedAltText });

      expect(title).toBeInTheDocument();
    });
  });
});
