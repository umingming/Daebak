<template>
    <div class="main-banner">
        <h3>{{ title }}</h3>
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="number">
            <AnimatedNumber
                :duration="1000"
                :delay="10"
                :value="value"
                :formatValue="toPrice"
            />
            <small>
                <i
                    class="fa-solid fa-arrow-up-long"
                    :class="{ 'fa-arrow-down-long': averageFlag }"
                ></i>
                {{ valueIncrement }}
            </small>
        </div>
    </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import { Line as LineChart } from "vue-chartjs/legacy";

import { mapGetters } from "vuex";
import * as MAIN from "@/constants/main.js";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
);

export default {
    components: {
        AnimatedNumber,
        LineChart,
    },
    props: {
        keyType: { type: String, default: "" },
        averageFlag: { type: Boolean, default: false },
    },
    data() {
        return {
            thisMonth: new Date().getMonth() + 1,
            thisDate: new Date().getDate(),
            keyList: [],
            conditions: {},
            combos: {},
        };
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        title() {
            let averageType = this.averageFlag ? "평균" : "총";
            return `${this.thisMonth}월 ${averageType} ${MAIN[this.keyType]}`;
        },
        value() {
            return this.averageFlag ? this.valueAverage : this.valueTotal;
        },
        valueTotal() {
            return this.addUpValue(this.valueListForThisMonth);
        },
        valueAverage() {
            return Math.floor(this.valueTotal / this.thisDate);
        },
        valueIncrement() {
            let list = this.valueListForThisMonth.filter(
                (i) => +i.date.slice(8) === this.thisDate
            );
            return this.addUpValue(list).toLocaleString();
        },
        valueListForThisMonth() {
            return this.fetchedList.filter(
                (i) => +i.date.slice(5, 7) === this.thisMonth
            );
        },
    },
    methods: {
        toPrice(value) {
            return (+value.toFixed()).toLocaleString();
        },
        addUpValue(list) {
            return list
                .map((i) => +i[this.keyType])
                .reduce((sum, i) => sum + i);
        },
    },
};
</script>
<style scoped>
.number {
    position: relative;
    z-index: 100;
}
.chart {
    position: relative;
    z-index: 1;
    width: 200px !important;
}
</style>