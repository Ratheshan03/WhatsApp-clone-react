import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGahyP3bocCaegb6hCXw6YllykdBYPLy0",
    authDomain: "whatsapp-clone-f32ca.firebaseapp.com",
    projectId: "whatsapp-clone-f32ca",
    storageBucket: "whatsapp-clone-f32ca.appspot.com",
    messagingSenderId: "414576801290",
    appId: "1:414576801290:web:ffc3b11bfa7940ea36d1f3",
    measurementId: "G-WGCRJ17XY5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;