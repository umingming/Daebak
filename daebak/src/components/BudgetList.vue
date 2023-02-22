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
            <div class="btn">
                <button id="refresh">
                    <i class="fa-solid fa-arrow-rotate-right"></i>
                </button>
                <button 
                    id="add"
                    @click="showModal"
                >
                    <i class="fa-solid fa-square-plus"></i>
                </button>
                <button id="modify">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button id="delete">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <export-excel
                    id="excel"
                    :data="budgetList"
                    :fields="excelField"
                    name="excel.xls"
                >
                    <i class="fa-solid fa-floppy-disk"></i>
                </export-excel>
            </div>
            <table id="budget-list">
                <tr>
                    <th 
                        v-for="(value, key) in header"
                        :key="key"
                        @click="sortBudgetItems(key)"
                    >
                        <span>{{ value }}</span>
                        <i 
                           v-if="sortKey === key"
                           class="fa-solid"
                           :class="[
                                {'fa-angle-up': isAscending},
                                {'fa-angle-down': !isAscending},
                            ]"
                        >
                        </i>
                    </th>
                </tr>
                <tr v-for="(item, index) in pageItems" :key="index">
                    <td>{{ item.date }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ itemPrice(item.value) }}</td>
                    <td>{{ item.amount }}건</td>
                    <td>{{ item.cate }}</td>
                </tr>
                <tr v-if="isAddingItem">
                    <td>{{ addItem.date }}</td>
                    <td>{{ addItem.title }}</td>
                    <td>{{ itemPrice(addItem.value) }}</td>
                    <td>{{ addItem.amount }}건</td>
                    <td>{{ addItem.cate }}</td>
                </tr>
            </table>
            <div class="pagination">
                <button @click="decreaseIndex">◀️</button>
                <div>
                    {{ pageIndex + 1 }} / {{ pageCount }}
                </div>
                <button @click="increaseIndex">▶️</button>
            </div>
        </div>
    </div>
</template>

<script>
import ModalAdd from "@/components/BudgetModalAdd.vue";

export default {
    components: {
        ModalAdd
    },
    data() {
        return {
            header: {
                date: "날짜",
                title: "내용",
                value: "금액",
                amount: "주문",
                cate: "분류"
            },
            sortKey: "",
            isAscending: false,
            pageIndex: 0,
            pageSize: 10,
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
        pageCount() {
            return Math.ceil(this.budgetList.length / this.pageSize);
        },
        pageItems() {
            let start = this.pageIndex * this.pageSize;
            let end = start + this.pageSize;
            return this.budgetList.slice(start, end);
        },
        itemPrice() {
            return (value) => {
                let price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                return `${price}원`;
            }
        },
        isAddingItem() {
            return this.isShowModal["add"]
                && this.pageIndex === this.pageCount - 1
                && this.pageItems.length < this.pageSize
        },
        excelField() {
            let field = {};
            Object.keys(this.header).forEach(i => field[this.header[i]] = i);

            return field;
        },
    },
    methods: {
        sortBudgetItems(key) {
            if (this.sortKey !== key) {
                this.sortKey = key;
                this.isAscending = false;
            }

            if (!this.isAscending) {
                this.budgetList = this.budgetList.sort((a, b) => (+a[key] || a[key]) > (+b[key] || b[key]) ? 1 : -1);
            } else {
                this.budgetList = this.budgetList.reverse();
            }

            this.isAscending = !this.isAscending;
        },
        increaseIndex() {
            if (this.pageIndex < this.pageCount - 1) {
                ++this.pageIndex;
            }
        },
        decreaseIndex() {
            if (this.pageIndex > 0) {
                --this.pageIndex;
            }
        },
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