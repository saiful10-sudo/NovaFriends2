import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButtons, IonButton } from '@ionic/react';
import '../../theme/Login.css';
import {auth} from '../firebase-config'
import {signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import ErrorText from '../../components/ErrorText';




const Login: React.FC = () => {

  

  const [loginEmail, SetLoginEmail] = useState("")
  const [loginPassword, SetLoginPassword] = useState("")

  const [user, setUser] = useState({})

  const [error, SetError] = useState("")

  const history = useHistory()

  const [signingIn, setSigningIn] = useState(false)

  const [loggedIn, setLoggedIn] = useState(false)



  function SignIn() {
    if (error !== '') SetError('');

    setSigningIn(true)

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    setLoggedIn(true)
    history.replace('../d.home')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setSigningIn(false)
    SetError('Unable to sign in. Please try again.')
  });
  }

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="notif--header--name">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={e => SetLoginEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput onIonChange={e => SetLoginPassword(e.detail.value!)} />
          </IonItem>
        </IonList>

        <div className="error--text">
          <ErrorText error={error} />
        </div>
        <a className="login--forgot--password" href='/forgotpasswordpage'>Forgot Password?</a>
        <div className='page--container'>
          <IonButton className="login--button page" onClick={SignIn} fill='clear'>Login</IonButton>
          <div className='small--container page'>
            <p>or</p>
          <a className="login--button--small" href='/register'>Register</a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Login
