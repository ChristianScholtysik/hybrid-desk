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
import { navigate, person, mailOpen, cloudUpload, image } from "ionicons/icons";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../components/main.css";
import "./Header.css";
import "./main.css";

const Profile = () => {
  //Wenn User authentifiziert, wird Header Component angezeigt
  //Wenn User nicht eingeloggt, zur Landing Page navigieren

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
                        {/* <ProfileImage /> */}{" "}
                        <IonAvatar class="Avatar2">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
                            alt="2bild"
                            className="Avatar2"
                          />
                        </IonAvatar>
                        {/* <IonIcon
                          slot="start"
                          icon={cloudUpload}
                          color="primary"
                        /> */}
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
                    {/* <div>
                      <ProfileImage />
                    </div> */}
                    {/* <IonItem>
                      <IonIcon
                        slot="start"
                        icon={cloudUpload}
                        color="primary"
                      />
                      <IonLabel>
                        <IonInput type="file" />
                        <IonButton>Upload Profile Image</IonButton>
                      </IonLabel>
                    </IonItem> */}
                    {/* <IonItem>
                      <IonIcon slot="start" icon={home} color="primary" />
                      <IonLabel>
                        <h2>Seat/Meetingroom</h2>
                        <p></p>
                      </IonLabel>
                    </IonItem> 
                     <IonButton type="submit">Send</IonButton> */}
                  </IonList>
                </IonRow>
              </IonCol>
            </IonGrid>
          </IonContent>
        </>
      ) : (
        // <Redirect to="/login" />
        <h1>You are not logged in</h1>
      )}
    </IonPage>
  );
};

export default Profile;
