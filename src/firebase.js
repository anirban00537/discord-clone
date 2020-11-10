import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHsnRsgQRCvWx_VQUQd88wH9w_y7PmFSs",
  authDomain: "discord-clone-bb460.firebaseapp.com",
  databaseURL: "https://discord-clone-bb460.firebaseio.com",
  projectId: "discord-clone-bb460",
  storageBucket: "discord-clone-bb460.appspot.com",
  messagingSenderId: "440345128063",
  appId: "1:440345128063:web:bfd4c113f4a73b0928a34a",
  measurementId: "G-EHCS8WDY9S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
