import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import Header from "../components/Header";
// import axios from "axios";

// import "../components/main.css";
const PostLogin = () => {
  //Wenn User authentifiziert, wird Header Component angezeigt
  //Wenn User nicht eingeloggt, zur Landing Page navigieren

  const { isAuthenticated, userInfos } = useContext(AuthContext);
  console.log(userInfos);

  return (
    <IonPage>
      {isAuthenticated && userInfos ? (
        <>
          <Header />
          <IonContent>
            <p className="container">{userInfos.first_name}</p>
            <br />
            <p className="container">{userInfos.last_name}</p>
            <br />
            <p className="container">{userInfos.email}</p>
            <br />
            <IonLabel position="start">
              <p>Upload Profile Picture</p>
            </IonLabel>
            <IonItem>
              <IonInput type="file" />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit">
              Upload Profile Image
            </IonButton>
            <h1>Du bist eingeloggt und kannst buchen</h1>
          </IonContent>
        </>
      ) : (
        // <Redirect to="/login" />
        <h1>You are not logged in</h1>
      )}
    </IonPage>
  );
};

export default PostLogin;
