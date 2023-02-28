<template>
    <div id="main-view">
        <div class="top">
            <div>
                <h3>2월 총 매출</h3>
                <span>{{ totalRevenue }}원</span>
            </div>
            <div>
                <h3>2월 총 주문 수</h3>
                <span>{{ totalOrder }}건</span>
            </div>
            <div>
                <h3>2월 평균 매출</h3>
                <span>{{ averageRevenue }}원</span>
            </div>
            <div>
                <h3>2월 평균 주문</h3>
                <span>{{ averageOrder }}건</span>
            </div>
        </div>
        <div class="middle">
            <main-chart></main-chart>
            <main-board></main-board>
        </div>
        <div class="bottom"></div>
    </div>
</template>

<script>
import MainChart from "@/components/MainChart.vue";
import MainBoard from "@/components/MainBoard.vue";
import { mapGetters } from "vuex";

export default {
	components: {
        MainChart,
        MainBoard,
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        totalRevenue() {
            let total = this.fetchedList.map(i => +i.value).reduce((sum, i) => sum + i);
            return total.toLocaleString();
        },
        totalOrder() {
            let total = this.fetchedList.map(i => +i.amount).reduce((sum, i) => sum + i);
            return total.toLocaleString();
        },
        averageRevenue() {
            let average = this.totalRevenue.replaceAll(",", "") / this.totalDays;
            return Math.floor(average).toLocaleString(); 
        },
        averageOrder() {
            let average = this.totalOrder.replaceAll(",", "") / this.totalDays;
            return Math.floor(average).toLocaleString(); 
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
        }
    }
};
</script>

<style scoped>
#main-view {
    width: 100%;
    height: 100%;
}
#main-view .top {
    height: 15%;
    width: 100%;
    display: flex;
}
#main-view .top div {
    margin: 0 auto;
    width: 270px;    
    height: 100%;
    background: white;
    border-radius: 5px;
    box-shadow: 5px 5px 0px #fd96364f;
}
#main-view .top div:first-child {
    margin-left: 5px;
}
#main-view .top div:last-child {
    margin-right: 5px;
}
#main-view .middle {
    position: relative;
    height: 40%;
    margin: 30px auto;
    width: 100%;
    display: flex;
}
#main-view .middle ::v-deep .chart-box {
    width: 900px !important;
    margin-left: 5px;
    margin-right: 30px;
    box-shadow: 5px 5px 0px #fd96364f;
}
</style>