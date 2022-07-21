import {auth} from '../../pages/firebase-config'
import { deleteUser } from "firebase/auth";
import {useHistory} from 'react-router-dom';



export default function DeleteUser() {
    const history = useHistory()

    deleteUser(auth.currentUser).then(() => {
        console.log("success")
        history.replace('./register')
    }).catch((error) => {
        console.log("failed")
    });
    }