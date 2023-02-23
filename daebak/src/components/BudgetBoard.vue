<template>
    <div class="budget">
        <modal-add 
            v-if="isShowModal.add"
            @updateItem="updateItem"
            @close="isShowModal['add'] = false"
        >
        </modal-add>
        <div class="budget-box">
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
                    :data="budgetList"
                    :fields="excelField"
                    name="excel.xls"
                >
                    <i class="fa-solid fa-floppy-disk"></i>
                </export-excel>
            </div>
            <budget-table
                :items="budgetList"
                :hasPagination="true"
            >
            </budget-table>
        </div>
    </div>
</template>

<script>
import ModalAdd from "@/components/BudgetModalAdd.vue";
import BudgetTable from "@/components/BudgetTable.vue";

export default {
    components: {
        ModalAdd,
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
            budgetList: [
                {
                    date: "2023-02-01",
                    title: "배달의 민족",
                    value: "320000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-01",
                    title: "가달의 민족",
                    value: "10000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-02",
                    title: "마달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-03",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "5",
                    cate: "배달"
                },
                {
                    date: "2023-02-04",
                    title: "사달의 민족",
                    value: "500000",
                    amount: "1",
                    cate: "배달"
                },
                {
                    date: "2023-02-05",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "8",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "10",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "매장"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
                {
                    date: "2023-02-06",
                    title: "배달의 민족",
                    value: "300000",
                    amount: "3",
                    cate: "배달"
                },
            ],
            isShowModal: {
                add: false
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
        isAddingItem() {
            return this.isShowModal["add"]
                && this.pageIndex === this.pageCount - 1
                && this.pageItems.length < this.pageSize
        },
    },
    methods: {
        showModal({target}) {
            let key = target.id || target.parentNode.id;
            this.isShowModal[key] = true;
        },
        updateItem(key, value) {
            this.addItem[key] = value;
        }
    }
};
</script>

<style scoped>
.budget-box .search {
    position: absolute;
    left: 50px;
    top: 19px;
    width: 450px;
    height: 30px;
    line-height: 25px;
}
.budget-box .search input {
    height: 22px;
    margin-right: 10px;
}
.budget-box .search input:focus,
.budget-box .search select:focus {
    outline: none;
}
.budget-box .search select {
    height: 26px;
}
.budget-box .search #keyword {
    width: 120px;
}
</style>