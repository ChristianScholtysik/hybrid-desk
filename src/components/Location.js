import {
  IonButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./main.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Location = () => {
  const { bookingUrl, setBookingUrl } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log(`${bookingUrl}?location=${e.target.id}`);
    setBookingUrl(`${bookingUrl}?location=${e.target.id}`); //? leitet query params ein, alle weiteren werden mit & verkettet
  };

  return (
    <IonContent className="container">
      <div className="container">
        <IonTitle className="headline">Choose your Location</IonTitle>
        <div className="container"></div>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton id="berlin" onClick={handleClick}>
                Berlin
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="hamburg" onClick={handleClick}>
                Hamburg
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="munich" onClick={handleClick}>
                Munich
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};
export default Location;
