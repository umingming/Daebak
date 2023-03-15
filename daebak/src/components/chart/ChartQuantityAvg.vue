<template>
    <div class="main-chart-weekly-quantity chart-box">
        <h3>{{ title }}</h3>
        <line-chart
            :chart-data="{ labels, datasets }"
            :chart-options="chartOptions"
            :height="225"
        ></line-chart>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getDayOffsetOfMonth } from "@/utils/common";
import { Line as LineChart } from "vue-chartjs/legacy";
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
        LineChart,
    },
    data() {
        return {
            labels: ["월", "화", "수", "목", "금", "토", "일"],
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        reverse: "true",
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
                            font: {
                                size: 14,
                            },
                            stepSize: 10,
                            max: 50,
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
        ...mapGetters(["fetchedList"]),
        ...mapGetters("date", ["year", "month", "lastDateOfMonth"]),
        ...mapGetters("order", ["valuesOfMonth"]),
        title() {
            return `${this.month}월 평균 주문 수`;
        },
        datasets() {
            const datasetOfLastMonth = this.datasetOfMonth(this.month - 1);
            const datasetOfThisMonth = this.datasetOfMonth(this.month);
            datasetOfLastMonth.order = 1;
            datasetOfThisMonth.borderColor = "#FFA200";

            return [datasetOfLastMonth, datasetOfThisMonth];
        },
        datasetOfMonth() {
            return (month) => {
                const label = `${month || 12}월`;
                const data = this.quantityAvgOfMonth(month);
                return {
                    label,
                    data,
                    pointBorderWidth: 3,
                    pointHitRadius: 10,
                    backgroundColor: "white",
                };
            };
        },
        quantityAvgOfMonth() {
            return (month) => {
                const dayOffset = getDayOffsetOfMonth(this.year, month);
                const avgList = [];

                const quantities = this.quantitiesOfMonth(month);
                for (let i = 0; i < quantities.length; i++) {
                    const day = (i + dayOffset) % 7;
                    if (!avgList[day]) avgList[day] = [];
                    avgList[day].push(quantities[i] ?? 0);
                }
                return avgList.map(
                    (i) => i.reduce((acc, cur) => acc + cur, 0) / i.length
                );
            };
        },
        quantitiesOfMonth() {
            return (month) => {
                return this.valuesOfMonth(month, "amount");
            };
        },
    },
    methods: {
        init() {
            this.setChartLabels();
            this.setChartDatas();
        },
        setChartLabels() {
            const month = new Date().getMonth();
            this.datasets[0].label = `${month}월`;
            this.datasets[1].label = `${month + 1}월`;
        },
        setChartDatas() {
            this.datasets.forEach(
                (i) => (i.data = this.getQuantityAvgByMonth(i.label))
            );
        },
        /*
            요일 별 주문 수 구하기
            1. 0이 월요일이 되기 위해서 해당 달의 1일의 요일을 구함.
                그 값에 -1을 하고 date에 더하면 됨.
            2. date에서 7을 나눈 값에서 인덱스를 +/-
            3. 해당 값에 더함.

        */
        getQuantityAvgByMonth(label) {
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

            let quantityList = Array(this.labels.length).fill(0);
            orderList.forEach((i) => {
                const index = (+i.date.slice(-2) + dayOffset) % 7;
                const quantity = (quantityList[index] + +i.amount) / 2;
                quantityList[index] = Math.round(quantity);
            });
            return quantityList.map((i) => Math.round(i));
        },
    },
};
</script>

<style scoped>
::v-deep #line-chart {
    position: relative;
    left: -5px;
    top: -10px;
}
</style>
