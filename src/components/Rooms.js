import { IonButton, IonGrid, IonCol, IonRow, IonTitle } from "@ionic/react";
import "./main.css";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Rooms = () => {
  const { bookingUrl, setRoom } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log(`${bookingUrl}&room=${e.target.id}`);
    setRoom(e.target.id); // setBookingUrl(`${bookingUrl}&room=${e.target.id}`); //? leitet query params ein, alle weiteren werden mit & verkettet

    //hier muss der get request an die Api geschickt werden (getallavaiableseatbylocation)
    //mit der response könnt ihr dann den flooprlan anzeigen
  };
  return (
    <div className="container">
      <IonTitle className="headline">What do you need?</IonTitle>
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
