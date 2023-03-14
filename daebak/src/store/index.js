import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";
import order from "./module/order.js";
import date from "./module/date.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        list: [],
    },
    mutations,
    getters: {
        fetchedUser(state) {
            return state.user;
        },
        fetchedList(state) {
            return state.list;
        },
    },
    actions,
    modules: {
        order,
        date,
    },
});
