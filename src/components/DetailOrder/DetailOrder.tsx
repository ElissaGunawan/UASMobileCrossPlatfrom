import { IonCard, IonLabel, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow } from "@ionic/react";
import React, { useState } from "react";
import { home, arrowBack, refresh, share, add, remove } from "ionicons/icons";
import "./style.css";
const DetailOrder: React.FC = () => {
  return (
    <IonPage id="account-page">
      <IonHeader>
        <IonToolbar>
          <IonButton routerLink="/home" color="warning">
            <IonIcon icon={arrowBack} size="small" slot="icon-only" color="dark"></IonIcon>
          </IonButton>
          <IonTitle>Detail Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <div id="parent-detail">
                <div id="location">
                  <span>
                    <IonIcon icon={share} size="small" slot="icon-only"></IonIcon>
                  </span>
                  <span>Share Your Location</span>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div id="items">
                <div id="title">
                  <p>Sate Kambing</p>
                  <p>Rp.30.000</p>
                </div>
                <div id="count">
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={remove} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                  <p>2</p>
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={add} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div id="items">
                <div id="title">
                  <p>Es Teh</p>
                  <p>Rp.5000</p>
                </div>
                <div id="count">
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={remove} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                  <p>3</p>
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={add} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <div id="items">
                <div id="title">
                  <p>Gulai Kambing</p>
                  <p>Rp.20.000</p>
                </div>
                <div id="count">
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={remove} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                  <p>1</p>
                  <IonButton style={{ margin: 0 }}>
                    <IonIcon icon={add} size="small" slot="icon-only"></IonIcon>
                  </IonButton>
                </div>
              </div>
            </IonCol>
          </IonRow>
          <IonRow id='last'>
            <IonCol>
              <div id="items">
                <div id="title">
                  <p>Total</p>
                  <p>Rp.65.000</p>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div id={"button-shop"}>
          <IonButton color="warning" routerLink="/payment">
            <IonLabel color="dark">Payment</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DetailOrder;
