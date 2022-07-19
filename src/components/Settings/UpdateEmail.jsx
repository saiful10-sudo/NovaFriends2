import {auth} from '../../pages/firebase-config'
import {updateEmail} from "firebase/auth";



  export default function UpdateEmail(prop) {
    updateEmail(auth.currentUser, "user@example.com").then(() => {
        console.log(prop)
      }).catch((error) => {
        console.log("failed")
      });
  }





