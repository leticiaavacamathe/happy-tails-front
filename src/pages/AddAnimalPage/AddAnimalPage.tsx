import React from "react";
import AddAnimalPageStyled from "./AddAnimalPageStyled";
import AnimalForm from "../../components/AnimalForm/AnimalForm";
import { useAppDispatch } from "../../store";
import useAnimals from "../../hooks/useAnimals/useAnimals";
import { useNavigate } from "react-router-dom";
import { AnimalDataStructure } from "../../store/animal/types";
import { addAnimalActionCreator } from "../../store/animal/animalSlice";
import paths from "../../routers/paths";

const AddAnimalPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addAnimal } = useAnimals();
  const navigate = useNavigate();

  const submitAnimalForm = async (animalData: Partial<AnimalDataStructure>) => {
    const newAnimal = await addAnimal(animalData);

    if (newAnimal) {
      dispatch(addAnimalActionCreator(newAnimal));
      navigate(paths.home);
    }
  };

  return (
    <AddAnimalPageStyled className="add-page">
      <h1 className="add-page__title">Let&apos;s find a home</h1>
      <p className="add-page__text">
        Complete the form with the animal details
      </p>
      <AnimalForm submitAnimalForm={submitAnimalForm} />
    </AddAnimalPageStyled>
  );
};

export default AddAnimalPage;
