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
            <button class="btn-delete" id="delete">
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
import orderMixin from "@/mixins/orderMixin.js";

export default {
    components: {
        BaseTable,
    },
    mixins: [orderMixin],
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
        };
    },
    computed: {
        checkItems() {
            return [...this.checkList];
        },
    },
    methods: {
        showModal({ target }) {
            this.checkList = this.orders.filter((i) => i.check);
            const event = target.id || target.parentNode.id;
            this.$emit(event, this.checkList);
        },
        checkItem(index, isChecked) {
            if (this.orders[index]) {
                this.orders[index].check = isChecked;
            }
        },
    },
};
</script>
