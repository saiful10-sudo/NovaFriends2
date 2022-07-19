import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { heartOutline, chatbubbleEllipsesOutline, text} from 'ionicons/icons';
import '../theme/Home-Discover.css';
import React, { useState } from 'react';


const Discover: React.FC = () => {
    // const [buttonText, setButtonText] = useState('Click');

    // function handleClick() {
    //     setButtonText('New text');
    //   }

  return (
    <IonPage>


    {/* Top NavBar. Looking into adding 'total users' in top right */}
      <IonHeader>
        <IonToolbar>
            <IonTitle className="home--header--name">
                Discover
            </IonTitle>
        </IonToolbar>
      </IonHeader>


    {/* Initiate the rest of the page content, excluding the bottom tabs. */}
      <IonContent fullscreen>

    {/* Header when page is at the top, dissappears as users scroll down */}
      <IonHeader collapse="condense">
          <IonToolbar>
            <div className="title--load--container">
                <IonTitle className="title--load">Discover</IonTitle>
                <IonButton className="discover--button users" routerLink="/users" color="clear">
                    723 Users
                </IonButton>    
            </div>
          </IonToolbar>
        </IonHeader>
      

        {/* Div for an entire post */}
        <div className="post--container">


            {/* Div for the top information: small profile pic, username, and follow button */}
            <div className="post--topbar--container">
                <div className="username--container">
                    <img className="small--user--profile--pic" src="assets/images/small-pic.jpeg" />
                    <IonButton routerLink="/UserProfile" className="username--image--tag" fill="clear">@elonmusk</IonButton>
                </div>
                <div className="discover--follow--button--container">
                    <IonButton fill="clear" className="discover--button">
                        Follow
                    </IonButton>
                </div>
            </div>
            

            {/* Div for the post picture */}
            <div className="picture--container">
                <img src="assets/images/Mykonos.jpeg" />
            </div>


            {/* Div for all the info below the post pic */}
            <div className="info--container">

                <div className="buttons--container">
                {/* LIKES and COMMENTS LEFT - ICONS*/}
                    <div className="button--container--left">
                        <IonButtons slot="primary">
                            <IonButton color="dark">
                                <IonIcon size="large" slot="start" icon={heartOutline} />
                            </IonButton>
                            <IonButton routerLink="/post" color="dark">
                                <IonIcon size="large" slot="end" icon={chatbubbleEllipsesOutline} />
                            </IonButton>   
                        </IonButtons>
                    </div>

                    {/* LIKES and COMMENTS RIGHT - TEXT*/}
                    <div className="button--container--right">
                        <IonButtons slot="secondary">
                            <IonButton routerLink="/likes" className="likes--button right--buttons" color="dark">
                                100 Likes
                            </IonButton>
                            <IonButton routerLink="/post" className="likes--button right--buttons" color="dark">
                                18 Comments
                            </IonButton>   
                        </IonButtons>
                    </div>
                </div>

                {/* Description */}
                <p className="image--description">
                    <span className="username--image--description">elonmusk</span>  Have you ever see a more classic Mykonos pic? 🐠 
                </p>
            </div>


        </div>


      </IonContent>
    </IonPage>
  );
};

export default Discover;
