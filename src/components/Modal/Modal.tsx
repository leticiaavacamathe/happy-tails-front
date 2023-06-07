import { useAppDispatch, useAppSelector } from "../../store";
import { hideFeedbackActionCreator } from "../../store/ui/uiSlice";
import ModalStyled from "./ModalStyled";

const Modal = (): React.ReactElement => {
  const { isError, text, title } = useAppSelector((state) => state.ui.modal);

  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideFeedbackActionCreator());
  };

  return (
    <ModalStyled aria-label="feedback modal">
      <div className={`modal modal${isError ? "--error" : "--correct"}`}>
        <button
          className="modal__button"
          aria-label="exit"
          onClick={handleOnClose}
        >
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
