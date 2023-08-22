import firebase from 'firebase'

const settings = {timestampsInSnapshots: true}

const config = {
    apiKey: "AIzaSyD3IsitriW1IUYRmzd5p3V2Sqo3Wv-NxDA",
    authDomain: "portfolio-3aad7.firebaseapp.com",
    projectId: "portfolio-3aad7",
    storageBucket: "portfolio-3aad7.appspot.com",
    messagingSenderId: "39983132043",
    appId: "1:39983132043:web:94247874a826c46d2bd38e",
    measurementId: "G-C2BCVKPH32"
}

firebase.initializeApp(config)

export default firebase