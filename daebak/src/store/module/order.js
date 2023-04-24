import { fetchOrders } from "@/api/index.js";
import { compareMonth } from "@/utils/common.js";

const state = () => ({
    orders: [],
});

const getters = {
    orders(state) {
        return state.orders;
    },
    currentMonthOrders(state) {
        const date = new Date();
        return state.orders.filter((i) => compareMonth(date, i.date));
    },
    lastMonthOrders(state) {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        return state.orders.filter((i) => compareMonth(date, i.date));
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
