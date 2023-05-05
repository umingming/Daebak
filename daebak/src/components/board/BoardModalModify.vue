<template>
    <div class="modal-mask">
        <div class="modal-add">
            <div class="add-item">
                <base-item @apply="modifyItems"> </base-item>
            </div>
            <div class="add-list">
                <base-table
                    :items="pendingOrders"
                    :isModal="true"
                    @delete="deletePendingOrder"
                >
                </base-table>
            </div>
            <div class="btn">
                <button @click="$emit('close')">취소</button>
                <button @click="$emit('ok')">확인</button>
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
    created() {
        this.initPendingOrders(this.checkedOrders);
    },
    methods: {
        modifyItems(item) {
            const keys = Object.keys(item);
            for (const key of keys) {
                const $values = document.querySelectorAll(
                    `.add-list td#${key}`
                );
                $values.forEach((i) => (i.innerHTML += item[key]));
            }
        },
    },
};
</script>

<style scoped>
.budget-add {
    position: absolute;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    width: 900px;
    height: 300px;
    padding: 20px 20px;
    background: white;
    border-radius: 5px;
    border: 1px solid #7575753e;
    font-size: 15px;
    z-index: 1;
}
.budget-add .btn-icon {
    transform: translateX(110px) translateY(20px);
    width: 80px;
}
.budget-add .btn-icon button {
    width: 28px;
    height: 20px;
    border-radius: 3px;
}
.budget-add .btn-icon button i {
    font-size: 16px;
}
.budget-add .add-item {
    float: left;
    width: 200px;
    height: 70%;
    margin-top: 10px;
    border-right: 1px solid #7575753e;
}
.budget-add .add-list {
    float: left;
    width: 660px;
    height: 90%;
    transform: translateX(15px);
    margin-left: 10px;
}
.add-list #budget-table table th,
.add-list #budget-table table td {
    width: 19% !important;
}

.btn {
    position: absolute;
    width: 95%;
    bottom: 10px;
    margin: 0 auto;
}
.btn button {
    font-size: 20px;
    width: 60px;
    height: 30px;
    font-weight: bolder;
    display: inline-block;
}
.btn button:nth-child(2) {
    float: right;
    transform: translateX(-5px);
}
</style>
