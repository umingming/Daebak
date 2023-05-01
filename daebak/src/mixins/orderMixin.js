import { mapGetters, mapMutations } from "vuex";

export default {
    computed: {
        ...mapGetters("order", [
            "orders",
            "currentMonthOrders",
            "currentMonthValues",
            "lastMonthValues",
            "newOrders",
        ]),
    },
    methods: {
        ...mapMutations("order", [
            "ADD_NEW_ORDER",
            "DELETE_NEW_ORDER",
            "SET_NEW_ORDERS",
        ]),
        formatValue(value = 0) {
            return Math.round(value).toLocaleString();
        },
        getTotalValue(values = []) {
            return values.reduce((acc, curr) => acc + (+curr || 0), 0) || 0;
        },
    },
};
