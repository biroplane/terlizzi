import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyCZsrYaksjOcoZqjFkrkvpPwInsFWR8rBk",
  authDomain: "vueauth-4c147.firebaseapp.com",
  databaseURL: "https://vueauth-4c147.firebaseio.com",
  projectId: "vueauth-4c147",
  storageBucket: "vueauth-4c147.appspot.com",
  messagingSenderId: "258820703466",
  appId: "1:258820703466:web:1152a45a7a2550ceac0393"
});

export const db = app.database();
