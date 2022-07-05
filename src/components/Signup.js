import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/react";
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
    <form onSubmit={handleSubmit}>
      <IonItem>
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
      <IonItem>
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
      <IonItem>
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
      <IonItem>
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

      {/* <div className="my-3 row">
        <label htmlFor="first_name" className="col-sm-2 col-form-label">
          Firstname
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="first_name"
            name="first_name"
          />
        </div>
      </div>

      <div className="my-3 row">
        <label htmlFor="last_name" className="col-sm-2 col-form-label">
          Lastname
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="last_name"
            name="last_name"
          />
        </div>
      </div>

      <div className="my-3 row">
        <label htmlFor="email" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-5">
          <input type="text" className="form-control" id="email" name="email" />
        </div>
      </div>
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
        Jetzt registrieren
      </button> */}
    </form>
    // <>
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
    //       {/* Image Upload Component */}
    //       <IonLabel position="start">
    //         <p>Upload Profile Picture</p>
    //       </IonLabel>
    //       <IonItem>
    //         <IonInput type="file" />
    //       </IonItem>
    //       {/* <UploadAvatar /> */}
    //       <IonButton className="ion-margin-top" type="submit">
    //         Sign Up
    //       </IonButton>
    //     </form>
    //   </div>
    // </>
  );
};
export default Signup;
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
