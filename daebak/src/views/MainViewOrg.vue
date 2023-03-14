<template>
    <div id="main-view">
        <div class="top">
            <main-banner key-type="value">
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner key-type="amount">
                <i slot="icon" class="fa-solid fa-mobile"></i>
            </main-banner>
            <main-banner key-type="value" :average-flag="true">
                <i slot="icon" class="fa-solid fa-user"></i>
            </main-banner>
            <main-banner key-type="amount" :average-flag="true">
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
import MainChartMonth from "@/components/main/MainChartMonth.vue";
import MainBoard from "@/components/main/MainBoard.vue";
import MainBanner from "@/components/main/MainBanner.vue";
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
        this.$store.dispatch("FETCH_LIST");
    },
    methods: {
        setDate(date) {
            console.log(date);
        },
    },
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
    position: relative;
    margin: 0 auto;
    width: 260px;
    background: white;
    box-shadow: 3px 3px 0px #fd96364f;
    padding: 11px 5px;
    color: #ff9f40;
    overflow: hidden !important;
}
#main-view .top div:first-child {
    margin-left: 5px;
}
#main-view .top div:last-child {
    margin-right: 5px;
}
#main-view .top div:nth-child(even) {
    color: #4bc0c0;
}
#main-view .top div > ::v-deep i {
    position: absolute;
    font-size: 80px;
    opacity: 0.3;
    transform: translateX(200px) translateY(-5px);
}
#main-view .top div ::v-deep svg {
    position: absolute;
    right: 0;
}
#main-view .top div ::v-deep h3 {
    transform: translateX(17px);
    color: #666;
}
#main-view .top div ::v-deep span {
    position: relative;
    font-size: 22px;
    font-weight: bolder;
    left: 20px;
}
#main-view .top div ::v-deep small {
    position: relative;
    color: #666 !important;
    top: -1px;
    left: 31px;
    animation-name: change-rate;
    animation-duration: 1.4s;
}
@keyframes change-rate {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
#main-view .top div ::v-deep small i {
    position: absolute;
    font-size: 10px;
    top: 5px;
    left: -5px;
    opacity: 1;
    color: #ff6384;
}
#main-view .top div ::v-deep small i.fa-arrow-down-long {
    top: 6px;
    color: #36a2eb;
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
