<template>
    <div class="modal-mask">
        <div class="modal">
            <div class="modal-item">
                <base-item
                    :has-check-box="true"
                    @reset="updateOrders"
                    @apply="updateOrders"
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
                                <span :class="{ on: newOrder[name] }">
                                    {{ newOrder[name] }}
                                </span>
                            </td>
                        </tr>
                    </template>
                </base-table>
            </div>
            <div class="btn">
                <button class="close" @click="$emit('close')">취소</button>
                <button class="ok" @click="$emit('ok')">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BaseItem from "@/components/base/BaseItem.vue";
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
            newOrder: {},
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
        updateOrders(item = {}) {
            this.newOrder = item;
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
