import React from "react";
import AddAnimalPageStyled from "./AddAnimalPageStyled";
import AddAnimalForm from "../../components/AddAnimalForm/AddAnimalForm";

const AddAnimalPage = (): React.ReactElement => {
  return (
    <AddAnimalPageStyled>
      <h1>Let&apos;s find a home</h1>
      <AddAnimalForm />
    </AddAnimalPageStyled>
  );
};

export default AddAnimalPage;
