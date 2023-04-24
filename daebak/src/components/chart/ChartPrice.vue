<template>
    <div class="main-chart-monthly-price chart-box">
        <h3>{{ title }}</h3>
        <bar-chart
            :chart-data="{ labels, datasets }"
            :chart-options="chartOptions"
            :height="225"
        ></bar-chart>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatISODateForChartLabel } from "@/utils/common";
import { Bar as BarChart } from "vue-chartjs";

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
        title() {
            return `${this.month}월 매출 추이`;
        },
        labels() {
            return Array.from({ length: this.lastDateOfMonth }, (_, index) =>
                formatISODateForChartLabel(this.year, this.month, index)
            );
        },
        datasets() {
            const datasetOfLastMonth = this.datasetOfMonth(this.month - 1);
            const datasetOfThisMonth = this.datasetOfMonth(this.month);
            datasetOfThisMonth.backgroundColor = "#FFA200";
            datasetOfThisMonth.hoverBackgroundColor = "#FF7B00";

            return [datasetOfLastMonth, datasetOfThisMonth];
        },
        datasetOfMonth() {
            return (month) => {
                const label = `${month}월`;
                const data = this.pricesOfMonth(month);
                return { label, data };
            };
        },
        pricesOfMonth() {
            return (month) => {
                return this.valuesOfMonth(this.year, month, "value");
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
