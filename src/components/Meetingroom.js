import { IonTitle } from "@ionic/react";

import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Meetingroom({ meetingrooms }) {
  const { setSelectedSeat } = useContext(AuthContext);

  return (
    <>
      <div>
        <IonTitle className="headline">It's yours! </IonTitle>

        {meetingrooms.length > 0 ? (
          <div className="grid-container-meeting">
            {meetingrooms.map((place) => (
              <div key={place._id}>
                {!place.unavailable ? (
                  <button
                    className="meetingicon"
                    onClick={() => setSelectedSeat(place)}
                  >
                    {place.seat}
                  </button>
                ) : (
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
