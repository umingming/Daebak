<template>
    <div id="main-view" class="wrapper">
        <main-banner
            key-type="value"
        >
            <i slot="icon" class="fa-solid fa-user"></i>
        </main-banner>
        <main-banner
            key-type="amount"
        >
            <i slot="icon" class="fa-solid fa-mobile"></i>
        </main-banner>
        <div class="main-chart-weekly-quantity"></div>
        <main-chart-month></main-chart-month>
        <div class="main-chart-monthly-quantity"></div>
        <div class="main-board"></div>
            <!-- <main-chart-month></main-chart-month>
            <main-board></main-board> -->
    </div>
</template>

<script>
import MainChartMonth from "@/components/MainChartMonth.vue";
// import MainBoard from "@/components/MainBoard.vue";
import MainBanner from "@/components/MainBanner.vue";
import { mapGetters } from "vuex";

export default {
	components: {
        MainChartMonth,
        MainBanner,
        // MainBoard,
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        totalRevenue() {
            return this.fetchedList.map(i => +i.value).reduce((sum, i) => sum + i);
        },
        totalOrder() {
            return this.fetchedList.map(i => +i.amount).reduce((sum, i) => sum + i);
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
        this.$store.dispatch("FETCH_LIST");
    },
    methods: {
        setDate(date) {
            console.log(date);
        },
    }
};
</script>

<style scoped>
</style>