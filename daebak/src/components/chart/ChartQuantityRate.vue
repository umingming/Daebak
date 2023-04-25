<template>
    <div class="main-chart-monthly-quantity">
        <h3>{{ title }}</h3>
        <doughnut-chart
            class="doughnut-chart"
            :chart-data="chartData"
            :chart-options="chartOptions"
        ></doughnut-chart>
    </div>
</template>

<script>
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";
import { Doughnut as DoughnutChart } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement);
import { CHART_OPTIONS_QUANTITY_RATE } from "@/constants/main.js";

export default {
    components: {
        DoughnutChart,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        return {
            chartData: {
                labels: ["배민", "요기요", "쿠팡", "매장"],
                datasets: [
                    {
                        data: [30, 10, 5, 1],
                        backgroundColor: [
                            "#36A2EB",
                            "#FF6384",
                            "#FFD166",
                            "#E5E5E5",
                        ],
                    },
                ],
            },
            chartOptions: CHART_OPTIONS_QUANTITY_RATE,
        };
    },
    computed: {
        title() {
            return `${this.currentMonth}월 주문 카테고리 비율`;
        },
    },
    methods: {
        init() {
            this.setChartLabels();
            this.setChartDatas();
        },
        setChartLabels() {
            const month = new Date().getMonth();
            this.chartData.datasets[0].label = `${month + 1}월`;
        },
        setChartDatas() {
            this.chartData.datasets.forEach(
                (i) => (i.data = this.getQuantityListByMonth(i.label))
            );
        },
        /*
            요일 별 주문 수 구하기
            1. 0이 월요일이 되기 위해서 해당 달의 1일의 요일을 구함.
                그 값에 -1을 하고 date에 더하면 됨.
            2. date에서 7을 나눈 값에서 인덱스를 +/-
            3. 해당 값에 더함.

        */
        getQuantityListByMonth(label) {
            const monthFromLabel = +label.slice(0, -1);
            let orderList = this.fetchedList.filter((i) => {
                const monthFromOrder = +i.date.split("-")[1];
                return monthFromOrder === monthFromLabel;
            });

            const dayOffset =
                new Date(
                    new Date().getFullYear(),
                    monthFromLabel - 1
                ).getDay() - 1;

            let quantityList = Array(this.chartData.labels.length).fill(0);
            orderList.forEach((i) => {
                const index = (+i.date.slice(-2) + dayOffset) % 7;
                quantityList[index] += +i.amount;
            });

            return quantityList;
        },
    },
};
</script>

<style scoped>
::v-deep .doughnut-chart {
    height: 200px;
    margin-top: 10px;
}
</style>
