import Vue from "vue";
import Vuex from "vuex";
import order from "./module/order.js";
import date from "./module/date.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        toast: {
            type: "",
            content: "",
        },
    },
    getters: {
        getToastType(state) {
            return state.toast.type;
        },
        getToastContent(state) {
            return state.toast.content;
        },
    },
    actions: {},
    mutations: {
        SET_TOAST(state, data) {
            const { type = "", content = "" } = data;
            state.toast = { type, content };
        },
    },
    modules: {
        order,
        date,
    },
});
