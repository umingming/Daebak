<template>
    <div class="main-banner">
        <h3>{{ title }}</h3>
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
        <div class="chart">
            <LineChart :chart-data="chartData" :chart-options="chartOptions" />
        </div>
        <slot name="icon"></slot>
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
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "",
                        data: [
                            1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 16, 19, 21, 25,
                            29, 31, 32, 35, 36, 30, 39, 40, 42,
                        ],
                        backgroundColor: "#FFA200",
                        borderColor: "#FFA200",
                        pointRadius: 0,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                },
            },
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
    created() {
        this.init();
    },
    methods: {
        init() {
            this.setChartLabels();
            this.setChartDatas();
        },
        setChartLabels() {
            const year = new Date().getFullYear();
            const month = new Date().getMonth();
            const lastDay = new Date(year, month + 1, 0).getDate();
            const dayFormat = (index) =>
                new Date(year, month, index + 2).toISOString().slice(0, 10);

            const labels = Array.from({ length: lastDay }, (_, index) =>
                dayFormat(index)
            );
            this.chartData.labels = labels;
            this.chartData.datasets[0].label = `${month}월`;
            this.chartData.datasets[1].label = `${month + 1}월`;
        },
        setChartDatas() {
            this.chartData.datasets.forEach(
                (i) => (i.data = this.getPriceListByMonth(i.label))
            );
        },
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
/* .chart::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 70px;
    z-index: 10;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
    );
} */
::v-deep #line-chart {
    position: absolute;
    z-index: 1;
    left: 70px;
    bottom: 0px;
    opacity: 0;
}
</style>