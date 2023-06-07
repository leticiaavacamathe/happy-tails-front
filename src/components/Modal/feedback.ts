import { ModalProps } from "./Modal";

export const createModal: ModalProps = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been added",
};

export const modifyModal: ModalProps = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been updated",
};

export const deleteModal: ModalProps = {
  isError: false,
  title: "Congratulations",
  text: "The animal has been deleted",
};

export const notCreateModal: ModalProps = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been added please try again",
};

export const notModifyModal: ModalProps = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been updated please try again",
};

export const notDeleteModal: ModalProps = {
  isError: true,
  title: "Something went wrong",
  text: "The animal hasn't been deleted please try again",
};

export const wrongCredentials: ModalProps = {
  isError: true,
  title: "Something went wrong",
  text: "Incorrect username or password please try again",
};
