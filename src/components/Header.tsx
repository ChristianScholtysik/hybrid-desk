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

import { person } from "ionicons/icons";

import Logo from "./img/HDisk_Logo.svg";
import "./main.css";
import "./Header.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const Header: React.FC = () => {
  const { userInfos } = useContext(AuthContext);

  return (
    <>
      <IonToolbar color="primary">
        <IonHeader>
          <IonTitle>
            <img src={Logo} alt="Logo" className="logo" />

            {userInfos && (
              <h2 className="hallo">Hallo {userInfos.first_name} </h2>
            )}
          </IonTitle>
        </IonHeader>
      </IonToolbar>

      <IonContent fullscreen>
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
                alt="2bild"
              />
            </IonAvatar>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton href="/me">
              <IonIcon icon={person} className="button-icon" />
            </IonFabButton>
            <div className="profile_button"></div>
          </IonFabList>
        </IonFab>
      </IonContent>
    </>
  );
};

export default Header;
