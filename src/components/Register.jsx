import { useState } from "react";
import { Link } from "react-router-dom";
import AuthForm from "./AuthForm";

function Register({ handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function inputPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister({ email, password });
  }
  return (
    <main className="main popup_goin">
      <AuthForm
        title="регистрация"
        onSubmit={handleSubmit}
        textButton="зарегистрироваться"
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          minLength="2"
          maxLength="40"
          value={email || ""}
          onChange={inputEmail}
          className="popup__item popup__item_goin"
        />

        <input
          type="password"
          name="password"
          placeholder="пароль"
          required
          minLength="2"
          maxLength="200"
          value={password || ""}
          onChange={inputPassword}
          className="popup__item popup__item_goin"
        />
      </AuthForm>
      <Link to="/sign-in" className="form__link">
        Уже зарегистрированы? Войти
      </Link>
    </main>
  );
}

export default Register;
