import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonGrid,
  IonList,
  IonCol,
  IonLabel,
  IonTitle,
  IonIcon,
  IonRow,
  IonAvatar,
} from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { person, mailOpen, cloudUpload } from "ionicons/icons";

import "./Header.css";
import "./main.css";

const Profile = () => {
  const { isAuthenticated, userInfos } = useContext(AuthContext);
  console.log(userInfos);

  return (
    <IonPage>
      {isAuthenticated && userInfos ? (
        <>
          <IonContent>
            <IonTitle className="headline">Your Profile Overview</IonTitle>

            <IonGrid>
              <IonCol>
                <IonRow>
                  <IonList>
                    <IonItem>
                      <IonIcon
                        slot="start"
                        color="primary"
                        icon={cloudUpload}
                      />
                      <IonLabel>
                        <IonAvatar class="Avatar2">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
                            alt="2bild"
                            className="Avatar2"
                          />
                        </IonAvatar>

                        <IonInput type="file" />
                        <IonButton className="button">
                          Upload Profile Image
                        </IonButton>
                      </IonLabel>
                    </IonItem>

                    <IonItem>
                      <IonIcon slot="start" color="primary" icon={person} />
                      <IonLabel>
                        <h2>FirstName: {userInfos.first_name}</h2>
                        <IonButton className="button">Change</IonButton>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonIcon slot="start" color="primary" icon={person} />
                      <IonLabel>
                        <h2>LastName: {userInfos.last_name}</h2>
                        <IonButton className="button">Change</IonButton>
                      </IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonIcon slot="start" icon={mailOpen} color="primary" />

                      <IonLabel>
                        <h2>Email: {userInfos.email}</h2>
                        <IonButton className="button">Change</IonButton>
                      </IonLabel>
                    </IonItem>
                  </IonList>
                </IonRow>
              </IonCol>
            </IonGrid>
          </IonContent>
        </>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </IonPage>
  );
};

export default Profile;
