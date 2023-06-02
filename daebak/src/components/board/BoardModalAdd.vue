<template>
    <div class="modal-mask">
        <div class="modal">
            <div class="modal-item">
                <base-item
                    :checkedItem="checkedOrder"
                    @apply="appendPendingOrder"
                >
                </base-item>
            </div>
            <div class="modal-table">
                <base-table
                    :items="pendingOrders"
                    :isModal="true"
                    @delete="deletePendingOrder"
                >
                </base-table>
            </div>
            <div class="btn">
                <button class="close" @click="$emit('close')">취소</button>
                <button class="ok" @click="addOrders">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BaseItem from "@/components/base/BaseItem.vue";
import orderMixin from "@/mixins/orderMixin.js";

export default {
    components: {
        BaseTable,
        BaseItem,
    },
    mixins: [orderMixin],
    computed: {
        checkedOrder() {
            return this.checkedOrders.at(-1);
        },
    },
    methods: {
        addOrders() {
            const orders = this.pendingOrders.forEach(
                (i) => (i.checked = false)
            );
            this.ADD_ORDERS(orders);
            this.$emit("close");
        },
    },
};
</script>

<style scoped></style>
