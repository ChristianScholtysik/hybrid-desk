// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { useState, useEffect, useContext } from "react";
// import { IonContent, IonPage } from "@ionic/react";
// import Header from "./Header";

// const History = () => {
//   const [userBooking, setUserBooking] = useState([]);
//   const { userInfos, location, date, room, selectedSeat } =
//     useContext(AuthContext);

//   // console.log(room);
//   const getUserReservation = () => {
//     axios
//       .get(`http://localhost:5000/reservation/${userInfos._id}`)
//       .then((response) => {
//         // console.log(response.data);
//         //console.log(date);

//         setUserBooking(response.data);
//         //console.log(response.data);
//       })
//       .catch((error) => console.error(`error: ${error}`));
//   };
//   getUserReservation();

//   //   const { userInfos, location, date, room, selectedSeat } =
//   //     useContext(AuthContext);
//   // };

//   // console.log(
//   //   userInfos._id,
//   //   // userInfos.first_name,
//   //   location,
//   //   date,
//   //   room,
//   //   selectedSeat
//   // );
//   //   };
//   //   axios
//   //     .get(`http://localhost:5000/reservation/${userInfos._id}`)
//   //     .then((response) => console.log(response.data))
//   //     .catch((error) => console.log(error));

//   return (
//     <IonPage>
//       <Header />
//       <IonContent>
//         <h2>Titel</h2>
//       </IonContent>
//     </IonPage>
//   );
// };
// export default History;
