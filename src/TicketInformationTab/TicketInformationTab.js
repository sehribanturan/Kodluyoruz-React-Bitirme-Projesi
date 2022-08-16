import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StationTrain from "../StationTrain/StationTrain";
import Ticket from "../Ticket/Ticket";
import Memberlogin from "../Memberlogin/Memberlogin";
import ExpeditionSelection from "../ExpeditionSelection/ExpeditionSelection";

const TicketInformationTab = () => {
  const [showExpeditionSelection, setShowExpeditionSelection] = useState(false);
  const [roundTripSelections, setRoundTripSelections] = useState([
    "Seciniz",
    "Seciniz",
  ]);  // ExpeditionSelection Select seçimlerinin gösterimi için state tutma

  return showExpeditionSelection ? (
    <ExpeditionSelection roundTripSelections={roundTripSelections} />
  ) : (
    // tabs ile bilet, üye girişi, istasyon tren bilgileri componentlerinin gösterimi
    <Tabs>  
      <TabList>
        <Tab>Bilet</Tab>
        <Tab>Üye Girişi</Tab>
        <Tab>İstasyon Tren Bilgileri</Tab>
      </TabList>
      <TabPanel>
        <Ticket
          setShowExpeditionSelection={setShowExpeditionSelection}
          setRoundTripSelections={setRoundTripSelections} //ExpeditionSelection componenti, TicketInformationtab altındaki Ticket componenti içerisinde gösterimi
        />
      </TabPanel>
      <TabPanel>
        <Memberlogin />
      </TabPanel>
      <TabPanel>
        <StationTrain />
      </TabPanel>
    </Tabs>
  );
};

export default TicketInformationTab;
