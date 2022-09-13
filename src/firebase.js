import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDREOdI6ycZSCmtvbyOHAohF7p-ENcMIas",
    authDomain: "whatsapp-clone-f7b49.firebaseapp.com",
    projectId: "whatsapp-clone-f7b49",
    storageBucket: "whatsapp-clone-f7b49.appspot.com",
    messagingSenderId: "468349954236",
    appId: "1:468349954236:web:eed1eba53f7c5b39c148b9",
    measurementId: "G-4RVE8QSKD9"
  };




  const firebaseApp = initializeApp(firebaseConfig);
  const db =getFirestore(firebaseApp);
  
 
  const authorization = getAuth(firebaseApp);
  // const provider = new firebase.GoogleAuthProvider();

  export {authorization};
  export default db;