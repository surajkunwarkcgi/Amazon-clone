import firebase from "firebase";

const firebaseConfig = 
{
    apiKey: "AIzaSyCu5hD2exL5QLxV_MhTZ1g6buycAzNcx8A",
    authDomain: "clone-c9a56.firebaseapp.com",
    projectId: "clone-c9a56",
    storageBucket: "clone-c9a56.appspot.com",
    messagingSenderId: "269582805085",
    appId: "1:269582805085:web:6db1e8225e4aba29d945b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };