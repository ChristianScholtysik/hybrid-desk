import { IonDatetime, IonItem, IonLabel } from "@ionic/react";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import "./main.css";

const DateTime = () => {
  const { bookingUrl, setBookingUrl, setDate } = useContext(AuthContext);
  // setDate(e.target.id);
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
      presentation="date"
      // minuteValues="0,15,30,45"
      isDateEnabled={isWeekday}
      showDefaultButtons={true}
      min="2022-01-01T00:00:00"
      max="2222-12-31T23:59:59"
      onIonChange={(e) => {
        console.log(`${bookingUrl}&datetime=${e.detail.value}`);
        // setBookingUrl(`${bookingUrl}&datetime=${e.detail.value}`);
      }}
    ></IonDatetime>
  );
};
export default DateTime;
