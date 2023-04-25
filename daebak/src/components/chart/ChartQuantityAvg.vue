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
import { CHART_OPTIONS_QUANTITY_AVG } from "@/constants/main.js";
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";

export default {
    components: {
        LineChart,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        return {
            labels: ["월", "화", "수", "목", "금", "토", "일"],
            chartOptions: CHART_OPTIONS_QUANTITY_AVG,
        };
    },
    computed: {
        title() {
            return `${this.currentMonth}월 평균 주문 수`;
        },
        datasetOfLastMonth() {
            const month = this.currentMonth - 1;
            const dayOffset = this.getDateOffsetByMonth(month);
            const avgList = [];

            const quantities = this.lastMonthValues("amount");
            for (let i = 0; i < quantities.length; i++) {
                const day = (i + dayOffset) % 7;
                if (!avgList[day]) avgList[day] = [];
                avgList[day].push(quantities[i] ?? 0);
            }
            return {
                label: `${month}월`,
                data: avgList.map(
                    (i) => i.reduce((acc, cur) => acc + cur, 0) / i.length
                ),
                pointBorderWidth: 3,
                pointHitRadius: 10,
                backgroundColor: "white",
                order: 1,
            };
        },
        datasetOfCurrentMonth() {
            const month = this.currentMonth;
            const dayOffset = this.getDateOffsetByMonth(month);
            const avgList = [];

            const quantities = this.currentMonthValues("amount");
            for (let i = 0; i < quantities.length; i++) {
                const day = (i + dayOffset) % 7;
                if (!avgList[day]) avgList[day] = [];
                avgList[day].push(quantities[i] ?? 0);
            }
            return {
                label: `${month}월`,
                data: avgList.map(
                    (i) => i.reduce((acc, cur) => acc + cur, 0) / i.length
                ),
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
};
</script>

<style scoped>
::v-deep .line-chart {
    height: 210px;
}
</style>
