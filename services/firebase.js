import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  //local
  apiKey: "AIzaSyB_upCRqcUN6GmGE0R7lHwJbYkBzMOzYak",
  authDomain: "chat-faribase.firebaseapp.com",
  projectId: "chat-faribase",
  storageBucket: "chat-faribase.appspot.com",
  messagingSenderId: "330776319220",
  appId: "1:330776319220:web:396e7e22d55fcc9c3abaa1",
  measurementId: "G-CNZRX54HLY",
};

// const firebaseConfig = {
//   // produção
//   apiKey: "AIzaSyDXxdHbewTLrlW3h2NOgLHJJ1wjfcPG7do",
//   authDomain: "chat-service-546d9.firebaseapp.com",
//   projectId: "chat-service-546d9",
//   storageBucket: "chat-service-546d9.appspot.com",
//   messagingSenderId: "378889652055",
//   appId: "1:378889652055:web:b7b87c24d24c7149afa012",
//   measurementId: "G-KW20PRXMPR",
// };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
