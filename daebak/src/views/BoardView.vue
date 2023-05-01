<template>
    <div id="board-view" class="wrapper">
        <modal-add v-if="isShowModal.add" @close="closeModal('add')">
        </modal-add>
        <modal-modify v-if="isShowModal.modify" @close="closeModal('modify')">
        </modal-modify>
        <board-filter></board-filter>
        <board-table @add="openModal('add')"></board-table>
    </div>
</template>

<script>
import ModalAdd from "@/components/board/BoardModalAdd.vue";
import ModalModify from "@/components/BudgetModalModify.vue";
import BoardFilter from "@/components/board/BoardFilter.vue";
import BoardTable from "@/components/board/BoardTable.vue";
import "vue2-datepicker/index.css";

export default {
    components: {
        ModalAdd,
        ModalModify,
        BoardFilter,
        BoardTable,
    },
    data() {
        return {
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
    },
};
</script>
