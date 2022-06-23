import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonLabel,
  IonToggle,
  IonFabButton,
  IonFabList,
  IonAvatar,
  IonIcon,
  IonItem,
} from "@ionic/react";
import { book, person, moon } from "ionicons/icons";

import Logo from "./img/HDisk_Logo.svg";
import "./Header.css";
import { userInfo } from "os";
import DarkMode from "../components/DarkMode";

export const Header: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  return (
    <>
      <IonToolbar color="primary">
        <IonHeader>
          <IonTitle size="large">
            <img src={Logo} alt="Logo" className="logo" />
            <h2 className="hallo">
              Hallo, ich funktioniere nicht weil Ivana das Backend nicht fertig
              gemacht hat
              {/* Hallo {user.first_name}
              {user.last_name} */}
            </h2>
          </IonTitle>
        </IonHeader>
      </IonToolbar>

      <IonContent fullscreen>
        <IonItem lines="none">
          <IonIcon slot="start" icon={moon} />
          {/* <IonLabel>Dark Mode</IonLabel> */}
          <IonToggle
            slot="start"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </IonItem>
        <IonFab
          color="secondary"
          vertical="top"
          horizontal="end"
          slot="fixed"
          edge
        >
          <IonFabButton color="secondary">
            <IonAvatar class="Avatar">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
                alt="bild"
              />
            </IonAvatar>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton className="IonFabButton">
              <IonIcon icon={person} className="button-icon" />
            </IonFabButton>
            <div className="profile_button">Profile</div>

            <IonFabButton>
              <IonIcon icon={book} className="button-icon" />
            </IonFabButton>
            <div className="history_button">History</div>
          </IonFabList>
        </IonFab>
      </IonContent>
    </>
  );
};

export default Header;
