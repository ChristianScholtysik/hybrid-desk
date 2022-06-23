import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Signup from "../components/Signup";
import Header from "../components/Header";
import "./Registration.css";

const Registration: React.FC = () => {
  return (
    <IonPage>
      {/*<IonToolbar>
          <IonTitle class="top-headline">Registration</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Registration</IonTitle>
          </IonToolbar> */}

      <IonContent>
        <Header />
        {/* headline im container */}
        <Signup />
      </IonContent>
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Registration;
