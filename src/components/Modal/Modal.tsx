import { ModalStructure } from "../../store/ui/types";
import ModalStyled from "./ModalStyled";

const Modal = ({
  isError,
  text,
  title,
}: ModalStructure): React.ReactElement => {
  return (
    <ModalStyled>
      <div className={`modal modal${isError ? "--error" : "--correct"}`}>
        <button className="modal__button">
          <img src="images/exit-icon.svg" alt="exit" />
        </button>
        <div className="modal__info">
          <h3 className="modal__info__title">{title}</h3>
          <p className="modal__info__text">{text}</p>
        </div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
