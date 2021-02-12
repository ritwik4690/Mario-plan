import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBPetsC5Gv_ak-bhEQfxAv2jhlY24lSROs",
  authDomain: "ritwik-mario-plan.firebaseapp.com",
  projectId: "ritwik-mario-plan",
  storageBucket: "ritwik-mario-plan.appspot.com",
  messagingSenderId: "656442558096",
  appId: "1:656442558096:web:18b0e32737ad8803db7a15",
  measurementId: "G-HMD9V68TWJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
