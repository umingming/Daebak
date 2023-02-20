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
                    labels: ['23.02.01', '23.02.02', '23.02.03', '23.02.04', '23.02.05', '23.02.06', '23.02.07', '23.02.08', '23.02.09', '23.02.10'],
                    datasets: [
                        {
                            label: '배달',
                            data: [200000, 20000, 130000, 12000, 250000, 300000, 20000, 210000, 270000, 200000],
                            borderWidth: 2,
                            order: 0,
                            borderColor: 'white',
                            backgroundColor: '#2AC0BB',
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
                            data: [220000, 22000, 150000, 14000, 270000, 330000, 22000, 250000, 370000, 220000],
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
}
</style>