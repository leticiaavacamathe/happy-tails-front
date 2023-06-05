import { useAppSelector } from "../../store";
import AnimalCard from "../AnimalCard/AnimalCard";

const AnimalsList = (): React.ReactElement => {
  const { animals } = useAppSelector((state) => state.animal);

  return (
    <ul>
      {animals.map((animal) => (
        <li key={animal.id}>
          <AnimalCard animal={animal} />
        </li>
      ))}
    </ul>
  );
};

export default AnimalsList;
