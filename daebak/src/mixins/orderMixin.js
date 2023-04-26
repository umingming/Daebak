import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters("order", [
            "currentMonthOrders",
            "currentMonthValues",
            "lastMonthValues",
        ]),
    },
    methods: {
        formatValue(value = 0) {
            return Math.round(value).toLocaleString();
        },
        getTotalValue(values = []) {
            return values.reduce((acc, curr) => acc + (+curr || 0), 0) || 0;
        },
    },
};
