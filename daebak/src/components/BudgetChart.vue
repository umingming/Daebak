<template>
    <div class="chart-box">
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js";

export default {
    mounted() {
        this.getChart();
    },
    methods: {
        getChart() {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['02.01', '02.02', '02.03', '02.04', '02.05', '02.06', '02.07', '02.08', '02.09', '02.10'],
                    datasets: [
                        {
                            label: '매출',
                            data: [200000, 20000, 130000, 12000, 250000, 300000, 20000, 210000, 270000, 200000],
                            borderWidth: 2,
                            order: 1,
                            borderColor: 'white',
                            backgroundColor: '#90be6d',
                            yAxisID: 'value'
                        }, 
                        {
                            label: '주문',
                            data: [20, 20, 15, 14, 2, 13, 22, 5, 7, 22],
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
                                fontSize: 15
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
        }
    }
};
</script>

<style scoped>
.chart-box {
    margin: 20px auto;
    background: white;
    border-radius: 5px;
    height: 410px;
    width: 710px;
}
#myChart {
    margin: 20px auto;
    height: 400px !important;
    width: 700px !important;
    font-size: 25px !important;
}
</style>