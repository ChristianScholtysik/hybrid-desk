import React, { useState } from "react";
import {
  IonButton,
  IonIcon,
  IonContent,
  IonTitle,
  IonPage,
} from "@ionic/react";
import { thumbsUp } from "ionicons/icons";
import "./main.css";

function SuccessMessage() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle className="headline">
          woohoo! <br />
          already booked!
          <br />
          <IonIcon color="primary" icon={thumbsUp} size="large" />
          <br />
          <IonButton className="button" href="./main">
            New Booking?
          </IonButton>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
}

export default SuccessMessage;
