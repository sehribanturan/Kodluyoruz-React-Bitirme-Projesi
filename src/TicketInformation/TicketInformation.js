import style from "./TicketInformation.module.scss"; // tabs gösterimi olan menülere verilen linkleri kapsayan component
import { Link, Outlet } from "react-router-dom";

const TicketInformation = () => {
  return (
    <div className={style.ticketInformation}>
      <nav>
        <ul>
          <label>
            <Link to="Bilet" className={style.ticketInformation}>
              Bilet
            </Link>
          </label>
          <label>
            {" "}
            <Link to="Memberlogin" className={style.ticketInformation}>
              Üye Girişi
            </Link>
          </label>
          <label>
            {" "}
            <Link to="IstTren" className={style.ticketInformation}>
              İstasyon Tren Bilgileri
            </Link>
          </label>
        </ul>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default TicketInformation;
