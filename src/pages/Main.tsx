import { IonPage } from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Location from "../components/Location";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "../components/Header";
import { Navigation, Pagination } from "swiper";
import DateTime from "../components/DateTime";
import { Overview } from "../components/Overview";
import Seats from "../components/Seats";
import Rooms from "../components/Rooms";

const Main: React.FC = () => {
  return (
    <IonPage>
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

        <SwiperSlide>
          <DateTime />
        </SwiperSlide>

        <SwiperSlide>
          <Rooms />
        </SwiperSlide>

        <SwiperSlide>
          <Seats />
        </SwiperSlide>
        <SwiperSlide>
          <Overview />
        </SwiperSlide>
      </Swiper>
    </IonPage>
  );
};
export default Main;
