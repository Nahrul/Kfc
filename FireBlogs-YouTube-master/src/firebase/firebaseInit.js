import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZfUGVC8Q9OieU8qmZLbuzyicS8F4Mbog",
    authDomain: "fireblogsyt-1fcd4.firebaseapp.com",
    projectId: "fireblogsyt-1fcd4",
    storageBucket: "fireblogsyt-1fcd4.appspot.com",
    messagingSenderId: "530939232142",
    appId: "1:530939232142:web:4c19fe4b19b1be41a02edf",
    measurementId: "G-0WM5D19WKB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();