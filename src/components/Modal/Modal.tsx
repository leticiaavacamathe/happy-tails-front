export interface ModalProps {
  text: string;
  isError: boolean;
  title: string;
}

const Modal = ({ isError, text, title }: ModalProps): React.ReactElement => {
  return (
    <article>
      <div className={`modal ${isError ? "-error" : ""}`}>
        <button className="modal__button">
          <img src="images/exit-icon.svg" alt="exit" />
        </button>
        <h3>{title}</h3>
        <span>{text}</span>
      </div>
    </article>
  );
};

export default Modal;
