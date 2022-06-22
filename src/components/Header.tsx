import React from "react";
import { IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react";

import Logo from "./img/HDisk_Logo.svg";
import "./Header.css";

export const HeaderExample: React.FC = () => (
  <>
    <IonToolbar color="primary">
      <IonHeader>
        <IonTitle size="large">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="hallo">Hallo Jake Perralta</h2>
        </IonTitle>
      </IonHeader>
    </IonToolbar>

    <IonContent fullscreen></IonContent>
  </>
);
