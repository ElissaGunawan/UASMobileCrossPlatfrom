import { IonContent, IonPage, IonAlert, IonItem, IonList, IonAvatar } from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import "./style.css";


const AccountSetting: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const USERNAME = 'username';
  const clicked = (text: string) => {
    console.log(`Clicked ${text}`);
  }

  const setUsername = (username?: string) => async (dispatch: React.Dispatch<any>) => {
    await setUsername(username);
    return ({
      type: 'set-username',
      username
    } as const);
  };

  return (
    <IonPage>
      <SideMenu prop={"AccountSetting"}/>
      <IonContent>
        {USERNAME&&
          (<div className="ion-padding-top ion-text-center">
            <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="avatar" />
            <h2>{ USERNAME }</h2>
            <IonList inset>
              <IonItem onClick={() => clicked('Update Picture')}>Update Picture</IonItem>
              <IonItem onClick={() => setShowAlert(true)}>Change Username</IonItem>
              <IonItem onClick={() => clicked('Change Password')}>Change Password</IonItem>
              <IonItem routerLink="/logout" routerDirection="none">Logout</IonItem>
            </IonList>
          </div>)
        }
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header="Change Username"
        buttons={[
          'Cancel',
          {
            text: 'Ok',
            handler: (data) => {
              setUsername(data.username);
            }
          }
        ]}
        inputs={[
          {
            type: 'text',
            name: 'username',
            value: USERNAME,
            placeholder: 'username'
          }
        ]}
        onDidDismiss={() => setShowAlert(false)}
      />
    </IonPage>
  );
};

export default AccountSetting;

