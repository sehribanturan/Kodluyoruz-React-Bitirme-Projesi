import style from "./Rezervations.module.scss";
import React, { useState } from "react";

const rezervationNo = [
  {
    pnrNo: "12NR255H4351",
    lastName: "TURAN",
  },
  {
    pnrNo: "12NM255H4351",
    lastName: "KAYA",
  },
];

const Rezervations = () => {
  const [pnrNo, setPnrNo] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePnrNo = (e) => {
    setPnrNo(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleCheck = (e) => {
    for (let rezervation of rezervationNo) {
      if (rezervation.pnrNo == pnrNo && rezervation.lastName == lastName) {
        alert(
          `${pnrNo}  Rezervasyon Bilgisi: 06:38 - 10:25 / Ankara - İstanbul`
        );
        return true;
      }
    }
    alert(`${pnrNo} Rezervasyon Bilgisi Bulunamadı`);
    return false;
  };

  return (
    <div className={style.rezervations__all}>
      <form>
        <p className={style.rezervations__ticket}>Rezervasyonlarım</p>
        <br></br>
        <label>PNR NO</label>&nbsp;&nbsp;
        <input
          type="text"
          className={style.rezervations}
          value={pnrNo}
          onChange={handlePnrNo}
        ></input>
        <br></br>
        <label>SOYAD</label>&nbsp;&nbsp;
        <input
          type="text"
          className={style.rezervations}
          value={lastName}
          onChange={handleLastName}
        ></input>
        <br></br>
        <button
          type="button"
          className={style.rezervations__btn}
          onClick={handleCheck}
        >
          SORGULA
        </button>
      </form>
    </div>
  );
};

export default Rezervations;
