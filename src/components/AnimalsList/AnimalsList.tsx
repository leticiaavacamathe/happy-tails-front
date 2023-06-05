import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";

const AnimalsList = (): React.ReactElement => {
  const { animals } = useAppSelector((state) => state.animal);

  return (
    <AnimalsListStyled>
      {animals.map((animal) => (
        <li key={animal.id}>
          <AnimalCard animal={animal} />
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
