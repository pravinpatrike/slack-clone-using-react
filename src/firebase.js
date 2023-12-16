import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8mETjCAnsnbaO5D1vWLpi01qnkq754iM",
    authDomain: "slack-clone-be699.firebaseapp.com",
    projectId: "slack-clone-be699",
    storageBucket: "slack-clone-be699.appspot.com",
    messagingSenderId: "62387088247",
    appId: "1:62387088247:web:fc51e8ec10c9c6a7224f72",
    measurementId: "G-QBHXFK5CKC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db;

