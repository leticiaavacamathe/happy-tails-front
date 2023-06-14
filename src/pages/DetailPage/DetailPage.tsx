import { useEffect } from "react";
import useAnimals from "../../hooks/useAnimals/useAnimals";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSelectedAnimalActionCreator } from "../../store/animal/animalSlice";
import { useParams } from "react-router-dom";
import DetailPageStyled from "./DetailPageStyled";

const DetailPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const animal = useAppSelector((state) => state.animal.animalById);

  const animalParams = useParams<{ idAnimal: string }>();

  const { idAnimal } = animalParams;

  const { getAnimal } = useAnimals();

  useEffect(() => {
    (async () => {
      const animalById = await getAnimal(idAnimal);

      if (animalById) {
        dispatch(loadSelectedAnimalActionCreator(animalById));
      }
    })();
  }, [dispatch, getAnimal, idAnimal]);

  return (
    <>
      <DetailPageStyled>
        <img
          src={animal?.image}
          alt={animal?.name}
          width={290}
          height={204}
          className="detail__img"
        />
        <section className="detail__info">
          <h2 className="detail__info__name">{animal?.name}</h2>
          <span className="detail__info__city">
            <img
              aria-label="location-icon"
              className="detail__info__city__icon"
              src="/images/location.svg"
              alt="location icon"
              width={15}
              height={15}
            />
            {animal?.city}
          </span>
          <div className="detail__info__container">
            <div className="detail__info__container__card">
              <h3>Sex</h3>
              <span>{animal?.sex}</span>
            </div>
            <div className="detail__info__container__card">
              <h3>Age</h3>
              <span>{animal?.age}</span>
            </div>
            <div className="detail__info__container__card">
              <h3>KG</h3>
              <span>{animal?.weight}</span>
            </div>
          </div>
          <p className="detail__info__container__text">{animal?.description}</p>
        </section>
      </DetailPageStyled>
    </>
  );
};
export default DetailPage;
