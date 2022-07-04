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

  //const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated, userInfos } = useContext(AuthContext);

  // const handleClick = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
  //       headers: { token: token },
  //     });
  //     setUserInfos(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      {isAuthenticated ? (
        <IonPage>
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
        </IonPage>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default PostLogin;
