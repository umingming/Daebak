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
import { CHART_QUANTITY_RATE } from "@/constants/main.js";

export default {
    components: {
        DoughnutChart,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        const { chartOptions } = CHART_QUANTITY_RATE;
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
            chartOptions,
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
    },
};
</script>

<style scoped>
::v-deep .doughnut-chart {
    height: 200px;
    margin-top: 10px;
}
</style>
