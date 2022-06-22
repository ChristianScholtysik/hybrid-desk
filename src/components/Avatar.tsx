import {
  IonAvatar,
  IonFabButton,
  IonFab,
  IonFabList,
  IonIcon,
} from "@ionic/react";
import { book, person } from "ionicons/icons";

import "./Header.css";

export const Avatar: React.FC = () => (
  <IonFab color="secondary" vertical="top" horizontal="end" slot="fixed" edge>
    <IonFabButton color="secondary">
      <IonAvatar class="Avatar">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
          alt="bild"
        />
      </IonAvatar>
    </IonFabButton>
    <IonFabList side="bottom">
      <IonFabButton className="IonFabButton">
        {" "}
        test
        <IonIcon icon={person} className="button-icon" />
      </IonFabButton>
      <div className="profile_button">Profile</div>

      <IonFabButton>
        <IonIcon icon={book} className="button-icon" />
      </IonFabButton>
      <div className="history_button">History</div>
    </IonFabList>
  </IonFab>
);
