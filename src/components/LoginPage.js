import axios from "axios";
import { IonTitle, IonButton, IonItem, IonLabel, IonInput } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import "./main.css";

const LoginPage = () => {
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Login auf die /post-login route navigieren

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        loginData
      );
      const token = res.headers.authorization;
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="../post-login" />;

  return (
    <div className="container">
      <IonTitle className="top-headline">Login </IonTitle>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="floating">
            <p>Email</p>
          </IonLabel>
          <IonInput type="email" />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            <p>Password</p>
          </IonLabel>
          <IonInput type="password" />
        </IonItem>
        <IonButton type="submit">Login</IonButton>
      </form>
    </div>
  );
};

export default LoginPage;
