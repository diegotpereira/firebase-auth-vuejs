import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:071cfc41cb14e5579f6321",
    measurementId: "G-YRC48RKVL0"
}


firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(usuario => {
    store.dispatch('fetchUser', usuario)
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");