import "../pages/Login.css";
import "../components/main.css";
import Logo from "../components/img/HDisk_Logo.svg";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
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
  IonTextarea,
} from "@ionic/react";

import { person, mailOpen } from "ionicons/icons";

import "./main.css";

import Header from "../components/Header";
import SuccessMessage from "./SuccessMessage";

const Me = () => {
  const { isAuthenticated, userInfos } = useContext(AuthContext);
  console.log(userInfos);
  const [status, setStatus] = useState(undefined);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateUser = {
      first_name: userInfos.first_name.value,
      last_name: userInfos.last_name.value,
      email: userInfos.email.value,
      // place_id: selectedMeeting,
    };
    axios
      .put(
        // `https://hybrid-desk.herokuapp.com/reservation/${userInfos._id}`,
        `http://localhost:5000/user/${userInfos._id}`,
        updateUser
      )
      // .then((response) => console.log(response.data))
      // .catch((error) => console.log(error));

      .then(() => {
        this.setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });

    // Bin mir nicht sicher ob man irgendwo handleChange noch einbinden muss
    // const handleChange = (event) => {
    //   this.setState({ userInfos: userInfos.target.value });
    // };
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
            {/* {status?.type === "success" && <SuccessMessage />}
            {status?.type === "error" && (
              <p>"Reservation could not be created"</p>
            )} */}
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
                          onChange={userInfos.handleChange}
                        >
                          {userInfos.first_name.value}
                        </IonTextarea>
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
