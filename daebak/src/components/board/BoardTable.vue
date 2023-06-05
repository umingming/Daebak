<template>
    <div class="board-table" :class="{ 'has-filter': hasFilter }">
        <div class="board-box">
            <h3 data-test="title">{{ title }}</h3>
            <div class="btn-icon">
                <button class="btn-add" @click="$emit('add')">
                    <i class="fa-solid fa-square-plus"></i>
                </button>
                <button class="btn-modify" @click="$emit('modify')">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn-delete" @click="$emit('remove')">
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
            >
            </base-table>
        </div>
    </div>
</template>

<script>
import BaseTable from "@/components/common/base/BaseTable.vue";
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
            hasFilter: false,
        };
    },
    computed: {
        title() {
            const total = this.orders.length;
            return `총 ${total}건`;
        },
    },
    methods: {
        toggleFilter() {
            this.hasFilter = !this.hasFilter;
        },
    },
};
</script>
