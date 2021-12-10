import styles from './register.module.scss';
import Input from '../../utils/input/Input';
import { registration } from '../../actions/user';
import React, { useState } from 'react';

function Registration({ PersonalAreaClickOf, register }) {
  const [email, setMail] = useState();
  const [password, setPassword] = useState();
  const [userName, setName] = useState();
  const [surName, setSurName] = useState();

  return (
    <div>
      <div className={styles.font}>
        <div className="font">
          <div className={styles.login}>
            <div className="login">
              <div className={styles.close}>
                <img onClick={PersonalAreaClickOf} src="./img/close.svg" alt="close" />
              </div>

              <h1>Регистрация</h1>
              <div className="d-flex flex-column">
                <h4>Имя</h4>
                <Input
                  value={userName}
                  setValue={setName}
                  type="text"
                  placeholder="write your name"
                />
                <h4>Фамилия</h4>
                <Input
                  value={surName}
                  setValue={setSurName}
                  type="text"
                  placeholder="write your surname"
                />

                <h4>Эл. почта</h4>
                <Input value={email} setValue={setMail} type="text" placeholder="write email" />

                <h4>Придумайте пароль</h4>
                <div className="d-flex">
                  <Input
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder=" write password"
                  />
                  <img src="./img/visibleOrNot.png" alt="visibleOrNot" />
                </div>
                <h4>Повторите пароль</h4>
                <div className="d-flex">
                  <Input
                    value={password}
                    setValue={setPassword}
                    type="password"
                    placeholder=" repeat password"
                  />
                  <img src="./img/visible.png" alt="visibleOrNot" />
                </div>
              </div>
              <button
                className="registration_btn"
                onClick={() => registration(userName, surName, email, password)}>
                <h2>Зарегестрироваться</h2>
              </button>

              <div onClick={register} className={styles.reg}>
                Уже зарегистрирован
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;
