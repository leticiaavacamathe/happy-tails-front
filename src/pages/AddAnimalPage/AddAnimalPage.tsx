import React from "react";
import AddAnimalPageStyled from "./AddAnimalPageStyled";
import AnimalForm from "../../components/AnimalForm/AnimalForm";

const AddAnimalPage = (): React.ReactElement => {
  return (
    <AddAnimalPageStyled className="add-page">
      <h1 className="add-page__title">Let&apos;s find a home</h1>
      <p className="add-page__text">
        Complete the form with the animal details
      </p>
      <AnimalForm />
    </AddAnimalPageStyled>
  );
};

export default AddAnimalPage;
