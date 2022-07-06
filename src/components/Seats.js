import axios from "axios";
import { IonTitle } from "@ionic/react";
import { useContext, useState, useEffect } from "react";
import Meetingroom from "./Meetingroom";
import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Seats() {
  const [places, setPlaces] = useState([]);
  const { bookingUrl, setSelectedSeat, date, room } = useContext(AuthContext);

  useEffect(() => {
    console.log(room);
    const getAvailableSeats = () => {
      axios
        .get(bookingUrl)
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].unavailable);
            const unavailable = response.data[i].unavailable.find(
              (day) => day === date
            );
            if (unavailable) {
              response.data[i].unavailable = true;
              console.log(response.data.unavailable);
            } else {
              response.data[i].unavailable = false;
              console.log(response.data.unavailable);
            }
          }
          setPlaces(response.data);
        })
        .catch((error) => console.error(`error: ${error}`));
    };
    getAvailableSeats();
  }, [date, bookingUrl, room]);

  if (room == "meetingroom") return <Meetingroom meetingrooms={places} />;

  return (
    <>
      <div>
        <IonTitle className="headline">It's yours! </IonTitle>
        {places.length > 0 ? (
          <div className="grid-container">
            {places.map((place) => (
              <div key={place._id}>
                {!place.unavailable ? (
                  <button
                    className="deskicon"
                    onClick={() => setSelectedSeat(place)}
                  >
                    {place.seat}
                  </button>
                ) : (
                  <button className="deskiconnodesk">{place.seat}</button>
                )}
              </div>
            ))}
          </div>
        ) : (
          "No available seats in your selected location"
        )}
        <div className="arrow bounce"></div>
      </div>
    </>
  );
}

export default Seats;
