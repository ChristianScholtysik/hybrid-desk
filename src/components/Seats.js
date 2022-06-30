import axios from "axios";
import React from "react";
import { IonContent, IonTitle, IonButton } from "@ionic/react";
import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Seats() {
  const [places, setPlaces] = useState([]);

  const { bookingUrl, setSelectedSeat, setDate } = useContext(AuthContext);

  useEffect(() => {
    const getAvailableSeats = () => {
      axios
        .get(bookingUrl)
        .then((response) => {
          console.log(response.data);
          setPlaces(response.data);
        })
        .catch((error) => console.error(`error: ${error}`));
    };
    getAvailableSeats();
  }, [bookingUrl]);
  return (
    <>
      {places.length > 0 ? (
        <>
          {places.map((place) =>
            // Stellt einen anderen Button dar wenn das date aus dem context einem date aus place.unavailable entspricht als sonst

            setDate === place.unavailable.item ? (
              <div key={place._id}>
                <button className="btnUnavailable">{place.seat}</button>
              </div>
            ) : (
              <div key={place._id}>
                <button
                  className="btn"
                  onClick={() => setSelectedSeat(place._id)}
                >
                  {place.seat}
                </button>
              </div>
            )
          )}
        </>
      ) : (
        "No available seats in your selected location"
      )}
    </>
  );
}

export default Seats;
