function AuthForm({ title, textButton, onSubmit, children }) {
  return (
    <div className="auth-popup">
      <h2 className="auth__title">{title}</h2>
      <form className={`auth__form`} onSubmit={onSubmit}>
        <fieldset className="auth__container">{children}</fieldset>
        <button
          type="submit"
          aria-label="Отправить данные"
          className="popup__btn auth__btn"
        >
          {textButton}
        </button>
      </form>
    </div>
  );
}
export default AuthForm;
