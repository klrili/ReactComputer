import styles from './login.module.scss';
import Input from '../../utils/input/Input';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';

function Login({ PersonalAreaClickOf, register }) {
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.font}>
        <div className="font">
          <div className={styles.login}>
            <div className="login">
              <div className={styles.close}>
                <img onClick={PersonalAreaClickOf} src="./img/close.svg" alt="close" />
              </div>

              <h1>Вход</h1>
              <div className="d-flex flex-column">
                <h4>Эл. почта</h4>
                <Input value={email} setValue={setMail} type="text" placeholder="write email" />
                <h4>Пароль</h4>
                <div className="d-flex">
                  <Input
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder=" write password"
                  />
                  <img src="./img/visibleOrNot.png" alt="visibleOrNot" />
                </div>
              </div>

              <h5>Напомнить пароль</h5>

              <button onClick={() => dispatch(login(email, password))}>
                <h2>Войти</h2>
              </button>

              <div onClick={register} className={styles.reg}>
                Зарегестрироваться
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
