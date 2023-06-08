import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";
import AnimalsListStyled from "./AnimalsListStyled";

const AnimalsList = (): React.ReactElement => {
  const { animals } = useAppSelector((state) => state.animal);

  return (
    <AnimalsListStyled>
      {animals.map((animal, index) => (
        <li key={animal.id}>
          <AnimalCard isLazy={index < 1 ? "eager" : "lazy"} animal={animal} />
        </li>
      ))}
    </AnimalsListStyled>
  );
};

export default AnimalsList;
