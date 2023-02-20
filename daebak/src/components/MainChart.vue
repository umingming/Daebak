<template>
    <div>
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
                            label: '배달',
                            data: [200000, 20000, 130000, 12000, 250000, 300000, 20000, 210000, 270000, 200000],
                            borderWidth: 2,
                            order: 0,
                            borderColor: 'white',
                            backgroundColor: '#5aa9e6',
                        }, 
                        {
                            label: '포장',
                            data: [20000, 2000, 13000, 1200, 25000, 30000, 2000, 21000, 27000, 20000],
                            borderWidth: 2,
                            borderColor: 'white',
                            order: 1,
                        },
                        {
                            label: '합계',
                            data: [220000, 200000, 150000, 140000, 270000, 330000, 220000, 250000, 370000, 220000],
                            borderWidth: 1,
                            type: 'line',
                            order: 2,
                            borderColor: '#FF7B00',
                            backgroundColor: '#FF7B0010',
                            pointStyle: 'circle',
                            pointRadius: 5,
                            pointHoverRadius: 7,
                            fill: true,
                            pointBackgroundColor: 'white',
                            pointHoverBackgroundColor: '#FF7B00',
                        } 
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            fontSize: 13
                        }
                    },
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                callback: function(dataLabel) {
                                    let value = dataLabel + "";
                                    return `${value.slice(0, value.length - 4)}만원`
                                },
                                fontSize: 15,
                                stepSize: 100000
                            }
                        }],
                        xAxes: [{
                            display: true,
                            ticks: {
                                fontSize: 15
                            }
                        }]
                    },
                }
            });
        }
    }
};
</script>

<style scoped>
#myChart {
    margin: 20px auto;
    background: white;
    height: 400px !important;
    width: 700px !important;
    font-size: 25px !important;
}
</style>