<template>
    <div class="chart-box">
        <canvas 
            id="myChart"
            height="70"
            width="190"
        >
        </canvas>
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
            const date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
            const dayMax = date.getDate();
            const dayFormat = (i) => date.toISOString().slice(0, 8) + i.toString().padStart(2, "0");
            this.dayList = Array(dayMax).fill().map((v, i) => dayFormat(++i));
        },
        getChart() {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.dayList,
                    datasets: [
                        {
                            label: '주문',
                            data: this.getDataList("amount"),
                            borderWidth: 1,
                            order: 1,
                            borderColor: 'white',
                            backgroundColor: '#4BC0C0',
                            yAxisID: 'amount'
                        }, 
                        {
                            label: '매출',
                            data: this.getDataList("value"),
                            borderWidth: 2,
                            type: 'line',
                            order: 0,
                            borderColor: '#FFCD56',
                            pointStyle: 'circle',
                            fill: false,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            pointBackgroundColor: 'white',
                            pointHoverBackgroundColor: '#FFCD56',
                            yAxisID: 'value',
                            lineTension: 0
                        } 
                    ]
                },
                options: {
                    title: {
                        display: true,
                        text: "2월 가게 현황",
                        fontSize: 15,
                        position: "top",
                        padding: 20
                    },
                    legend: {
                        display: false,
                        position: "bottom",
                        padding: 0,
                        labels: {
                            fontSize: 13,
                            boxWidth: 15,
                            padding: 20,
                        }
                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            ticks: {
                                callback(data) {
                                    return +data.slice(-2)
                                },
                                fontSize: 14,
                                stepSize: 1,
                            },
                            gridLines: {
                                color: "RGBA(232,232,232,0)",
                                zeroLineColor: "RGB(232,232,232)"
                            }
                        }],
                        yAxes: [{
                            id: 'amount',
                            ticks: {
                                fontSize: 14,
                                stepSize: 5,
                                min: 0,
                                max: 25
                            },
                            gridLines: {
                                color: "RGBA(240,240,240,1)",
                                zeroLineColor: "RGB(232,232,232)"
                            }
                        }, {
                            display: true,
                            id: 'value',
                            ticks: {
                                callback(data) {
                                    let value = (data + "").slice(0, -4);
                                    return value || 0;
                                },
                                fontSize: 14,
                                stepSize: 200000,
                                max: 1000000
                            },
                            gridLines: {
                                color: "RGBA(240,240,240,1)",
                                zeroLineColor: "RGB(232,232,232)"
                            },
                            position: 'right'
                        }],
                    },
                    onClick(e, el) {
                        console.log(e, el);
                    }
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
            for (let i of this.fetchedList) {
                let index = +i.date.slice(-2) - 1;
                list[index] = +i[key] + (list[index] || 0);
            }
            return list;
        },
    }
};
</script>

<style scoped>
.chart-box {
    background: white;
    padding: 0px 5px;
}
</style>