import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { IonTitle, IonButton, IonLabel, IonInput, IonItem } from "@ionic/react";

import "./main.css";

const Signup = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  //bei Form Submit post request an die API schicken
  //token, den wir zurückbekommen in localStorage speichern
  //bei erfolgreichem Signup auf die /post-login route navigieren

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const loginData = {
      email: email.value,
      password: password.value,
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/registration`,
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
    <>
      <div className="container">
        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">
              <p>Firstname</p>
            </IonLabel>
            <IonInput />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">
              <p>Lastname</p>
            </IonLabel>
            <IonInput />
          </IonItem>
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
          {/* Image Upload Component */}
          <IonLabel position="start">
            <p>Upload Profile Picture</p>
          </IonLabel>
          <IonItem>
            <IonInput type="file" />
          </IonItem>
          {/* <UploadAvatar /> */}
          <IonButton className="ion-margin-top" type="submit">
            Sign Up
          </IonButton>
        </form>
      </div>
    </>
  );
};

//     <form onSubmit={handleSubmit}>
//       <div className="my-3 row">
//         <label htmlFor="email" className="col-sm-2 col-form-label">
//           Email
//         </label>
//         <div className="col-sm-5">
//           <input type="text" className="form-control" id="email" name="email" />
//         </div>
//       </div>
//       <div className="mb-3 row">
//         <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
//           Password
//         </label>
//         <div className="col-sm-5">
//           <input
//             type="password"
//             className="form-control"
//             id="inputPassword"
//             name="password"
//           />
//         </div>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Jetzt registrieren
//       </button>
//     </form>
//   );
// };

export default Signup;
