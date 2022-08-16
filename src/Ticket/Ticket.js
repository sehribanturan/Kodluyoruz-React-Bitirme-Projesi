import React, { useState } from "react";
import style from "./Ticket.module.scss";

const Ticket = (props) => {
  console.log(props);

  const [departure, setDeparture] = useState("Seciniz"); // select option değerlerini tanımlama ve useState ile tutma
  const [rotation, setRotation] = useState("Seciniz"); // select option değerlerini tanımlama ve useState ile tutma
  const [oneWay, setOneWay] = useState(""); // one way seçiminde tarih kısmının gizlenmesi

  const directionHandler = (e) => {
    setOneWay((prev) => "displate");
  };
  const roundTripHandler = (e) => {
    setOneWay((prev) => "");
  };

  return (
    <div className={style.ticket__all}>
      <br></br>
      <table id="" className={style.ticket}>
        <tbody>
          <tr>
            <td>
              <input type="radio" name="fav_language" value="HTML" />
              <label>Satış</label>
            </td>
            <td>
              <input type="radio" name="fav_language" value="HTML" /> 
              <label>Rezervasyon</label>
            </td>
            <td className={style.ticket__fav}>
              <input
                type="radio"
                name="fav"
                value="oneway"
                id="oneway"
                onChange={directionHandler}
              />
               <label>Tek Yön</label>
            </td>
            <td>
              <input
                type="radio"
                name="fav"
                value="HTML"
                onChange={roundTripHandler}
              />
               <label>Gidiş Dönüş</label>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={style.ticket__subTicket}>
        <p>Nereden</p>
        <p>
          <select
            className={style.ticket__train}
            onChange={(e) => setDeparture(e.target.value)}
            value={departure} // tanımlanan select onChange gidiş değerini verme
          >
            <option value="Seciniz">Seçiniz</option>
            <option value="İstanbul">İstanbul(Bakırköy)</option>
            <option value="İstanbul">İstanbul(Bostancı)</option>
            <option value="İstanbul">İstanbul(Halkalı)</option>
            <option value="İstanbul">İstanbul(Pendik)</option>
            <option value="İstanbul">İstanbul(SöğütlüÇeşme)</option>
            <option value="Ankara">Ankara Gar</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Konya">Konya</option>
            <option value="Karaman">Karaman</option>
          </select>
        </p>
        <p>Gidiş Tarihi</p>
        <input type="date" />
        <label></label>
      </div>
      <div className={style.ticket__subTicket}>
        <p>Nereye</p>
        <p>
          <select
            className={style.ticket__train}
            onChange={(e) => setRotation(e.target.value)} // tanımlanan select onChange dönüş değeri verme
            value={rotation}
          >
            <option value="Seciniz">Seçiniz</option>
            <option value="İstanbul">İstanbul(Bakırköy)</option>
            <option value="İstanbul">İstanbul(Bostancı)</option>
            <option value="İstanbul">İstanbul(Halkalı)</option>
            <option value="İstanbul">İstanbul(Pendik)</option>
            <option value="İstanbul">İstanbul(SöğütlüÇeşme)</option>
            <option value="Ankara">Ankara Gar</option>
            <option value="Eskişehir">Eskişehir</option>
            <option value="Konya">Konya</option>
            <option value="Karaman">Karaman</option>
          </select>
        </p>
        <p> Dönüş Tarihi</p>
        <input type="date" disabled={`${oneWay}`} />
        <label></label>
      </div>
      <div className={style.ticket__passenger}>
        <p>Yolcu Sayısı</p>
        <p>
          <span>
            <label></label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max="9"
            />
          </span>
        </p>
        <p>
          <button // propslar aracılığı ile select round trip değerlerinin ExpeditionSelection componentine gönderilmesi
            className={style.ticket__button}
            onClick={() => {
              props.setShowExpeditionSelection(true);
              props.setRoundTripSelections([departure, rotation]);
            }}
          >
            Ara
          </button>
        </p>
      </div>
    </div>
  );
};

export default Ticket;
