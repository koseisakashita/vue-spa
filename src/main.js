import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmpDaped4uLRLnhRcVFlrIzJH2H_8j18",
  authDomain: "vue-spa-b3848.firebaseapp.com",
  databaseURL: "https://vue-spa-b3848.firebaseio.com",
  projectId: "vue-spa-b3848",
  storageBucket: "vue-spa-b3848.appspot.com",
  messagingSenderId: "103794940236",
  appId: "1:103794940236:web:b1d496ed6d16a8adc997e9",
  measurementId: "G-5F1MEL3HJZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
