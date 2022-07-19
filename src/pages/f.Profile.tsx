import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import {settingsOutline} from 'ionicons/icons';
import '../theme/Profile-UserProfile.css';
import {auth} from './firebase-config'

const Profile: React.FC = () => {
  return (
    <IonPage>

      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="profile--header--name">{auth.currentUser?.displayName}</IonTitle>
          <IonButtons className="home--btn--container" slot="primary">

            <IonButton routerLink="/Settings" color="dark">
                <IonIcon size="large" slot="end" icon={settingsOutline} />
            </IonButton>
  
            </IonButtons>
        </IonToolbar>
      </IonHeader>


      {/* Initiate the rest of the page content, excluding the bottom tabs. */}
      <IonContent fullscreen>


        <div className="profile--info">

            {/* Div for the main profile pic */}
            <div className="profile--pic--container">
              <img className="profile--pic" src="assets/images/headshot.jpeg" alt="" />
            </div>

            {/* Following */}
            <div className="following stats">
              <h2 className="stats--info">35</h2>
              <h3 className="stats--desc">following</h3>
            </div>

            {/* Followers */}
            <div className="followers stats">
              <h2 className="stats--info">120</h2>
              <h3 className="stats--desc">followers</h3>
            </div>

            {/* Stories */}
            <div className="stories stats">
              <h2 className="stats--info">13</h2>
              <h3 className="stats--desc">posts</h3>
            </div>

            {/* Username */}
            <div className="username">
              <h1>Ben Gorski</h1>
              </div>

            {/* Button which is either: Edit Profile, Follow, Unfollow */}
            <div className="button-container">
              <button className="profile--button you">invite others!</button>
            </div>
            
            {/* Bio information */}
            <div className="bio">
                <p className="bio--text">
                    I like to build cool things using Ionic React 😁
                    Klubby | Co-Founder 😎
                    NovaFriends | Head Honcho </p>
            </div>

        {/* Closes entire profile div */}
        </div>


        {/* Div to house the posts on your profile page. Will need to adjust later. */}
        <div className="profile--tile--images">

          <div className="profile--image--container">
            <img  className="actual--image" src="assets/images/headshot.jpeg" alt="" />
          </div>  

            <div className="profile--image--container">
          <img  className="actual--image" src="assets/images/headshot.jpeg" alt="" />
          </div> 

          <div className="profile--image--container">
            <img  className="actual--image" src="assets/images/headshot.jpeg" alt="" />
          </div> 

          <div className="profile--image--container">
            <img  className="actual--image" src="assets/images/headshot.jpeg" alt="" />
          </div>

        </div>


      </IonContent>
    </IonPage>
  );
};

export default Profile;
