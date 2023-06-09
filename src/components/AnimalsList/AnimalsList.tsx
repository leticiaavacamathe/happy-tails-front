import { useAppDispatch, useAppSelector } from "../../store";
import { deleteAnimalActionCreator } from "../../store/animal/animalSlice";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";

const AnimalsList = (): React.ReactElement => {
  const { animals } = useAppSelector((state) => state.animal);
  const dispatch = useAppDispatch();

  const deleteOnClick = (idAnimal: string) => {
    dispatch(deleteAnimalActionCreator({ idAnimal }));
  };

  return (
    <AnimalsListStyled>
      {animals.map((animal, index) => (
        <li key={animal.id}>
          <AnimalCard
            isLazy={index < 1 ? "eager" : "lazy"}
            animal={animal}
            actionOnClick={deleteOnClick}
          />
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
