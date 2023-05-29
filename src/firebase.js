// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD81zKsJk1cPMyw2HUYnyQnTZ8lS6WgrrE",
  authDomain: "vueshop-955e1.firebaseapp.com",
  databaseURL: "https://vueshop-955e1-default-rtdb.firebaseio.com",
  projectId: "vueshop-955e1",
  storageBucket: "vueshop-955e1.appspot.com",
  messagingSenderId: "833229035584",
  appId: "1:833229035584:web:2a2f325e7a2787d81da7a5",
  measurementId: "G-GCE28MKY7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// 印出messagesRef 的資料
const messagesRef = collection(db, "messages");
getDocs(messagesRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });


export {
  db
}