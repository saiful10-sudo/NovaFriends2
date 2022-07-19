import { IonApp, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {auth} from './pages/firebase-config'
import {onAuthStateChanged} from "firebase/auth";


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// import TabRoot from './TabRoot';
import TabRoot from './Roots/TabRoot';
import LoginRoot from './Roots/LoginRoot';
import { useEffect, useState } from 'react';



setupIonicReact();


const App: React.FC = () => {

  const [validUser, SetValidUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
         SetValidUser(true)
      } else {
        SetValidUser(false)
      }
    });
  }, []);


  return (
  <IonApp>
    <IonReactRouter>
    {validUser ? <TabRoot /> : <LoginRoot />}
    </IonReactRouter>
  </IonApp>
  )
};

export default App