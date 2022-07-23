// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDXKC94PrhfMSqZhiSP4woAjQyaefo04Zo",
//   authDomain: "video-chat-app-e6df8.firebaseapp.com",
//   projectId: "video-chat-app-e6df8",
//   storageBucket: "video-chat-app-e6df8.appspot.com",
//   messagingSenderId: "734517142432",
//   appId: "1:734517142432:web:80ffbb2b3126e65ffa7ac5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = app.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };

import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyDXKC94PrhfMSqZhiSP4woAjQyaefo04Zo",
  authDomain: "video-chat-app-e6df8.firebaseapp.com",
  projectId: "video-chat-app-e6df8",
  storageBucket: "video-chat-app-e6df8.appspot.com",
  messagingSenderId: "734517142432",
  appId: "1:734517142432:web:80ffbb2b3126e65ffa7ac5",
};

export default config;
