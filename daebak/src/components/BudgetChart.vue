<template>
    <div class="chart-box">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js";

import { mapGetters } from "vuex";

export default {
    data() {
        return {
            dayList: [],
        }
    },
    computed: {
        ...mapGetters(["fetchedList"]),
    },
    created() {
        this.setDayList();
    },
    mounted() {
        this.getChart();
    },
    methods: {
        setDayList() {
            let dayMax = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
            this.dayList = Array(dayMax).fill().map((v, i) => i + 1);
        },
        getChart() {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.dayList,
                    datasets: [
                        {
                            label: '매출',
                            data: this.getDataList("value"),
                            borderWidth: 2,
                            order: 1,
                            borderColor: 'white',
                            backgroundColor: '#90be6d',
                            yAxisID: 'value'
                        }, 
                        {
                            label: '주문',
                            data: this.getDataList("amount"),
                            borderWidth: 2,
                            type: 'line',
                            order: 0,
                            borderColor: '#f9c74f',
                            pointStyle: 'circle',
                            pointRadius: 5,
                            pointHoverRadius: 7,
                            fill: false,
                            pointBackgroundColor: 'white',
                            pointHoverBackgroundColor: '#f9c74f',
                            yAxisID: 'amount',
                            lineTension: 0
                        } 
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            fontSize: 13,
                            padding: 25
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 15,
                                stepSize: 1,
                            }
                        }],
                        yAxes: [{
                            display: true,
                            id: 'value',
                            ticks: {
                                callback(data) {
                                    let value = (data + "").slice(0, -4);
                                    return `${value || 0}만원`
                                },
                                fontSize: 15,
                                stepSize: 200000,
                                max: 1000000
                            },
                        }, {
                            id: 'amount',
                            ticks: {
                                callback(data) {
                                    return `${data}건`
                                },
                                fontSize: 15,
                                stepSize: 5,
                                min: 0,
                                max: 25
                            },
                            position: 'right'
                        }],
                    },
                }
            });
        },
        /*
            리스트 내 매출 분류
            1. 이 달 매출을 저장할 배열 선언
            2. 리스트를 반복하여 날짜에 해당하는 인덱스에 추가
        */
        getDataList(key) {
            let list = Array(this.dayList.length).fill(NaN);
            for (let i of [...this.fetchedList]) {
                let index = +i.date.split("-")[2] - 1;
                list[index] = (list[index] || 0) + (+i[key]);
            }
            return list;
        },
    }
};
</script>

<style scoped>
.chart-box {
    margin: 20px auto;
    background: white;
    border-radius: 5px;
    height: 410px;
    width: 910px;
}
#myChart {
    margin: 20px auto !important;
    height: 400px !important;
    width: 900px !important;
    font-size: 25px !important;
}
</style>