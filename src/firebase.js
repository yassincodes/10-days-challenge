import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWhlkQdAByvV6ZOOxfZGF3tdsuZfcDNQs",
  authDomain: "days-13605.firebaseapp.com",
  projectId: "days-13605",
  storageBucket: "days-13605.appspot.com",
  messagingSenderId: "394367202255",
  appId: "1:394367202255:web:c2daf895f4cc2c2f3c18ba",
  databaseURL: "https://days-13605-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = firebase.initializeApp(firebaseConfig);

export default firebase;
