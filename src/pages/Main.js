import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Location from "../components/Location";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "../components/Header";
import { Pagination } from "swiper";
import DateTime from "../components/DateTime";
import Overview from "../components/Overview";
import Seats from "../components/Seats";
import Rooms from "../components/Rooms";
import "./Login.css";
import "../components/main.css";
import Logo from "../components/img/HDisk_Logo.svg";

const Main = () => {
  const { isAuthenticated, location, room, selectedSeat, date, userInfos } =
    useContext(AuthContext);

  // const handleClick = async () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_API_URL}/info/me`, {
  //       headers: { token: token },
  //     });
  //     setUserInfo(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }

  return (
    <IonPage>
      {isAuthenticated && userInfos ? (
        <>
          <Header />

          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Location />
            </SwiperSlide>

            <SwiperSlide>{location && <DateTime />}</SwiperSlide>

            <SwiperSlide>{date && <Rooms />}</SwiperSlide>

            <SwiperSlide>{room && <Seats />}</SwiperSlide>
            <SwiperSlide>{selectedSeat && <Overview />}</SwiperSlide>
          </Swiper>
        </>
      ) : (
        // <Redirect to="/notlogged" />
        // <>
        // <NotLogged />
        // </>
        // <h1>Plase login or signup</h1>
        <>
          <IonContent className="container">
            <IonToolbar color="primary">
              <IonHeader>
                <IonTitle>
                  <img src={Logo} alt="Logo" className="logo" />
                </IonTitle>
              </IonHeader>
            </IonToolbar>
            <div className="container">
              <IonTitle className="healdine">
                Please <a href="/login">Login</a> or
                <a href="/registration"> Sign-Up</a>
              </IonTitle>
            </div>
          </IonContent>
        </>
      )}
    </IonPage>
  );
};
export default Main;
