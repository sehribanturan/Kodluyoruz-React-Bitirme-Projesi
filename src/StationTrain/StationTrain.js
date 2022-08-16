import style from "./StationTrain.module.scss";
import React, { useState } from "react";
import stations from "../station.json";

// istasyon - tren bilgisi sorgulama componenti

const StationTrain = () => {
  const [station, setStation] = useState("");
  const [date, setDate] = useState("");
  console.log(Object.keys(stations[0]));
  const handleStation = () => {
    date && station
      ? alert(stations[0][date][station].lastStation)
      : alert("Tarih veya istasyon bilgilerini girmediniz.");
  };

  const handleDate = (event) => {
    setDate(event.target.value);
    setStation("");
  };
  const minDate = Object.keys(stations[0]).sort((a, b) =>
    a.localeCompare(b)
  )[0];

  const maxDate = Object.keys(stations[0]).sort((a, b) =>
    b.localeCompare(a)
  )[0];

  return (
    <div className={style.stationTrain}>
      <p>Tarih</p>
      <p>
        <span>
          <input
            type="date"
            value={date}
            onChange={handleDate}
            placeholder="dd-mm-yyyy"
            min={minDate}
            max={maxDate}
          />
          <label></label>
        </span>
      </p>
      <p>İstasyon</p>
      <p>
        <select
          className={style.stationTrain__train}
          onChange={(e) => setStation(e.target.value)}
          value={station}
        >
          <option value="">Seçiniz</option>
          {date &&
            Object.keys(stations[0][date]).map((station) => (
              <option key={station} value={station}>
                {station}
              </option>
            ))}
        </select>
      </p>

      <button className={style.stationTrain__button} onClick={handleStation}>
        <span className>İstasyon-Tren Bilgileri</span>
      </button>
    </div>
  );
};

export default StationTrain;
