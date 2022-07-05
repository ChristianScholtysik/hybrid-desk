// import { IonTitle, IonButton, IonItem, IonLabel, IonInput } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import "../components/main.css";
import {
  IonInput,
  IonLabel,
  IonItem,
  IonButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

const LoginPage = () => {
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Login auf die /post-login route navigieren

  const {
    isAuthenticated,

    userInfos,
    handleLogin,
  } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { email, password } = e.target;
  //     const loginData = {
  //       email: email.value,
  //       password: password.value,
  //     };

  //     const res = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/user/login`,
  //       loginData
  //     );

  //     const token = res.headers.authorization;
  //     //token im localStorage speichern
  //     localStorage.setItem("token", token);
  //     setUserInfos(res.data);
  //     console.log("jetzt user infos");
  //     setIsAuthenticated(true);
  //     console.log("jetzt authenticated");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  if (isAuthenticated && userInfos) return <Redirect to="../post-login" />;

  return (
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
  );
};

export default LoginPage;
