import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB_l5F-Uq42BdpXsvk_X3gZf7t2_0-KH_A",
  authDomain: "linkedin-clone-fcc3b.firebaseapp.com",
  projectId: "linkedin-clone-fcc3b",
  storageBucket: "linkedin-clone-fcc3b.appspot.com",
  messagingSenderId: "770456721941",
  appId: "1:770456721941:web:698bfe71224a9a37c74c1c"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebaseApp.auth()

export {db,auth}