import { IonCard, IonModal, IonCol, IonContent, IonGrid, IonImg, IonLabel, IonPage, IonRow, IonIcon, IonButton, IonSegment } from "@ionic/react";
// import "../firebaseConfig";
import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import { beer,  cartOutline, chevronForward, fish, leaf, locationOutline, pizza, settingsOutline, timeOutline, star } from "ionicons/icons";
import image from "../Asset/image2.jpg"
import "./Home.css"


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage>
      <SideMenu prop={"Home"} />
      <IonContent class="ion-text-center">
      
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol>
                <img src={image}/>
            </IonCol>
          </IonRow>
          {/* <IonSlides id="slider" options={{ slidesPerView: "auto", zoom: true, grabCursor: true }} className={ `${ styles.categorySlider }` }>
					<CategorySlide name="Burgers" path="/category/burgers" image="/assets/burgers.webp" />
					<CategorySlide name="Sides" path="/category/sides" image="/assets/sides.png" />
					<CategorySlide name="Chicken" path="/category/chicken" image="/assets/chicken2.jpeg" />
					<CategorySlide name="Drinks" path="/category/drinks" image="/assets/drink.webp" />
					<CategorySlide name="Veggie" path="/category/veggie" image="/assets/veggie3.png" />
					<CategorySlide name="Kids" path="/category/kids" image="/assets/kids.png" />
				</IonSlides> */}
          <IonRow>
            <IonCol>
              <IonButton id="order" color="success" routerLink="/order">
                <IonIcon icon={cartOutline} style={{ color: "white" }}></IonIcon>
                <p style={{ color: "white" }}>Order</p>
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton id="order" color="warning" routerLink="./history">
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
          <IonCard>
            <IonCol class="ion-text-center">
              <IonImg src="https://asset.kompas.com/crops/K3yRtga4WYTNBr2kHKNe8GILyn0=/0x0:4044x2696/375x240/data/photo/2021/03/19/6054801497f35.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <IonCard>
                    <p></p>
                  </IonCard>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Steak <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>
            </IonCard>

            <IonCol class="ion-text-center">
              <IonImg src="https://asset.kompas.com/crops/89gV9XIgLw8Tzv2im_h4C9aEjd8=/0x0:993x662/750x500/data/photo/2021/03/27/605ed24c33816.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Sate <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://www.masakapahariini.com/wp-content/uploads/2018/04/resep-gulai-kambing-sederhana-780x440.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Gulai <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/750x500/photo/2020/10/03/3500578333.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
            </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Mie Ayam<IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://img.okezone.com/content/2019/01/01/298/1998591/camilan-sore-bikin-somay-ayam-yuk-474wMQ3PPv.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  <p>asdasd</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Siomay<IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>


            <IonCol class="ion-text-center">
              <IonImg src="https://img.okezone.com/content/2020/11/29/298/2318085/apa-sebabnya-harga-lobster-di-restoran-begitu-mahal-kCDTBMfX9Z.jpg"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                <IonCard>
                  <p color="warning">bagong</p>
                  </IonCard>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Seafood <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol>

            <IonCol class="ion-text-center">
              <IonImg src="https://awsimages.detik.net.id/community/media/visual/2019/07/02/497e52a2-52b1-4e93-8b27-a2fc75027f44_43.jpeg?w=700&q=90"></IonImg>
              <IonLabel className="type-text" color="dark" position="floating">
                <IonModal isOpen={showModal}>
                  
                  <p color="warning">Hallo</p>
                  <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                </IonModal>
                <IonButton expand="block" className="ion-margin-top" onClick={() => setShowModal(true)}>Nasi Tim <IonIcon icon={ chevronForward }/></IonButton>
              </IonLabel>
            </IonCol> 

        </IonGrid>
        </IonCard>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
