import yesForm from "../images/yesForm.png";
import noForm from "../images/noForm.png";
function InfoTooltip({ isOpen, onClose, success }) {
  const messageOn = "Вы успешно зарегистрировались!";
  const messageNo = "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <img
          className="popup__info"
          src={success ? yesForm : noForm}
          alt={success ? yesForm : noForm}
        />
        <h2 className="popup__title_success">
          {success ? messageOn : messageNo}
        </h2>
        <button
          className="popup__close"
          onClick={onClose}
          type="reset"
          aria-label="закрыть окно"
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
