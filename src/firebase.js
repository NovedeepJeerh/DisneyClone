import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBpgma9p7eYtloSxUplOTpFdEs7itXtyuk",
    authDomain: "disneyplus-8de27.firebaseapp.com",
    projectId: "disneyplus-8de27",
    storageBucket: "disneyplus-8de27.appspot.com",
    messagingSenderId: "940076839094",
    appId: "1:940076839094:web:b31d675d5872ad28dd3617"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;