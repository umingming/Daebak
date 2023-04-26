import { fetchOrders } from "@/api/index.js";
import { $compareMonth } from "@/utils/common.js";

const state = () => ({
    orders: [],
});

const getters = {
    orders(state) {
        return state.orders;
    },
    currentMonthOrders(state) {
        const date = new Date();
        const monthOrders =
            state.orders.filter((i) => $compareMonth(date, i.date)) || [];
        return monthOrders;
    },
    currentMonthValues(state, getters) {
        return (type) => {
            const monthOrders = getters.currentMonthOrders;
            return getMonthValuesByOrders(monthOrders, type);
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
            const { data } = await fetchOrders();
            if (data.result === "SUCCESS") {
                const successData = data.data.map((i) => {
                    return {
                        date: i.orderDate,
                        title: i.content,
                        value: i.price,
                        amount: i.quantity,
                        cate: i.type,
                        orderId: i.orderId,
                    };
                });
                commit("SET_ORDERS", successData);
            }
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
