import { IonDatetime, IonTitle } from "@ionic/react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./main.css";

const DateTime = () => {
  const { setDate } = useContext(AuthContext);

  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <>
      <div>
        <IonTitle className="headline">WHEN?</IonTitle>
        <IonDatetime
          color="primary"
          presentation="date"
          isDateEnabled={isWeekday}
          min="2022-01-01"
          max="2222-12-31"
          onIonChange={(e) => {
            setDate(e.detail.value.split("T")[0]);
          }}
        ></IonDatetime>
        <div className="arrow bounce"></div>
      </div>
    </>
  );
};
export default DateTime;
