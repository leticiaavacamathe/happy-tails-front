import { AnimalDataStructure } from "../../store/animal/types";
import Button from "../Button/Button";
import AnimalCardStyled from "./AnimalCardStyled";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";

interface AnimalCardProps {
  animal: AnimalDataStructure;
  actionOnClick: (idAnimal: string) => void;
  isLazy?: "eager" | "lazy";
}

const AnimalCard = ({
  animal,
  actionOnClick,
  isLazy,
}: AnimalCardProps): React.ReactElement => {
  const { id: userId } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const goToAnimal = () => {
    navigate(`/animals/${animal.id}`);
  };

  const isAnimalOwner = userId === animal.user;
  return (
    <>
      <AnimalCardStyled>
        <div className="animal-card">
          <button onClick={goToAnimal} className="animal-card__button">
            <img
              className="animal-card__image"
              loading={isLazy}
              src={animal.image}
              alt={animal.name}
              width={290}
              height={204}
            />
          </button>
          <div className="animal-card__info">
            <h2 className="animal-card__title">{animal.name}</h2>
            <img
              className="animal-card__icon"
              src="images/location.svg"
              alt="location icon"
              width={15}
              height={15}
            />
            <span className="animal-card__city">{animal.city}</span>
            {isAnimalOwner && (
              <div>
                <Button
                  className="animal-card__button"
                  accesibility="delete button"
                  onClick={() => actionOnClick(animal.id)}
                >
                  <img
                    className="animal-card__buton__delete"
                    src="images/trash.svg"
                    alt="delete icon"
                    width={23}
                    height={28}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>
      </AnimalCardStyled>
    </>
  );
};

export default AnimalCard;
