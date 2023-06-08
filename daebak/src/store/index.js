import Vue from "vue";
import Vuex from "vuex";
import order from "./module/order.js";
import date from "./module/date.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loggedIn: false,
        toast: {
            type: "",
            content: "",
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.loggedIn;
        },
        getToastType(state) {
            return state.toast.type;
        },
        getToastContent(state) {
            return state.toast.content;
        },
    },
    actions: {},
    mutations: {
        SET_LOGIN_STATUS(state, loggedIn) {
            state.loggedIn = loggedIn;
            sessionStorage.setItem("loggedIn", loggedIn);
        },
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
