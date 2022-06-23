import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
 
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
 
  IonList,
  
} from "@ionic/react";

const LoginForm: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
  <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
         
          <IonItem>
            <IonInput
            
              value={text}
              placeholder="Enter Name"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Enter Email"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
      </IonContent>
      </>
  );
};

export default LoginForm;
