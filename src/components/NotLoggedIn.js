import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "../pages/Login.css";
import Logo from "../components/img/HDisk_Logo.svg";

const NotLoggedIn = () => {
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
        <h1>you are not logged in</h1>
      </IonContent>
    </IonPage>
  );
};

export default NotLoggedIn;
