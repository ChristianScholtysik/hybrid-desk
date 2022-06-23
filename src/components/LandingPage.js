import { IonContent, IonButton, IonPage } from "@ionic/react";
import Login from "./LoginForm";
const LandingPage = () => {
  return (
    <IonPage>
      <IonContent>
        <Login />
        <IonButton expand="block">Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
