<template>
    <div class="board">
        <modal-add 
            v-if="isShowModal.add"
            :checkItem="checkItems[0]"
            @close="isShowModal['add'] = false"
        >
        </modal-add>
        <modal-modify 
            v-if="isShowModal.modify"
            :checkItems="checkItems"
            @close="isShowModal['modify'] = false"
        >
        </modal-modify>
        <div class="board-box">
            <div class="search">
                <input type="date">
                <input type="date">
                <select 
                    name="type"
                >
                    <option value="title">내용</option>
                    <option value="value">금액</option>
                    <option value="amount">주문</option>
                    <option value="cate">분류</option>
                </select>
                <input type="text" id="keyword">
            </div>
            <div class="btn-icon">
                <button class="btn-refresh">
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                </button>
                <button 
                    class="btn-add"
                    id="add"
                    @click="showModal"
                >
                    <i class="fa-solid fa-square-plus"></i>
                </button>
                <button 
                    class="btn-modify"
                    id="modify"
                    @click="showModal"
                >
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button 
                    class="btn-delete"
                    id="delete"
                >
                    <i class="fa-solid fa-trash"></i>
                </button>
                <export-excel
                    class="btn-excel"
                    :data="fetchedList"
                    :fields="excelField"
                    name="excel.xls"
                >
                    <i class="fa-solid fa-floppy-disk"></i>
                </export-excel>
            </div>
            <budget-table
                :items="fetchedList"
                :hasPagination="true"
                :hasCheckBox="true"
                @check="checkItem"
            >
            </budget-table>
        </div>
    </div>
</template>

<script>
import ModalAdd from "@/components/BudgetModalAdd.vue";
import ModalModify from "@/components/BudgetModalModify.vue";
import BudgetTable from "@/components/BudgetTable.vue";

import { mapGetters } from "vuex";

export default {
    components: {
        ModalAdd,
        ModalModify,
        BudgetTable
    },
    data() {
        return {
            excelField: {
                날짜: "date",
                내용: "title",
                금액: "value",
                주문: "amount",
                분류: "cate"
            },
            checkList: [],
            isShowModal: {
                add: false,
                modify: false
            },
            addItem: {
                date: "",
                title: "",
                value: "",
                amount: "",
                cate: ""
            }
        }
    },
    computed: {
        ...mapGetters(["fetchedList"]),
        checkItems() {
            return [...this.checkList];
        }
    },
    created() {
        this.$store.dispatch("FETCH_LIST");
    },
    methods: {
        showModal({target}) {
            this.checkList = this.budgetList.filter(i => i.check);

            let key = target.id || target.parentNode.id;
            this.isShowModal[key] = true;
        },
        checkItem(index, isChecked) {
            this.budgetList[index].check = isChecked;
        }
    }
};
</script>

<style scoped>
.board-box .search {
    position: absolute;
    left: 50px;
    top: 19px;
    width: 450px;
    height: 30px;
    line-height: 25px;
}
.board-box .search input {
    height: 22px;
    margin-right: 10px;
}
.board-box .search input:focus,
.board-box .search select:focus {
    outline: none;
}
.board-box .search select {
    height: 26px;
}
.board-box .search #keyword {
    width: 120px;
}
</style>