import {auth} from '../../pages/firebase-config'
import {sendPasswordResetEmail} from "firebase/auth";



  export default function ForgotPassword(prop) {
    sendPasswordResetEmail(auth, prop)
        .then(() => {
            console.log(prop)
        })
        .catch((error) => {
            console.log("failed")
        });
  }

