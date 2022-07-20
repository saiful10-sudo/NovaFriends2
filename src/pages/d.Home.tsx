
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonRouterOutlet} from '@ionic/react';
import { heartOutline, cameraOutline } from 'ionicons/icons';
import RenderHomePagePosts from '../components/PostSmall'
import '../theme/Home-Discover.css';
import { useState, useEffect} from 'react';
import {db} from './firebase-config' 
import {collection, doc, getDocs} from 'firebase/firestore/lite'



const Home: React.FC = () => {
      // Extract values from Firebase
      const [posts, setPosts] = useState<object[]>([])
      const usersCollectionRef = collection(db, 'posts')

      useEffect(() => {
          const getPosts = async () => {
            const data = await getDocs(usersCollectionRef)
            setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
          }

          getPosts()
      }, [])

  
  const getPostTile = posts.map((item: any) => {
    return (
        <RenderHomePagePosts
            key={item.id}
            username={item.username}
            description={item.description}
            image ={item.image}
        />
    )
  })          

    
  return ( 
    
    <IonPage>
    {/* NavBar Section */}
      <IonHeader>
        <IonToolbar>
          <IonTitle className="home--header--name">Your Feed</IonTitle>
          <IonButtons className="home--btn--container" slot="primary">
            <IonButton routerLink="/postimage" color="dark">
                <IonIcon size="large" slot="start" icon={cameraOutline}/>
            </IonButton>
            <IonButton routerLink="/notifications" color="dark">
                <IonIcon size="large" slot="end" icon={heartOutline} />
            </IonButton>   
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {getPostTile}
      </IonContent>
    </IonPage>
  );
};
export default Home;
