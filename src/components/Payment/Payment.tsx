import {
  IonCard,
  IonLabel,
  IonButton,
  IonIcon,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonCardContent,
  IonGrid,
  IonPage,
  IonImg,
  IonAlert,
  IonButtons,
  IonHeader,
  IonItem,
  IonList,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import { home, arrowBack, refresh } from "ionicons/icons";
import "./style.css";
const Payment: React.FC = () => {
  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButton routerLink="/detail" color="warning">
            <IonIcon icon={arrowBack} size="small" slot="icon-only" color="dark"></IonIcon>
          </IonButton>
          <IonTitle>Payment</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-text-center">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle color="dark">Payment</IonCardSubtitle>

            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCardTitle color="dark">Total</IonCardTitle>
                </IonCol>
                <IonCol>
                  <IonCardTitle color="dark">Rp 65.000</IonCardTitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCardContent color="dark">Payment only can be cash, please go to cashier for the details payment</IonCardContent>
        </IonCard>
        <IonButton color="warning" routerLink="/detail">
          <IonLabel color="dark">Edit Order</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Payment;
