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
import { Line as LineChart } from "vue-chartjs";

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
                            stepSize: 5,
                            min: 0,
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
                return this.valuesOfMonth(this.year, month, "amount");
            };
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
