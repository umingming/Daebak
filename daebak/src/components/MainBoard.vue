<template>
    <div class="main-board">
        <h3>{{ title }}</h3>
        <budget-table
            :items="fetchedList"
            :hasPagination="false"
        >
        </budget-table>
    </div>
</template>

<script>
import BudgetTable from "@/components/BudgetTable.vue";

import { mapGetters } from "vuex";

export default {
    components: {
        BudgetTable
    },
    data() {
        return {
            excelField: {
                날짜: "date",
                내용: "title",
                금액: "value",
                주문: "amount",
                분류: "cate"
            },
            checkList: [],
            isShowModal: {
                add: false,
                modify: false
            },
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
        ...mapGetters(["fetchedList"]),
        itemsByDate() {
            let items = this.fetchedList.filter(i => i.date === this.today);
            return items;
        },
        title() {
            return `${new Date().getMonth() + 1}월 주문 내역`;
        },
        today() {
            return new Date().toISOString().slice(0, 10);
        },
    },
    methods: {
        showModal({target}) {
            this.checkList = this.budgetList.filter(i => i.check);

            let key = target.id || target.parentNode.id;
            this.isShowModal[key] = true;
        },
    }
};
</script>

<style scoped>
.main-board {
    position: relative;
    background: white;
    padding: 20px;
    box-shadow: 3px 3px 0px #fd96364f;
    margin-right: 5px;
}
.main-board ::v-deep #budget-table{
    position: relative;
    height: 230px;
    margin: 2px auto;
    overflow-x: visible;
    overflow-y: scroll;
}
.main-board ::v-deep #budget-table th,
.main-board ::v-deep #budget-table td {
    width: 90px !important;
}
.main-board ::v-deep #budget-table th:nth-child(1),
.main-board ::v-deep #budget-table td:nth-child(1),
.main-board ::v-deep #budget-table th:nth-child(2),
.main-board ::v-deep #budget-table td:nth-child(2) {
    display: none;
}
.budget-box .search {
    position: absolute;
    left: 50px;
    top: 19px;
    width: 450px;
    height: 30px;
    line-height: 25px;
}
.budget-box .search input {
    height: 22px;
    margin-right: 10px;
}
.budget-box .search input:focus,
.budget-box .search select:focus {
    outline: none;
}
.budget-box .search select {
    height: 26px;
}
.budget-box .search #keyword {
    width: 120px;
}
h3 {
    font-size: 18px;
    color: #666;
    transform: translateX(10px) translateY(-7px);
}
</style>