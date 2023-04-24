<template>
    <div id="main-view" class="wrapper">
        <main-banner type="value">
            <i slot="icon" class="fa-solid fa-sack-dollar"></i>
        </main-banner>
        <main-banner type="amount">
            <i slot="icon" class="fa-solid fa-phone-volume"></i>
        </main-banner>
        <chart-price></chart-price>
        <chart-quantity-avg></chart-quantity-avg>
        <chart-quantity-rate></chart-quantity-rate>
        <main-board></main-board>
    </div>
</template>

<script>
import MainBanner from "@/components/main/MainBanner.vue";
import ChartPrice from "@/components/chart/ChartPrice.vue";
import ChartQuantityAvg from "@/components/chart/ChartQuantityAvg.vue";
import ChartQuantityRate from "@/components/chart/ChartQuantityRate.vue";
import MainBoard from "@/components/main/MainBoard.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        ChartPrice,
        MainBanner,
        ChartQuantityAvg,
        ChartQuantityRate,
        MainBoard,
    },
    data() {
        return {
            currentMonth: new Date().getMonth() + 1,
        };
    },
    computed: {
        ...mapGetters("date", ["month", "year"]),
        ...mapGetters("order", ["valuesOfMonth"]),
        pricesOfThisMonth() {
            return this.valuesOfMonth(this.month, "value");
        },
        pricesOfLastMonth() {
            return this.valuesOfMonth(this.month - 1 || 12, "value");
        },
        quantitiesOfThisMonth() {
            return this.valuesOfMonth(this.month, "amount");
        },
        quantitiesOfLastMonth() {
            return this.valuesOfMonth(this.month - 1 || 12, "amount");
        },
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            await this.dispatchOrder("FETCH_ORDERS");

            const thisMonth = { year: this.year, month: this.month };
            const lastMonth = this.getLastMonth();
            this.fetchOrdersOfMonth(thisMonth);
            this.fetchOrdersOfMonth(lastMonth);
        },
        fetchOrdersOfMonth({ year, month }) {
            this.dispatchOrder("FETCH_ORDERS_OF_MONTH", { year, month });
        },
        getLastMonth() {
            const year = this.month === 1 ? this.year - 1 : this.year;
            const month = this.month === 1 ? 12 : this.month - 1;
            return { year, month };
        },
        dispatchOrder(action, param = {}) {
            return this.$store.dispatch(`order/${action}`, param);
        },
    },
};
</script>

<style scoped></style>
