<template>
    <div class="main-board">
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
        checkItems() {
            return [...this.checkList];
        }
    },
    created() {
        this.$store.dispatch("FETCH_LIST");
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
    background: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 5px 5px 0px #fd96364f;
    margin-right: 5px;
}
.main-board ::v-deep #budget-table{
    height: 100%;
    margin: 0 auto;
    overflow: scroll;
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
</style>