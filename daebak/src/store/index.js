import Vue from "vue";
import Vuex from "vuex";
import order from "./module/order.js";
import date from "./module/date.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        order,
        date,
    },
});
