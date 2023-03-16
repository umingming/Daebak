import { fetchOrders } from "@/api/index.js";
import { formatISODate, isDateInMonth } from "@/utils/common.js";

const state = () => ({
    orders: [],
    ordersOfMonth: [],
});

const getters = {
    orders(state) {
        return state.orders;
    },
    valuesOfMonth(state) {
        return (month, type) => {
            const values = [];
            state.ordersOfMonth[month].forEach((i) => {
                const index = i.date.slice(-2) - 1;
                values[index] = (values[index] ?? 0) + +i[type];
            });
            return values;
        };
    },
};

const actions = {
    async FETCH_ORDERS({ commit }) {
        try {
            const { data } = await fetchOrders();
            commit("SET_ORDERS", data.data);
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    FETCH_ORDERS_OF_MONTH({ commit }, { year, month }) {
        commit("SET_ORDERS_OF_MONTH", { year, month });
    },
};

const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data.map((order) => ({
            date: formatISODate(order.orderDate),
            content: order.content,
            value: order.price,
            amount: order.quantity,
            cate: order.type,
        }));
    },
    SET_ORDERS_OF_MONTH(state, { year, month }) {
        state.ordersOfMonth[month] = state.orders.filter((i) =>
            isDateInMonth(year, month, i.date)
        );
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
