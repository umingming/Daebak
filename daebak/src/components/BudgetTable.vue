<template>
    <div id="budget-table">
        <table>
            <tr>
                <th>
                    <input 
                        type="checkbox" 
                        @click="checkAll"
                        :checked="isCheckedAll"
                    >
                </th>
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
                <td>
                    <input 
                        type="checkbox"
                        ref="check"
                        :value="itemIndex(index)"
                        @click="updateCheckItems"
                    >
                </td>
                <td>{{ item.date }}</td>
                <td>{{ item.title }}</td>
                <td>{{ itemPrice(item.value) }}</td>
                <td>{{ item.amount }}건</td>
                <td>{{ item.cate }}</td>
            </tr>
        </table>
        <div class="pagination" v-if="hasPagination">
            <button @click="decreaseIndex">◀️</button>
            <div>
                {{ pageIndex + 1 }} / {{ pageCount }}
            </div>
            <button @click="increaseIndex">▶️</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: { type: Array },
        hasPagination: { type: Boolean, default: false}
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
            tableItems: [],
            isCheckedAll: false,
            checkItems: [],
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.tableItems.length / this.pageSize);
        },
        pageItems() {
            this.applyCheckItems();
            let start = this.pageIndex * this.pageSize;
            let end = start + this.pageSize;
            return this.tableItems.slice(start, end);
        },
        itemPrice() {
            return (value) => {
                let price = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                return `${price}원`;
            }
        },
        itemIndex() {
            return(index) => {
                return this.pageIndex * this.pageSize + index;
            }
        }
    },
    created() {
        this.tableItems = [ ...this.items ];
    },
    methods: {
        updateCheckItems({target}) {
            let index = +target.value;

            if (this.checkItems.includes(index)) {
                let deleteIndex = this.checkItems.findIndex(i => i === index);
                this.checkItems.splice(deleteIndex, 1);
            } else {
                this.checkItems.push(index);
            }
        },
        applyCheckItems() {
            this.isCheckedAll = false;
            this.$refs.check?.forEach((item, i) => {
                let index = this.itemIndex(i);
                item.checked = this.checkItems.includes(index);
            })
        },
        sortBudgetItems(key) {
            if (this.sortKey !== key) {
                this.sortKey = key;
                this.isAscending = false;
            }

            if (!this.isAscending) {
                this.tableItems = this.tableItems.sort((a, b) => (+a[key] || a[key]) > (+b[key] || b[key]) ? 1 : -1);
            } else {
                this.tableItems = this.tableItems.reverse();
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
        checkAll({target}) {
            this.isCheckedAll = target.checked;
            this.$refs.check.forEach(i => i.checked = this.isCheckedAll);

            if (this.isCheckedAll) {
                this.checkItems = 
            }
        }
    }
};
</script>

<style>
</style>