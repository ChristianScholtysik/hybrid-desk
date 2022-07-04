// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { useState, useEffect, useContext } from "react";

// const History = () => {
//   const { userInfos, location, date, room, selectedSeat } =
//     useContext(AuthContext);
//   const [history, setHistory] = useState([]);

//   const getSingleHistory = () => {
//     axios
//       .get(`http://localhost:5000/reservation/${userInfos._id}`)
//       .then((response) => {
//         console.log(response);
//         const myHistory = response.data;
//         setHistory(myHistory);
//       });
//   };

//   useEffect(() => getSingleHistory(), []);

//   //   const { userInfos, location, date, room, selectedSeat } =
//   //     useContext(AuthContext);

//   //   console.log(
//   //     userInfos._id,
//   //     // userInfos.first_name,
//   //     location,
//   //     date,
//   //     room,
//   //     selectedSeat
//   //   );

//   //   axios
//   //     .get(`http://localhost:5000/reservation/${userInfos._id}`)
//   //     .then((response) => console.log(response.data))
//   //     .catch((error) => console.log(error));

//   return (
//     <div>
//       {history.map((data) => (
//         <li key={data.id}></li>
//       ))}
//     </div>
//   );
// };

// export default History;
