import {
  IonList,
  IonItem,
  IonLabel,
  IonTitle,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";
import { alarm, home, navigate, person } from "ionicons/icons";
import "./main.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

import SuccessMessage from "./SuccessMessage";

const Overview = () => {
  const { userInfos, location, date, room, selectedSeat, selectedMeeting } =
    useContext(AuthContext);
  const [status, setStatus] = useState(undefined);
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      userInfos._id,

      location,
      date,
      room,
      selectedSeat,
      selectedMeeting
    );

    const createReservation = {
      date: date,
      place_id: selectedSeat,
    };
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/reservation/${userInfos._id}`,

        // `http://localhost:5000/reservation/${userInfos._id}`,

        createReservation
      )

      .then(() => {
        setStatus({ type: "success" });
      })
      .catch((error) => {
        setStatus({ type: "error", error });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {status?.type === "success" && <SuccessMessage />}
      {status?.type === "error" && <p>"Reservation could not be created"</p>}

      <div className="container">
        <IonTitle className="headline">Your Overview</IonTitle>

        <IonGrid>
          <IonCol>
            <IonRow>
              <IonList>
                <IonItem>
                  <IonIcon slot="start" color="primary" icon={person} />
                  <IonLabel>
                    <h2>User</h2>
                    <p>{userInfos.first_name}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonIcon slot="start" color="primary" icon={navigate} />
                  <IonLabel>
                    <h2>Location</h2>
                    <p>{location}</p>
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon slot="start" icon={alarm} color="primary" />

                  <IonLabel>
                    <h2>Date </h2>
                    <p>{date}</p>
                  </IonLabel>
                </IonItem>

                <IonItem>
                  <IonIcon slot="start" icon={home} color="primary" />
                  <IonLabel>
                    <h2>Seat/Meetingroom</h2>
                    <p>{selectedSeat.seat}</p>
                  </IonLabel>
                </IonItem>
                <IonButton type="submit">Send</IonButton>
              </IonList>
            </IonRow>
          </IonCol>
        </IonGrid>
      </div>
    </form>
  );
};
export default Overview;
