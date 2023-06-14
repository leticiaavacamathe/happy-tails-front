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
import {
  createModal,
  deleteModal,
  notCreateModal,
  notDeleteModal,
  notLoadAnimal,
  notLoadAnimals,
} from "../../components/Modal/feedback";

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

  const deleteAnimal = async (idAnimal: string) => {
    try {
      dispatch(showLoadingActionCreator());

      await axios.delete(`${apiUrl}${paths.animals}/${idAnimal}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          isOn: true,
          title: deleteModal.title,
          text: deleteModal.text,
        })
      );
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isOn: true,
          title: notDeleteModal.title,
          text: notDeleteModal.text,
        })
      );
    }
  };

  const addAnimal = async (animalData: Partial<AnimalDataStructure>) => {
    try {
      dispatch(showLoadingActionCreator());
      const request = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const { data } = await axios.post<{ animal: AnimalDataStructure }>(
        `${apiUrl}${paths.animals}${paths.add}`,
        animalData,
        request
      );

      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: false,
          isOn: true,
          title: createModal.title,
          text: createModal.text,
        })
      );

      return data.animal;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      dispatch(
        showFeedbackActionCreator({
          isError: true,
          isOn: true,
          title: notCreateModal.title,
          text: notCreateModal.text,
        })
      );
    }
  };

  const getAnimal = useCallback(
    async (
      idAnimal: string | undefined
    ): Promise<AnimalDataStructure | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const {
          data: { animal },
        } = await axios.get<{ animal: AnimalDataStructure }>(
          `${apiUrl}${paths.animals}/${idAnimal}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        dispatch(hideLoadingActionCreator());

        return animal;
      } catch {
        const error = "Animal not found";

        dispatch(
          showFeedbackActionCreator({
            isError: true,
            isOn: true,
            title: notLoadAnimal.title,
            text: error,
          })
        );
      }
    },
    [dispatch, token]
  );
  return { getAnimals, deleteAnimal, addAnimal, getAnimal };
};

export default useAnimals;
