import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../components/main.css";
import { happy } from "ionicons/icons";
import Logo from "../components/img/HDisk_Logo.svg";
import {
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
  IonButton,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonContent,
} from "@ionic/react";

const Signup = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { first_name, last_name, email, password } = e.target;
    const loginData = {
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        loginData
      );
      const token = res.headers.authorization;

      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated)
    return (
      <>
        <IonContent className="container">
          <IonToolbar color="primary">
            <IonHeader>
              <IonTitle>
                <img src={Logo} alt="Logo" className="logo" />
              </IonTitle>
            </IonHeader>
          </IonToolbar>
          <div className="container">
            <IonTitle className="headline">
              You are logged in
              <br />
              <IonIcon color="primary" icon={happy} size="large" />
              <br />
              <IonButton className="button" href="./main">
                Go to Booking
              </IonButton>
            </IonTitle>
          </div>
        </IonContent>
      </>
    );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <IonTitle className="headline">SignUp</IonTitle>
        <IonItem className="label">
          <IonLabel position="floating" htmlFor="first_name">
            First Name
          </IonLabel>
          <IonInput
            type="text"
            id="first_name"
            name="first_name"
            className="form-control"
          ></IonInput>
        </IonItem>
        <IonItem className="label">
          <IonLabel position="floating" htmlFor="last_name">
            Last Name
          </IonLabel>
          <IonInput
            type="text"
            id="last_name"
            name="last_name"
            className="form-control"
          ></IonInput>
        </IonItem>
        <IonItem className="label">
          <IonLabel position="floating" htmlFor="email">
            Email
          </IonLabel>
          <IonInput
            type="text"
            id="email"
            name="email"
            className="form-control"
          ></IonInput>
        </IonItem>
        <IonItem className="label">
          <IonLabel position="floating" htmlFor="inputPassword">
            Password
          </IonLabel>
          <IonInput
            type="password"
            id="inputPassword"
            name="password"
            className="form-control"
          ></IonInput>
        </IonItem>
        <IonButton type="submit">SignUp</IonButton>
      </form>
    </div>
  );
};

export default Signup;
