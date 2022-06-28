import {
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Signup from "../components/Signup";
import "./Registration.css";
import Logo from "../components/img/HDisk_Logo.svg";

const Registration: React.FC = () => {
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
        <Signup />
      </IonContent>
    </IonPage>
  );
};

export default Registration;
