<template>
    <div class="main-board">
        <h3>{{ title }}</h3>
        <div class="btn">
            <router-link to="/board" tag="button">
                <i class="fa-solid fa-bars"></i>
            </router-link>
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <budget-table :items="fetchedList" :hasPagination="false">
        </budget-table>
    </div>
</template>

<script>
import BudgetTable from "@/components/BudgetTable.vue";

import { mapGetters } from "vuex";

export default {
    components: {
        BudgetTable,
    },
    data() {
        return {
            excelField: {
                날짜: "date",
                내용: "title",
                금액: "value",
                주문: "amount",
                분류: "cate",
            },
            checkList: [],
            isShowModal: {
                add: false,
                modify: false,
            },
            addItem: {
                date: "",
                title: "",
                value: "",
                amount: "",
                cate: "",
            },
        };
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        itemsByDate() {
            let items = this.fetchedList.filter((i) => i.date === this.today);
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
        showModal({ target }) {
            this.checkList = this.budgetList.filter((i) => i.check);

            let key = target.id || target.parentNode.id;
            this.isShowModal[key] = true;
        },
    },
};
</script>

<style scoped>
.main-board ::v-deep #budget-table {
    position: relative;
    height: 190px;
    top: -15px;
    margin: 2px auto;
    overflow-x: visible;
    overflow-y: scroll;
}
#budget-table::-webkit-scrollbar {
    width: 8px;
}

#budget-table::-webkit-scrollbar-thumb {
    height: 20%;
    background: #ff7b00;
    border-radius: 5px;
}

#budget-table::-webkit-scrollbar-track {
    margin-top: 30px;
    border-radius: 10px;
    background: #fff;
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
.main-board .btn {
    position: relative;
    transform: translateX(270px) translateY(-27px);
    z-index: 1000;
}
.main-board button {
    background: linear-gradient(to right, #ff7b00, #ff7b00b7);
    color: white;
    width: 27px !important;
    height: 20px !important;
    margin-left: 7px;
    border: none;
    border-radius: 3px;
}
.main-board button i {
    font-size: 15px;
    transform: translateY(1px);
}
.main-board button:hover {
    background: linear-gradient(to right, #ff7b00, #ff7b00b7 60%, #ff7b00 90%);
    animation: slidebg 2s linear infinite;
}

@keyframes slidebg {
    to {
        background-position: 20vw;
    }
}
</style>
