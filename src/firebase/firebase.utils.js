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

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) {
      console.log('no userAuth');
      return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      console.log('no snapShot');
      const {displayName,email}= userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

