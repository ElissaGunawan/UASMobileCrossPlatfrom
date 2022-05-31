import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonInput, IonLoading} from '@ionic/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Toast } from '@capacitor/toast'
// import '../firebaseConfig'

const Register: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    const [busy, setBusy] = useState<Boolean>(false)

    // async function register() {
    //     setBusy(true)
    //     if (password !== cpassword) {
    //         return tToast('Password do not match')
    //     }
    //     if (username.trim() === '' || password.trim() === '') {
    //         return tToast('Username and password are required')
    //     }

    //     const res = await registerUser(, password)
    //     if(res) {
    //         toast('You have registered successfully!')
    //     }
    //     setBusy(false)
    // }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {/* <IonLoading message="Registration in progress!" duration={0} isOpen={busy} /> */}
                <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
                {/* <IonInput type="Password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
                <IonInput type="Password" placeholder="Confirm Password" onIonChange={(e: any) => setCPassword(e.target.value)} /> */}
                {/* <IonButton onClick={register}>Register</IonButton> */}

                <p>Already have an account? <Link to="/login">Login</Link></p>
            </IonContent>
        </IonPage>
    )
}

export default Register; 