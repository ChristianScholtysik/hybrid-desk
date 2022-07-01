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

  const { isAuthenticated, setIsAuthenticated, setUserInfos } = useContext(AuthContext);

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
      setUserInfos(res.data)
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="../post-login" />;

  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="my-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>

        <div className="col-sm-5">
          <input type="text" className="form-control" id="email" name="email" />
        </div>
      </div> */}

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
      {/* 
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name="password"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        LogIn
      </button> */}
    </form>
  );
};

export default LoginPage;
