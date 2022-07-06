import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from "@ionic/react";
import { key, lockOpen } from "ionicons/icons";
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
import DarkMode from "../components/DarkMode";

const Main = () => {
  const { isAuthenticated, location, room, selectedSeat, date, userInfos } =
    useContext(AuthContext);

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
              <IonTitle className="headline">
                Please <br />
                <a href="/login">
                  Login
                  <IonIcon icon={lockOpen} />
                </a>
                &nbsp; or &nbsp;
                <a href="/registration">
                  Sign-Up <IonIcon icon={key} />
                </a>
              </IonTitle>
            </div>
          </IonContent>
        </>
      )}
    </IonPage>
  );
};
export default Main;
