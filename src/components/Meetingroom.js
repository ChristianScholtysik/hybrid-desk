import axios from "axios";
import { IonContent, IonGrid, IonTitle, IonCol } from "@ionic/react";

import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Meetingroom({ meetingrooms }) {
  const { setSelectedSeat } = useContext(AuthContext);

  return (
    <>
      <div>
        <IonTitle className="headline">It's yours! </IonTitle>
        {/* Meetingrooms hier */}
        {meetingrooms.length > 0 ? (
          <div className="grid-container-meeting">
            {meetingrooms.map((place) => (
              <div key={place._id}>
                {!place.unavailable ? (
                  //Button freier sitzplat

                  <button
                    className="meetingicon"
                    onClick={() => setSelectedSeat(place._id)}
                  >
                    {/* console.log(room.meetingnumber); */}
                    {place.seat}
                  </button>
                ) : (
                  //Button belegter sietzplatz

                  <button className="meetingiconnodesk">{place.seat}</button>
                )}
              </div>
            ))}
          </div>
        ) : (
          "No available meetingroom in your selected location"
        )}
        <div className="arrow bounce"></div>
      </div>
    </>
  );
}
export default Meetingroom;
