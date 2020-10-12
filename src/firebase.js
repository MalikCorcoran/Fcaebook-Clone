import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnpeLQ42UsWoq0o6wJts9s3AW4-4eegcs",
  authDomain: "facebook-clone-df21b.firebaseapp.com",
  databaseURL: "https://facebook-clone-df21b.firebaseio.com",
  projectId: "facebook-clone-df21b",
  storageBucket: "facebook-clone-df21b.appspot.com",
  messagingSenderId: "952732849961",
  appId: "1:952732849961:web:d7e1b80ad298a07b2a0938",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// https://facebook-clone-df21b.web.app
