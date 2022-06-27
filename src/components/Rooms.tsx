import {
  IonButton,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonTitle,
} from "@ionic/react";
import "./main.css";
function Rooms() {
  return (
    <IonContent>
      <div className="container">
        <IonTitle className="headline">What do you need?</IonTitle>
        <div className="container"></div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton router-direction type="submit" id="desk">
                Workplace
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton router-direction type="submit" id="meetingroom">
                Meetingroom
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
}
export default Rooms;
