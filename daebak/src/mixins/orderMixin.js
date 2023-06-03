import { mapActions, mapGetters } from "vuex";

export default {
    data() {
        return {
            pendingOrders: [],
        };
    },
    computed: {
        ...mapGetters("order", [
            "orders",
            "currentMonthOrders",
            "currentMonthValues",
            "lastMonthValues",
        ]),
        checkedOrders() {
            return this.orders.filter((i) => i.checked);
        },
    },
    methods: {
        ...mapActions("order", ["ADD_ORDERS", "EDIT_ORDERS", "REMOVE_ORDERS"]),
        formatValue(value = 0) {
            return Math.round(value).toLocaleString();
        },
        getTotalValue(values = []) {
            return values.reduce((acc, curr) => acc + (+curr || 0), 0) || 0;
        },
        initPendingOrders(items = []) {
            this.pendingOrders = items;
        },
        appendPendingOrder(item) {
            const order = JSON.parse(JSON.stringify(item));
            this.pendingOrders.push(order);
        },
        deletePendingOrder(index) {
            this.pendingOrders.splice(index, 1);
        },
    },
};
