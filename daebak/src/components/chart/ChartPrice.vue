<template>
    <div class="main-chart-monthly-price chart-box">
        <h3>3월 매출 추이</h3>
        <bar-chart
            :chart-data="{ labels, datasets }"
            :chart-options="chartOptions"
            :height="225"
        ></bar-chart>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatISODate } from "@/utils/common";
import { Bar as BarChart } from "vue-chartjs/legacy";
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

export default {
    components: {
        BarChart,
    },
    data() {
        return {
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        align: "end",
                        labels: {
                            font: {
                                size: 15,
                            },
                            boxWidth: 7,
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: "circle",
                        },
                    },
                },
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            callback(data) {
                                return +this.getLabelForValue(data).slice(-2);
                            },
                            font: {
                                size: 14,
                            },
                            stepSize: 1,
                        },
                        grid: {
                            color: "white",
                        },
                    },
                    y: {
                        display: true,
                        ticks: {
                            callback(data) {
                                let value = (data + "").slice(0, -4);
                                return value || 0;
                            },
                            font: {
                                size: 14,
                            },
                            stepSize: 200000,
                            max: 1000000,
                        },
                        grid: {
                            borderWidth: 0,
                        },
                    },
                },
            },
        };
    },
    computed: {
        ...mapGetters("date", ["year", "month", "lastDateOfMonth"]),
        ...mapGetters("order", ["valuesOfMonth"]),
        labels() {
            return Array.from({ length: this.lastDateOfMonth }, (_, index) =>
                formatISODate(this.year, this.month, index)
            );
        },
        datasets() {
            const datasetOfLastMonth = this.datasetOfMonth(this.month - 1);
            const datasetOfThisMonth = this.datasetOfMonth(this.month - 1);
            datasetOfThisMonth.backgroundColor = "#FFA200";

            return [datasetOfLastMonth, datasetOfThisMonth];
        },
        datasetOfMonth() {
            return (month) => {
                month = month || 12;
                const label = `${month}월`;
                const data = this.pricesOfMonth(month);
                return { label, data };
            };
        },
        pricesOfMonth() {
            return (month) => {
                return this.valuesOfMonth(month, "value");
            };
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
