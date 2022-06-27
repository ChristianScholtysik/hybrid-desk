import { IonContent, IonPage } from "@ionic/react";
import Signup from "../components/Signup";
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
        {/* headline im container */}
        <Signup />
      </IonContent>
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Registration;
