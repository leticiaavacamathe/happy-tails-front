import { AnimalDataStructure } from "../../store/animal/types";

interface AnimalCardProps {
  animal: AnimalDataStructure;
}

const AnimalCard = ({ animal }: AnimalCardProps): React.ReactElement => {
  return (
    <>
      <section className="animal-card">
        <img
          className="animal-card__image"
          src={animal.image}
          alt={animal.name}
          width={290}
          height={204}
        />
        <article className="animal-card__info">
          <h3 className="animal-card__title">{animal.name}</h3>
          <span className="animal-card__city"></span>
        </article>
      </section>
    </>
  );
};

export default AnimalCard;
