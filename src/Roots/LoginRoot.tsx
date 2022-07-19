import { Redirect, Route } from 'react-router-dom';
import {IonRouterOutlet, setupIonicReact} from '@ionic/react';
import FirstPage from '../pages/Authentication/FirstPage'
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register'
import Username from '../pages/Authentication/Username';
import ForgotPasswordPage from '../pages/Authentication/ForgotPassword'



setupIonicReact();

const LoginRoot: React.FC = () => (
 
        <IonRouterOutlet>
          <Route exact path="/">
            <Redirect to={"/firstpage"} />
          </Route>

          <Route exact path="/firstpage">
            <FirstPage />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/username">
            <Username />
          </Route>

          <Route exact path="/forgotpasswordpage">
            <ForgotPasswordPage />
          </Route>

        </IonRouterOutlet>
)

export default LoginRoot;
