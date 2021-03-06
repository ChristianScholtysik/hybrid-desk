import { IonButton, IonGrid, IonCol, IonRow, IonTitle } from "@ionic/react";
import "./main.css";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Rooms = () => {
  const { bookingUrl, setRoom, setBookingUrl } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log(`${bookingUrl}&room=${e.target.id}`);
    setRoom(e.target.id);
    setBookingUrl(`${bookingUrl}&room=${e.target.id}`);
  };
  return (
    <div className="container">
      <IonTitle className="headline">What?</IonTitle>
      <div className="container"></div>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton id="workplace" onClick={handleClick}>
              Workplace
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton id="meetingroom" onClick={handleClick}>
              Meetingroom
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
      <div className="arrow bounce"></div>
    </div>
  );
};
export default Rooms;
