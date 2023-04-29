import axios from "axios";

const config = {
    baseUrl: "http://192.168.101.43:5959/api/v1/daebak",
};

function fetchUserInfo() {
    return {
        id: "ymlee",
        password: "java1234",
    };
}

function fetchOrders() {
    return {
        data: {
            data: [
                {
                    orderDate: "2023-04-01",
                    content: "배달의민족이용",
                    price: "3320000",
                    quantity: "10",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-01",
                    content: "가달의 민족",
                    price: "100000",
                    quantity: "3",
                    type: "요기요",
                },
                {
                    orderDate: "2023-04-02",
                    content: "마달의 민족",
                    price: "300000",
                    quantity: "1",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-03",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-02",
                    content: "사달의 민족",
                    price: "500000",
                    quantity: "1",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-05",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "8",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-08",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-09",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-01",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "15",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-02",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-03",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "10",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-02",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "6",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-05",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "10",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-06",
                    content: "배달의 민족",
                    price: "140000",
                    quantity: "20",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-07",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "13",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-08",
                    content: "배달의 민족",
                    price: "30000",
                    quantity: "12",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-09",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "1",
                    type: "배달특급",
                },
                {
                    orderDate: "2023-04-10",
                    content: "배달의 민족",
                    price: "130000",
                    quantity: "13",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-11",
                    content: "배달의 민족",
                    price: "170000",
                    quantity: "13",
                    type: "요기요",
                },
                {
                    orderDate: "2023-04-12",
                    content: "배달의 민족",
                    price: "200000",
                    quantity: "6",
                    type: "요기요",
                },
                {
                    orderDate: "2023-04-13",
                    content: "배달의 민족",
                    price: "800000",
                    quantity: "17",
                    type: "요기요",
                },
                {
                    orderDate: "2023-04-14",
                    content: "배달의 민족",
                    price: "160000",
                    quantity: "12",
                    type: "요기요",
                },
                {
                    orderDate: "2023-04-15",
                    content: "배달의 민족",
                    price: "0",
                    quantity: "17",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-16",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "20",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-17",
                    content: "배달의 민족",
                    price: "190000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-18",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-19",
                    content: "배달의 민족",
                    price: "700000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-20",
                    content: "배달의 민족",
                    price: "900000",
                    quantity: "18",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-21",
                    content: "배달의 민족",
                    price: "600000",
                    quantity: "1",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-22",
                    content: "배달의 민족",
                    price: "160000",
                    quantity: "15",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-23",
                    content: "배달의 민족",
                    price: "130000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-24",
                    content: "배달의 민족",
                    price: "500000",
                    quantity: "16",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-25",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-25",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-04-26",
                    content: "배달의 민족",
                    price: "200000",
                    quantity: "20",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-01",
                    content: "배달의 민족",
                    price: "320000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-01",
                    content: "가달의 민족",
                    price: "100000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-02",
                    content: "마달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-03",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-02",
                    content: "사달의 민족",
                    price: "500000",
                    quantity: "1",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-05",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-08",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-09",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "3",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-01",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "15",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-02",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-03",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "10",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-02",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "6",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-05",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "10",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-06",
                    content: "배달의 민족",
                    price: "140000",
                    quantity: "20",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-07",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "13",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-08",
                    content: "배달의 민족",
                    price: "30000",
                    quantity: "12",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-09",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "1",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-10",
                    content: "배달의 민족",
                    price: "130000",
                    quantity: "13",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-11",
                    content: "배달의 민족",
                    price: "170000",
                    quantity: "13",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-12",
                    content: "배달의 민족",
                    price: "200000",
                    quantity: "6",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-13",
                    content: "배달의 민족",
                    price: "800000",
                    quantity: "17",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-14",
                    content: "배달의 민족",
                    price: "160000",
                    quantity: "12",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-15",
                    content: "배달의 민족",
                    price: "0",
                    quantity: "17",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-16",
                    content: "배달의 민족",
                    price: "100000",
                    quantity: "20",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-17",
                    content: "배달의 민족",
                    price: "190000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-18",
                    content: "배달의 민족",
                    price: "300000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-19",
                    content: "배달의 민족",
                    price: "700000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-20",
                    content: "배달의 민족",
                    price: "900000",
                    quantity: "18",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-21",
                    content: "배달의 민족",
                    price: "600000",
                    quantity: "1",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-22",
                    content: "배달의 민족",
                    price: "160000",
                    quantity: "15",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-23",
                    content: "배달의 민족",
                    price: "130000",
                    quantity: "5",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-24",
                    content: "배달의 민족",
                    price: "500000",
                    quantity: "16",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-25",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-25",
                    content: "배달의 민족",
                    price: "80000",
                    quantity: "7",
                    type: "배달의민족",
                },
                {
                    orderDate: "2023-03-26",
                    content: "배달의 민족",
                    price: "200000",
                    quantity: "20",
                    type: "배달의민족",
                },
            ],
            result: "SUCCESS",
        },
    };
}

// function fetchOrders() {
//     return axios.get(config.baseUrl);
// }
function createOrders(list) {
    return axios.post(config.baseUrl, list);
}
function deleteOrders(idList) {
    return axios.delete(`${config.baseUrl}/?idList=${idList}`);
}

export { fetchUserInfo, createOrders, fetchOrders, deleteOrders };
