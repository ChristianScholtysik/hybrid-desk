import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton, IonTitle } from "@ionic/react";
// import { IonButton, IonLabel, IonInput, IonItem } from "@ionic/react";

import "./main.css";
// import { image } from "ionicons/icons";

const Signup = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Signup auf die /post-login route navigieren

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
      //token im localStorage speichern
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (isAuthenticated) return <Redirect to="../main" />;

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

{
  /* // <>
    //   <div className="container">
    //     <form onSubmit={handleSubmit}>
    //       <IonItem>
    //         <IonLabel position="floating" first_name>
    //           <p>Firstname</p>
    //         </IonLabel>
    //         <IonInput />
    //       </IonItem>
    //       <IonItem>
    //         <IonLabel position="floating" last_name>
    //           <p>Lastname</p>
    //         </IonLabel>
    //         <IonInput />
    //       </IonItem>
    //       <IonItem>
    //         <IonLabel position="floating" email>
    //           <p>Email</p>
    //         </IonLabel>
    //         <IonInput type="email" />
    //       </IonItem>
    //       <IonItem>
    //         <IonLabel position="floating" password>
    //           <p>Password</p>
    //         </IonLabel>
    //         <IonInput type="password" />
    //       </IonItem>
    //       {/* Image Upload Component */
}
{
  /* //       <IonLabel position="start">
    //         <p>Upload Profile Picture</p>
    //       </IonLabel>
    //       <IonItem>
    //         <IonInput type="file" />
    //       </IonItem>
    //       {/* <UploadAvatar /> */
}
{
  /* //       <IonButton className="ion-margin-top" type="submit">
    //         Sign Up
    //       </IonButton>
    //     </form> */
}
{
  /* //   
    // </> */
}
