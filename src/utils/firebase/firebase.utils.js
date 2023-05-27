import { initializeApp } from 'firebase/app';
import { 
        getAuth, 
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpo0WCfWO5hiI1ug4cmr2SXeIQewUP9r4",
    authDomain: "crwn-clothing-db-51306.firebaseapp.com",
    projectId: "crwn-clothing-db-51306",
    storageBucket: "crwn-clothing-db-51306.appspot.com",
    messagingSenderId: "1068649775929",
    appId: "1:1068649775929:web:127a362d1dac6a6ef65ee8"
  };


  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);