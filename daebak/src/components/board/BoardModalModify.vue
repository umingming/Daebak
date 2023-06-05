<template>
    <div class="modal-mask">
        <div class="modal">
            <div class="modal-item">
                <base-item
                    :has-check-box="true"
                    @reset="updateField"
                    @apply="updateField"
                >
                </base-item>
            </div>
            <div class="modal-table">
                <base-table :items="pendingOrders" :isModal="true">
                    <template v-slot:table-body>
                        <tr
                            v-for="(order, index) in pendingOrders"
                            :key="index"
                        >
                            <td class="col-delete">
                                <button
                                    class="btn-delete"
                                    @click="deletePendingOrder(index)"
                                >
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </td>
                            <td
                                v-for="{ name, formatValue } in fields"
                                :key="name"
                                :id="name"
                            >
                                {{ formatValue(order[name]) }}
                                <span :class="{ on: newField[name] }">
                                    {{ newField[name] }}
                                </span>
                            </td>
                        </tr>
                    </template>
                </base-table>
            </div>
            <div class="btn">
                <button class="close" @click="$emit('close')">취소</button>
                <button class="ok" @click="editOrders">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTable from "@/components/common/base/BaseTable.vue";
import BaseItem from "@/components/common/base/BaseItem.vue";
import orderMixin from "@/mixins/orderMixin.js";
import { FIELDS } from "@/constants/order.js";

export default {
    components: {
        BaseTable,
        BaseItem,
    },
    mixins: [orderMixin],
    data() {
        return {
            newField: {},
            fields: FIELDS,
        };
    },
    mounted() {
        this.initPendingOrders(this.checkedOrders);
    },
    beforeDestroy() {
        this.initPendingOrders();
    },
    methods: {
        updateField(item = {}) {
            this.newField = item;
        },
        editOrders() {
            const param = {
                _id: this.pendingOrders.map((i) => i._id),
                field: this.newField,
            };
            this.EDIT_ORDERS(param);
            this.$emit("close");
        },
    },
};
</script>
<style scoped>
td span {
    display: none;
}
td span.on {
    display: inline-block;
}
td span.on:before {
    position: relative;
    content: "\f061";
    font-family: "Font Awesome 5 Free";
    font-size: 12px;
    font-weight: 900;
    color: #ff7b00;
}
</style>
