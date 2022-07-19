import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, useIonRouter } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import '../theme/Notifications-Likes.css';

const Likes: React.FC = () => {

  const router = useIonRouter()

  return (

    <IonPage>

      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader className="notif--header">
        <IonToolbar>
          <IonTitle className="notif--header--name">Likes
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


      {/* LIKE styling div */}
        <div className="notif--container">
            <img className="pic--notif" src="assets/images/small-pic.jpeg" />
            <div className="notif--text--container">
            <IonButton routerLink="/UserProfile" fill="clear" className="username--button likes">
                <span className="likes--username">@elonmusk</span>
            </IonButton>
        </div>
            </div>

      </IonContent>
    </IonPage>
  );
};

export default Likes;