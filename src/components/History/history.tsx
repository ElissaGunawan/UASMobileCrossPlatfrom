import { IonCard, IonLabel, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow } from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import { home, settingsOutline, refresh } from "ionicons/icons";
const History: React.FC = () => {
  return (
    <IonPage id="account-page">
      <SideMenu prop={"history"} />
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2218</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2219</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2220</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2221</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2222</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2223</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2224</IonLabel>
              </IonButton>
              <IonButton style={{ width: "100%" }} color="warning" routerLink="/detail">
                <IonLabel color="dark">Order#2225</IonLabel>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default History;
