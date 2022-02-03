import firebase from "firebase/app";
import "firebase/auth";
export const auth=firebase.initializeApp ({
    apiKey: "AIzaSyAv-RUifxKiw9keHo_7oayOtkPqKdwUlsg",
    authDomain: "letschat-18fe0.firebaseapp.com",
    projectId: "letschat-18fe0",
    storageBucket: "letschat-18fe0.appspot.com",
    messagingSenderId: "993596572903",
    appId: "1:993596572903:web:9f2d559b68e182a6100e42"
  }).auth();