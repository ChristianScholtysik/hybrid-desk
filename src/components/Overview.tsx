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

export const Overview: React.FC = () => (
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
