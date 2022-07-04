import axios from "axios";
import { IonContent, IonGrid, IonTitle, IonCol } from "@ionic/react";

import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Meetingroom() {
  const [places, setPlaces] = useState([]);
  const { bookingUrl, setSelectedMeeting, date } = useContext(AuthContext);

  useEffect(() => {
    const getAvailableSeats = () => {
      axios
        .get(bookingUrl)
        .then((response) => {
          console.log(response.data);
          console.log(date);
          for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i].unavailable);
            const unavailable = response.data[i].unavailable.find(
              (day) => day == date
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
          console.log(response.data);
        })
        .catch((error) => console.error(`error: ${error}`));
    };
    getAvailableSeats();
  }, [date, bookingUrl]);

  return (
    <>
      <div>
        {places.length > 14 ? (
          <div className="grid-container">
            {places.map((place) => (
              <div key={place._id}>
                {!place.unavailable ? (
                  //Button freier sitzplat

                  <button
                    className="meetingicon"
                    onClick={() => setSelectedMeeting(place._id)}
                  >
                    console.log(place.meetingnumber);
                    {place.meetingnumber}
                  </button>
                ) : (
                  //Button belegter sietzplatz

                  <button className="meetingiconnodesk">
                    {place.meetingnumber}
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          "No available seats in your selected location"
        )}
        <div className="arrow bounce"></div>
      </div>{" "}
    </>
  );
}

export default Meetingroom;
