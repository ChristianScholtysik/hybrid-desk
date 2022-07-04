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
  const { bookingUrl, setBookingUrl, setLocation } = useContext(AuthContext);

  const handleClick = (e) => {
    // navigate("/");

    console.log(`${bookingUrl}?location=${e.target.id}`);
    setBookingUrl(`${bookingUrl}?location=${e.target.id}`); //? leitet query params ein, alle weiteren werden mit & verkettet
    setLocation(e.target.id);
  };

  return (
    <IonContent className="container">
      <div className="container">
        <IonTitle className="headline">Choose your Location</IonTitle>
        <div className="container"></div>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton id="Berlin" onClick={handleClick}>
                Berlin
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="Hamburg" onClick={handleClick}>
                Hamburg
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="Munich" onClick={handleClick}>
                Munich
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="arrow bounce"></div>
      </div>
    </IonContent>
  );
};
export default Location;
