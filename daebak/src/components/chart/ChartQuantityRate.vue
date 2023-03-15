<template>
    <div class="main-chart-monthly-quantity">
        <h3>3월 주문 카테고리 비율</h3>
        <doughnut-chart
            :chart-data="chartData"
            :chart-options="chartOptions"
            :height="200"
        ></doughnut-chart>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Doughnut as DoughnutChart } from "vue-chartjs/legacy";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    ArcElement,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, ArcElement);

export default {
    components: {
        DoughnutChart,
    },
    data() {
        return {
            chartData: {
                labels: ["배민", "쿠팡", "요기요", "매장"],
                datasets: [
                    {
                        label: "",
                        data: [],
                        backgroundColor: "pink",
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "right",
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
            },
        };
    },
    computed: {
        ...mapGetters(["fetchedList"]),
    },
    created() {
        this.init();
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
::v-deep #doughnut-chart {
    position: relative;
    left: -5px;
    top: 8px;
}
</style>
