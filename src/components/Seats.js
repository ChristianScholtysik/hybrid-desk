import axios from "axios";
import React from "react";
import { IonContent, IonTitle, IonButton } from "@ionic/react";
import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../context/AuthContext";

import "./main.css";

function Seats() {
  const [places, setPlaces] = useState([]);

  const { bookingUrl, setSelectedSeat } = useContext(AuthContext);

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
          {places.map((place) => (
            // Stellt einen anderen Button dar wenn das date aus dem context einem date aus place.unavailable entspricht als sonst

            <div key={place._id}>
              <button
                className="btn"
                onClick={() => setSelectedSeat(place._id)}
              >
                {place.seat}
              </button>
            </div>
          ))}
        </>
      ) : (
        "No available seats in your selected location"
      )}
    </>
  );
}

export default Seats;

//   //wenn ein spezieller sitzplatz ausgewählt wurde:
//   const handleClick = (e) => {
//     //an diesem punkt wollen wir die seatid/place_id in state (context) speichern

//     state = {
//       place_id: "",
//     };
//     this.setState({
//       place_id: id,
//     });

//   };
//   return (
//     <IonContent>
//       <div className="container">
//         <IonTitle className="headline">choose your Seat...</IonTitle>

//         <div className="box">
//           <div className="group">
//             <div>
//               <button
//                 className="btn"
//                 id="62bb026c7da22ddd14563323"
//                 onClick={handleClick}
//               >
//                 1
//               </button>
//               <button
//                 className="btn"
//                 id="62bb1265e68fb26334a1d059"
//                 onClick={handleClick}
//               >
//                 2
//               </button>
//             </div>
//             <div>
//               <button
//                 className="btn"
//                 id="62bb1281e68fb26334a1d05b"
//                 onClick={handleClick}
//               >
//                 3
//               </button>
//               {/* <button className="btn" id={seat.id} onClick={handleClick}>
//                 4
//               </button> */}
//             </div>
//           </div>
//           <div className="group">
//             <div>
//               {/* <button className="btn">{seat.number}</button> */}
//               <button className="btn">6</button>
//             </div>
//             <div>
//               <button className="btn">7</button>
//               <button className="btn">8</button>
//             </div>
//           </div>
//         </div>
//         <div className="box">
//           <div className="group">
//             <div>
//               <button className="btn">8</button>
//               <button className="btn">9</button>
//             </div>
//             <div>
//               <button className="btn">10</button>
//               <button className="btn">11</button>
//             </div>
//           </div>
//           <div className="group">
//             <div>
//               <button className="btn">12</button>
//               <button className="btn">13</button>
//             </div>
//             <div>
//               <button className="btn">14</button>
//               <button className="btn">15</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </IonContent>
//   );
// };

// export default Seats;
// {/* <IonButton size="small" shape="round" type="submit">
//   1
// </IonButton>
// <IonGrid>
//   <IonRow>
//     <button className="btn">1</button>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>

//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">3</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">4</IonButton>
//     </IonCol>

//     <IonCol size="1" class="grid-design"></IonCol>

//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">3</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">4</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">3</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">4</IonButton>
//     </IonCol>

//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>

//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>

//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">3</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">4</IonButton>
//     </IonCol>

//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">1</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design"></IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">3</IonButton>
//     </IonCol>
//     <IonCol size="1" class="grid-design">
//       <IonButton class="button">4</IonButton>
//     </IonCol>
//   </IonRow>
// </IonGrid> */}
