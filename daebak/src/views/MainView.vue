<template>
    <div id="main-view">
        <div class="main-banner1">
            <!-- <main-banner
                key-type="value"
            >
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner
                key-type="amount"
            >
                <i slot="icon" class="fa-solid fa-mobile"></i>
            </main-banner> -->
        </div>
        <div class="main-banner2">
        </div>
        <div class="main-chart-weekly-quantity"></div>
        <div class="main-chart-monthly-price"></div>
        <div class="main-chart-monthly-quantity"></div>
        <div class="main-board"></div>
            <!-- <main-chart-month></main-chart-month>
            <main-board></main-board> -->
    </div>
</template>

<script>
// import MainChartMonth from "@/components/MainChartMonth.vue";
// import MainBoard from "@/components/MainBoard.vue";
// import MainBanner from "@/components/MainBanner.vue";
// import { mapGetters } from "vuex";

export default {
	components: {
        // MainChartMonth,
        // MainBanner,
        // MainBoard,
    },
    // computed: {
    //     ...mapGetters(["fetchedList"]),
    //     totalRevenue() {
    //         return this.fetchedList.map(i => +i.value).reduce((sum, i) => sum + i);
    //     },
    //     totalOrder() {
    //         return this.fetchedList.map(i => +i.amount).reduce((sum, i) => sum + i);
    //     },
    //     averageRevenue() {
    //         return this.totalRevenue / this.totalDays; 
    //     },
    //     averageOrder() {
    //         return this.totalOrder / this.totalDays; 
    //     },
    //     totalDays() {
    //         return new Date().getDate();
    //     },
    // },
    // created() {
    //     this.$store.dispatch("FETCH_LIST");
    // },
    // methods: {
    //     setDate(date) {
    //         console.log(date);
    //     },
    // }
};
</script>

<style scoped>
#main-view {
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(4, 150px);
    grid-gap: 20px;
}
#main-view > div {
    background: white;
    border-radius: 5px;
}
#main-view .main-banner1 {
    grid-area: 1 / 1 / 2 / 5;
}
#main-view .main-banner2 {
    grid-area: 2 / 1 / 3 / 5;
}
#main-view .main-chart-weekly-quantity {
    grid-area: 3 / 1 / 5 / 5;
}
#main-view .main-chart-monthly-price {
    grid-area: 1 / 5 / 3 / 13;
}
#main-view .main-chart-monthly-quantity {
    grid-area: 3 / 5 / 5 / 10;
}
#main-view .main-board {
    grid-area: 3 / 10 / 5 / 13;
}
</style>