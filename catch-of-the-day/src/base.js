import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDp0ZX1WPBe5c33HvXjvGzN1w67K0RyADU",
  authDomain: "catch-of-the-day-seror.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-seror.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;