import { IonDatetime, IonItem, IonLabel } from "@ionic/react";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import "./main.css";
import { format, compareAsc } from "date-fns";

const DateTime = () => {
  const { bookingUrl, setBookingUrl, setDate } = useContext(AuthContext);
  format(new Date(2022, 01, 01), "YYYY-MM-DD");

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
    <IonDatetime
      color="primary"
      displayFormat="YYYY-MM-DD"
      presentation="date"
      // minuteValues="0,15,30,45"
      isDateEnabled={isWeekday}
      showDefaultButtons={true}
      min="2022-01-01"
      max="2222-12-31"
      onIonChange={(e) => {
        console.log(`${bookingUrl}&date=${e.detail.value}`);
        setDate(e.target.id);
        setBookingUrl(`${bookingUrl}&date=${e.detail.value}`);
      }}
    ></IonDatetime>
  );
};
export default DateTime;
