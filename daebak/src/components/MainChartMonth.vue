<template>
    <div class="main-chart-monthly-price chart-box">
        <h3>3월 매출 추이</h3>
        <BarChart
            :chart-data="chartData"
            :chart-options="chartOptions"
            :height="200"
        />
    </div>
</template>

<script>
import { mapGetters } from "vuex";
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
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "2월",
                        data: [],
                    },
                    {
                        label: "3월",
                        data: [],
                    },
                ],
            },
            chartOptions: {
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
                            font: {
                                size: 15,
                            },
                            stepSize: 10,
                            max: 80,
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
            const daysInMonth = new Date().getDate();
            const currentMonth = new Date().toISOString().slice(0, 7);
            const dayFormat = (day) =>
                `${currentMonth}-${day.toString().padStart(2, "0")}`;

            const labels = Array.from({ length: daysInMonth }, (_, index) =>
                dayFormat(++index)
            );
            this.chartData.labels = labels;
        },
        setChartDatas() {
            this.chartData.datasets.forEach(
                (i) => (i.data = this.getPriceListByMonth(i.label))
            );
        },
        getPriceListByMonth(label) {
            const monthFromLabel = +label.slice(0, -1);
            let orderList = this.fetchedList.filter((i) => {
                const monthFromOrder = +i.date.split("-")[1];
                return monthFromOrder === monthFromLabel;
            });

            let priceList = Array(this.chartData.labels.length).fill(0);
            orderList.forEach((i) => {
                const index = +i.date.slice(-2) - 1;
                priceList[index] += +i.value;
            });

            return priceList;
        },
        // getChart() {
        //     const ctx = document.getElementById('myChart');
        //     new Chart(ctx, {
        //         type: 'bar',
        //         data: {
        //             labels: this.dayList,
        //             datasets: [
        //                 {
        //                     label: '주문',
        //                     data: this.getDataList("amount"),
        //                     borderWidth: 1,
        //                     order: 1,
        //                     borderColor: 'white',
        //                     backgroundColor: '#4BC0C0',
        //                     yAxisID: 'amount'
        //                 },
        //                 {
        //                     label: '매출',
        //                     data: this.getDataList("value"),
        //                     borderWidth: 2,
        //                     type: 'line',
        //                     order: 0,
        //                     borderColor: '#FFCD56',
        //                     pointStyle: 'circle',
        //                     fill: false,
        //                     pointRadius: 4,
        //                     pointHoverRadius: 6,
        //                     pointBackgroundColor: 'white',
        //                     pointHoverBackgroundColor: '#FFCD56',
        //                     yAxisID: 'value',
        //                     lineTension: 0
        //                 }
        //             ]
        //         },
        //         options: {
        //             title: {
        //                 display: true,
        //                 text: "2월 가게 현황",
        //                 fontSize: 15,
        //                 position: "top",
        //                 padding: 20
        //             },
        //             legend: {
        //                 display: false,
        //                 position: "bottom",
        //                 padding: 0,
        //                 labels: {
        //                     fontSize: 13,
        //                     boxWidth: 15,
        //                     padding: 20,
        //                 }
        //             },
        //             scales: {
        //                 xAxes: [{
        //                     display: true,
        //                     ticks: {
        //                         callback(data) {
        //                             return +data.slice(-2)
        //                         },
        //                         fontSize: 14,
        //                         stepSize: 1,
        //                     },
        //                     gridLines: {
        //                         color: "RGBA(232,232,232,0)",
        //                         zeroLineColor: "RGB(232,232,232)"
        //                     }
        //                 }],
        //                 yAxes: [{
        //                     id: 'amount',
        //                     ticks: {
        //                         fontSize: 14,
        //                         stepSize: 5,
        //                         min: 0,
        //                         max: 25
        //                     },
        //                     gridLines: {
        //                         color: "RGBA(240,240,240,1)",
        //                         zeroLineColor: "RGB(232,232,232)"
        //                     }
        //                 }, {
        //                     display: true,
        //                     id: 'value',
        //                     ticks: {
        //                         callback(data) {
        //                             let value = (data + "").slice(0, -4);
        //                             return value || 0;
        //                         },
        //                         fontSize: 14,
        //                         stepSize: 200000,
        //                         max: 1000000
        //                     },
        //                     gridLines: {
        //                         color: "RGBA(240,240,240,1)",
        //                         zeroLineColor: "RGB(232,232,232)"
        //                     },
        //                     position: 'right'
        //                 }],
        //             },
        //             onClick(e, el) {
        //                 console.log(e, el);
        //             }
        //         }
        //     });
        // },
        /*
            리스트 내 매출 분류
            1. 이 달 매출을 저장할 배열 선언
            2. 리스트를 반복하여 날짜에 해당하는 인덱스에 추가
        */
        // getDataList(key) {
        //     let list = Array(this.dayList.length).fill(NaN);
        //     for (let i of this.fetchedList) {
        //         let index = +i.date.slice(-2) - 1;
        //         list[index] = +i[key] + (list[index] || 0);
        //     }
        //     return list;
        // },
    },
};
</script>

<style scoped>
</style>