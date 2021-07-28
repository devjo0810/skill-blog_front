import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "./plugins";
import vuetify from "./plugins/vuetify";
import "./filters";

import "./assets/sass/main.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount("#app");