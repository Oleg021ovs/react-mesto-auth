import { useState } from "react";
import AuthForm from "./AuthForm";
function Login({ handleLogin }) {
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
    handleLogin({ email, password });
  }

  return (
    <main className="main popup_goin">
      <AuthForm title="вход" onSubmit={handleSubmit} textButton="войти">
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email || ""}
          onChange={inputEmail}
          className="popup__item popup__item_goin"
          minLength="2"
          maxLength="40"
        />

        <input
          type="password"
          name="password"
          placeholder="пароль"
          required
          value={password || ""}
          onChange={inputPassword}
          className="popup__item popup__item_goin"
          minLength="2"
          maxLength="200"
        />
      </AuthForm>
    </main>
  );
}

export default Login;
