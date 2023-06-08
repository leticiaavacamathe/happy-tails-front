import { useEffect } from "react";
import AnimalsList from "../../components/AnimalsList/AnimalsList.js";
import useAnimals from "../../hooks/useAnimals/useAnimals.js";
import { loadAnimalsActionCreator } from "../../store/animal/animalSlice.js";
import { useAppDispatch } from "../../store/index.js";
import AnimalsListPageStyled from "./AnimalsListPageStyled.js";

const AnimalsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimals } = useAnimals();

  useEffect(() => {
    (async () => {
      const animals = await getAnimals();
      if (animals) {
        dispatch(loadAnimalsActionCreator(animals));
      }
    })();
  }, [dispatch, getAnimals]);

  return (
    <AnimalsListPageStyled>
      <h1 className="list-page-title">Adopt me</h1>
      <AnimalsList />
    </AnimalsListPageStyled>
  );
};

export default AnimalsListPage;
