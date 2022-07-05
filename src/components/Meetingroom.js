import axios from "axios";
import { IonContent, IonGrid, IonTitle, IonCol } from "@ionic/react";

import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Meetingroom() {
  const [places, setPlaces] = useState([]);
  const { bookingUrl, setSelectedMeeting, date } = useContext(AuthContext);

  return (
    <>
      <div>
        Meetingrooms hier
        {/* {places.length > 14 ? (
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
        <div className="arrow bounce"></div> */}
      </div>
    </>
  );
}
export default Meetingroom;
