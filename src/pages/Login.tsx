import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonInput, IonLoading} from '@ionic/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import '../firebaseConfig'
// import {Toast} from "@capacitor/toast"

const Home: React.FC = () => {

    // const [busy, setBusy] = useState<Boolean>(false)

    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')

    // async function loginUser() {
    //     const res = await loginUser(username, password)
    //     if(!res) {
    //         toast('You have logged in!')
    //     }
    //     setBusy(false)
    // }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            {/* <IonLoading message="Please wait.." duration={0} isOpen={busy} /> */}
            <IonContent className="ion-padding">
                {/* <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
                <IonInput placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} /> */}
                {/* <IonButton onClick={login}>Login</IonButton> */}

                <p>New Here? <Link to="/Register">Register</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Home