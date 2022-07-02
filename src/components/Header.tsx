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
  IonRouterOutlet,
} from "@ionic/react";
import { Route } from "react-router-dom";
import { book, person } from "ionicons/icons";
import axios from "axios";

import Logo from "./img/HDisk_Logo.svg";
import "./main.css";
import "./Header.css";
import PostLogin from "../pages/PostLogin";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

export const Header: React.FC = () => {
  const { isAuthenticated, userInfos, setUserInfo } = useContext(AuthContext);

  const user = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/:id`, {
        // headers: { token: token },
      });
      setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <IonToolbar color="primary">
        <IonHeader>
          <IonTitle>
            <img src={Logo} alt="Logo" className="logo" />

            <h2 className="hallo">Hallo, {userInfos.first_name}</h2>
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
            <IonRouterOutlet>
              <Route exact path="/PostLogin">
                <PostLogin />
              </Route>
            </IonRouterOutlet>
            <IonFabButton href="/PostLogin">
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
