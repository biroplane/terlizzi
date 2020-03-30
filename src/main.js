import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCZsrYaksjOcoZqjFkrkvpPwInsFWR8rBk",
  authDomain: "vueauth-4c147.firebaseapp.com",
  databaseURL: "https://vueauth-4c147.firebaseio.com",
  projectId: "vueauth-4c147",
  storageBucket: "vueauth-4c147.appspot.com",
  messagingSenderId: "258820703466",
  appId: "1:258820703466:web:1152a45a7a2550ceac0393"
});

Vue.config.productionTip = false;
//let app;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
