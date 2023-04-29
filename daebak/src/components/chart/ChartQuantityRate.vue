<template>
    <div class="main-chart-monthly-quantity">
        <h3>{{ title }}</h3>
        <doughnut-chart
            class="doughnut-chart"
            :chart-data="{ labels, datasets }"
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
        const { labels, chartOptions, backgroundColor } = CHART_QUANTITY_RATE;
        return {
            labels,
            chartOptions,
            backgroundColor,
        };
    },
    computed: {
        title() {
            return `${this.currentMonth}월 카테고리별 주문 비율`;
        },
        datasets() {
            const data = [];
            for (const label of this.labels) {
                const quantities = this.currentMonthOrders
                    .filter((i) => i.cate === label)
                    .map((i) => i.amount);
                const total = this.getTotalValue(quantities);
                data.push(total);
            }
            return [
                {
                    data,
                    backgroundColor: this.backgroundColor,
                },
            ];
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
