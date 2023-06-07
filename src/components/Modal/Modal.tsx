import { useAppSelector } from "../../store";
import ModalStyled from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { modal } = useAppSelector((state) => state.ui);
  return (
    <ModalStyled>
      <div className={`modal modal${modal.isError ? "--error" : "--correct"}`}>
        <button className="modal__button" aria-label="exit">
          <img src="images/exit-icon.svg" alt="exit" />
        </button>
        <div className="modal__info">
          <h3 className="modal__info__title">{modal.title}</h3>
          <p className="modal__info__text">{modal.text}</p>
        </div>
      </div>
    </ModalStyled>
  );
};

export default Modal;
