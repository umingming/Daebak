<template>
    <div class="budget-box">
        <table>
            <tr>
                <th>날짜</th>
                <th>내용</th>
                <th>금액</th>
                <th>주문</th>
                <th>분류</th>
            </tr>
            <tr v-for="(item, index) in budgetList" :key="index">
                <td>{{ item.date }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.value }}원</td>
                <td>{{ item.amount }}건</td>
                <td>{{ item.cate }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            budgetList: [
                {
                    date: "2023-02-01",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-01",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-02",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-03",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-04",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-05",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
            ]
        }
    }
};
</script>

<style scoped>
.budget-box {
    margin: 150px auto;
    background: white;
    border-radius: 5px;
    height: 410px;
    width: 710px;
}
.budget-box table {
    position: relative;
    width: 100%;
    font-size: 20px;
    padding: 10px;
}
.budget-box table tr {
    width: 100%;
    height: 30px !important;
    border-bottom: 1px solid gray;
}
.budget-box table th,
.budget-box table td{
    width: 20%;
    text-align: center;
}
.budget-box table th:nth-child(2),
.budget-box table td:nth-child(2){
    width: 30%;
}
.budget-box table th:nth-child(4),
.budget-box table th:nth-child(5),
.budget-box table td:nth-child(4),
.budget-box table td:nth-child(5){
    width: 15%;
}
</style>