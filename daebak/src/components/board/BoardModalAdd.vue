<template>
    <div class="modal-mask">
        <div class="modal-add">
            <div class="add-item">
                <base-item :checkedItem="checkedItem" @apply="addItem">
                </base-item>
            </div>
            <div class="add-list">
                <base-table
                    :items="listItems"
                    :isModal="true"
                    @delete="deleteItem"
                >
                </base-table>
            </div>
            <div class="btn">
                <button @click="$emit('close')">취소</button>
                <button @click="addBudget">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BaseItem from "@/components/base/BaseItem.vue";
import orderMixin from "@/mixins/orderMixin.js";
import { createOrders } from "@/api";

export default {
    components: {
        BaseTable,
        BaseItem,
    },
    mixins: [orderMixin],
    data() {
        return {
            addItems: [],
        };
    },
    computed: {
        listItems() {
            let items = [...this.addItems];
            items.forEach((i) => (i.check = true));
            return items;
        },
        checkedItem() {
            return this.orders.find((i) => i.check);
        },
    },
    methods: {
        addItem(item) {
            this.addItems = [...this.addItems, item];
        },
        deleteItem(index) {
            this.addItems.splice(index, 1);
        },
        addBudget() {
            const param = this.addItems.map((i) => {
                return {
                    quantity: i.amount,
                    type: i.cate,
                    orderDate: i.date,
                    price: i.value,
                    content: i.title,
                };
            });
            createOrders(param);
            this.$emit("close");
        },
    },
};
</script>

<style scoped></style>
