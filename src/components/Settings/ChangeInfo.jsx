import {auth} from '../../pages/firebase-config'
import {updateProfile } from "firebase/auth";



function ChangeDisplayName() {
updateProfile(auth.currentUser, {
  displayName: "Jane Q. User"
}).then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
}

function ChangeDisplayPic() {
    updateProfile(auth.currentUser, {
      photoURL: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800"
    }).then(() => {
      console.log("change pic successful")
    }).catch((error) => {
      // An error occurred
      // ...
    });
    }


export {ChangeDisplayName, ChangeDisplayPic}