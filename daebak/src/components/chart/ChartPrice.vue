<template>
    <div class="main-chart-monthly-price chart-box">
        <h3 data-test="title">{{ title }}</h3>
        <bar-chart
            :chart-data="{ labels, datasets }"
            :chart-options="chartOptions"
            :height="225"
        ></bar-chart>
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);
import { Bar as BarChart } from "vue-chartjs/legacy";
import { CHART_PRICE } from "@/constants/main.js";
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";

export default {
    components: {
        BarChart,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        const { chartOptions } = CHART_PRICE;
        return {
            chartOptions,
            labels: this.getDateLabelsOfCurrentMonth(),
        };
    },
    computed: {
        title() {
            return `${this.currentMonth}월 매출 추이`;
        },
        datasetOfLastMonth() {
            return {
                label: `${this.currentMonth - 1}월`,
                data: this.lastMonthValues("value"),
            };
        },
        datasetOfCurrentMonth() {
            return {
                label: `${this.currentMonth}월`,
                data: this.currentMonthValues("value"),
                backgroundColor: "#FFA200",
                hoverBackgroundColor: "#FF7B00",
            };
        },
        datasets() {
            return [this.datasetOfLastMonth, this.datasetOfCurrentMonth];
        },
    },
};
</script>

<style scoped>
::v-deep #bar-chart {
    position: relative;
    left: -5px;
    top: -10px;
}
</style>
