import React from 'react';
import '../styles/login.css';
import {login} from '../api/auth'

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(e){
    e.preventDefault();
    onLogin(email, password);
  }

  function onLogin(name, password) {
    dispatchEvent(new CustomEvent("jwt-change", {
        detail: api.login(name, password)
    }) );
  }

  return (
    <div className="auth-form">
      <form className="auth-form__form" onSubmit={handleSubmit}>
        <div className="auth-form__wrapper">
          <h3 className="auth-form__title">Вход</h3>
          <label className="auth-form__input">
            <input type="text" name="name" id="email"
              className="auth-form__textfield" placeholder="Email"
              onChange={e => setEmail(e.target.value)} required  />
          </label>
          <label className="auth-form__input">
            <input type="password" name="password" id="password"
              className="auth-form__textfield" placeholder="Пароль"
              onChange={e => setPassword(e.target.value)} required  />
          </label>
        </div>
        <button className="auth-form__button" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;
