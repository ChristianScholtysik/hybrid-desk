import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonToggle,
} from "@ionic/react";
import { moon } from "ionicons/icons";

const DarkMode: React.FC = () => {
  return (
    <IonContent class="main-content">
      <IonList>
        <IonItem lines="full">
          <IonIcon slot="start" icon={moon}></IonIcon>

          <IonToggle id="themeToggle" slot="start"></IonToggle>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

export default DarkMode;
