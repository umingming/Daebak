import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes/index.js";
import { store } from "./store/index.js";
import excel from "vue-excel-export";

Vue.config.productionTip = false;
Vue.use(excel);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
