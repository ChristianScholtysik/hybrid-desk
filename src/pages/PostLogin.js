// import {
//   IonPage,
//   IonContent,
//   IonItem,
//   IonInput,
//   IonButton,
//   IonGrid,
//   IonList,
//   IonCol,
//   IonLabel,
//   IonTitle,
//   IonIcon,
//   IonRow,
// } from "@ionic/react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { alarm, home, navigate, person } from "ionicons/icons";
// import Header from "../components/Header";
// import ProfileImage from "../components/ProfileImage";
// // import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// // import "../components/main.css";
// import "./PostLogin.css";
// import Profile from "../components/Profile";

// const PostLogin = () => {
//   //Wenn User authentifiziert, wird Header Component angezeigt
//   //Wenn User nicht eingeloggt, zur Landing Page navigieren

//   const { isAuthenticated, userInfos } = useContext(AuthContext);
//   console.log(userInfos);

//   return (
//     <IonPage>
//       {isAuthenticated && userInfos ? (
//         <>
//           <Header />

//           <Swiper
//             direction={"vertical"}
//             pagination={{
//               clickable: true,
//             }}
//             // modules={[Pagination]}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <Profile />
//             </SwiperSlide>
//           </Swiper>

//           {/*
//             </div>
//             <ProfileImage />
//             <IonItem>
//               <IonInput type="file" />
//             </IonItem>
//             <IonButton className="ion-margin-top" type="submit">
//               Upload Profile Image
//             </IonButton>
//             First Name: {userInfos.first_name}
//             <IonButton className="ion-margin-top">Change First Name</IonButton>
//             <br />
//             Last Name: {userInfos.last_name}{" "}
//             <IonButton className="ion-margin-top">Change Last Name</IonButton>
//             <br />
//             Email: {userInfos.email}{" "}
//             <IonButton className="ion-margin-top">Change Email</IonButton>
//             <br />
//             <h1>Du bist eingeloggt und kannst buchen</h1> */}
//         </>
//       ) : (
//         // <Redirect to="/login" />
//         <h1>You are not logged in</h1>
//       )}
//     </IonPage>
//   );
// };

// export default PostLogin;
