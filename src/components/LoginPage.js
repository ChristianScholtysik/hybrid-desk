import axios from "axios";
// import { IonTitle, IonButton, IonItem, IonLabel, IonInput } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import "./main.css";
import { IonInput, IonLabel, IonItem, IonButton } from "@ionic/react";

const LoginPage = () => {
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Login auf die /post-login route navigieren

  const { isAuthenticated, setIsAuthenticated, setUserInfos, userInfos } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = e.target;
      const loginData = {
        email: email.value,
        password: password.value,
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        loginData
      );

      const token = res.headers.authorization;
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setUserInfos(res.data);
      console.log("jetzt user infos");
      setIsAuthenticated(true);
      console.log("jetzt authenticated");
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated && userInfos) return <Redirect to="../main" />;

  return (
    <form onSubmit={handleSubmit}>
      <IonItem>
        <IonLabel position="floating" htmlFor="email">
          Email
        </IonLabel>
        <IonInput type="text" id="email" name="email"></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="floating" htmlFor="inputPassword">
          Password
        </IonLabel>
        <IonInput type="password" id="inputPassword" name="password"></IonInput>
      </IonItem>
      <IonButton type="submit">Login</IonButton>
    </form>
  );
};

export default LoginPage;
