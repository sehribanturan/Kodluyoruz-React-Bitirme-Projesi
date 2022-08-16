import React, { useState } from "react";
import style from "./OpenTickets.module.scss"; // açık bilet sorgulama componenti

const OpenTicket = [
  {
    pnrNo: "98MT255K4351",
    lastName: "KAYIKDEDE",
    ticketNo: "8646433789",
  },
  {
    pnrNo: "12NM255H4351",
    lastName: "BADEM",
    ticketNo: "4561233789",
  },
];

const OpenTickets = () => {
  const [pnrNo, setPnrNo] = useState(""); // prnNo, lastName, ticketNo bilgisinin useState ile tutulması
  const [lastName, setLastName] = useState("");
  const [ticketNo, setTicketNo] = useState("");

  const handlePnrNo = (e) => {
    setPnrNo(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleTicketNo = (e) => {
    setTicketNo(e.target.value);
  };

  // for döngüsü ile array'den gelen prnNo, lastName, ticketNo değerlerinin kontrolü
  const handleCheck = (e) => {
    for (let Open of OpenTicket) {
      if (
        Open.pnrNo == pnrNo &&
        Open.lastName == lastName &&
        Open.ticketNo == ticketNo
      ) {
        alert(
          `${ticketNo} numaralı biletiniz  10.09.2022 - 10.10.2022 tarihleri arasında geçerlidir.`
        );
        return true;
      }
    }
    alert(`${ticketNo}  Bilet Bulunamadı`);
    return false;
  };

  return (
    <div className={style.openTickets__all}>
      <form>
        <p className={style.openTickets__ticket}>Açık Biletlerim</p>
        <br></br>
        <label>PNR NO</label>&nbsp;&nbsp;
        <input // input value ve onChange değerlerinin tanımlanması
          type="text"
          className={style.openTickets}
          value={pnrNo}
          onChange={handlePnrNo}
        ></input>
        <br></br>
        <label>SOYAD</label>&nbsp;&nbsp;
        <input
          type="text"
          className={style.openTickets}
          value={lastName}
          onChange={handleLastName}
        ></input>
        <br></br>
        <label>AÇIK BİLET NO</label>&nbsp;&nbsp;
        <input
          type="text"
          className={style.openTickets}
          value={ticketNo}
          onChange={handleTicketNo}
        ></input>
        <br></br>
        <button
          type="button" // onClick ile sonucu sorgulama
          className={style.openTickets__btn}
          onClick={handleCheck}
        >
          SORGULA
        </button>
      </form>
    </div>
  );
};

export default OpenTickets;
