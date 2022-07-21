import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonSearchbar } from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import '../theme/Users.css';
import React, { useState } from 'react';


const Users: React.FC = () => {
  
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>

      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader className="users--header">
        <IonToolbar>
          <IonTitle className="users--header--name">Users
          </IonTitle>
            <IonButtons className="users--btn--container" slot="secondary">
                <IonButton routerLink="/discover" routerDirection="back" color="dark">
                    <IonIcon size="large" slot="start" icon={chevronBackOutline} />
                </IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>


      {/* Initiate the rest of the page content, excluding the bottom tabs. */}
      <IonContent fullscreen>


      {/* SEARCHBAR */}
      <IonSearchbar className="searchbar--users" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>


      {/* USER STYLING CONTAINER */}
        <div className="users--container">
            <img className="pic--users" src="assets/images/small-pic.jpeg" />
            <div className="users--text--container">
                <IonButton routerLink="/UserProfile" fill="clear" className="users--button likes">
                  <span className="likes--username">@elonmusk</span>
                </IonButton>
            </div>
        </div>


      </IonContent>
    </IonPage>
  );
};

export default Users;