<template>
    <div class="main-board">
        <h3 data-test="title">{{ title }}</h3>
        <div class="btn">
            <router-link to="/board">
                <button>
                    <i class="fa-solid fa-bars"></i>
                </button>
            </router-link>
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
        <base-table
            :items="currentMonthOrders"
            :has-pagination="false"
            :has-header="false"
            :max-content-length="5"
        >
        </base-table>
    </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import orderMixin from "@/mixins/orderMixin.js";
import dateMixin from "@/mixins/dateMixin.js";

export default {
    components: {
        BaseTable,
    },
    mixins: [orderMixin, dateMixin],
    data() {
        return {};
    },
    computed: {
        title() {
            return `${this.currentMonth}월 주문 내역`;
        },
    },
};
</script>

<style scoped></style>
