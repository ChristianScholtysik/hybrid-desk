// import { IonTitle, IonButton, IonItem, IonLabel, IonInput } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";

import "../components/main.css";
import {
  IonInput,
  // IonToolbar,
  // IonHeader,
  IonLabel,
  IonItem,
  IonButton,
  IonTitle,
  // IonContent,
  // IonIcon,
} from "@ionic/react";
// import { happy } from "ionicons/icons";
// import Logo from "../components/img/HDisk_Logo.svg";

const LoginPage = () => {
  const { isAuthenticated, userInfos, handleLogin } = useContext(AuthContext);

  if (isAuthenticated && userInfos) return <Redirect to="../main" />;
  // <>
  //   <IonContent className="container">
  //     <IonToolbar color="primary">
  //       <IonHeader>
  //         <IonTitle>
  //           <img src={Logo} alt="Logo" className="logo" />
  //         </IonTitle>
  //       </IonHeader>
  //     </IonToolbar>
  //     <div className="container">
  //       <IonTitle className="headline">
  //         You are logged in
  //         <br />
  //         <IonIcon color="primary" icon={happy} size="large" />
  //         <br />
  //         <IonButton className="button" href="./main">
  //           Go to Booking
  //         </IonButton>
  //       </IonTitle>
  //     </div>
  //   </IonContent>
  // </>

  return (
    <>
      <div className="container">
        <form onSubmit={handleLogin}>
          <IonTitle className="headline">Please Login</IonTitle>
          <IonItem className="label">
            <IonLabel position="floating" htmlFor="email">
              Email
            </IonLabel>
            <IonInput type="text" id="email" name="email"></IonInput>
          </IonItem>
          <IonItem className="label">
            <IonLabel position="floating" htmlFor="inputPassword">
              Password
            </IonLabel>
            <IonInput
              type="password"
              id="inputPassword"
              name="password"
            ></IonInput>
          </IonItem>
          <IonButton type="submit">Login</IonButton>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
