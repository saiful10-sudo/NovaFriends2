import {auth} from '../../pages/firebase-config'
import { deleteUser } from "firebase/auth";




export default function DeleteUser() {
    deleteUser(auth.currentUser).then(() => {
        console.log("success")
    }).catch((error) => {
        console.log("failed")
    });
}