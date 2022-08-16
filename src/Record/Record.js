import React from "react";
import style from "./Record.module.scss";
import { useState } from "react";
import Payment from "../Payment/Payment";

// satın alma bilgilerini içeren component

const Record = (props) => {
  const [isPay, setisPay] = useState(true);
  const handleClick = (event) => {
    setisPay();
  };

  return (
    <div>
      <table className={style.record__all}>
        <tr className={style.record__header}>
          <th>Ad/Soyad</th>
          <th>TC Kimlik No</th>
          <th>Tarife/Doğum Tarihi</th>
          <th>Cinsiyet</th>
          <th>Cep Telefonu</th>
          <th>E-Posta</th>
        </tr>
        <tr className={style.record}>
          <td>
            <input type="text" placeholder="Adınızı Giriniz" /> <br></br>
            <input type="text" placeholder="Soyadınızı Giriniz" />
          </td>
          <td>
            <input type="text" placeholder="TC Kimlik Numaranızı Giriniz" />
          </td>
          <td>
            <select name="schedule" id="schedule">
              <option value="">Tam</option>
              <option value="">Genç</option>
              <option value="">Öğretmen</option>
              <option value="">65+Yaş</option>
            </select>{" "}
            <br></br>
            <input type="text" placeholder=" gg/aa/yy Giriniz" />
          </td>
          <td>
            <input type="radio" id="man" name="fav_language" value="man" />
            <label>Erkek</label>
            <input type="radio" id="woman" name="fav_language" value="woman" />
            <label>Kadın</label>{" "}
          </td>
          <td>
            <input type="text" placeholder="0(123) --- -- --" />
          </td>
          <td>
            <input type="text" placeholder="123@example.com" />
          </td>
        </tr>
      </table>
      <div className={style.record__button}>
        <button className={style.record__btn} onClick={handleClick}>
          Devam
        </button>
      </div>
      <div>{!isPay && <Payment />}</div>
    </div>
  );
};

export default Record;
