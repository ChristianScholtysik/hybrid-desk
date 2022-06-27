import { IonContent, IonPage } from "@ionic/react";
import LoginPage from "../components/LoginPage";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <LoginPage />
      </IonContent>
    </IonPage>
  );
};

export default Login;
