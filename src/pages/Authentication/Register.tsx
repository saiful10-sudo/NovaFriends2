import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonButton } from '@ionic/react';
import '../../theme/Login.css';

import RegisterUsername from '../../components/Auth/RegisterUsername';
import SendVerification from '../../components/Auth/EmailVerification';

import {useHistory} from 'react-router-dom';
import {auth} from '../firebase-config'
import {createUserWithEmailAndPassword} from "firebase/auth";
import ErrorText from '../../components/ErrorText';








const Register: React.FC = () => {

  const [registerEmail, SetRegisterEmail] = useState("")
  const [routerLink, setRouterLink] = useState('')
  const [registerUsername, SetRegisterUsername] = useState("")
  const [registerPassword, SetRegisterPassword] = useState("")
  const [error, SetError] = useState("")
  const [registering, setRegistering] = useState(false)
  const history = useHistory()

  function Register() {
    setRegistering(true)

    if (error !== '') SetError('');

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    if (user) {
      history.replace('/Home')
      RegisterUsername(registerUsername)
      SendVerification()
    }
    
    })
    .catch((error) => {
    const errorCode = error.code;
    if (errorCode.includes('auth/weak-password'))
    {
      SetError("Password must contain at least 6 characters, got it?")
    }
    else if (errorCode.includes('auth/email-already-in-use'))
    {
     SetError("Email already exists, hombre.")
    }
    else if (errorCode.includes('auth/invalid-email'))
    {
      SetError("Not a valid email, c'mon man!")
    }
    else 
    {
      SetError('Unable to register user. Pretty please try again.')
    }

    setRegistering(false)
    });
  }



return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="notif--header--name">Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
        <IonList>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput onIonChange={e => SetRegisterEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput onIonChange={e => SetRegisterUsername(e.detail.value!)} />
          </IonItem>
          <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput onIonChange={e => SetRegisterPassword(e.detail.value!)} />
          </IonItem>
        </IonList>
        <div className="error--text">
          <ErrorText error={error} />
        </div>
        <div className='page--container'>
          <IonButton className="login--button two" onClick={Register} fill='clear'>Register!</IonButton>
          <div className='small--container'>
            <p>or</p>
            <a className="login--button--small" href='/login'>Login</a>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register