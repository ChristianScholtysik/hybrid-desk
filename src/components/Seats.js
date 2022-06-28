import React from "react";
import { IonContent, IonTitle } from "@ionic/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./main.css";

const Seats = () => {
  const { bookingUrl, setBookingUrl } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log(`${bookingUrl}&seat=${e.target.id}`);
    setBookingUrl(`${bookingUrl}&seat=${e.target.id}`); //? leitet query params ein, alle weiteren werden mit & verkettet
  };
  return (
    <IonContent>
      <div className="container">
        <IonTitle className="headline">choose your Seat...</IonTitle>

        <div className="box">
          <div className="group">
            <div>
              <button className="btn" id="" onClick={handleClick}>
                1
              </button>
              <button className="btn">2</button>
            </div>
            <div>
              <button
                className="btn"
                id="62a2468974200652dc2378e4"
                onClick={handleClick}
              >
                3
              </button>
              <button className="btn">4</button>
            </div>
          </div>
          <div className="group">
            <div>
              <button className="btn">5</button>
              <button className="btn">6</button>
            </div>
            <div>
              <button className="btn">7</button>
              <button className="btn">8</button>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="group">
            <div>
              <button className="btn">8</button>
              <button className="btn">9</button>
            </div>
            <div>
              <button className="btn">10</button>
              <button className="btn">11</button>
            </div>
          </div>
          <div className="group">
            <div>
              <button className="btn">12</button>
              <button className="btn">13</button>
            </div>
            <div>
              <button className="btn">14</button>
              <button className="btn">15</button>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Seats;
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
