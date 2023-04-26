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
        <budget-table :items="orders" :hasPagination="false"> </budget-table>
    </div>
</template>

<script>
import BudgetTable from "@/components/BudgetTable.vue";
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";

export default {
    components: {
        BudgetTable,
    },
    mixins: [orderMixin, dateMixin],
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
        title() {
            return `${this.currentMonth}월 주문 내역`;
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
    position: relative;
    background-image: linear-gradient(to right, #ff7b0084, #ff7b00);
    color: white;
    width: 27px !important;
    height: 20px !important;
    margin-left: 7px;
    border: none;
    border-radius: 3px;
    overflow: hidden;
}
.main-board button i {
    font-size: 15px;
    transform: translateY(1px);
}
.main-board button:hover {
    background-color: #ff7b00;
    transition: background-color 0.5s ease-in-out;
}
.main-board button::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1)
    );
}
.main-board button:hover::before {
    animation: light-up 0.5s linear 1;
}
@keyframes light-up {
    0% {
        left: -50%;
    }
    100% {
        left: 100%;
    }
}
</style>
