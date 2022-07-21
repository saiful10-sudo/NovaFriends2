import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider, IonButtons, IonFabButton, IonButton } from '@ionic/react';
import '../../theme/Login.css';

const Login: React.FC = () => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      
      <IonContent className="page" fullscreen>
          <div className="page--container">
          <img className="logo" src="assets/images/Logo.svg" />
              <IonButton className="login--button one" fill='clear' routerLink="/login">Login</IonButton>
              <IonButton className="login--button two" fill='clear' routerLink="/register">Register!</IonButton>
          </div>
          <img className="logo" src="assets/images/FirstPage.svg" />
      </IonContent>
    </IonPage>
  );
};

export default Login