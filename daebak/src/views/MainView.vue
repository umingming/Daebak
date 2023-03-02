<template>
    <div id="main-view">
        <div class="top">
            <main-banner
                type="총 매출"
                :value="totalRevenue"
            >
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner
                type="총 주문 수"
                :value="totalOrder"
            >
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner
                type="평균 매출"
                :value="averageRevenue"
            >
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner
                type="평균 주문 수"
                :value="averageOrder"
            >
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
        </div>
        <div class="middle">
            <main-chart-month></main-chart-month>
            <main-board></main-board>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
import MainChartMonth from "@/components/MainChartMonth.vue";
import MainBoard from "@/components/MainBoard.vue";
import MainBanner from "@/components/MainBanner.vue";
import { mapGetters } from "vuex";

export default {
	components: {
        MainChartMonth,
        MainBanner,
        MainBoard,
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
#main-view {
    width: 100%;
    height: 100%;
}
#main-view .top {
    height: 80px;
    width: 100%;
    display: flex;
}
#main-view .top div {
    margin: 0 auto;
    width: 260px;    
    background: white;
    box-shadow: 3px 3px 0px #fd96364f;
    padding: 11px 5px;
    color: #FF9F40;
}
#main-view .top div:first-child {
    margin-left: 5px;
}
#main-view .top div:last-child {
    margin-right: 5px;
}
#main-view .top div:nth-child(even) {
    color: #4BC0C0;
}
#main-view .top div ::v-deep i {
    font-size: 50px;
    float: left;
    margin: 5px 15px 5px 10px;
    opacity: 0.5;
}
#main-view .top div ::v-deep h3 {
    color: #666;
}
#main-view .top div ::v-deep span {
    font-size: 24px;
    font-weight: bolder;
}
#main-view .top div ::v-deep small {
    position: relative;
    color: #666;
    top: -1px;
    left: 5px;
}
#main-view .middle {
    position: relative;
    height: 300px;
    margin: 30px auto;
    width: 100%;
    display: flex;
}
#main-view .middle ::v-deep .chart-box {
    width: 900px !important;
    padding-top: 5px;
    margin-left: 5px;
    margin-right: 30px;
    box-shadow: 3px 3px 0px #fd96364f;
}
</style>