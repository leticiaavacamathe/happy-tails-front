import { useEffect } from "react";
import AnimalsList from "../../components/AnimalsList/AnimalsList.js";
import useAnimals from "../../hooks/useAnimals/useAnimals.js";
import { loadAnimalsActionCreator } from "../../store/animal/animalSlice.js";
import { useAppDispatch } from "../../store/index.js";
import AnimalsListPageStyled from "./AnimalsListPageStyled.js";
import Hero from "../../components/Hero/Hero.js";

const AnimalsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getAnimals } = useAnimals();

  useEffect(() => {
    (async () => {
      const animals = await getAnimals();
      if (animals) {
        dispatch(loadAnimalsActionCreator(animals));

        const preconnectElement = await document.createElement("link");
        preconnectElement.rel = "preload";
        preconnectElement.as = "image";
        preconnectElement.href = animals[0].image;

        const parent = document.head;
        const firstChild = document.head.firstChild;

        parent.insertBefore(preconnectElement, firstChild);
      }
    })();
  }, [dispatch, getAnimals]);

  return (
    <AnimalsListPageStyled>
      <Hero />
      <h1 className="list-page-title">Adopt me</h1>
      <AnimalsList />
    </AnimalsListPageStyled>
  );
};

export default AnimalsListPage;
