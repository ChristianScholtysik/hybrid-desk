import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import LoginPage from "../components/LoginPage";
import "./Login.css";
import Logo from "../components/img/HDisk_Logo.svg";
const NotLogged = () => {
  return (
    <IonPage>
      <IonContent>
        <IonToolbar color="primary">
          <IonHeader>
            <IonTitle>
              <img src={Logo} alt="Logo" className="logo" />
            </IonTitle>
          </IonHeader>
        </IonToolbar>
        <LoginPage />
      </IonContent>
    </IonPage>
  );
};

export default NotLogged;
