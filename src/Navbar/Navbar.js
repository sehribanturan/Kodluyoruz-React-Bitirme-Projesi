import style from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

// navbar menülerine link vererek App.js'de router ile gösterme

const Navbar = () => {
  return (
    <div className={style.navbar__all}>
      <div className={style.navbar}>
        <ul>
          <Link to="./" className={style.navbar}>
            Ana Sayfa
          </Link>{" "}
          <Link to="MyTickets" className={style.navbar}>
            Biletlerim
          </Link>{" "}
          <Link to="Rezervations" className={style.navbar}>
            Rezervasyonlarım
          </Link>{" "}
          <Link to="OpenTickets" className={style.navbar}>
            Açık Biletlerim
          </Link>{" "}
          <Link to="Contact" className={style.navbar}>
            İletişim
          </Link>
        </ul>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
