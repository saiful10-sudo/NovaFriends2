import { IonApp, setupIonicReact, IonRouterOutlet, IonLoading} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {auth, db} from './pages/firebase-config'
import { AuthProvider, FirestoreProvider, useSigninCheck} from "reactfire";

import HomeRoot from './Roots/HomeRoot';
import LoginRoot from './Roots/LoginRoot';


// /* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /* Theme variables */
import './theme/variables.css';



setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <AuthProvider sdk={auth}>
        <FirestoreProvider sdk={db}>
          <IonReactRouter>
              <AuthWrapper fallback={<LoginRoot />}>
                <HomeRoot />
              </AuthWrapper>
          </IonReactRouter>
        </FirestoreProvider> 
      </AuthProvider>
    </IonApp>
  )
};


export const AuthWrapper = ({
  children,
  fallback,
}: React.PropsWithChildren<{ fallback: JSX.Element }>): JSX.Element => {
  const { status, data: signInCheckResult } = useSigninCheck();
  if (!children) {
    throw new Error("Children must be provided");
  }
  if (status === "loading") {
    return <></>;
  } 
  else if (signInCheckResult.signedIn === true) {
    return children as JSX.Element;
  }

  return fallback;
}


export default App