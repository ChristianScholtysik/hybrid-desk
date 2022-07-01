import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonAvatar,
  IonIcon,
} from "@ionic/react";
import { book, person } from "ionicons/icons";

import Logo from "./img/HDisk_Logo.svg";
import "./main.css";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Header: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
      <IonToolbar color="primary">
        <IonHeader>
          <IonTitle>
            <img src={Logo} alt="Logo" className="logo" />

            <h2 className="hallo">
              Hallo, {isAuthenticated.name}
              {/* Hallo {user.first_name}
              {user.last_name} */}
            </h2>
          </IonTitle>
        </IonHeader>
      </IonToolbar>

      <IonContent fullscreen>
        {/* <IonItem lines="none">
          <IonIcon slot="start" icon={moon} /> */}
        {/* <IonLabel>Dark Mode</IonLabel> */}
        {/* <IonToggle
            slot="start"
            name="darkMode"
            onIonChange={toggleDarkModeHandler}
          />
        </IonItem> */}
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
            <IonFabButton>
              <IonIcon icon={person} className="button-icon" />
            </IonFabButton>
            <div className="profile_button"></div>
            <IonFabButton>
              <IonIcon icon={book} className="button-icon" />
            </IonFabButton>
            <div className="history_button"></div>
          </IonFabList>
        </IonFab>
      </IonContent>
    </>
  );
};

export default Header;
