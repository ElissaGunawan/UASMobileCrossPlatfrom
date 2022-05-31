import { IonCard, IonModal, IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonIcon, IonButton, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonText, AnimationBuilder } from "@ionic/react";
import { title } from "process";
import React, { ComponentProps, useState } from "react";
import SideMenu from "../components/SideMenu";
import { beer,  cartOutline, chevronForward, fish, leaf, locationOutline, pizza, settingsOutline, timeOutline, star, call, heart, pin } from "ionicons/icons";
import image from "../Asset/image2.jpg"
import "./Home.css"



const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <SideMenu prop={"Vegetables"} />
      <IonContent class="ion-text-center">
      
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
                <img src={image}/>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="order" color="success" routerLink="./order">
                <IonIcon icon={cartOutline} style={{ color: "white" }}></IonIcon>
                <p style={{ color: "white" }}>Order</p>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton id="order" color="warning" routerLink="/history">
                <IonIcon icon={timeOutline} style={{ color: "white" }} ></IonIcon>
                <p style={{ color: "white" }}>History</p>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton id="order" color="secondary" routerLink="./outlet">
                <IonIcon icon={locationOutline}></IonIcon>
                <p>Outlet</p>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton id="order" color="tertiary" routerLink="./accountsetting">
              <IonIcon icon={settingsOutline}></IonIcon>
                <p>Account</p>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonCard >
        <IonSegment >

        <IonButton routerLink="./recommended">
          <IonIcon icon={star} /> 
        </IonButton>

              <IonButton routerLink="./seafood">
        <IonIcon icon={fish} /> 
              </IonButton>
              
              <IonButton routerLink="./pizza">
        <IonIcon icon={pizza} /> 
              </IonButton>

              <IonButton routerLink="./vegetables">
        <IonIcon icon={leaf} /> 
              </IonButton>

              <IonButton routerLink="./beverage">
        <IonIcon icon={beer} /> 
              </IonButton>


        </IonSegment>
        </IonCard>

        <IonGrid class="ion-text-center">
            <IonCol class="ion-text-center">
              <IonImg src="https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-001_1.jpg"></IonImg>
              <IonLabel className="type-text" position="floating">
                <IonModal isOpen={showModal}>
                  <p color="warning">asdasdsa</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Steak <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>


            <IonCol class="ion-text-center">
              <IonImg src="https://www.acouplecooks.com/wp-content/uploads/2021/04/Wedge-Salad-014.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  
                    <IonText className="type-text" color='warning'>hjdhgasjfbasjfh</IonText>
                  
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Sate <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://www.acouplecooks.com/wp-content/uploads/2018/11/Kale-Salad-001.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Gulai <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://www.acouplecooks.com/wp-content/uploads/2017/10/Apple-Pear-Salad-007-800x1000.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Mie Ayam<IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

        </IonGrid>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;

