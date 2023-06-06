import { useCallback } from "react";
import { useAppSelector } from "../../store";
import {
  AnimalDataStructure,
  AnimalsApiResponse,
} from "../../store/animal/types";
import axios from "axios";
import paths from "../../routers/paths";

const apiUrl = import.meta.env.VITE_APP_URL;

const useAnimals = () => {
  const { token } = useAppSelector((state) => state.user);

  const getAnimals = useCallback(async (): Promise<AnimalDataStructure[]> => {
    const {
      data: { animals },
    } = await axios.get<AnimalsApiResponse>(`${apiUrl}${paths.animals}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return animals;
  }, [token]);
  return { getAnimals };
};

export default useAnimals;
