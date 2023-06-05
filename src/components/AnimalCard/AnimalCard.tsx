import { AnimalDataStructure } from "../../store/animal/types";
import AnimalCardStyled from "./AnimalCardStyled";

interface AnimalCardProps {
  animal: AnimalDataStructure;
}

const AnimalCard = ({ animal }: AnimalCardProps): React.ReactElement => {
  return (
    <>
      <AnimalCardStyled>
        <div className="animal-card">
          <img
            className="animal-card__image"
            src={animal.image}
            alt={animal.name}
            width={290}
            height={204}
          />
          <article className="animal-card__info">
            <h3 className="animal-card__title">{animal.name}</h3>
            <img
              className="animal-card__icon"
              src="images/location.svg"
              alt="location icon"
              width={15}
              height={15}
            />
            <span className="animal-card__city">{animal.city}</span>
          </article>
        </div>
      </AnimalCardStyled>
    </>
  );
};

export default AnimalCard;
