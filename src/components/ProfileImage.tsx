import { IonContent, IonAvatar } from "@ionic/react";
import "./Header.css";

const ProfileImage = () => (
  <IonContent className="">
    <IonAvatar class="Avatar2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkspTGDaYI0SloxfqGWTJMZYniyE8q9oqahw&usqp=CAU"
        alt="2bild"
      />
    </IonAvatar>
  </IonContent>
);
export default ProfileImage;
