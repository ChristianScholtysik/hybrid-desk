import { IonButton, IonTitle } from "@ionic/react";
import "./main.css";
const Location: React.FC = () => {
  return (
    <div className="container">
      <IonTitle className="headline">Choose your location</IonTitle>

      <IonButton router-direction type="submit" id="hamburg">
        Hamburg
      </IonButton>

      <IonButton router-direction type="submit" id="berlin">
        Berlin
      </IonButton>

      <IonButton router-direction type="submit" id="munich">
        Munich
      </IonButton>
    </div>
  );
};
export default Location;
