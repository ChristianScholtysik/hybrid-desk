import { IonPage } from "@ionic/react";
import axios from "axios";
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

const me = () => {
  const { isAuthenticated, userInfos, setUserInfo } = useContext(AuthContext);
  console.log(userInfos);

  const handleSubmit = async () => {
    e.preventDefault();

    const updateUser = {
      first_name: userInfos.first_name,
      last_name: userInfos.last_name,
      email: userInfos.email,
      // place_id: selectedMeeting,
    };
    axios
      .put(

        // `https://hybrid-desk.herokuapp.com/reservation/${userInfos._id}`,
        `http://localhost:5000/reservation/${userInfos._id}`,


        updateUser
      )
      // .then((response) => console.log(response.data))
      // .catch((error) => console.log(error));

      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };
    // const token = localStorage.getItem("token");
    // console.log(token);
    // try {
    //   const res = await axios.put(`${process.env.REACT_APP_API_URL}/info/me`, {
    //     headers: { token: token },
    //   });
    //   setUserInfo(res.data);
    // } catch (error) {
    //   console.log(error);
    // }

    return (
      <>
        {isAuthenticated && userInfos ? (
          <>
            <Header />
            <form onSubmit={handleSubmit}>
              <div className="container">
                <IonTitle className="headline">Your Profile</IonTitle>

                <IonGrid>
                  <IonCol>
                    <IonRow>
                      <IonList>
                        <IonItem>
                          <IonAvatar slot="start" class="Avatar2">
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
                        <br />
                        <br />
                        <br />
                        <IonItem>
                          <IonIcon slot="start" color="primary" icon={person} />{" "}
                          <IonLabel position="floating">First Name</IonLabel>
                          <IonTextarea
                            value={userInfos.first_name}
                          ></IonTextarea>
                        </IonItem>
                        {/* <IonLabel>
                          <h2>{userInfos.first_name}</h2>{" "}
                          <IonIcon slot="end" color="primary" icon={person} />
                        </IonLabel> */}
                        <IonItem>
                          <IonIcon slot="start" color="primary" icon={person} />{" "}
                          <IonLabel position="floating">Last Name</IonLabel>
                          <IonTextarea
                            value={userInfos.last_name}
                          ></IonTextarea>
                        </IonItem>
                        <IonItem>
                          <IonIcon
                            slot="start"
                            color="primary"
                            icon={mailOpen}
                          />{" "}
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
};
export default me;
