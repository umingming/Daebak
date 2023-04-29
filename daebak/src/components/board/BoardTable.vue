<template>
    <div class="board-table">
        <h3 data-test="title">주문 목록</h3>
        <div class="btn-icon">
            <button class="btn-add" id="add" @click="showModal">
                <i class="fa-solid fa-square-plus"></i>
            </button>
            <button class="btn-modify" id="modify" @click="showModal">
                <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn-delete" id="delete" @click="deleteData">
                <i class="fa-solid fa-trash"></i>
            </button>
            <export-excel
                class="btn-excel"
                :data="orders"
                :fields="excelField"
                name="excel.xls"
            >
                <i class="fa-solid fa-floppy-disk"></i>
            </export-excel>
        </div>
        <base-table
            :items="orders"
            :hasPagination="true"
            :hasCheckBox="true"
            @check="checkItem"
        >
        </base-table>
    </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";

import { mapGetters } from "vuex";
import { deleteOrders } from "@/api";

export default {
    components: {
        BaseTable,
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
            searchDate: null,
        };
    },
    computed: {
        ...mapGetters("date", ["month", "year"]),
        ...mapGetters("order", ["orders"]),
        checkItems() {
            return [...this.checkList];
        },
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.dispatchOrder("FETCH_ORDERS");
        },
        showModal({ target }) {
            this.checkList = this.orders.filter((i) => i.check);

            let key = target.id || target.parentNode.id;
            this.isShowModal[key] = true;
        },
        checkItem(index, isChecked) {
            if (this.orders[index]) {
                this.orders[index].check = isChecked;
            }
        },
        dispatchOrder(action, param = {}) {
            return this.$store.dispatch(`order/${action}`, param);
        },
        deleteData() {
            const orderIds = this.checkItems.map((i) => i.orderId);
            console.log(this.checkItems);
            deleteOrders(orderIds.join(","));
            this.init();
        },
    },
};
</script>
