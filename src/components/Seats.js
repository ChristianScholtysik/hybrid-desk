import axios from "axios";
import { IonContent, IonGrid, IonTitle, IonCol } from "@ionic/react";

import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Seats() {
  const [places, setPlaces] = useState([]);
  const { bookingUrl, setSelectedSeat, date } = useContext(AuthContext);

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
        {places.length > 0 ? (
          <div className="grid-container">
            {places.map((place) => (
              <div key={place._id}>
                {!place.unavailable ? (
                  //Button freier sitzplat

                  <button
                    className="deskicon"
                    onClick={() => setSelectedSeat(place._id)}
                  >
                    {place.seat}
                  </button>
                ) : (
                  //Button belegter sietzplatz

                  <button className="deskiconnodesk">{place.seat}</button>
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

export default Seats;

// {
//   /* <>
//       {places.length > 0 ? (
//         <>
//           {places.map((place) => (
//             <div key={place._id}>
//               {!place.unavailable ? (
//                 //Button freier sitzplat
//                 <button
//                   className="btn"
//                   onClick={() => setSelectedSeat(place._id)}
//                 >
//                   {place.seat}
//                 </button>
//               ) : (
//                 //Button belegter sietzplatz
//                 <button className="btnUnavailable">{place.seat} </button>
//               )}
//             </div>
//           ))}
//         </>
//       ) : (
//         "No available seats in your selected location"
//       )}
//     </> */
// }

// {
//   /* <div key={place._id}>
//                   <button
//                     className="btn"
//                     onClick={() => setSelectedSeat(place._id)}
//                   >
//                     {place.seat} frei
//                   </button>
//                 </div> */
// }
