import { IonPage } from "@ionic/react";
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
import { Redirect } from "react-router";

const Main = () => {
  // const [userInfo, setUserInfo] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

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
    <>
      {isAuthenticated ? (
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
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
export default Main;
