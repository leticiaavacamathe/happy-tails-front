import { AnimalDataStructure } from "../../store/animal/types";
import Button from "../Button/Button";
import AnimalCardStyled from "./AnimalCardStyled";

interface AnimalCardProps {
  animal: AnimalDataStructure;
  isLazy?: "eager" | "lazy";
}

const AnimalCard = ({
  animal,
  isLazy,
}: AnimalCardProps): React.ReactElement => {
  return (
    <>
      <AnimalCardStyled>
        <div className="animal-card">
          <img
            className="animal-card__image"
            loading={isLazy}
            src={animal.image}
            alt={animal.name}
            width={290}
            height={204}
          />
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
            <Button
              className="animal-card__button"
              accesibility="delete button"
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
        </div>
      </AnimalCardStyled>
    </>
  );
};

export default AnimalCard;
