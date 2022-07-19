import { IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar, 
        IonButtons, 
        IonButton, 
        IonIcon, 
        useIonRouter } from '@ionic/react';

import {chevronBackOutline, heartOutline,chatbubbleEllipsesOutline} from 'ionicons/icons';
import '../theme/Post.css';


const Post: React.FC = () => {

    const router = useIonRouter()

  return (
    <IonPage>

      {/* NavBar information. Need to add a settings IonButton. */}
      <IonHeader className="post--header">
        <IonToolbar>
          <IonTitle className="notif--header--name">elonmusk Post
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


        {/* Div for an entire post */}
        <div className="post--container">


            {/* Div for the post picture */}
            <div className="picture--container">
                <img src="assets/images/Mykonos.jpeg" />
            </div>


            {/* Div for all the info below the post pic */}
            <div className="post--container">
                {/* Buttons */}
                <div className="buttons--container">

                    {/* BUTTONS LEFT */}
                    <div className="button--container--left">
                        <IonButtons slot="primary">
                            <IonButton color="dark">
                                <IonIcon size="large" slot="start" icon={heartOutline} />
                            </IonButton>
                            <IonButton color="dark">
                                <IonIcon size="large" slot="end" icon={chatbubbleEllipsesOutline} />
                            </IonButton>   
                        </IonButtons>
                    </div>

                    {/* BUTTONS RIGHT */}
                    <div className="button--container--right">
                        <IonButtons slot="secondary">
                            <IonButton routerLink="/likes" className="likes--button right--buttons" color="dark">
                                100 Likes
                            </IonButton>
                            <IonButton className="likes--button right--buttons" color="dark">
                                18 Comments
                            </IonButton>   
                        </IonButtons>
                    </div>

                </div>

                {/* DESCRIPTION */}
                <p className="image--description">
                    <span className="username--image--description">elonmusk</span>  Have you ever see a more classic Mykonos pic? 🐠 
                </p>
            </div>


            {/* All THE COMMENTS */}
            <div className="all--comments--container">

                {/* 1 COMMENT 1 */}
                <div className="comment--container">
                    <div className="pic--wrapper">
                        <img className="pic--comment" src="assets/images/small-pic.jpeg" />
                    </div>
                    <div className="post--username--container">
                        <IonButton class="post--username" routerLink="/UserProfile" fill="clear">
                            <span>@elonmusk</span>
                        </IonButton>
                    </div>
                    <div className="time">
                        <p>42 min</p>
                    </div>
                    <div className="comment">
                        <p>Wow this is such a cool pic! I really want to go! Wow this is such a cool pic! I really want to go!</p>
                    </div>
                </div>

                {/* 2 COMMENT 2 (will delete when program in functionality) */}
                <div className="comment--container">
                    <div className="pic--wrapper">
                        <img className="pic--comment" src="assets/images/small-pic.jpeg" />
                    </div>
                    <div className="post--username--container">
                        <IonButton class="post--username" routerLink="/UserProfile" fill="clear">
                            <span>@elonmuskmuskmuskmusk</span>
                        </IonButton>
                    </div>
                    <div className="time">
                        <p>42 min</p>
                    </div>
                    <div className="comment">
                        <p>Wow this is such a cool pic! I really want to go! Wow this is such a cool pic! I really want to go!</p>
                    </div>
                </div>

            </div>


        </div>


      </IonContent>
    </IonPage>
  );
};

export default Post;