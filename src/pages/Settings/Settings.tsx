
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, useIonRouter, IonLabel, IonInput, IonNav, IonList } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import '../../theme/Notifications-Likes.css';

import {auth} from '../firebase-config'
import {signOut, updatePassword} from "firebase/auth";
import { useHistory } from 'react-router';
import { useState } from 'react';
import UpdatePassword from '../../components/Settings/UpdatePassword';
import UpdateEmail from '../../components/Settings/UpdateEmail';
import DeleteUser from '../../components/Settings/DeleteUser';


const Settings: React.FC = () => {

  const router = useIonRouter()
  const history = useHistory()
  const user = auth.currentUser;
  const [newPassword, setNewPassword] = useState('')
  const [newEmail, setNewEmail] = useState('')

  function SignOut() {
    signOut(auth).then(() => {
      history.replace('./login')
    }).catch((error) => {
    });
  }

  function runUpdatePassword() {
    UpdatePassword(newPassword)
  }

  function runUpdateEmail() {
    UpdateEmail(newEmail)
  }
 

 


  
  return (


    <IonPage>
      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader className="notif--header">
        <IonToolbar>
          <IonTitle className="notif--header--name">Settings
          </IonTitle>
            <IonButtons className="home--btn--container" slot="secondary">
                <IonButton onClick={ () => router.goBack() } routerDirection="back" color="dark">
                    <IonIcon size="large" slot="start" icon={chevronBackOutline} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>


      {/* Initiate the rest of the page content, excluding the bottom tabs. */}
      <IonContent fullscreen>
          <IonLabel position="floating">New Password</IonLabel>
          <IonInput onIonChange={e => setNewPassword(e.detail.value!)} />

          <IonLabel position="floating">New Email</IonLabel>
          <IonInput onIonChange={e => setNewEmail(e.detail.value!)} />
          
          <IonButton className="login--button page" onClick={runUpdatePassword} fill='clear'>Update Password</IonButton>
          <IonButton className="login--button page" onClick={runUpdateEmail} fill='clear'>Update Email</IonButton>
          <IonButton className="login--button page" onClick={SignOut} fill='clear'>SignOut</IonButton>
          <IonButton className="login--button page" onClick={DeleteUser} fill='clear'>DeleteAccount</IonButton>
      </IonContent>
    </IonPage>


  );
};

export default Settings;