import {
  IonCard,
  IonLabel,
  IonButton,
  IonIcon,
  IonCol,
  IonContent,
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
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import { home, settingsOutline, refresh } from "ionicons/icons";
import "./style.css";
const Outlet: React.FC = () => {
  return (
    <IonPage id="account-page">
      <SideMenu prop={"Outlet"} />
      <IonContent class="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard style={{ width: "90%" }} class="">
                <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlfnLMoGN8aFkjQJOF5VPvy_x9ThwZrSTCw&usqp=CAU"></IonImg>
                <IonCol class="">
                  <IonLabel className="type-text" color="dark" position="floating">
                    <IonRow>
                      <IonCol>
                        <h3>Venezuela</h3>
                      </IonCol>
                      <IonCol>
                        <h3>12312344124</h3>
                      </IonCol>
                    </IonRow>
                  </IonLabel>
                </IonCol>
              </IonCard>
              <IonCard style={{ width: "90%" }} class="">
                <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlfnLMoGN8aFkjQJOF5VPvy_x9ThwZrSTCw&usqp=CAU"></IonImg>
                <IonCol class="">
                  <IonLabel className="type-text" color="dark" position="floating">
                    <IonRow>
                      <IonCol>
                        <h3>Akibahara</h3>
                      </IonCol>
                      <IonCol>
                        <h3>123331344124</h3>
                      </IonCol>
                    </IonRow>
                  </IonLabel>
                </IonCol>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Outlet;
