import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import { useState } from 'react';
import '../theme/Notifications-Likes.css';


const Notifications: React.FC = () => {

    const router = useIonRouter()


// Set button to Follow/Following on click
    const [buttonFollow, setButtonFollow] = useState(true)
    const [buttonFollowStyling, setButtonFollowStyling] = useState(true)

    function declareButtonState() {
        setButtonFollow(!buttonFollow)
        setButtonFollowStyling(!buttonFollowStyling)
    }



  return (
    <IonPage>

      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader className="notif--header">
        <IonToolbar>
          <IonTitle className="notif--header--name">Notifications
          </IonTitle>
            <IonButtons className="home--btn--container" slot="secondary">
                <IonButton onClick={ () => router.goBack() } routerDirection="back" color="dark">
                    <IonIcon size="large" slot="start" icon={chevronBackOutline} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>


      {/* Initiate the rest of the page content, excluding the bottom tabs. */}
      <IonContent fullscreen>


        {/* 1 Notification Container 1 */}
        <div className="notif--container">
            <img className="pic--notif" src="assets/images/small-pic.jpeg" />

                <div className="notif--text--container">
                    <IonButton routerLink="/UserProfile" fill="clear" className="username--button">
                        <span className="notif--user">@bengorski</span>
                    </IonButton>
                    <p className="text--notif">followed you</p>
                </div>

                <IonButton onClick={declareButtonState} fill="clear" className={buttonFollowStyling ? "button--notif--follow" : "button--notif--follow following" }>
                    <span>{buttonFollow ? "follow" : "following"}</span>
                </IonButton>
        </div>

        {/* 2 Notification Container 2 (Will get deleted when functionality is programmed) */}
        <div className="notif--container">
            <img className="pic--notif" src="assets/images/small-pic.jpeg" />
            <div className="notif--text--container">
                <IonButton routerLink="/UserProfile" fill="clear" className="username--button">
                    <span className="notif--user">@bengorski</span>
                </IonButton>
                <p className="text--notif">commented on your post</p>
            </div>
        </div>


        {/* 3 Notification Container 3 (Will get deleted when functionality is programmed) */}
        <div className="notif--container">
            <img className="pic--notif" src="assets/images/small-pic.jpeg" />
            <div className="notif--text--container">
                <IonButton routerLink="/UserProfile" fill="clear" className="username--button">
                    <span className="notif--user">@bengorski</span>
                </IonButton>
                <p className="text--notif">liked your post</p>
            </div>
        </div>



      </IonContent>
    </IonPage>
  );
};

export default Notifications;