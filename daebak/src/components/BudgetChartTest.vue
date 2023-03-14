<template>
    <div class="chart">
        <bar-chart
            ref="bar"
            :chart-data="barChartData"
            :chart-options="barChartOptions"
        />
        <line-chart
            ref="line"
            :chart-data="lineChartData"
            :chart-options="lineChartOptions"
        />
    </div>
</template>

<script>
import { Bar as BarChart, Line as LineChart } from "vue-chartjs/legacy";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

export default {
    components: {
        BarChart,
        LineChart,
    },
    props: {
        labels: { type: Array },
    },
    data() {
        return {
            barChartData: {
                labels: this.labels,
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    },
                ],
            },
            lineChartData: {
                labels: this.labels,
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    },
                ],
            },
            barChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            callback(data) {
                                return +this.getLabelForValue(data).slice(-2);
                            },
                            font: {
                                size: 15,
                            },
                            stepSize: 1,
                        },
                    },
                    y: {
                        display: true,
                        ticks: {
                            stepSize: 10,
                            max: 80,
                        },
                    },
                },
            },
            lineChartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: false,
                    },
                },
                y: {
                    display: true,
                    ticks: {
                        stepSize: 10,
                        max: 80,
                        min: 0,
                    },
                },
            },
        };
    },
    computed: {},
    mounted() {
        console.log(this.$refs.line);
    },
};
</script>
<style scoped>
.chart {
    position: relative;
    height: 400px;
}
::v-deep #bar-chart,
::v-deep #line-chart {
    position: absolute;
    top: 0;
}
</style>
