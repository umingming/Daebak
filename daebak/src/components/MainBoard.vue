<template>
    <div class="main-board">
        <div class="search">
            <input type="date">
            <input type="date">
            <select 
                name="type"
            >
                <option value="title">내용</option>
                <option value="value">금액</option>
                <option value="amount">주문</option>
                <option value="cate">분류</option>
            </select>
            <input type="text" id="keyword">
        </div>
        <budget-table
            :items="fetchedList"
            :hasPagination="true"
            :pageSize="5"
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
    position: relative;
    background: white;
    border-radius: 5px;
    width: 1000px !important;  
    padding: 20px 20px 40px 20px;
    margin: 40px auto;
}

.main-board ::v-deep #budget-table{
    width: 950px !important;
    margin: 0 auto;
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