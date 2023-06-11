import React, { useState } from "react";
import AddAnimalFormStyled from "./AnimalFormStyled";
import { AnimalInfoStructure } from "../../store/animal/types";

const AnimalForm = (): React.ReactElement => {
  const initialAnimalState: AnimalInfoStructure = {
    name: "",
    age: 0,
    city: "",
    description: "",
    image: "",
    sex: "",
    type: "",
    weight: 0,
  };

  const [newAnimal, setNewAnimal] =
    useState<AnimalInfoStructure>(initialAnimalState);

  const handleOnChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewAnimal({
      ...newAnimal,
      [event.target.id]: event.target.value,
    });
  };

  const isCompleated =
    newAnimal.name !== "" &&
    newAnimal.city !== "" &&
    newAnimal.description !== "" &&
    newAnimal.image !== "" &&
    newAnimal.weight !== 0 &&
    newAnimal.age !== 0 &&
    newAnimal.type !== "" &&
    newAnimal.sex !== "";

  return (
    <AddAnimalFormStyled autoComplete="off">
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="type">
          Type of animal
        </label>
        <select
          id="type"
          className="add-form-control__type"
          onChange={handleOnChange}
          value={newAnimal.type}
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
          value={newAnimal.name}
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
          value={newAnimal.city}
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
          value={newAnimal.age}
          className="add-form-control__input"
          id="age"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="sex">
          Sex
        </label>
        <input
          value={newAnimal.sex}
          type="text"
          className="add-form-control__input"
          id="sex"
          onChange={handleOnChange}
        />
      </div>
      <div className="add-form-control">
        <label className="add-form-control__label" htmlFor="weight">
          Weight (kg)
        </label>
        <input
          value={newAnimal.weight}
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
          value={newAnimal.image}
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
          value={newAnimal.description}
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
