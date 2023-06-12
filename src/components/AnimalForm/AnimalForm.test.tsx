import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import AnimalForm from "./AnimalForm";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

const submitForm = vi.fn();

const animalFormLabels = [
  "Name",
  "Age",
  "Type of animal",
  "City",
  "Sex",
  "Weight (kg)",
  "URL image",
  "Description",
];

const userInputText = "User text";

describe("Given a AnimalForm component", () => {
  animalFormLabels.forEach((expectedText) => {
    describe("When it is rendered", () => {
      test(`Then it should show a text field with the label '${expectedText}'`, () => {
        renderWithProviders(<AnimalForm submitAnimalForm={submitForm} />);

        const textField = screen.getByLabelText(expectedText);

        expect(textField).toBeInTheDocument();
      });
    });
  });

  test("Then it should show a button with the text 'Create'", () => {
    const expectedButtonText = "Create";

    renderWithProviders(<AnimalForm submitAnimalForm={submitForm} />);

    const textField = screen.getByRole("button", { name: expectedButtonText });

    expect(textField).toBeInTheDocument();
  });
});

describe("When it is rendered but the inputs fields are empty", () => {
  test("Then it should show a disabled button with the text 'Create'", () => {
    const expectedButtonText = "Create";

    renderWithProviders(<AnimalForm submitAnimalForm={submitForm} />);

    const createButton = screen.getByRole("button", {
      name: expectedButtonText,
    });

    expect(createButton).toBeDisabled();
  });
});

animalFormLabels.slice(8).forEach((expectedText) => {
  describe(`When it is rendered and the user writes the text '${userInputText}' on the field '${expectedText[0]}'`, () => {
    test(`Then it should show the text '${userInputText}' in the field`, async () => {
      renderWithProviders(<AnimalForm submitAnimalForm={submitForm} />);

      const textField = screen.getByLabelText(expectedText);

      await userEvent.type(textField, userInputText);

      expect(textField).toHaveValue(userInputText);
    });
  });

  describe("When it is rendered and all the input fields are compleated", () => {
    test("Then it should show an enabled button with the text 'Create'", async () => {
      renderWithProviders(<AnimalForm submitAnimalForm={submitForm} />);

      const nameImputField = screen.getByLabelText(animalFormLabels[0]);
      const ageImputField = screen.getByLabelText(animalFormLabels[1]);
      const typeOfAnimalImputField = screen.getByLabelText(animalFormLabels[2]);
      const cityImputField = screen.getByLabelText(animalFormLabels[3]);
      const sexImputField = screen.getByLabelText(animalFormLabels[4]);
      const weightImputField = screen.getByLabelText(animalFormLabels[5]);
      const imageImputField = screen.getByLabelText(animalFormLabels[6]);
      const descriptionImputField = screen.getByLabelText(animalFormLabels[7]);

      const nameTextField = "Penny";
      const ageTextField = 7;
      const typeOfAnimalTextField = "Dog";
      const cityTextField = "Barcelona";
      const sexTextField = "Male";
      const weightTextField = 15;
      const imageTextField = "http://pictureofpenny.webp";
      const descriptionTextField = "He likes playing outside";

      await userEvent.type(nameImputField, nameTextField);
      await userEvent.type(ageImputField, ageTextField.toString());
      await userEvent.type(typeOfAnimalImputField, typeOfAnimalTextField);
      await userEvent.type(cityImputField, cityTextField);
      await userEvent.type(sexImputField, sexTextField);
      await userEvent.type(weightImputField, weightTextField.toString());
      await userEvent.type(imageImputField, imageTextField);
      await userEvent.type(descriptionImputField, descriptionTextField);

      const createButton = screen.getByRole("button", { name: "Create" });

      await userEvent.click(createButton);

      expect(createButton).toHaveBeenCalled();
    });
  });
});
