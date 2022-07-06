import "../pages/Login.css";
import "../components/main.css";
import Logo from "../components/img/HDisk_Logo.svg";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
  IonInput,
} from "@ionic/react";

import { person, mailOpen } from "ionicons/icons";

import "./main.css";

import Header from "../components/Header";

const Me = () => {
  const { isAuthenticated, userInfos, setUserInfos } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
    };
    console.log(e.target.first_name.value);
    axios
      .put(
        // `https://hybrid-desk.herokuapp.com/user/${userInfos._id}`,
        `http://localhost:5000/user/${userInfos._id}`,
        updateUser
      )
      .then((response) => setUserInfos(response.data))

      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      {isAuthenticated && userInfos ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="container">
              <IonTitle className="headline">Your Profile</IonTitle>

              <IonGrid>
                <IonCol>
                  <IonRow>
                    <IonList>
                      <IonItem>
                        <IonAvatar slot="start" className="Avatar2">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
                            alt="profile"
                          />
                        </IonAvatar>
                        <IonLabel>
                          <IonButton className="button">
                            Upload/Edit Image
                          </IonButton>
                        </IonLabel>
                      </IonItem>
                      <br />
                      <br />
                      <br />
                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={person} />{" "}
                        <IonLabel position="floating">
                          {userInfos.first_name}
                        </IonLabel>
                        <IonInput
                          name="first_name"
                          type="text"
                          placeholder={userInfos.first_name}
                          required="true"
                        >
                          {userInfos.first_name.value}
                        </IonInput>
                      </IonItem>

                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={person} />
                        <IonLabel position="floating">
                          {userInfos.last_name}
                        </IonLabel>
                        <IonInput
                          name="last_name"
                          type="text"
                          placeholder={userInfos.last_name}
                          required="true"
                        >
                          {userInfos.last_name.value}
                        </IonInput>
                      </IonItem>
                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={mailOpen} />
                        <IonLabel position="floating">
                          {userInfos.email}
                        </IonLabel>
                        <IonInput
                          name="email"
                          type="text"
                          placeholder={userInfos.email}
                          required="true"
                        >
                          {userInfos.email.value}
                        </IonInput>
                      </IonItem>
                    </IonList>
                  </IonRow>
                </IonCol>
                <IonButton type="submit">Send</IonButton>
              </IonGrid>
            </div>
          </form>
        </>
      ) : (
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
              <IonTitle className="healdine">
                Please <a href="/login">Login</a> or
                <a href="/registration"> Sign-Up</a>
              </IonTitle>
            </div>
          </IonContent>
        </>
      )}
    </>
  );
};

export default Me;
