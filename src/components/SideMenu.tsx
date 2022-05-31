import { IonButtons, IonMenuButton, IonText, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
import { home, settingsOutline, refresh, compass } from "ionicons/icons";
import React from "react";

const SideMenu = (data: { prop: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="side-menu" color="dark"></IonMenuButton>
            <IonText className="center">{data.prop}</IonText>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu content-id="main" menu-id="side-menu">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem routerLink="/home">
              <IonIcon icon={home} slot="start" color="dark"></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem routerLink="/accountsetting">
              <IonIcon icon={settingsOutline} slot="start" color="dark"></IonIcon>
              <IonLabel>Account Setting</IonLabel>
            </IonItem>
            <IonItem routerLink="/history">
              <IonIcon icon={refresh} slot="start" color="dark"></IonIcon>
              <IonLabel>History</IonLabel>
            </IonItem>
            <IonItem routerLink="/outlet">
              <IonIcon icon={compass} slot="start" color="dark"></IonIcon>
              <IonLabel>Outlet</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonRouterOutlet id="main"></IonRouterOutlet>
    </>
  );
};

export default SideMenu;
