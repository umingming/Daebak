import { fetchOrders } from "@/api/index.js";
import { isDateInMonth } from "@/utils/common.js";

const state = () => ({
    orders: [],
    ordersOfMonth: {},
});

const getters = {
    orders(state) {
        return state.orders;
    },
    valuesOfMonth(state) {
        return (year, month, type) => {
            const values = [];
            const ordersOfMonth = state.orders.filter((i) =>
                isDateInMonth(year, month, i.date)
            );
            ordersOfMonth.forEach((i) => {
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
    FETCH_ORDERS_OF_MONTH({ commit }, { year, month }) {
        commit("SET_ORDERS_OF_MONTH", { year, month });
    },
};

const mutations = {
    SET_ORDERS(state, data) {
        state.orders = data;
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
