import { Redirect, Route } from 'react-router-dom';
import {
  setupIonicReact,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { homeOutline, globeOutline, personOutline} from 'ionicons/icons';

import Home from '../pages/d.Home';
import Discover from '../pages/e.Discover';
import Profile from '../pages/f.Profile';
import Likes from '../pages/Likes';
import Post from '../components/PostLarge';
import Users from '../pages/UsersList';
import UserProfile from '../pages/UserProfile';
import Notifications from '../pages/Notifications';
import Settings from '../pages/Settings/Settings';



setupIonicReact();

// TabRoot
const TabRoot: React.FC = () => (
    <IonTabs>
        <IonRouterOutlet>

          <Route exact path="/">
            <Redirect to="/d.home" />
          </Route>

          <Route exact path="/d.home">
            <Home />
          </Route>

          <Route exact path="/e.discover">
            <Discover />
          </Route>

          <Route exact path="/f.profile">
            <Profile />
          </Route>

          <Route exact path="/notifications">
            <Notifications />
          </Route>

          <Route exact path="/likes">
            <Likes />
          </Route>

          <Route exact path="/post">
            <Post />
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/userprofile">
            <UserProfile />
          </Route>

          <Route exact path="/settings">
            <Settings />
          </Route>


        </IonRouterOutlet>




      <IonTabBar slot="bottom">
          
          <IonTabButton tab="home" href="/d.home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="discover" href="/e.discover">
            <IonIcon icon={globeOutline} />
            <IonLabel>Discover</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/f.profile">
            <IonIcon icon={personOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          
        </IonTabBar>

    </IonTabs>
  );

  export default TabRoot