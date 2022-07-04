import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonTitle,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
} from "@ionic/react";
import { alarm, home, navigate, person } from "ionicons/icons";
import "./main.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { format, compareAsc } from "date-fns";
// den context importieren & konsumieren und location, datetime, meetingraum oder
// sitzplatz undseatid/number verfügbar machen (aus context/global state)
// aus diesen infomationen setzt ihr eine post request zusammen (infos im body,
// userid aus params) und schickt sie an
// createreservation endpunkt

const Overview = () => {
  const { userInfos, location, date, room, selectedSeat } =
    useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      userInfos._id,
      // userInfos.first_name,
      location,
      date,
      room,
      selectedSeat
    );

    const createReservation = {
      date: date,
      place_id: selectedSeat,
    };
    axios
      .post(
        `http://localhost:5000/reservation/${userInfos._id}`,
        createReservation
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  // der endpunkt: http://localhost:5000/reservation/62bc0ab5b4436aa68e17f46b/
  // user_id sollte dynamisch sein
  // der req body muss so sein: {
  // "place_id":"62bc4ffe237eae711a978840",
  // "date": "2022-06-30"
  // }
  //   };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <IonTitle className="headline">Your Booking Overview</IonTitle>

        <IonGrid className="container">
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
