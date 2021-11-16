import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDHbhA5wm5ZZ-FKgstbIphr1erAUreourM',
  authDomain: 'crwn-clothing-df747.firebaseapp.com',
  projectId: 'crwn-clothing-df747',
  storageBucket: 'crwn-clothing-df747.appspot.com',
  messagingSenderId: '897917142976',
  appId: '1:897917142976:web:7606e0ffb89063c9512a25',
  measurementId: 'G-TZF22YTDYC',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
