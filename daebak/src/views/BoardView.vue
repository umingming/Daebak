<template>
    <div id="board-view" class="wrapper">
        <modal-add v-if="isShowModal.add" @close="closeModal('add')">
        </modal-add>
        <modal-modify v-if="isShowModal.modify" @close="closeModal('modify')">
        </modal-modify>
        <board-filter v-if="isShowFilter"></board-filter>
        <board-table
            :class="{ 'has-filter': isShowFilter }"
            @add="openModal('add')"
            @modify="openModal('modify')"
            @remove="removeOrders"
        ></board-table>
    </div>
</template>

<script>
import ModalAdd from "@/components/board/BoardModalAdd.vue";
import ModalModify from "@/components/board/BoardModalModify.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";
import BoardTable from "@/components/board/BoardTable.vue";
import orderMixin from "@/mixins/orderMixin.js";
import "vue2-datepicker/index.css";

export default {
    components: {
        ModalAdd,
        ModalModify,
        BoardFilter,
        BoardTable,
    },
    mixins: [orderMixin],
    data() {
        return {
            isShowFilter: false,
            isShowModal: {
                add: false,
                modify: false,
            },
        };
    },
    methods: {
        openModal(type) {
            this.isShowModal[type] = true;
        },
        closeModal(type) {
            this.isShowModal[type] = false;
        },
        removeOrders() {
            const ids = this.checkedOrders.map((i) => i._id);
            this.REMOVE_ORDERS(ids);
            this.initCheckbox();
        },
        initCheckbox() {
            const $checkboxes = this.$el.querySelectorAll(
                "input[type=checkbox]"
            );
            $checkboxes.forEach((i) => (i.checked = false));
        },
    },
};
</script>
