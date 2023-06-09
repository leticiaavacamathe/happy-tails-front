import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  AnimalDataStructure,
  AnimalsStateStructure,
} from "../../store/animal/types";
import axios from "axios";
import paths from "../../routers/paths";
import {
  hideLoadingActionCreator,
  showFeedbackActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";
import { notLoadAnimals } from "../../components/Modal/feedback";

const apiUrl = import.meta.env.VITE_APP_URL;

const useAnimals = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getAnimals = useCallback(async (): Promise<
    AnimalDataStructure[] | undefined
  > => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { animals },
      } = await axios.get<AnimalsStateStructure>(`${apiUrl}${paths.animals}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoadingActionCreator());
      return animals;
    } catch (error) {
      dispatch(hideLoadingActionCreator());
      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isOn: true,
          title: notLoadAnimals.title,
          text: notLoadAnimals.text,
        })
      );
      throw new Error("Can't get the list of animals");
    }
  }, [dispatch, token]);
  return { getAnimals };
};

export default useAnimals;
