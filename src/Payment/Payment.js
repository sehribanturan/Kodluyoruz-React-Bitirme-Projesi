import React from "react"; 
import style from "./Payment.module.scss";

// ödeme bilgisini içeren component

const Payment = () => {

  const successPayment = (e) => {
    window.alert("Ödemeniz tamamlanmıştır");
  }

  return (
    <div className={style.payment__top}>
      <table className={style.payment__all}>
        <tr className={style.payment__header}>
          <th>Kart Sahibi</th>
          <th>Kart Numarası</th>
          <th>Güvenlik Kodu</th>
          <th>Son Kullanma Tarihi</th>
        </tr>
        <tr className={style.payment}>
          <td>
            <input type="text" placeholder="Ad/Soyad Giriniz" />
          </td>
          <td>
            <input type="text" placeholder="Kart Numarası Giriniz" />
          </td>

          <td>
            <input type="text" placeholder="Güvenlik Kodunu Giriniz " />
          </td>
          <td>
            <select name="month" id="month">
              <option value="">Seçiniz</option>
              <option value="">01</option>
              <option value="">02</option>
              <option value="">03</option>
              <option value="">04</option>
              <option value="">05</option>
              <option value="">06</option>
              <option value="">07</option>
              <option value="">08</option>
              <option value="">09</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>{" "}
            <select name="year" id="year">
              <option value="">Seçiniz</option>
              <option value="">2022</option>
              <option value="">2023</option>
              <option value="">2024</option>
              <option value="">2025</option>
              <option value="">2026</option>
              <option value="">2027</option>
              <option value="">2028</option>
            </select>{" "}
          </td>
        </tr>
      </table>
      <div className={style.payment__button}>
        <button className={style.payment__btn} onClick={successPayment}> Ödeme Yapınız</button>
      </div>
    </div>
  );
};

export default Payment;
