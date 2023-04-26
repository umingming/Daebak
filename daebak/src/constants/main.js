export const total = "총";
export const average = "평균";
export const value = "매출액";
export const amount = "주문 수";

export const BANNER = {
    value: "매출액",
    amount: "주문 수",
};
export const CHART_PRICE = {
    chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    font: {
                        size: 15,
                    },
                    boxWidth: 7,
                    boxHeight: 7,
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
                    callback(data) {
                        return +this.getLabelForValue(data).slice(-2);
                    },
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
                    callback(data) {
                        let value = (data + "").slice(0, -4);
                        return value || 0;
                    },
                    font: {
                        size: 14,
                    },
                    stepSize: 200000,
                    max: 1000000,
                },
                grid: {
                    borderWidth: 0,
                },
            },
        },
    },
};

export const CHART_QUANTITY_AVG = {
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
                    boxHeight: 7,
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

export const CHART_QUANTITY_RATE = {
    labels: ["배달의민족", "요기요", "쿠팡이츠", "배달특급", "기타"],
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
                    boxHeight: 7,
                    padding: 15,
                    usePointStyle: true,
                    pointStyle: "circle",
                },
            },
        },
    },
    backgroundColor: ["#36A2EB", "#FF6384", "#FFCD56", "#4BC0C0", "#E5E5E5"],
};
