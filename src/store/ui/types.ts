export interface UiStructure {
  isLoading?: boolean;
  modal: ModalStructure;
}

export interface ModalStructure {
  text: string;
  isError: boolean;
  title: string;
  isOn: boolean;
}
