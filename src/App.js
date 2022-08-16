import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import MyTickets from "./MyTickets/MyTickets";
import Rezervations from "./Rezervations/Rezervations";
import OpenTickets from "./OpenTickets/OpenTickets";
import Contact from "./Contact/Contact";
import TicketInformationTab from "./TicketInformationTab/TicketInformationTab";

const App = () => {
  //Navbar menülerinin BrowserRouter içinde gösterimi.
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navbar />}>
            <Route path="" element={<TicketInformationTab />} />
            <Route path="MyTickets" element={<MyTickets />} />
            <Route path="Rezervations" element={<Rezervations />} />
            <Route path="OpenTickets" element={<OpenTickets />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
