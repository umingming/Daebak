<template>
    <div id="main-view" class="wrapper">
        <main-banner key-type="value">
            <i slot="icon" class="fa-solid fa-user"></i>
        </main-banner>
        <main-banner key-type="amount">
            <i slot="icon" class="fa-solid fa-mobile"></i>
        </main-banner>
        <main-chart-order-avg></main-chart-order-avg>
        <main-chart-month></main-chart-month>
        <main-chart-order-rate></main-chart-order-rate>
        <div class="main-board"></div>
        <!-- <main-chart-month></main-chart-month>
            <main-board></main-board> -->
    </div>
</template>

<script>
import MainChartMonth from "@/components/main/MainChartMonth.vue";
import MainChartOrderAvg from "@/components/main/MainChartOrderAvg.vue";
import MainChartOrderRate from "@/components/main/MainChartOrderRate.vue";
// import MainBoard from "@/components/MainBoard.vue";
import MainBanner from "@/components/main/MainBanner.vue";
import { mapGetters } from "vuex";

export default {
    components: {
        MainChartMonth,
        MainBanner,
        MainChartOrderAvg,
        MainChartOrderRate,
        // MainBoard,
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        totalRevenue() {
            return this.fetchedList
                .map((i) => +i.value)
                .reduce((sum, i) => sum + i);
        },
        totalOrder() {
            return this.fetchedList
                .map((i) => +i.amount)
                .reduce((sum, i) => sum + i);
        },
        averageRevenue() {
            return this.totalRevenue / this.totalDays;
        },
        averageOrder() {
            return this.totalOrder / this.totalDays;
        },
        totalDays() {
            return new Date().getDate();
        },
    },
    created() {
        this.init();
        this.$store.dispatch("FETCH_LIST");
    },
    methods: {
        init() {
            this.dispatchOrder("FETCH_ORDERS");
            this.fetchOrdersOfThisMonth();
            this.fetchOrdersOfLastMonth();
        },
        dispatchOrder(action, param = {}) {
            return this.$store.dispatch(`order/${action}`, param);
        },
    },
};
</script>

<style scoped></style>
