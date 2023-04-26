<template>
    <div class="main-chart-weekly-quantity chart-box">
        <h3>{{ title }}</h3>
        <line-chart
            class="line-chart"
            :chart-data="{ labels, datasets }"
            :chart-options="chartOptions"
        ></line-chart>
    </div>
</template>

<script>
import { Line as LineChart } from "vue-chartjs";
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
import { CHART_QUANTITY_AVG } from "@/constants/main.js";
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";

export default {
    components: {
        LineChart,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        const { labels, chartOptions } = CHART_QUANTITY_AVG;
        return {
            labels,
            chartOptions,
        };
    },
    computed: {
        title() {
            return `${this.currentMonth}월 평균 주문 수`;
        },
        datasetOfLastMonth() {
            const month = this.currentMonth - 1;
            const values = this.lastMonthValues("amount");
            return {
                label: `${month}월`,
                data: this.getWeeklyAverages(month, values),
                pointBorderWidth: 3,
                pointHitRadius: 10,
                backgroundColor: "white",
                order: 1,
            };
        },
        datasetOfCurrentMonth() {
            const month = this.currentMonth;
            const values = this.currentMonthValues("amount");
            return {
                label: `${month}월`,
                data: this.getWeeklyAverages(month, values),
                pointBorderWidth: 3,
                pointHitRadius: 10,
                backgroundColor: "white",
                borderColor: "#FFA200",
            };
        },
        datasets() {
            return [this.datasetOfLastMonth, this.datasetOfCurrentMonth];
        },
    },
    methods: {
        getWeeklyAverages(month, values) {
            const averages = Array.from({ length: 7 }, () => []);
            const dayOffset = this.getDateOffsetByMonth(month);

            for (let i = 0; i < values.length; i++) {
                const day = (i + dayOffset) % 7;
                averages[day].push(values[i] ?? 0);
            }
            return averages.map(
                (i) => i.reduce((acc, cur) => acc + cur, 0) / (i.length || 1)
            );
        },
    },
};
</script>

<style scoped>
::v-deep .line-chart {
    height: 210px;
}
</style>
