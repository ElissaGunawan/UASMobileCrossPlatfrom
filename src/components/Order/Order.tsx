import { IonCard, IonButton, IonIcon, IonCol, IonContent, IonGrid, IonPage, IonImg, IonAlert, IonButtons, IonHeader, IonItem, IonList, IonMenuButton, IonTitle, IonToolbar, IonRow, IonLabel, IonModal, IonText, IonCardTitle, IonChip } from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import { add, remove, cart, beer, fish, leaf, pizza, star } from "ionicons/icons";
import "./style.css";


const Order: React.FC = () => {

  return (
    <IonPage id="account-page">
      <SideMenu prop={"Order Menu"} />
      <IonContent class="ion-text-center" style={{ position: "relative" }}>
        <IonGrid>

          <IonChip color='danger'>
          <IonIcon icon={star} ></IonIcon>            
          <IonLabel>
              Recommended
            </IonLabel>
          </IonChip>

          <IonChip color='danger'>
          <IonIcon icon={fish} ></IonIcon>            
            <IonLabel>
              Seafood
            </IonLabel>
          </IonChip>

          <IonChip color='danger'>
          <IonIcon icon={pizza} ></IonIcon>            
            <IonLabel>
              Pizza
            </IonLabel>
          </IonChip>

          <IonChip color='danger'>
          <IonIcon icon={leaf} ></IonIcon>            
            <IonLabel>
              Vegetables
            </IonLabel>
          </IonChip>

          <IonChip color='danger'>
          <IonIcon icon={beer} ></IonIcon>            
            <IonLabel>
              Beverage
            </IonLabel>
          </IonChip>
          
        <IonCard>
          <IonRow>
            <IonCol>
              <IonImg src="https://asset.kompas.com/crops/K3yRtga4WYTNBr2kHKNe8GILyn0=/0x0:4044x2696/375x240/data/photo/2021/03/19/6054801497f35.jpg"/>
                <IonText>
                  
                </IonText>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ remove }/></IonButton>
                <IonButton className="ion-margin-top">Steak</IonButton>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ add } ></IonIcon></IonButton>
            </IonCol>
            </IonRow>
            </IonCard>
            
            <IonCard>
          <IonRow>
            <IonCol>
              <IonImg src="https://asset.kompas.com/crops/K3yRtga4WYTNBr2kHKNe8GILyn0=/0x0:4044x2696/375x240/data/photo/2021/03/19/6054801497f35.jpg"/>
                <IonText>
                  
                </IonText>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ remove }/></IonButton>
                <IonButton className="ion-margin-top">Steak</IonButton>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ add } ></IonIcon></IonButton>
            </IonCol>
            </IonRow>
            </IonCard>

            <IonCard>
          <IonRow>
            <IonCol>
              <IonImg src="https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana-780x440.jpg"/>
                <IonText>
                  
                </IonText>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ remove }/></IonButton>
                <IonButton className="ion-margin-top">Gulai</IonButton>
                <IonButton className="ion-margin-top"><IonIcon slot="icon-only" icon={ add } ></IonIcon></IonButton>
            </IonCol>
            </IonRow>
            </IonCard>
            
        </IonGrid>
        <div id={"button-shop"}>
          <IonButton color="warning" routerLink="/detail">
            <IonIcon icon={cart} size="large" slot="icon-only" color="dark"></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Order;

