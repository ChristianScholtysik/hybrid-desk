import { IonDatetime, IonTitle } from "@ionic/react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import "./main.css";

// import { format, compareAsc } from "date-fns";

const DateTime = () => {
  const { setDate } = useContext(AuthContext);

  const isWeekday = (dateString) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  };
  return (
    <>
      <div>
        <IonTitle className="headline">WHEN?</IonTitle>
        <IonDatetime
          color="primary"
          // displayFormat="YYYY-MM-DD"
          presentation="date"
          // minuteValues="0,15,30,45"
          isDateEnabled={isWeekday}
          // showDefaultButtons={true}
          min="2022-01-01"
          max="2222-12-31"
          onIonChange={(e) => {
            // console.log(e.detail.value.split("T")[0]);
            setDate(e.detail.value.split("T")[0]);
          }}
        ></IonDatetime>
        <div className="arrow bounce"></div>
      </div>
    </>
  );
};
export default DateTime;
