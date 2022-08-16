import style from "./ExpeditionSelection.module.scss";
import { useState } from "react";
import Record from "../Record/Record";
import data from "./data.json";

const ExpeditionSelection = (props) => {
  const [isContinue, setisContinue] = useState(true);
  
  const handleClick = (event) => {
    setisContinue();
  };

  // datayı gidiş - dönüş seçimine göre filtreleme

  let filteredData = data.filter(
    (item) =>
      item.exit === props.roundTripSelections[0] &&
      item.arrival === props.roundTripSelections[1]
    
  );

  // seç butonunun map işleminden etkilenmemesi için uygulanan koşul

  let n = filteredData.length; 

  const [chooseButtonStateArr, setChooseButtonStateArr] = useState(
    new Array(n).fill(false)
  );

  return (
    <div>
      <table className={style.expeditionSelection__all}>
        <tr className={style.expeditionSelection__header}>
          <th>Çıkış</th>
          <th>Varış</th>
          <th>Saat</th>
          <th>Ücret</th>
          <th>Seç</th>
        </tr>
        {filteredData.map(
          (
            item,
            index  // filteredData'nın map işlemi ile sayfada gösterimi
          ) => (
            <tr key={index} className={style.expeditionSelection}>
              <td>{item.exit}</td>
              <td>{item.arrival}</td>
              <td>{item.hour}</td>
              <td>{item.pay}</td>
              <td>
                <button  // seç butonunun aktive işlemi
                  type="submit"
                  onClick={() => {
                    setChooseButtonStateArr([
                      ...new Array(index).fill(false),
                      !chooseButtonStateArr[index],
                      ...new Array(chooseButtonStateArr.length - index + 1).fill(
                        false
                      ),
                    ]);
                  }}
                >
                  {chooseButtonStateArr[index] ? "Seçili" : "Seç"}
                </button>
              </td>
            </tr>
          )
        )}
      </table>
      <div className={style.expeditionSelection__button}>
        <div>
          <button
            className={style.expeditionSelection__btn}
            onClick={handleClick}
          >
            Devam
          </button>
        </div>
      </div>
      {!isContinue && <Record />}
    </div>
  );
};

export default ExpeditionSelection;
