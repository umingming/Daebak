<template>
    <div class="budget">
        <div class="budget-box">
            <table>
                <tr>
                    <th>날짜</th>
                    <th>내용</th>
                    <th>금액</th>
                    <th>주문</th>
                    <th>분류</th>
                </tr>
                <tr v-for="(item, index) in pageItems" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ itemPrice(item.value) }}</td>
                    <td>{{ item.amount }}건</td>
                    <td>{{ item.cate }}</td>
                </tr>
                <tr v-if="isAddingItem">
                    <td>{{ addItem.date }}</td>
                    <td>{{ addItem.title }}</td>
                    <td>{{ itemPrice(addItem.value) }}</td>
                    <td>{{ addItem.amount }}건</td>
                    <td>{{ addItem.cate }}</td>
                </tr>
            </table>
            <div class="pagination">
                <button @click="decreaseIndex">◀️</button>
                <div>
                    {{ pageIndex + 1 }} / {{ pageCount }}
                </div>
                <button @click="increaseIndex">▶️</button>
            </div>
        </div>
        <budget-add 
            @updateItem="updateItem"
        >
        </budget-add>
    </div>
</template>

<script>
import BudgetAdd from "@/components/BudgetAdd.vue";

export default {
    components: {
        BudgetAdd
    },
    data() {
        return {
            pageIndex: 0,
            pageSize: 10,
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
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
            ],
            addFlag: true,
            addItem: {
                date: "",
                title: "",
                value: "",
                amount: "",
                cate: ""
            }
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.budgetList.length / this.pageSize);
        },
        pageItems() {
            let start = this.pageIndex * this.pageSize;
            let end = start + this.pageSize;
            return this.budgetList.slice(start, end);
        },
        itemPrice() {
            return (value) => {
                let price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                return `${price}원`;
            }
        },
        isAddingItem() {
            return this.addFlag 
                && this.pageIndex === this.pageCount - 1
                && this.pageItems.length < this.pageSize
        },
    },
    created() {
        this.SortBudgetDateWithDesc();
    },
    methods: {
        SortBudgetDateWithDesc() {
            this.budgetList = this.budgetList.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
        },
        increaseIndex() {
            if (this.pageIndex < this.pageCount - 1) {
                ++this.pageIndex;
            }
        },
        decreaseIndex() {
            if (this.pageIndex > 0) {
                --this.pageIndex;
            }
        },
        updateItem(key, value) {
            this.addItem[key] = value;
        }
    }
};
</script>

<style scoped>
.budget {
    position: relative;
    width: 720px;
}
.budget-box {
    position: relative;
    margin: 150px auto;
    background: white;
    border-radius: 5px;
    height: 410px;
    width: 690px;
    padding: 10px 20px;
}
.budget-box table {
    position: relative;
    width: 100%;
    font-size: 20px;
    border-collapse: collapse;
}
.budget-box table tr {
    width: 100%;
    height: 32px !important;
}
.budget-box table th,
.budget-box table td{
    border-bottom: 1px solid #7575753e;
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
.budget-box table td:nth-child(3),
.budget-box table td:nth-child(4){
    text-align: right;
}

.pagination {
    position: absolute;
    bottom: 10px;
    height: 30px;
    line-height: 30px;
    left:50%;
    transform:translateX(-50%);
}
.pagination div {
    width: 70px;
    text-align: center;
    display: inline-block
}
</style>