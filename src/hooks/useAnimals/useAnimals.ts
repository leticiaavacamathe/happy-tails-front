import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  AnimalDataStructure,
  AnimalsApiResponse,
} from "../../store/animal/types";
import axios from "axios";
import paths from "../../routers/paths";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/ui/uiSlice";

const apiUrl = import.meta.env.VITE_APP_URL;

const useAnimals = () => {
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const getAnimals = useCallback(async (): Promise<AnimalDataStructure[]> => {
    try {
      dispatch(showLoadingActionCreator());
      const {
        data: { animals },
      } = await axios.get<AnimalsApiResponse>(`${apiUrl}${paths.animals}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(hideLoadingActionCreator());
      return animals;
    } catch {
      throw new Error("Can't get the list of Animals");
    }
  }, [dispatch, token]);
  return { getAnimals };
};

export default useAnimals;
