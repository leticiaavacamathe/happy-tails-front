import { ModalStructure } from "../../store/ui/types";

export const createModal: ModalStructure = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been added",
  isOn: false,
};

export const modifyModal: ModalStructure = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been updated",
  isOn: false,
};

export const deleteModal: ModalStructure = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been deleted",
  isOn: false,
};

export const notCreateModal: ModalStructure = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been added please try again",
  isOn: false,
};

export const notModifyModal: ModalStructure = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been updated please try again",
  isOn: false,
};

export const notDeleteModal: ModalStructure = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been deleted please try again",
  isOn: false,
};

export const wrongCredentials: ModalStructure = {
  isError: true,
  title: "Something went wrong",
  text: "Incorrect username or password please try again",
  isOn: false,
};
