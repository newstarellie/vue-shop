// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
const database = getDatabase(app);

const text = "Hello, Firebase!"; // 你想要傳遞的文本參數

fetch('https://us-central1-vueshop-955e1.cloudfunctions.net/addMessage?text=' + text)
  .then(response => response.json())
  .then(data => {
    console.log(data); // 在瀏覽器的開發者工具中查看回傳的結果
  })
  .catch(error => {
    console.error('Error:', error);
  });


export {
  database
}