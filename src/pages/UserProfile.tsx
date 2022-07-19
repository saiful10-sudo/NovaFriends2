
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, useIonRouter, IonItemSliding} from '@ionic/react';
import {chevronBackOutline} from 'ionicons/icons';
import '../theme/Profile-UserProfile.css';
import RenderUser from '../components/UserProfileInformation'
import { useState, useEffect } from 'react';
import {db} from './firebase-config' 
import {collection, doc, getDocs} from 'firebase/firestore/lite'



const UserProfile: React.FC = () => {
    
    const router = useIonRouter()

    // Extract values from Firebase
    const [users, setUsers] = useState<object[]>([])
    const usersCollectionRef = collection(db, 'users')

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef)
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getUsers()
    }, [])

    const getUserTile = users.map((item: any) => {
      return (
          <RenderUser
              key={item.id}
              username={item.username}
              display_name={item.display_name}
              profile_pic={item.profile_pic}
              bio={item.bio}
              followers={item.followers}
              following={item.following}
              posts={item.posts}
              
          />
      )
    })   


  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle className="user--profile--header--name">Ben Gorski</IonTitle>
            <IonButtons className="home--btn--container" slot="secondary">
              <IonButton onClick={ () => router.goBack() } routerDirection="back" color="dark">
                  <IonIcon size="large" slot="start" icon={chevronBackOutline} />
              </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {getUserTile}
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
