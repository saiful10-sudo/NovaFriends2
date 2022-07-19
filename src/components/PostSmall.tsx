
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon} from '@ionic/react';
import { heartOutline, cameraOutline, chatbubbleEllipsesOutline} from 'ionicons/icons';
import '../theme/Home-Discover.css';
import nFormatter from './NumberFormat';



// // Props:

// username
// profile_pic
// picture
// likes 
// comments
// description

export default function RenderHomePagePosts(props: any) {

  return (
    <div className="post--container">


        <div className="post--topbar--container">
            <div className="username--container">
                <img className="small--user--profile--pic" src={props.profile_pic} />
                <IonButton routerLink="/UserProfile" className="username--image--tag" fill="clear">
                    <span>{props.username}</span>
                    </IonButton>
            </div>
        </div>  

        <div className="picture--container">
                <img src={props.image}/>
        </div>


        <div className="info--container">
            <div className="buttons--container">

                
                <div className="button--container--left">
                    <IonButtons slot="primary">
                        <IonButton className="icon--buttons" color="dark">
                            <IonIcon size="large" slot="start" icon={heartOutline} />
                        </IonButton>
                        <IonButton className="icon--buttons" routerLink="/post" color="dark">
                            <IonIcon size="large" slot="end" icon={chatbubbleEllipsesOutline} />
                        </IonButton>   
                    </IonButtons>
                </div>

                <div className="button--container--right">
                    <IonButtons slot="secondary">
                        <IonButton routerLink="/likes" className="likes--button right--buttons" fill='clear'>
                            {`${nFormatter(props.likes,1)} Likes`}
                        </IonButton>
                        <IonButton routerLink="/post" className="likes--button right--buttons" fill='clear'>
                            {`${nFormatter(props.comments,1)} Comments`}
                        </IonButton>   
                    </IonButtons>
                </div>
            </div>

            <p className="image--description">
                <span className="username--image--description">{props.username.substring(1)}</span>  
                {props.description}
            </p>
        </div>

    </div>
  )
};

