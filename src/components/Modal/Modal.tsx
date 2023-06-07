interface ModalProps {
  text: string;
  isError: boolean;
}

const Modal = ({ isError, text }: ModalProps): React.ReactElement => {
  return (
    <article>
      <div className={`modal ${isError ? "-error" : ""}`}>
        <button className="modal__button">
          <img src="images/exit-icon.svg" alt="exit" />
        </button>
        <span>{text}</span>
      </div>
    </article>
  );
};

export default Modal;
