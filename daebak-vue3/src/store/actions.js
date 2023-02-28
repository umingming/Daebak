import { fetchUserInfo, fetchOrders } from '../api/index.js';

export default {
    FETCH_USER({ commit }) {
        commit('SET_USER', fetchUserInfo());
    },
    FETCH_ORDERS({ commit }) {
        commit('SET_ORDERS', fetchOrders());
    },
}