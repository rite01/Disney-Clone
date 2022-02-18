import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCtaIEuLGG7YPE5ViuSXjwouPG-bG1m_V8",
  authDomain: "disneyplus-clone-761b6.firebaseapp.com",
  projectId: "disneyplus-clone-761b6",
  storageBucket: "disneyplus-clone-761b6.appspot.com",
  messagingSenderId: "599071776317",
  appId: "1:599071776317:web:2e86d7efc5594ac0f79454",
  measurementId: "G-FXSBKLSE6F"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
export {auth, provider}
export default db;