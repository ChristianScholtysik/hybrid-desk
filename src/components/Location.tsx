import {
  IonButton,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./main.css";
const Location: React.FC = () => {
  return (
    <IonContent className="container">
      <div className="container">
        <IonTitle className="headline">Choose your Location</IonTitle>
        <div className="container"></div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton router-direction type="submit" id="Berlin">
                Berlin
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton router-direction type="submit" id="Hamburg">
                Hamburg
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton router-direction type="submit" id="Munich">
                Munich
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonContent>
  );
};
export default Location;
