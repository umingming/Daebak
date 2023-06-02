import order from "@/api/order.js";
import { $compareMonth, $sortByLatest } from "@/utils/common.js";

const date = new Date();
const state = () => ({
    orders: [],
});

const getters = {
    orders(state) {
        return $sortByLatest(state.orders);
    },
    currentMonthOrders(state) {
        const monthOrders =
            state.orders.filter((i) => $compareMonth(date, i.date)) || [];
        return $sortByLatest(monthOrders);
    },
    currentMonthValues(state, getters) {
        return (type) => {
            const index = date.getDate() + 2;
            const monthOrders = getters.currentMonthOrders;
            const monthValues = getMonthValuesByOrders(monthOrders, type);
            return monthValues.slice(0, index);
        };
    },
    lastMonthValues(state) {
        return (type) => {
            const date = new Date();
            date.setMonth(date.getMonth() - 1);
            const monthOrders =
                state.orders.filter((i) => $compareMonth(date, i.date)) || [];
            return getMonthValuesByOrders(monthOrders, type);
        };
    },
};

const actions = {
    async FETCH_ORDERS({ commit }) {
        try {
            const user_id = sessionStorage.getItem("user_id");
            const { data } = await order.get({ user_id });
            commit("SET_ORDERS", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    async ADD_ORDERS({ commit }, params) {
        try {
            const user_id = sessionStorage.getItem("user_id");
            const { data } = await order.add({ user_id, params });
            commit("ADD_ORDERS", data);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
};

const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data;
    },
    ADD_ORDERS(state, data) {
        state.orders = [...state.orders, ...data];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};

function getMonthValuesByOrders(orders, type) {
    const values = Array.from({ length: 32 }, () => 0);
    orders.forEach((i) => {
        const index = +i.date.split("-").at(-1) - 1;
        const value = values[index] + +i[type];
        values[index] = value;
    });
    return values.map((i) => i || 0);
}
