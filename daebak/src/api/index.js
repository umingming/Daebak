import axios from "axios";

const config = {
    baseUrl: "http://192.168.101.113:5959/api/v1/daebak",
};

function fetchUserInfo() {
    return {
        id: "ymlee",
        password: "java1234",
    };
}

function fetchList() {
    return [
        {
            date: "2023-02-01",
            title: "배달의 민족",
            value: "320000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-01",
            title: "가달의 민족",
            value: "100000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "마달의 민족",
            value: "300000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-03",
            title: "배달의 민족",
            value: "300000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "사달의 민족",
            value: "500000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-05",
            title: "배달의 민족",
            value: "300000",
            amount: "8",
            cate: "배민",
        },
        {
            date: "2023-02-08",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-09",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-01",
            title: "배달의 민족",
            value: "80000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "배달의 민족",
            value: "100000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-03",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "배달의 민족",
            value: "100000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-02-05",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-06",
            title: "배달의 민족",
            value: "140000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-02-07",
            title: "배달의 민족",
            value: "300000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-08",
            title: "배달의 민족",
            value: "30000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-02-09",
            title: "배달의 민족",
            value: "80000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-10",
            title: "배달의 민족",
            value: "130000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-11",
            title: "배달의 민족",
            value: "170000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-12",
            title: "배달의 민족",
            value: "200000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-02-13",
            title: "배달의 민족",
            value: "800000",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-02-14",
            title: "배달의 민족",
            value: "160000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-02-15",
            title: "배달의 민족",
            value: "0",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-02-16",
            title: "배달의 민족",
            value: "100000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-02-17",
            title: "배달의 민족",
            value: "190000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-18",
            title: "배달의 민족",
            value: "300000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-19",
            title: "배달의 민족",
            value: "700000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-20",
            title: "배달의 민족",
            value: "900000",
            amount: "18",
            cate: "배민",
        },
        {
            date: "2023-02-21",
            title: "배달의 민족",
            value: "600000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-22",
            title: "배달의 민족",
            value: "160000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-02-23",
            title: "배달의 민족",
            value: "130000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-24",
            title: "배달의 민족",
            value: "500000",
            amount: "16",
            cate: "배민",
        },
        {
            date: "2023-02-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-26",
            title: "배달의 민족",
            value: "200000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "배달의 민족",
            value: "320000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "가달의 민족",
            value: "100000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "마달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-03",
            title: "배달의 민족",
            value: "300000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "사달의 민족",
            value: "500000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-05",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-08",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-09",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "배달의 민족",
            value: "80000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "배달의 민족",
            value: "100000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-03",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "배달의 민족",
            value: "100000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-03-05",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-03-06",
            title: "배달의 민족",
            value: "140000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-07",
            title: "배달의 민족",
            value: "300000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-08",
            title: "배달의 민족",
            value: "30000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-03-09",
            title: "배달의 민족",
            value: "80000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-10",
            title: "배달의 민족",
            value: "130000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-11",
            title: "배달의 민족",
            value: "170000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-12",
            title: "배달의 민족",
            value: "200000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-03-13",
            title: "배달의 민족",
            value: "800000",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-03-14",
            title: "배달의 민족",
            value: "160000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-03-15",
            title: "배달의 민족",
            value: "0",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-03-16",
            title: "배달의 민족",
            value: "100000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-17",
            title: "배달의 민족",
            value: "190000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-18",
            title: "배달의 민족",
            value: "300000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-19",
            title: "배달의 민족",
            value: "700000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-20",
            title: "배달의 민족",
            value: "900000",
            amount: "18",
            cate: "배민",
        },
        {
            date: "2023-03-21",
            title: "배달의 민족",
            value: "600000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-22",
            title: "배달의 민족",
            value: "160000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-03-23",
            title: "배달의 민족",
            value: "130000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-24",
            title: "배달의 민족",
            value: "500000",
            amount: "16",
            cate: "배민",
        },
        {
            date: "2023-03-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-26",
            title: "배달의 민족",
            value: "200000",
            amount: "20",
            cate: "배민",
        },
    ];
}

function fetchOrders() {
    return [
        {
            date: "2023-02-01",
            title: "배달의 민족",
            value: "320000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-01",
            title: "가달의 민족",
            value: "100000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "마달의 민족",
            value: "300000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-03",
            title: "배달의 민족",
            value: "300000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "사달의 민족",
            value: "500000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-05",
            title: "배달의 민족",
            value: "300000",
            amount: "8",
            cate: "배민",
        },
        {
            date: "2023-02-08",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-09",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-02-01",
            title: "배달의 민족",
            value: "80000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "배달의 민족",
            value: "100000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-03",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-02",
            title: "배달의 민족",
            value: "100000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-02-05",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-02-06",
            title: "배달의 민족",
            value: "140000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-02-07",
            title: "배달의 민족",
            value: "300000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-08",
            title: "배달의 민족",
            value: "30000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-02-09",
            title: "배달의 민족",
            value: "80000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-10",
            title: "배달의 민족",
            value: "130000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-11",
            title: "배달의 민족",
            value: "170000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-02-12",
            title: "배달의 민족",
            value: "200000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-02-13",
            title: "배달의 민족",
            value: "800000",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-02-14",
            title: "배달의 민족",
            value: "160000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-02-15",
            title: "배달의 민족",
            value: "0",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-02-16",
            title: "배달의 민족",
            value: "100000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-02-17",
            title: "배달의 민족",
            value: "190000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-18",
            title: "배달의 민족",
            value: "300000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-19",
            title: "배달의 민족",
            value: "700000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-20",
            title: "배달의 민족",
            value: "900000",
            amount: "18",
            cate: "배민",
        },
        {
            date: "2023-02-21",
            title: "배달의 민족",
            value: "600000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-02-22",
            title: "배달의 민족",
            value: "160000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-02-23",
            title: "배달의 민족",
            value: "130000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-02-24",
            title: "배달의 민족",
            value: "500000",
            amount: "16",
            cate: "배민",
        },
        {
            date: "2023-02-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-02-26",
            title: "배달의 민족",
            value: "200000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "배달의 민족",
            value: "320000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "가달의 민족",
            value: "100000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "마달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-03",
            title: "배달의 민족",
            value: "300000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "사달의 민족",
            value: "500000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-05",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-08",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-09",
            title: "배달의 민족",
            value: "300000",
            amount: "3",
            cate: "배민",
        },
        {
            date: "2023-03-01",
            title: "배달의 민족",
            value: "80000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "배달의 민족",
            value: "100000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-03",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-03-02",
            title: "배달의 민족",
            value: "100000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-03-05",
            title: "배달의 민족",
            value: "100000",
            amount: "10",
            cate: "배민",
        },
        {
            date: "2023-03-06",
            title: "배달의 민족",
            value: "140000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-07",
            title: "배달의 민족",
            value: "300000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-08",
            title: "배달의 민족",
            value: "30000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-03-09",
            title: "배달의 민족",
            value: "80000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-10",
            title: "배달의 민족",
            value: "130000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-11",
            title: "배달의 민족",
            value: "170000",
            amount: "13",
            cate: "배민",
        },
        {
            date: "2023-03-12",
            title: "배달의 민족",
            value: "200000",
            amount: "6",
            cate: "배민",
        },
        {
            date: "2023-03-13",
            title: "배달의 민족",
            value: "800000",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-03-14",
            title: "배달의 민족",
            value: "160000",
            amount: "12",
            cate: "배민",
        },
        {
            date: "2023-03-15",
            title: "배달의 민족",
            value: "0",
            amount: "17",
            cate: "배민",
        },
        {
            date: "2023-03-16",
            title: "배달의 민족",
            value: "100000",
            amount: "20",
            cate: "배민",
        },
        {
            date: "2023-03-17",
            title: "배달의 민족",
            value: "190000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-18",
            title: "배달의 민족",
            value: "300000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-19",
            title: "배달의 민족",
            value: "700000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-20",
            title: "배달의 민족",
            value: "900000",
            amount: "18",
            cate: "배민",
        },
        {
            date: "2023-03-21",
            title: "배달의 민족",
            value: "600000",
            amount: "1",
            cate: "배민",
        },
        {
            date: "2023-03-22",
            title: "배달의 민족",
            value: "160000",
            amount: "15",
            cate: "배민",
        },
        {
            date: "2023-03-23",
            title: "배달의 민족",
            value: "130000",
            amount: "5",
            cate: "배민",
        },
        {
            date: "2023-03-24",
            title: "배달의 민족",
            value: "500000",
            amount: "16",
            cate: "배민",
        },
        {
            date: "2023-03-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-25",
            title: "배달의 민족",
            value: "80000",
            amount: "7",
            cate: "배민",
        },
        {
            date: "2023-03-26",
            title: "배달의 민족",
            value: "200000",
            amount: "20",
            cate: "배민",
        },
    ];
}
function createOrder(list) {
    return axios.post(config.baseUrl, list);
}

export { fetchUserInfo, fetchList, createOrder, fetchOrders };
