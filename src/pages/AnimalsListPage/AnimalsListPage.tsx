import { animalsMocks } from "../../mocks/animalMocks.js";
import { loadAnimalsActionCreator } from "../../store/animal/animalSlice.js";
import { useAppDispatch } from "../../store/index.js";
import AnimalsListPageStyled from "./AnimalsListPageStyled.js";

const AnimalsListPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  dispatch(loadAnimalsActionCreator(animalsMocks));

  return (
    <AnimalsListPageStyled>
      <h1 className="list-page-title">Adopt me</h1>
    </AnimalsListPageStyled>
  );
};

export default AnimalsListPage;
