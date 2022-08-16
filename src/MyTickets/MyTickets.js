import React, { useState } from "react";
import style from "./MyTicket.module.scss";

// bilet sorgulama componenti

const ticketNo = [
  {
    pnrNo: "89NR255H4351",
    lastName: "YASEMİNCE",
  },
  {
    pnrNo: "55WE9876TY55",
    lastName: "HAYRİYE",
  },
];

// pnrNo ve lastName bilgisinin useState ile tutulması

const MyTickets = () => {
  const [pnrNo, setPnrNo] = useState("");
  const [lastName, setLastName] = useState("");

  const handlePnrNo = (e) => {
    setPnrNo(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  // for döngüsü ile array'den gelen pnrNo ve lastName değerlerinin kontrolü

  const handleCheck = (e) => {
    for (let ticket of ticketNo) {
      if (ticket.pnrNo == pnrNo && ticket.lastName == lastName) {
        alert(
          `${pnrNo}  Bilet Bilgisi: Tarih: 10 Eylül 2022 / Saat: 06:38 - 10:25 Ankara - İstanbul`
        );
        return true;
      }
    }
    alert(`${pnrNo}  Bilet Bulunamadı`);
    return false;
  };

  return (
    <div className={style.myTickets__all}>
      <form>
        <p className={style.myTickets__ticket}>Biletlerim</p>
        <br></br>
        <label>PNR NO</label>&nbsp;&nbsp;
        <input // input value ve onChange değerlerinin tanımlanması
          type="text"
          className={style.myTickets}
          value={pnrNo}
          onChange={handlePnrNo}
        ></input>
        <br></br>
        <label>SOYAD</label>&nbsp;&nbsp;
        <input
          type="text"
          className={style.myTickets}
          value={lastName}
          onChange={handleLastName}
        ></input>
        <br></br>
        <button
          type="button" // onClick ile sonucu sorgulama
          className={style.myTickets__btn}
          onClick={handleCheck}
        >
          SORGULA
        </button>
      </form>
    </div>
  );
};

export default MyTickets;
