import React, { useState } from "react";
import AddAnimalFormStyled from "./AnimalFormStyled";
import {
  AnimalInfoStructure as AnimalDataStructure,
  AnimalInfoStructure,
} from "../../store/animal/types";

interface AnimalFormProps {
  submitAnimalForm: (animalData: Partial<AnimalDataStructure>) => void;
}

const AnimalForm = ({
  submitAnimalForm,
}: AnimalFormProps): React.ReactElement => {
  const initialAnimalState: AnimalInfoStructure = {
    name: "",
    age: 0,
    city: "",
    description: "",
    image: "",
    sex: "male",
    type: "dog",
    weight: 0,
  };

  const [animalData, setAnimalData] = useState(initialAnimalState);

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setAnimalData({
      ...animalData,
      [event.target.id]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAnimalForm(animalData);
  };

  const isCompleated =
    animalData.name !== "" &&
    animalData.city !== "" &&
    animalData.description !== "" &&
    animalData.image !== "" &&
    animalData.weight !== 0 &&
    animalData.age !== 0 &&
    animalData.type !== "" &&
    animalData.sex !== "";

  return (
    <AddAnimalFormStyled autoComplete="off" onSubmit={handleOnSubmit}>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Type of animal
        </label>
        <select
          id="type"
          className="add-form-control__type"
          onChange={handleOnChange}
          value={animalData.type}
        >
          <option className="add-form-control__type__option" value="dog">
            Dog
          </option>
          <option className="add-form-control__type__option" value="cat">
            Cat
          </option>
        </select>
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          value={animalData.name}
          className="add-form-control__input"
          id="name"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="city">
          City
        </label>
        <input
          value={animalData.city}
          type="text"
          className="add-form-control__input"
          id="city"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          value={animalData.age}
          className="add-form-control__input"
          id="age"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="sex">
          Sex
        </label>
        <select
          id="sex"
          className="add-form-control__type"
          onChange={handleOnChange}
          value={animalData.sex}
        >
          <option className="add-form-control__type__option" value="male">
            Male
          </option>
          <option className="add-form-control__type__option" value="female">
            Female
          </option>
        </select>
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="weight">
          Weight (kg)
        </label>
        <input
          value={animalData.weight}
          type="number"
          className="add-form-control__input"
          id="weight"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="image">
          URL image
        </label>
        <input
          value={animalData.image}
          type="url"
          className="add-form-control__input"
          id="image"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="description">
          Description
        </label>
        <textarea
          value={animalData.description}
          name="description"
          id="description"
          className="add-form-control__description"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="add-form-button">
        <button className="add-form-button__button" disabled={!isCompleated}>
          Create
        </button>
      </div>
    </AddAnimalFormStyled>
  );
};

export default AnimalForm;
