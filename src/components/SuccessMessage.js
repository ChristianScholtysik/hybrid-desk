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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonTitle className="headline">
          WooHOOP! <br />
          it's done!
          <br />
          <IonIcon color="primary" icon={thumbsUp} size="large" />
          <br />
          <IonButton className="button" href="./main">
            <IonIcon slot="bottom" />
            New Booking?
          </IonButton>
        </IonTitle>
      </IonContent>
    </IonPage>
  );
}

export default SuccessMessage;

// <IonButton expand="block" onClick={() => setIsOpen(true)}>
//           Open
//         </IonButton>
//         <IonModal isOpen={isOpen}>
//           <IonHeader>
//             <IonToolbar>
//               <IonTitle>Modal</IonTitle>
//               <IonButtons slot="end">
//                 <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
//               </IonButtons>
//             </IonToolbar>
//           </IonHeader>
//           <IonContent className="ion-padding">
//             <p>{SelectedSeat.seat}</p> */}
//         {/* </IonContent> */}
//         {/* </IonModal>
