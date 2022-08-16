import React, { useState } from "react";
import style from "./Memberlogin.module.scss";

const users = [
  {
    email: "test@gmail.com",
    password: "123456",
  },
  {
    email: "test1@gmail.com",
    password: "123456",
  },
];

// e-mail ve password değerlerinin useState kullanarak tutulması

const Memberlogin = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };
  
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  // for döngüsü ile array e-mail ve password blgilerinin kontrolü

  const handleSignIn = (e) => {
    for (let user of users) {
      if (user.email == userEmail && user.password == userPassword.toString()) {
        alert(`${userEmail} kullanıcısı giriş yaptı`);
        return true;
      }
    }
    alert(`E-posta veya Şifreniz hatalıdır.`);
    return false;
  };

  return (
    <div className={style.memberLogin__all}>
      <div className={style.memberLogin}>
        <p className>E-mail</p>
        <form>
          <input
            type="text"
            name="E-mail"
            className={style.memberLogin__input}
            placeholder="E-mail giriniz"
            value={userEmail}
            onChange={handleUserEmailChange}  // inputa işlevsellik verecek değerler
          />
        </form>
        <br />
        <br />
        <form>
          <button type="submit" formaction="https://www.google.com/">
            E-devlet ile giriş
          </button>
        </form>
      </div>
      <div className={style.memberLogin}>
        <p className>Şifre</p>
        <div>
          <form>
            <input
              type="password"
              name="password"
              className={style.memberLogin__input}
              value={userPassword}
              onChange={handleUserPassword}
            />
          </form>
          <br />
          <br />
          <button
            type="button"
            className={style.memberLogin__button}  // butona onClick atanması
            onClick={handleSignIn}
          >
            Üye Girişi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memberlogin;
