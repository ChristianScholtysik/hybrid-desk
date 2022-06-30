import axios from "axios";
import React from "react";
import { IonContent, IonTitle, IonButton } from "@ionic/react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

import "./main.css";

const Seats = () => {
  const { bookingUrl, setBookingUrl } = useContext(AuthContext);
  //im useEffect:
  // gibt uns alle available seats auf basis der booking Url bzw. der query parameter der booking Url
  // diese Seats sollen dann stück state speichern available Seats
  //conditional rendering when available seats einen truthy value hat,  dann mappe über available seats und zeig für jeden seat einen button mit der Seatnumber
  // axios.get(bookingUrl).then.catch;
  const [seats, getSeats] = useState("");

  const url = "http://localhost:5000/";

  useEffect(() => {
    getAvailableSeats();
  }, []);

  const getAvailableSeats = () => {
    axios
      .get(`${url}place`)
      .then((response) => {

        const getPlace = response.data.place.getPlace;
        getAvailableSeats(getPlace);
      })
      .catch((error) => console.error(`error: ${error}`));
  };
  return (
    <div>
      <IonButton seats={place}></IonButton>
    </div>
  );

};
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
