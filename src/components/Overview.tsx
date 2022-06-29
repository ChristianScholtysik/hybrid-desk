import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonTitle,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";
import { location, alarm, home } from "ionicons/icons";
import "./main.css";

//den context importieren & konsumieren und location, datetime, meetingraum oder sitzplatz undseatid/number verfügbar machen (aus context/global state)
//aus diesen infomationen setzt ihr eine post request zusammen (infos im body, userid aus params) und schickt sie an
//createreservation endpunkt

export const Overview: React.FC = () => {
  const onSubmit = () => {
    //der endpunkt: http://localhost:5000/reservation/62bc0ab5b4436aa68e17f46b/
    // user_id sollte dynamisch sein
    // der req body muss so sein: {
    // "place_id":"62bc4ffe237eae711a978840",
    // "date": "2022-06-30"
    // }
  };
  return (
    <IonContent>
      <div className="container">
        <IonTitle className="headline">Your Booking Overview</IonTitle>
        <div className="container"></div>
        <IonGrid>
          <IonCol>
            <IonRow>
              <IonList>
                <IonItem>
                  <IonIcon slot="start" color="primary" icon={location} />

                  <IonLabel>
                    <h2>Location</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon slot="start" icon={alarm} color="primary" />

                  <IonLabel>
                    <h2>Date and Time</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon slot="start" icon={home} color="primary" />
                  <IonLabel>
                    <h2>Seat/Meetingroom</h2>
                    <h3>I'm a big deal</h3>
                    <p>Listen, I've had a pretty messed up day...</p>
                  </IonLabel>
                </IonItem>
                <IonButton type="submit">Send</IonButton>
              </IonList>
            </IonRow>
          </IonCol>
        </IonGrid>
      </div>
    </IonContent>
  );
};
