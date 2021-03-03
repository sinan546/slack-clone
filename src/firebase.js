import firebase from "firebase";

//for analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB23Va3Eg--mo4s3_QCNJKws4U7kPgQTKw",
  authDomain: "slack-clone-15.firebaseapp.com",
  projectId: "slack-clone-15",
  storageBucket: "slack-clone-15.appspot.com",
  messagingSenderId: "370530886306",
  appId: "1:370530886306:web:7a9f10ebbff13c3eb82dfb",
  measurementId: "G-XKMKL84HX2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
