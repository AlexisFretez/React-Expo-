import firebase from "firebase";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyC_M3r7E4ltA_2DrRa52WXC1fAxxsYcuVA",
  authDomain: "react-native-firebase-87a84.firebaseapp.com",
  databaseURL: "https://react-native-firebase-87a84.firebaseio.com",
  projectId: "react-native-firebase-87a84",
  storageBucket: "react-native-firebase-87a84.appspot.com",
  messagingSenderId: "980962207391",
  appId: "1:980962207391:web:800c939aae78f4b0a0e4aa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default {
  firebase,
  db
};
