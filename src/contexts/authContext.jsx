import React, { useState } from "react";
import firebase from "firebase/compat/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const authContext = React.createContext();

function AuthContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [uid, setUid] = useState("");

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
  const auth = getAuth(app);

  // google authentication
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setDisplayName(result.user.displayName);
        setEmail(result.user.email);
        setPhotoURL(result.user.photoURL);
        setUid(result.user.uid);

        localStorage.setItem("this_uid", result.user.uid);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // sign out
  const logout = async () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("this_uid");
        window.location.reload();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <authContext.Provider
      value={{
        email,
        displayName,
        uid,
        photoURL,
        auth,
        signInWithGoogle,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { AuthContextProvider, authContext };