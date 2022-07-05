import { IonPage } from "@ionic/react";

import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import {
  IonButton,
  IonChip,
  IonInput,
  IonTitle,
  IonIcon,
  IonRow,
  IonGrid,
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
  IonTextarea,
} from "@ionic/react";

import { person, mailOpen, camera } from "ionicons/icons";

import "./main.css";

import Header from "../components/Header";

const Me = () => {
  const { isAuthenticated, userInfos } = useContext(AuthContext);
  console.log(userInfos);

  // const handleClick = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
  //       headers: { token: token },
  //     });
  //     setUserInfo(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  return (
    <>
      {isAuthenticated && userInfos ? (
        <>
          <Header />
          <form>
            <div className="container">
              <IonTitle className="headline">Your Profile</IonTitle>

              <IonGrid>
                <IonCol>
                  <IonRow>
                    <IonList>
                      <IonItem>
                        <IonAvatar slot="start">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
                            alt="profile"
                          />
                        </IonAvatar>
                        <IonLabel>
                          {/* <IonInput type="file" /> */}
                          <IonButton className="button">
                            Upload/Edit Image
                          </IonButton>
                        </IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={person} />{" "}
                        <IonLabel position="floating">First Name</IonLabel>
                        <IonTextarea value={userInfos.first_name}></IonTextarea>
                      </IonItem>
                      {/* <IonLabel>
                          <h2>{userInfos.first_name}</h2>{" "}
                          <IonIcon slot="end" color="primary" icon={person} />
                        </IonLabel> */}
                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={person} />{" "}
                        <IonLabel position="floating">Last Name</IonLabel>
                        <IonTextarea value={userInfos.last_name}></IonTextarea>
                      </IonItem>
                      <IonItem>
                        <IonIcon slot="start" color="primary" icon={mailOpen} />{" "}
                        <IonLabel position="floating">Email</IonLabel>
                        <IonTextarea value={userInfos.email}></IonTextarea>
                      </IonItem>
                    </IonList>
                  </IonRow>
                </IonCol>
                <IonButton type="submit">Send</IonButton>
              </IonGrid>
            </div>{" "}
          </form>
        </>
      ) : (
        <h1>Your are not logged in</h1>
      )}
    </>
  );
};
export default Me;
