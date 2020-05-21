import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDGYRjLF7bgl8-u8JcUCuTyueeyeIWK3jM",
    authDomain: "abcde-62c3f.firebaseapp.com",
    databaseURL: "https://abcde-62c3f.firebaseio.com",
    projectId: "abcde-62c3f",
    storageBucket: "abcde-62c3f.appspot.com",
    messagingSenderId: "954591862627",
    appId: "1:954591862627:web:f2c32aa550fd8328e17d56"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

