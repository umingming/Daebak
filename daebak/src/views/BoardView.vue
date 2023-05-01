<template>
    <div id="board-view" class="wrapper">
        <modal-add
            v-if="isShowModal.add"
            :checkItem="checkItems[0]"
            @close="isShowModal['add'] = false"
        >
        </modal-add>
        <modal-modify
            v-if="isShowModal.modify"
            :checkItems="checkItems"
            @close="isShowModal['modify'] = false"
        >
        </modal-modify>
        <board-filter></board-filter>
        <board-table @add="showModalAdd"></board-table>
    </div>
</template>

<script>
import ModalAdd from "@/components/board/BoardModalAdd.vue";
import ModalModify from "@/components/BudgetModalModify.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";
import BoardTable from "@/components/board/BoardTable.vue";
import "vue2-datepicker/index.css";

import { mapGetters } from "vuex";
import { deleteOrders } from "@/api";

export default {
    components: {
        ModalAdd,
        ModalModify,
        BoardFilter,
        BoardTable,
    },
    data() {
        return {
            checkItems: [],
            isShowModal: {
                add: true,
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
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.dispatchOrder("FETCH_ORDERS");
        },
        showModalAdd(items) {
            this.checkItems = items;
            this.isShowModal.add = true;
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
