import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButtons, IonButton, useIonRouter, IonIcon } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import '../../theme/Login.css';
import ErrorText from '../../components/ErrorText';
import ForgotPassword from '../../components/Auth/ForgotPassword';




const ForgotPasswordPage: React.FC = () => {

  
  const router = useIonRouter()
  const [passwordEmail, SetPasswordEmail] = useState("")
  const [error, SetError] = useState("")
  const history = useHistory()

 
  function SendEmail() {
    ForgotPassword(passwordEmail)
  }

  

  return (
    <IonPage>
      <IonHeader className="notif--header">
        <IonToolbar>
          <IonTitle className="notif--header--name">Forgot Password
          </IonTitle>
            <IonButtons className="home--btn--container" slot="secondary">
                <IonButton href="./Login" color="dark">
                    <IonIcon size="large" slot="start" icon={chevronBackOutline} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>  
      <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={e => SetPasswordEmail(e.detail.value!)} />
          </IonItem>
        </IonList>
        <ErrorText error={error} />
        <div className='page--container'>
          <IonButton className="login--button page" onClick={SendEmail} fill='clear'>Send Email</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default ForgotPasswordPage