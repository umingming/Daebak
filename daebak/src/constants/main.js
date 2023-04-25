export const total = "총";
export const average = "평균";
export const value = "매출액";
export const amount = "주문 수";

export const BANNER = {
    value: "매출액",
    amount: "주문 수",
};
export const CHART_OPTIONS_PRICE = {
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
};
