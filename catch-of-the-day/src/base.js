import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCR3hJPcjGrvT8fmybQlRIoEnsH_jb_MQ8",
  authDomain: "catch-of-the-day-seror-cab44.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-seror-cab44.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;